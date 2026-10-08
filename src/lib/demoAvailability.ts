/* Server only. Demo availability and booking through the Google Calendar
   API, as bruno@checkgrow.com (auth: ./google.ts).

   Bookings are created in the demo calendar (DEMO_CALENDAR_ID). A slot is
   only offered when it is free in the demo calendar AND in every conflict
   calendar (DEMO_CONFLICT_CALENDAR_IDS, comma-separated; Bruno's own
   calendar by default), so a demo can never clash with his other
   commitments. If any of these calendars cannot be read, no slots are
   offered (503): availability is never guessed.

   Free/busy decides what is busy: free, declined and cancelled events
   don't count. Rules: weekdays 09:00–18:00 Europe/Zagreb, 30-minute
   slots, 30 minutes clear before and after any busy time, at least 4
   hours' notice, 21 days ahead. Visitors receive free start times only.

   Booking re-checks the slot under a lock and creates the event (Meet
   link, invite emailed to the visitor), so two visitors can never take
   the same time. */

import { randomUUID } from "crypto";
import { DEMO_MINUTES, DEMO_TIME_ZONE } from "./demo";
import { googleApi, GoogleUnavailableError } from "./google";

/* Calendar ids are not secret (the iCal "private" addresses are); env
   overrides them per environment. */
const BOOKING_CALENDAR_ID =
  process.env.DEMO_CALENDAR_ID ||
  "c_44b4834d5fc38d0202651861140e2f93bd7c045553c1d321e3d71d9a5bb8221d@group.calendar.google.com";
const CONFLICT_CALENDAR_IDS = (process.env.DEMO_CONFLICT_CALENDAR_IDS ?? "bruno@checkgrow.com")
  .split(",")
  .map((id) => id.trim())
  .filter(Boolean);
const CHECKED_CALENDAR_IDS = [...new Set([BOOKING_CALENDAR_ID, ...CONFLICT_CALENDAR_IDS])];

const CACHE_MS = 30_000;
const DAY_START = 9;
const DAY_END = 18; // the last slot ends at 18:00
const BUFFER_MS = 30 * 60_000;
const SLOT_MS = DEMO_MINUTES * 60_000;
const BOOKABLE_DAYS = 21;
const MIN_NOTICE_MS = 4 * 60 * 60_000;
const API = "https://www.googleapis.com/calendar/v3";

type Interval = { start: number; end: number };

export { GoogleUnavailableError as CalendarUnavailableError };
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

/* Busy time across every checked calendar, merged. */
async function busyBetween(from: number, to: number): Promise<Interval[]> {
  const data = await googleApi<{
    calendars: Record<string, { busy?: { start: string; end: string }[]; errors?: { reason: string }[] }>;
  }>(`${API}/freeBusy`, {
    method: "POST",
    body: {
      timeMin: new Date(from).toISOString(),
      timeMax: new Date(to).toISOString(),
      timeZone: DEMO_TIME_ZONE,
      items: CHECKED_CALENDAR_IDS.map((id) => ({ id })),
    },
  });
  const busy: Interval[] = [];
  for (const id of CHECKED_CALENDAR_IDS) {
    const cal = data.calendars[id];
    if (!cal || cal.errors?.length) {
      throw new GoogleUnavailableError(`free/busy ${id}: ${cal?.errors?.map((e) => e.reason).join(", ") ?? "missing"}`);
    }
    for (const b of cal.busy ?? []) busy.push({ start: Date.parse(b.start), end: Date.parse(b.end) });
  }
  return busy;
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
   GoogleUnavailableError. */
export function bookDemo(booking: DemoBooking) {
  const run = lock.then(async () => {
    if (!(await availableSlots({ fresh: true })).includes(booking.slot)) {
      throw new SlotTakenError("slot no longer free");
    }
    const start = new Date(booking.slot);
    const end = new Date(start.getTime() + SLOT_MS);
    const site = booking.website.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const event = await googleApi<{ id: string; htmlLink: string; hangoutLink?: string }>(
      `${API}/calendars/${encodeURIComponent(BOOKING_CALENDAR_ID)}/events?sendUpdates=all&conferenceDataVersion=1`,
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
