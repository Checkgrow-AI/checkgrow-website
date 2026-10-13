/* Server only. The book-a-demo lead, shared by its two API steps:

     /api/demo-lead     · contact step done: the lead goes to the
                          Checkgrow leads webhook before any time is
                          chosen (status "new")
     /api/demo-request  · time booked: the same email is sent again with
                          the booking in its notes; the webhook updates
                          the existing lead by email

   Only fields the leads webhook documents are sent, and empty values are
   left out so an update never blanks a field already on the lead. */

import { appendFile, mkdir } from "fs/promises";
import path from "path";
import { isCompanyEmail } from "./freeEmailDomains";
import {
  aiTeamOptions,
  challengeGroups,
  challengeLabel,
  DEMO_MINUTES,
  DEMO_TIME_ZONE,
  describeSpend,
  MAX_CHALLENGES,
  MAX_GOALS,
  spendStops,
} from "./demo";
import { isPhone, PHONE_MAX } from "./phone";
import { CLICK_ID_KEYS, cleanTouch, type Touch } from "./attribution";

const WEBHOOK_URL = process.env.DEMO_REQUEST_WEBHOOK_URL;
export const LEAD_SOURCE = "Website demo form";

export type DemoLead = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  website: string;
  challenges: string[];
  adSpend: number | null;
  noActiveAds: boolean;
  aiTeam: string;
  goals: string[];
  first: Touch | null;
  last: Touch | null;
  pageUrl: string;
  referrer: string;
  eventId: string;
};

const challengeIds = new Set<string>(challengeGroups.flatMap((g) => g.items.map((i) => i.id)));
const teamIds = new Set(aiTeamOptions.map((o) => o.id));
export const text = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const url = (v: unknown) => {
  const s = text(v, 500);
  return /^https?:\/\//i.test(s) ? s : "";
};

/* every answer, checked against the page's own option lists */
export function parseDemoLead(body: Record<string, unknown>): { lead: DemoLead } | { error: string } {
  const email = text(body.email, 254);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Invalid email" };
  if (!isCompanyEmail(email)) return { error: "Please add your company email" };

  const firstName = text(body.firstName, 80);
  const lastName = text(body.lastName, 80);
  if (!firstName || !lastName) return { error: "Name is required" };

  const phone = text(body.phone, PHONE_MAX);
  if (!isPhone(phone)) return { error: "Invalid phone number" };

  const website = text(body.website, 200);
  if (!/^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(website)) return { error: "Invalid website" };

  const challenges = Array.isArray(body.challenges)
    ? [...new Set(body.challenges.filter((c): c is string => typeof c === "string" && challengeIds.has(c)))]
    : [];
  if (!challenges.length || challenges.length > MAX_CHALLENGES) return { error: "Pick up to three challenges" };

  const noActiveAds = body.noActiveAds === true;
  const adSpend = noActiveAds ? null : (body.adSpend as number);
  if (!noActiveAds && !spendStops.includes(adSpend as number)) return { error: "Invalid ad spend" };

  const aiTeam = typeof body.aiTeam === "string" && teamIds.has(body.aiTeam) ? body.aiTeam : null;
  if (!aiTeam) return { error: "Invalid AI team size" };

  const goals = Array.isArray(body.goals)
    ? body.goals.map((g) => text(g, 80)).filter(Boolean).slice(0, MAX_GOALS)
    : [];

  const attribution = (body.attribution ?? {}) as Record<string, unknown>;

  return {
    lead: {
      firstName,
      lastName,
      email,
      phone,
      website,
      challenges,
      adSpend,
      noActiveAds,
      aiTeam,
      goals,
      first: cleanTouch(attribution.first),
      last: cleanTouch(attribution.last),
      pageUrl: url(body.pageUrl),
      referrer: url(body.referrer),
      eventId: text(body.eventId, 64),
    },
  };
}

/* the readable answers, shared by the sales email, calendar and webhook */
export function describeLead(lead: DemoLead) {
  return {
    name: `${lead.firstName} ${lead.lastName}`,
    challenges: lead.challenges.map(challengeLabel),
    spend: lead.noActiveAds ? "No active ads" : `${describeSpend(lead.adSpend as number)} / month`,
    aiTeam: aiTeamOptions.find((o) => o.id === lead.aiTeam)?.label ?? lead.aiTeam,
    goals: lead.goals.length ? lead.goals.join("; ") : "not given",
  };
}

export function formatSlot(slot: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(new Date(slot));
}

const touchLine = (t: Touch | null) => {
  if (!t) return "direct";
  const parts = [t.utm_source, t.utm_medium, t.utm_campaign].filter(Boolean).join(" / ") || "direct";
  const extra = [
    t.utm_term && `term: ${t.utm_term}`,
    t.utm_content && `content: ${t.utm_content}`,
    t.utm_id && `id: ${t.utm_id}`,
    t.ts && `on ${new Date(t.ts).toISOString().slice(0, 10)}`,
    t.landing_page && `landed on ${t.landing_page}`,
  ].filter(Boolean);
  return extra.length ? `${parts} (${extra.join(", ")})` : parts;
};

