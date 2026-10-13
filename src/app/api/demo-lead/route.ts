import { NextResponse } from "next/server";
import {
  auditLog,
  clientIp,
  describeLead,
  forwardLead,
  parseDemoLead,
  rateLimiter,
} from "@/lib/demoLead";
import { sendLeadEmail } from "@/lib/leadEmail";

/* Book a demo · contact step. Runs before the visitor sees the calendar,
   so a lead who never picks a time is still captured.
   1 · Validate every answer (same rules as /api/demo-request).
   2 · Forward the lead to the Checkgrow leads webhook, status "new".
   3 · Only if the webhook fails: email the lead to sales, so it is never
       lost. The visitor continues to the calendar either way; the
       response says whether the lead was stored (the form only reports
       the conversion when it was). */

const rateLimited = rateLimiter(10, 10 * 60 * 1000);

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

  const forward = await forwardLead(lead, { kind: "lead" });
  let mail: { emailed?: boolean; emailError?: string } = {};
  if (!forward.delivered) {
    console.error(`[demo-lead] lead not forwarded (${lead.email}): ${forward.deliveryError}`);
    const d = describeLead(lead);
    mail = await sendLeadEmail({
      status: "lead-only",
      firstName: lead.firstName,
      lastName: lead.lastName,
      email: lead.email,
      phone: lead.phone,
      website: lead.website,
      challenges: d.challenges,
      adSpend: d.spend,
      aiTeam: d.aiTeam,
      goals: lead.goals,
      visitorTimeZone: typeof body.timeZone === "string" ? body.timeZone.slice(0, 64) : "",
      campaign: [lead.last?.utm_source, lead.last?.utm_medium, lead.last?.utm_campaign].filter(Boolean).join(" / "),
      problem: `Leads webhook: ${forward.deliveryError}`,
    })
      .then(() => ({ emailed: true }))
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "email failed";
        console.error(`[demo-lead] fallback email to sales failed (${lead.email}): ${message}`);
        return { emailed: false, emailError: message };
      });
  }

  await auditLog({
    stage: "lead",
    email: lead.email,
    utm: lead.last,
    event_id: lead.eventId,
    ...forward,
    ...mail,
    at: new Date().toISOString(),
  });

  const stored = forward.delivered || mail.emailed === true;
  return NextResponse.json({ ok: stored, delivered: forward.delivered }, { status: stored ? 200 : 502 });
}
