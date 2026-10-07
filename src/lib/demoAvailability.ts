/* Server only. Demo availability and booking through the Google Calendar
   API, acting as the calendar owner with an OAuth refresh token
   (one-time consent: `pnpm calendar:auth`, see docs/book-a-demo.md).
   Credentials live ONLY in server environment variables:
     GOOGLE_CALENDAR_CLIENT_ID, GOOGLE_CALENDAR_CLIENT_SECRET,
     GOOGLE_CALENDAR_REFRESH_TOKEN, and optionally DEMO_CALENDAR_ID
     (defaults to the owner's primary calendar).

   Availability comes from Google's free/busy query, so a new event hides
   its slots immediately (free, declined and cancelled events don't
   count, as in Google's own scheduling). Rules: weekdays 09:00–18:00
   Europe/Zagreb, 30-minute slots, 30 minutes clear before and after any
   busy time, at least 4 hours' notice, 21 days ahead. Visitors receive
   free start times only, never event details.

   Booking re-checks the slot with Google and creates the event (Meet
   link, invite emailed to the visitor) under a lock, so two visitors
   can never take the same time. */

import { randomUUID } from "crypto";
import { DEMO_MINUTES, DEMO_TIME_ZONE } from "./demo";

const CLIENT_ID = process.env.GOOGLE_CALENDAR_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_CALENDAR_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.GOOGLE_CALENDAR_REFRESH_TOKEN;
const CALENDAR_ID = process.env.DEMO_CALENDAR_ID || "primary";

const CACHE_MS = 30_000;
const DAY_START = 9;
const DAY_END = 18; // the last slot ends at 18:00
const BUFFER_MS = 30 * 60_000;
const SLOT_MS = DEMO_MINUTES * 60_000;
const BOOKABLE_DAYS = 21;
const MIN_NOTICE_MS = 4 * 60 * 60_000;
const API = "https://www.googleapis.com/calendar/v3";

type Interval = { start: number; end: number };

export class CalendarUnavailableError extends Error {}
export class SlotTakenError extends Error {}

/* ---------- team-time helpers ---------- */

function zoneOffset(timeZone: string, at: Date) {
  const name = new Intl.DateTimeFormat("en-US", { timeZone, timeZoneName: "longOffset" })
    .formatToParts(at)
    .find((p) => p.type === "timeZoneName")?.value;
  const m = name?.match(/GMT([+-])(\d{2}):?(\d{2})?/);
  if (!m) return 0;
  return (m[1] === "-" ? -1 : 1) * (Number(m[2]) * 60 + Number(m[3] ?? 0));
}

/* A wall-clock time in the team's zone as a real instant (DST-safe). */
function teamInstant(y: number, mo: number, d: number, h = 0, mi = 0) {
  const wall = Date.UTC(y, mo, d, h, mi);
  const guess = wall - zoneOffset(DEMO_TIME_ZONE, new Date(wall)) * 60_000;
  /* near a DST switch the offset at the real instant can differ */
  return wall - zoneOffset(DEMO_TIME_ZONE, new Date(guess)) * 60_000;
}

function teamDay(at: number) {
  const [y, m, d] = new Intl.DateTimeFormat("en-CA", {
    timeZone: DEMO_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  })
    .format(new Date(at))
    .split("-")
    .map(Number);
  return { y, m: m - 1, d };
}

/* ---------- Google Calendar API ---------- */

let token: { value: string; expires: number } | null = null;

