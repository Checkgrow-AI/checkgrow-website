/* Server only. Every demo lead is emailed to sales (DEMO_LEAD_EMAIL_TO,
   default sales@checkgrow.com) through the Gmail API as
   bruno@checkgrow.com (gmail.send scope, see ./google.ts; Gmail sets the
   sender to that account). Reply-To is
   the visitor, so sales can answer straight from the inbox.

   Sent for confirmed bookings, and also when the calendar was
   unavailable and the visitor could not book, so no lead is ever lost. */

import { DEMO_MINUTES, DEMO_TIME_ZONE } from "./demo";
import { googleApi } from "./google";

const TO = process.env.DEMO_LEAD_EMAIL_TO || "sales@checkgrow.com";

export type LeadEmail = {
  status: "booked" | "not-booked";
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  challenges: string[];
  adSpend: string;
  aiTeam: string;
  goals: string[];
  slot: string;
  visitorTimeZone: string;
  eventUrl?: string;
  meetUrl?: string;
  problem?: string;
};

const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/* RFC 2047 encoded-word, so names with accents survive the subject line */
const header = (v: string) => `=?UTF-8?B?${Buffer.from(v, "utf8").toString("base64")}?=`;

function when(slot: string, timeZone: string) {
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone,
  }).format(new Date(slot));
}

export async function sendLeadEmail(lead: LeadEmail) {
  const name = `${lead.firstName} ${lead.lastName}`.trim();
  const site = lead.website.replace(/^https?:\/\//, "").replace(/\/$/, "");
  const siteUrl = /^https?:\/\//.test(lead.website) ? lead.website : `https://${site}`;
  const teamTime = `${when(lead.slot, DEMO_TIME_ZONE)} (Zagreb)`;
  let visitorTime = "";
  try {
    if (lead.visitorTimeZone && lead.visitorTimeZone !== DEMO_TIME_ZONE) {
      visitorTime = `${when(lead.slot, lead.visitorTimeZone)} (${lead.visitorTimeZone})`;
    }
  } catch {
    // unknown zone name: the team time is enough
  }

  const booked = lead.status === "booked";
  const subject = booked
    ? `New demo booked: ${name} · ${site} · ${teamTime}`
    : `ACTION NEEDED · demo not booked: ${name} · ${site}`;

  const rows: [string, string][] = [
    [booked ? "Demo" : "Requested time", `${teamTime}${visitorTime ? ` · visitor: ${visitorTime}` : ""} · ${DEMO_MINUTES} min`],
    ["Name", name],
    ["Work email", lead.email],
    ["Website", site],
    ["Wants to fix", lead.challenges.join(", ")],
    ["Monthly ad spend", lead.adSpend],
    ["People using AI", lead.aiTeam],
    ["Goals", lead.goals.length ? lead.goals.join("; ") : "not given"],
    ["Visitor time zone", lead.visitorTimeZone || "unknown"],
  ];
  if (lead.meetUrl) rows.push(["Google Meet", lead.meetUrl]);
  if (lead.eventUrl) rows.push(["Calendar event", lead.eventUrl]);
  if (lead.problem) rows.push(["Problem", lead.problem]);
  rows.push(["Source", "checkgrow.com/book-a-demo"], ["Submitted", new Date().toISOString()]);

  const intro = booked
    ? `${name} booked a demo. The calendar invite and Meet link went to them automatically.`
    : `${name} tried to book a demo, but the calendar could not be reached, so nothing was booked. Please contact them to schedule it.`;

  const text = [intro, "", ...rows.map(([k, v]) => `${k}: ${v}`), "", "Reply to this email to answer the lead directly."].join("\n");

  const link = (k: string, v: string) => {
    if (k === "Work email") return `<a href="mailto:${esc(v)}">${esc(v)}</a>`;
    if (k === "Website") return `<a href="${esc(siteUrl)}">${esc(v)}</a>`;
    if (/^https:\/\//.test(v)) return `<a href="${esc(v)}">${esc(v)}</a>`;
    return esc(v);
  };
  const html = `<!doctype html><html><body style="font-family:Arial,Helvetica,sans-serif;color:#181818;line-height:1.45">
<p style="font-size:15px;margin:0 0 16px">${esc(intro)}</p>
<table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px">
${rows
  .map(
    ([k, v]) =>
      `<tr><td style="padding:6px 16px 6px 0;color:#6b6870;vertical-align:top;white-space:nowrap">${esc(k)}</td><td style="padding:6px 0;vertical-align:top">${link(k, v)}</td></tr>`,
  )
  .join("\n")}
</table>
<p style="font-size:13px;color:#6b6870;margin:20px 0 0">Reply to this email to answer the lead directly.</p>
</body></html>`;

  const boundary = `cg-${Date.now().toString(36)}`;
  const mime = [
    `To: ${TO}`,
    `Reply-To: ${header(name || lead.email)} <${lead.email}>`,
    `Subject: ${header(subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/alternative; boundary="${boundary}"`,
    "",
    `--${boundary}`,
    'Content-Type: text/plain; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(text, "utf8").toString("base64"),
    `--${boundary}`,
    'Content-Type: text/html; charset="UTF-8"',
    "Content-Transfer-Encoding: base64",
    "",
    Buffer.from(html, "utf8").toString("base64"),
    `--${boundary}--`,
    "",
  ].join("\r\n");

  /* one retry: a transient Gmail hiccup should not drop a lead */
  const send = () =>
    googleApi<{ id: string }>("https://gmail.googleapis.com/gmail/v1/users/me/messages/send", {
      method: "POST",
      body: { raw: Buffer.from(mime, "utf8").toString("base64url") },
    });
  try {
    return await send();
  } catch {
    return await send();
  }
}