export type LeadStage =
  | { kind: "lead" }
  | { kind: "booked"; slot: string; visitorTimeZone: string; eventUrl: string; meetUrl?: string }
  | { kind: "not-booked"; slot: string; visitorTimeZone: string; problem: string };

export function leadNotes(lead: DemoLead, stage: LeadStage) {
  const d = describeLead(lead);
  const head =
    stage.kind === "lead"
      ? "Demo requested on checkgrow.com/book-a-demo. Contact details given; no time booked yet."
      : stage.kind === "booked"
        ? [
            `Demo booked: ${formatSlot(stage.slot, DEMO_TIME_ZONE)} (Zagreb), ${DEMO_MINUTES} min` +
              (stage.visitorTimeZone && stage.visitorTimeZone !== DEMO_TIME_ZONE
                ? `; visitor time ${formatSlot(stage.slot, stage.visitorTimeZone)} (${stage.visitorTimeZone})`
                : ""),
            stage.meetUrl ? `Google Meet: ${stage.meetUrl}` : "",
            `Calendar event: ${stage.eventUrl}`,
          ]
            .filter(Boolean)
            .join("\n")
        : `Tried to book ${formatSlot(stage.slot, DEMO_TIME_ZONE)} (Zagreb) but the calendar was unavailable, so NOTHING WAS BOOKED. Contact them to schedule. (${stage.problem})`;

  const clickIds = lead.last
    ? CLICK_ID_KEYS.filter((k) => lead.last?.[k]).map((k) => `${k}=${lead.last?.[k]}`)
    : [];

  return [
    head,
    "",
    `Wants to fix: ${d.challenges.join(", ")}`,
    `Monthly ad spend: ${d.spend}`,
    `People using AI: ${d.aiTeam}`,
    `Goals: ${d.goals}`,
    "",
    `Last touch: ${touchLine(lead.last)}`,
    `First touch: ${touchLine(lead.first)}`,
    clickIds.length ? `Click IDs: ${clickIds.join(", ")}` : "",
  ]
    .filter((l, i, all) => l !== "" || (i > 0 && all[i - 1] !== ""))
    .join("\n")
    .trim();
}

export function leadWebhookPayload(lead: DemoLead, stage: LeadStage) {
  const site = /^https?:\/\//i.test(lead.website) ? lead.website : `https://${lead.website}`;
  const payload: Record<string, string> = {
    email: lead.email,
    phone: lead.phone,
    first_name: lead.firstName,
    last_name: lead.lastName,
    website: site,
    notes: leadNotes(lead, stage),
    source: LEAD_SOURCE,
    language: "en",
    page_url: lead.pageUrl,
    referrer: lead.last?.referrer || lead.referrer,
    utm_source: lead.last?.utm_source ?? "",
    utm_medium: lead.last?.utm_medium ?? "",
    utm_campaign: lead.last?.utm_campaign ?? "",
    utm_term: lead.last?.utm_term ?? "",
    utm_content: lead.last?.utm_content ?? "",
  };
  /* "new" only on creation, so a later booking never resets a status
     sales has already moved on */
  if (stage.kind === "lead") payload.status = "new";
  return Object.fromEntries(Object.entries(payload).filter(([, v]) => v));
}

/* never throws: the visitor's flow must not depend on the CRM */
export async function forwardLead(lead: DemoLead, stage: LeadStage) {
  if (!WEBHOOK_URL) return { delivered: false, deliveryError: "no webhook configured" };
  try {
    const res = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(leadWebhookPayload(lead, stage)),
      signal: AbortSignal.timeout(8000),
    });
    if (res.ok) return { delivered: true };
    const detail = (await res.text().catch(() => "")).slice(0, 200);
    return { delivered: false, deliveryError: `webhook ${res.status}${detail ? `: ${detail}` : ""}` };
  } catch (e) {
    return { delivered: false, deliveryError: e instanceof Error ? e.message : "webhook unreachable" };
  }
}

export async function auditLog(entry: Record<string, unknown>) {
  try {
    const dir = path.join(process.cwd(), ".data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "demo-requests.jsonl"), JSON.stringify(entry) + "\n");
  } catch {
    // read-only filesystem in some deploys; the webhook is the source of truth
  }
}

/* per-route, per-instance sliding window */
export function rateLimiter(max: number, windowMs: number) {
  const hits = new Map<string, number[]>();
  return (ip: string) => {
    const now = Date.now();
    const past = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
    if (past.length >= max) {
      hits.set(ip, past);
      return true;
    }
    past.push(now);
    hits.set(ip, past);
    if (hits.size > 10_000) hits.clear();
    return false;
  };
}

export const clientIp = (req: Request) =>
  req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
