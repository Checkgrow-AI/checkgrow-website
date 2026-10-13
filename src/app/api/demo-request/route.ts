import { NextResponse } from "next/server";
import { bookDemo, CalendarUnavailableError, SlotTakenError } from "@/lib/demoAvailability";
import { sendLeadEmail, type LeadEmail } from "@/lib/leadEmail";
import {
  auditLog,
  clientIp,
  describeLead,
  forwardLead,
  parseDemoLead,
  rateLimiter,
  text,
} from "@/lib/demoLead";

/* Book a demo · time step. The lead already reached the leads webhook
   from the contact step (/api/demo-lead).
   1 · Validate every answer again, plus the chosen slot.
   2 · Book: re-check the slot with Google Calendar and create the event
       (Meet link, invite emailed to the visitor). The calendar event is
       the booking and carries every answer in its description.
   3 · Email every answer to sales (sales@checkgrow.com) via Gmail. Also
       sent when the calendar is unavailable and nothing could be booked.
   4 · Send the lead to the leads webhook again with the booking in its
       notes; the webhook updates the lead by email. Also sent when
       nothing could be booked, so sales see the failed attempt.
   The booking exists before 3 and 4, so their failures are logged
   loudly (console + .data/demo-requests.jsonl) and do not fail the
   visitor's booking; the calendar event still holds every answer. */

const rateLimited = rateLimiter(6, 10 * 60 * 1000);

export async function POST(req: Request) {
  if (rateLimited(clientIp(req))) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = parseDemoLead(body);
  if ("error" in parsed) return NextResponse.json({ error: parsed.error }, { status: 400 });
  const { lead } = parsed;

  const slot = text(body.slot, 40);
  if (Number.isNaN(Date.parse(slot))) return NextResponse.json({ error: "Invalid slot" }, { status: 400 });
  const visitorTimeZone = text(body.timeZone, 64);

  const d = describeLead(lead);
  const campaign = [lead.last?.utm_source, lead.last?.utm_medium, lead.last?.utm_campaign].filter(Boolean).join(" / ");
  const emailLead = (extra: Pick<LeadEmail, "status" | "eventUrl" | "meetUrl" | "problem">) =>
    sendLeadEmail({
      ...extra,
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      website: lead.website,
      challenges: d.challenges,
      adSpend: d.spend,
      aiTeam: d.aiTeam,
      goals: lead.goals,
      slot,
      visitorTimeZone,
      campaign,
    })
      .then(() => ({ emailed: true as const }))
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "email failed";
        console.error(`[demo-request] lead email to sales failed (${lead.email}): ${message}`);
        return { emailed: false as const, emailError: message };
      });

  const audit = { stage: "booking", email: lead.email, slot_start: slot, utm: lead.last, event_id: lead.eventId };

  let event: { id: string; htmlLink: string; hangoutLink?: string };
  try {
    event = await bookDemo({
      slot,
      email: lead.email,
      firstName: lead.firstName,
      lastName: lead.lastName,
      website: lead.website,
      summaryLines: [
        `${d.name} · ${lead.email} · ${lead.phone}`,
        `Website: ${lead.website}`,
        `Wants to fix: ${d.challenges.join(", ")}`,
        `Monthly ad spend: ${d.spend}`,
        `People using AI: ${d.aiTeam}`,
        `Goals: ${d.goals}`,
        `Campaign: ${campaign || "direct"}`,
        `Visitor time zone: ${visitorTimeZone || "unknown"}`,
      ],
    });
  } catch (e) {
    if (e instanceof SlotTakenError) {
      return NextResponse.json({ error: "That time is no longer available" }, { status: 409 });
    }
    if (e instanceof CalendarUnavailableError) {
      console.error("[demo-request] calendar unavailable:", e.message);
      const [mail, forward] = await Promise.all([
        emailLead({ status: "not-booked", problem: `Calendar unavailable: ${e.message}` }),
        forwardLead(lead, { kind: "not-booked", slot, visitorTimeZone, problem: e.message }),
      ]);
      if (!forward.delivered) console.error(`[demo-request] lead not forwarded (${lead.email}): ${forward.deliveryError}`);
      await auditLog({ ...audit, booked: false, bookingError: e.message, ...mail, ...forward, at: new Date().toISOString() });
      return NextResponse.json({ error: "Booking is temporarily unavailable" }, { status: 503 });
    }
    throw e;
  }

  const [mail, forward] = await Promise.all([
    emailLead({ status: "booked", eventUrl: event.htmlLink, meetUrl: event.hangoutLink }),
    forwardLead(lead, {
      kind: "booked",
      slot,
      visitorTimeZone,
      eventUrl: event.htmlLink,
      meetUrl: event.hangoutLink,
    }),
  ]);
  if (!forward.delivered) console.error(`[demo-request] booked ${event.id} but lead not forwarded: ${forward.deliveryError}`);

  await auditLog({
    ...audit,
    booked: true,
    calendar_event_id: event.id,
    ...mail,
    ...forward,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
