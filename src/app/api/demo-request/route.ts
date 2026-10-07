import { NextResponse } from "next/server";
import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { isCompanyEmail } from "@/lib/freeEmailDomains";
import {
  aiTeamOptions,
  challengeGroups,
  challengeLabel,
  describeSpend,
  MAX_CHALLENGES,
  MAX_GOALS,
  spendStops,
} from "@/lib/demo";
import { bookDemo, CalendarUnavailableError, SlotTakenError } from "@/lib/demoAvailability";

/* Book a demo intake.
   1 · Validate every answer against the page's own option lists.
   2 · Book: re-check the slot with Google Calendar and create the event
       (Meet link, invite emailed to the visitor). The calendar event is
       the booking and carries every answer in its description.
   3 · Forward the lead to DEMO_REQUEST_WEBHOOK_URL when it is set (CRM
       record). The booking already exists by then, so a webhook failure
       is logged (console + .data/demo-requests.jsonl) and does not fail
       the visitor's booking. */

const WEBHOOK_URL = process.env.DEMO_REQUEST_WEBHOOK_URL;

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 6;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const past = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (past.length >= MAX_PER_WINDOW) {
    hits.set(ip, past);
    return true;
  }
  past.push(now);
  hits.set(ip, past);
  if (hits.size > 10_000) hits.clear();
  return false;
}

async function auditLog(entry: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "demo-requests.jsonl"), JSON.stringify(entry) + "\n");
  } catch {
    // read-only filesystem in some deploys; the webhook is the source of truth
  }
}

const challengeIds = new Set<string>(challengeGroups.flatMap((g) => g.items.map((i) => i.id)));
const teamIds = new Set(aiTeamOptions.map((o) => o.id));
const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const bad = (error: string) => NextResponse.json({ error }, { status: 400 });

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return bad("Invalid JSON");
  }

  const email = text(body.email, 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return bad("Invalid email");
  if (!isCompanyEmail(email)) return bad("Please add your company email");

  const firstName = text(body.firstName, 80);
  const lastName = text(body.lastName, 80);
  if (!firstName || !lastName) return bad("Name is required");

  const website = text(body.website, 200);
  if (!/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(website)) return bad("Invalid website");

  const challenges = Array.isArray(body.challenges)
    ? [...new Set(body.challenges.filter((c): c is string => typeof c === "string" && challengeIds.has(c)))]
    : [];
  if (!challenges.length || challenges.length > MAX_CHALLENGES) return bad("Pick up to three challenges");

  const noActiveAds = body.noActiveAds === true;
  const adSpend = noActiveAds ? null : body.adSpend;
  if (!noActiveAds && !spendStops.includes(adSpend as number)) return bad("Invalid ad spend");

  const aiTeam = typeof body.aiTeam === "string" && teamIds.has(body.aiTeam) ? body.aiTeam : null;
  if (!aiTeam) return bad("Invalid AI team size");

  const goals = Array.isArray(body.goals)
    ? body.goals.map((g) => text(g, 80)).filter(Boolean).slice(0, MAX_GOALS)
    : [];

  const slot = text(body.slot, 40);
  if (Number.isNaN(Date.parse(slot))) return bad("Invalid slot");
  const visitorTimeZone = text(body.timeZone, 64);

  const request = {
    source: "book-a-demo",
    first_name: firstName,
    last_name: lastName,
    work_email: email,
    website,
    challenges,
    monthly_ad_spend_eur: adSpend,
    ad_spend_is_upper_bound: adSpend === spendStops.at(-1),
    no_active_ads: noActiveAds,
    ai_team_size: aiTeam,
    goals,
    slot_start: slot,
    visitor_time_zone: visitorTimeZone,
  };

  let event: { id: string; htmlLink: string };
  try {
    event = await bookDemo({
      slot,
      email,
      firstName,
      lastName,
      website,
      summaryLines: [
        `${firstName} ${lastName} · ${email}`,
        `Website: ${website}`,
        `Wants to fix: ${challenges.map(challengeLabel).join(", ")}`,
        `Monthly ad spend: ${noActiveAds ? "No active ads" : describeSpend(adSpend as number)}`,
        `People using AI: ${aiTeamOptions.find((o) => o.id === aiTeam)?.label ?? aiTeam}`,
        `Goals: ${goals.length ? goals.join("; ") : "not given"}`,
        `Visitor time zone: ${visitorTimeZone || "unknown"}`,
      ],
    });
  } catch (e) {
    if (e instanceof SlotTakenError) {
      return NextResponse.json({ error: "That time is no longer available" }, { status: 409 });
    }
    if (e instanceof CalendarUnavailableError) {
      console.error("[demo-request] calendar unavailable:", e.message);
      await auditLog({ ...request, booked: false, bookingError: e.message, at: new Date().toISOString() });
      return NextResponse.json({ error: "Booking is temporarily unavailable" }, { status: 503 });
    }
    throw e;
  }

  let delivered = false;
  let deliveryError = "";
  if (!WEBHOOK_URL) {
    deliveryError = "no webhook configured";
  } else {
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...request, calendar_event_id: event.id, calendar_event_url: event.htmlLink }),
        signal: AbortSignal.timeout(8000),
      });
      delivered = res.ok;
      if (!res.ok) deliveryError = `webhook ${res.status}`;
    } catch (e) {
      deliveryError = e instanceof Error ? e.message : "webhook unreachable";
    }
  }
  if (!delivered) console.error(`[demo-request] booked ${event.id} but lead not forwarded: ${deliveryError}`);

  await auditLog({
    ...request,
    booked: true,
    calendar_event_id: event.id,
    delivered,
    ...(deliveryError ? { deliveryError } : {}),
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