async function accessToken() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new CalendarUnavailableError("Google Calendar credentials are not set");
  }
  if (token && token.expires - Date.now() > 60_000) return token.value;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: REFRESH_TOKEN,
      grant_type: "refresh_token",
    }),
    signal: AbortSignal.timeout(8_000),
  });
  if (!res.ok) {
    throw new CalendarUnavailableError(`token refresh ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  const data: { access_token: string; expires_in: number } = await res.json();
  token = { value: data.access_token, expires: Date.now() + data.expires_in * 1000 };
  return token.value;
}

async function gcal<T>(path: string, init: { method: string; body?: unknown }): Promise<T> {
  for (let attempt = 0; attempt < 2; attempt++) {
    let res: Response;
    try {
      res = await fetch(`${API}${path}`, {
        method: init.method,
        headers: {
          Authorization: `Bearer ${await accessToken()}`,
          "Content-Type": "application/json",
        },
        body: init.body === undefined ? undefined : JSON.stringify(init.body),
        signal: AbortSignal.timeout(8_000),
      });
    } catch (e) {
      if (e instanceof CalendarUnavailableError) throw e;
      throw new CalendarUnavailableError(e instanceof Error ? e.message : "calendar unreachable");
    }
    if (res.status === 401 && attempt === 0) {
      token = null; // revoked or expired early: refresh once
      continue;
    }
    if (!res.ok) {
      throw new CalendarUnavailableError(`calendar ${res.status}: ${(await res.text()).slice(0, 200)}`);
    }
    return res.json() as Promise<T>;
  }
  throw new CalendarUnavailableError("calendar auth failed");
}

async function busyBetween(from: number, to: number): Promise<Interval[]> {
  const data = await gcal<{
    calendars: Record<string, { busy?: { start: string; end: string }[]; errors?: { reason: string }[] }>;
  }>("/freeBusy", {
    method: "POST",
    body: {
      timeMin: new Date(from).toISOString(),
      timeMax: new Date(to).toISOString(),
      timeZone: DEMO_TIME_ZONE,
      items: [{ id: CALENDAR_ID }],
    },
  });
  const cal = data.calendars[CALENDAR_ID] ?? Object.values(data.calendars)[0];
  if (!cal || cal.errors?.length) {
    throw new CalendarUnavailableError(`free/busy: ${cal?.errors?.map((e) => e.reason).join(", ") ?? "no calendar"}`);
  }
  return (cal.busy ?? []).map((b) => ({ start: Date.parse(b.start), end: Date.parse(b.end) }));
}

/* ---------- availability ---------- */

let cache: { at: number; slots: string[] } | null = null;

function bookingWindow() {
  const today = teamDay(Date.now());
  return {
    today,
    from: teamInstant(today.y, today.m, today.d),
    to: teamInstant(today.y, today.m, today.d + BOOKABLE_DAYS + 1),
  };
}

/* Every free slot start (ISO), in time order. `fresh` skips the short
   cache, for the final check before a booking is accepted. */
export async function availableSlots({ fresh = false } = {}) {
  if (!fresh && cache && Date.now() - cache.at < CACHE_MS) return cache.slots;
  const { today, from, to } = bookingWindow();
  const busy = await busyBetween(from, to);
  const now = Date.now();

  const slots: string[] = [];
  for (let i = 0; i <= BOOKABLE_DAYS; i++) {
    const day = teamDay(teamInstant(today.y, today.m, today.d + i, 12));
    const weekday = new Date(Date.UTC(day.y, day.m, day.d)).getUTCDay();
    if (weekday === 0 || weekday === 6) continue;
    for (let h = DAY_START; h < DAY_END; h++) {
      for (const mi of [0, 30]) {
        const start = teamInstant(day.y, day.m, day.d, h, mi);
        const end = start + SLOT_MS;
        if (start - now < MIN_NOTICE_MS) continue;
        const clash = busy.some((b) => start < b.end + BUFFER_MS && end > b.start - BUFFER_MS);
        if (!clash) slots.push(new Date(start).toISOString());
      }
    }
  }
  cache = { at: Date.now(), slots };
  return slots;
}

/* ---------- booking ---------- */

export type DemoBooking = {
  slot: string;
  email: string;
  firstName: string;
  lastName: string;
  website: string;
  summaryLines: string[];
};

let lock: Promise<unknown> = Promise.resolve();

/* Re-checks the slot with Google, then creates the event with a Meet
   link and emails the invite. Serialised so concurrent requests for one
   slot cannot both succeed. Throws SlotTakenError or
   CalendarUnavailableError. */
export function bookDemo(booking: DemoBooking) {
  const run = lock.then(async () => {
    if (!(await availableSlots({ fresh: true })).includes(booking.slot)) {
      throw new SlotTakenError("slot no longer free");
    }
    const start = new Date(booking.slot);
    const end = new Date(start.getTime() + SLOT_MS);
    const site = booking.website.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const event = await gcal<{ id: string; htmlLink: string; hangoutLink?: string }>(
      `/calendars/${encodeURIComponent(CALENDAR_ID)}/events?sendUpdates=all&conferenceDataVersion=1`,
      {
        method: "POST",
        body: {
          summary: `Checkgrow demo · ${booking.firstName} ${booking.lastName} (${site})`,
          description: [...booking.summaryLines, "", "Booked on checkgrow.com/book-a-demo"].join("\n"),
          start: { dateTime: start.toISOString(), timeZone: DEMO_TIME_ZONE },
          end: { dateTime: end.toISOString(), timeZone: DEMO_TIME_ZONE },
          attendees: [{ email: booking.email, displayName: `${booking.firstName} ${booking.lastName}` }],
          conferenceData: {
            createRequest: { requestId: randomUUID(), conferenceSolutionKey: { type: "hangoutsMeet" } },
          },
          guestsCanModify: false,
          reminders: { useDefault: true },
        },
      },
    );
    cache = null; // the new event changes availability for everyone
    return event;
  });
  lock = run.catch(() => undefined);
  return run;
}
