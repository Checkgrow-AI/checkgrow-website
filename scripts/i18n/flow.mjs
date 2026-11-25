/* Conversion-flow check: campaign attribution and demo booking, end to end.

   node scripts/i18n/flow.mjs <baseUrl> [--locale=/de] [--switch-to=/fr] [--consent] [--out=file.json]

   1. Lands on <locale>/pricing with utm_* + gclid (a typical paid landing).
   2. Optionally simulates an explicit Usercentrics consent for
      "Checkgrow Campaign Attribution" (then the cg_attr_* cookies must exist).
   3. Client-side navigates to Book a demo through the header CTA, so the
      in-memory attribution (window.__cgAttr) must survive.
   4. Completes every form step and the calendar.

   Every API call is intercepted and mocked: no lead, email, webhook or
   calendar event is ever created. The recorded request bodies, cookies and
   dataLayer events are printed (and written with --out) so runs can be
   diffed between languages and before/after changes. Controls are found by
   role, name attribute or data-qa, never by visible text, so the same run
   works in every language. */

import { chromium } from "playwright";
import { writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const base = process.argv[2];
const arg = (k) => process.argv.find((a) => a.startsWith(`--${k}=`))?.split("=")[1];
const landingLocale = arg("locale") ?? "";
/* --switch-to=/de: after landing, switch language with the header selector */
const switchTo = arg("switch-to");
let locale = landingLocale;
const consent = process.argv.includes("--consent");
const out = arg("out");
if (!base) {
  console.error("usage: flow.mjs <baseUrl> [--locale=/de] [--consent] [--out=file.json]");
  process.exit(1);
}

const LANDING_QUERY = "utm_source=linkedin&utm_medium=paid_social&utm_campaign=q4_demo&utm_content=video_a&gclid=TEST-GCLID-123";

/* a fixed calendar: the next eight weekdays at 09:00 and 14:00 UTC */
const slots = [];
for (let d = new Date(), n = 0; n < 8; ) {
  d = new Date(d.getTime() + 86400000);
  if (d.getUTCDay() % 6 === 0) continue;
  n++;
  for (const h of [9, 14]) slots.push(new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), h)).toISOString());
}

const browser = await chromium.launch({ channel: "chrome" });
const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: "reduce", timezoneId: "Europe/Zagreb" });
const page = await ctx.newPage();
const record = { locale: landingLocale || "/", switchTo: switchTo ?? null, consent, requests: {}, steps: [] };
const fail = (msg) => {
  record.error = msg;
  throw new Error(msg);
};

/* third-party tags stay out of the run; the site's own dataLayer is what we check */
await page.route(/usercentrics|googletagmanager|google-analytics|facebook|linkedin\.com|doubleclick/, (r) => r.abort());
await page.route("**/api/demo-slots", (r) => r.fulfill({ json: { slots } }));
for (const api of ["demo-lead", "demo-request"]) {
  await page.route(`**/api/${api}`, async (r) => {
    record.requests[api] = JSON.parse(r.request().postData() || "{}");
    await r.fulfill({ json: { ok: true } });
  });
}

const dataLayerEvents = () =>
  page.evaluate(() => (window.dataLayer || []).filter((e) => e && !Array.isArray(e) && typeof e === "object" && !("0" in e)).map((e) => ({ ...e })));

/* 1. paid landing */
const landing = `${base}${landingLocale}/pricing?${LANDING_QUERY}`;
await page.goto(landing, { waitUntil: "networkidle" });
record.landing = landing;
record.htmlLang = await page.evaluate(() => document.documentElement.lang);
record.attrAtLanding = await page.evaluate(() => window.__cgAttr && { first: window.__cgAttr.first, last: window.__cgAttr.last });
record.attributionPush = (await dataLayerEvents()).find((e) => "attribution_source" in e) ?? null;

/* 2. consent */
if (consent) {
  await page.evaluate(() => window.dataLayer.push({ event: "consent_status", type: "EXPLICIT", "Checkgrow Campaign Attribution": true }));
  await page.waitForTimeout(800);
}
record.cookiesAfterLanding = (await ctx.cookies()).filter((c) => c.name.startsWith("cg_attr")).map((c) => ({ name: c.name, value: JSON.parse(decodeURIComponent(c.value)) }));

/* 2b. language switch through the header selector (client-side) */
if (switchTo !== undefined) {
  const marker = await page.evaluate(() => { window.__flowMarker = Math.random(); return window.__flowMarker; });
  const tag = { "": "en", "/pt-br": "pt-BR", "/de": "de", "/fr": "fr" }[switchTo];
  await page.locator('header button[aria-controls]:visible').first().click();
  await page.locator(`header a[hreflang="${tag}"]:visible`).first().click();
  await page.waitForURL((u) => u.pathname === `${switchTo}/pricing`, { timeout: 10000 }).catch(() => fail(`selector did not switch to ${switchTo} (at ${page.url()})`));
  await page.waitForFunction((t) => document.documentElement.lang === t, tag, { timeout: 5000 }).catch(() => {});
  const after = new URL(page.url());
  record.switch = {
    url: after.pathname + after.search,
    querySame: after.search === `?${LANDING_QUERY}`,
    softNavigation: (await page.evaluate(() => window.__flowMarker)) === marker,
    htmlLang: await page.evaluate(() => document.documentElement.lang),
    attrSame: JSON.stringify(await page.evaluate(() => window.__cgAttr && window.__cgAttr.last)) === JSON.stringify(record.attrAtLanding?.last),
  };
  locale = switchTo;
}

/* 3. header CTA, client-side */
const cta = page.locator('header a[href$="/book-a-demo"]:visible').first();
await cta.click();
await page.waitForURL(`**${locale}/book-a-demo`);
record.bookPath = new URL(page.url()).pathname;
record.attrAfterNav = await page.evaluate(() => window.__cgAttr && { first: window.__cgAttr.first, last: window.__cgAttr.last });

/* 4. the form */
const primary = () => page.locator('[data-qa="form-next"]:visible:enabled');
/* each step slides out before the next one is interactive */
const step = async (name, fn) => {
  try {
    await fn();
  } catch (e) {
    /* next to --out, or in the system temp folder: never in the repository */
    await page.screenshot({ path: `${out ?? join(tmpdir(), "checkgrow-flow")}-${name}-failed.png` }).catch(() => {});
    fail(`step "${name}" failed: ${e.message.split("\n")[0]}`);
  }
  record.steps.push(name);
  await page.waitForTimeout(700);
};
await step("qualify", async () => {
  /* one screen: main goal (dropdown), ad spend (left at its default) */
  await page.locator('[data-qa="challenge-select"]').click();
  await page.locator('[role="listbox"] [role="option"][data-value="ads"]').click();
  await primary().click();
});
await step("contact", async () => {
  await page.fill('input[name="email"]', "qa.tester@example-company.com");
  await page.fill('input[name="phone"]', "+385 91 234 5678");
  await page.fill('input[name="firstName"]', "QA");
  await page.fill('input[name="lastName"]', "Tester");
  await page.locator('form button[type="submit"]:visible').click();
});
await page.waitForFunction(() => document.querySelector('[role="radiogroup"] [role="radio"]'), null, { timeout: 10000 }).catch(() => fail("time step did not render"));
const named = (list) => list.filter((e) => typeof e.event === "string" && !e.event.startsWith("gtm.")).map((e) => e.event);
await page.waitForTimeout(4500); // lead_submitted waits up to 4 s for consent_status
const formEvents = named(await dataLayerEvents());
await step("time", async () => {
  await page.locator('[role="radiogroup"] [role="radio"]').first().click();
  await page.locator('[data-qa="confirm-demo"]').click();
});
await page.waitForURL(`**${locale}/demo-confirmation`, { timeout: 15000 }).catch(() => fail(`no confirmation page (at ${page.url()})`));
await page.waitForTimeout(4500); // trackAfterConsent waits up to 4 s for consent_status
record.confirmationPath = new URL(page.url()).pathname;
record.confirmationLang = await page.evaluate(() => document.documentElement.lang);
/* the confirmation is a full page load: the booking page's events plus its own */
record.events = [...formEvents, ...named(await dataLayerEvents())];
record.cookiesAtEnd = (await ctx.cookies()).filter((c) => c.name.startsWith("cg_attr")).map((c) => c.name);

await browser.close();

/* a compact verdict for humans; the full record for diffs */
const lead = record.requests["demo-lead"] ?? {};
const book = record.requests["demo-request"] ?? {};
const checks = {
  "attribution captured at landing": record.attrAtLanding?.last?.utm_campaign === "q4_demo" && record.attrAtLanding?.last?.gclid === "TEST-GCLID-123",
  "dataLayer attribution_* pushed": record.attributionPush?.attribution_campaign === "q4_demo",
  "attribution survives navigation": record.attrAfterNav?.last?.utm_campaign === "q4_demo",
  "cookies follow consent": consent ? record.cookiesAfterLanding.length === 2 : record.cookiesAfterLanding.length === 0,
  "lead carries attribution": lead.attribution?.last?.utm_source === "linkedin" && lead.attribution?.last?.gclid === "TEST-GCLID-123",
  "booking carries attribution": book.attribution?.last?.utm_campaign === "q4_demo",
  "lead answers are language-neutral ids": JSON.stringify(lead.challenges) === '["ads"]' && lead.companySize === undefined && lead.aiTeam === undefined && lead.goals === undefined,
  "landing page recorded": (lead.attribution?.last?.landing_page ?? "").includes(`${landingLocale}/pricing?`),
  "stays in language": record.bookPath === `${locale}/book-a-demo` && record.confirmationPath === `${locale}/demo-confirmation`,
  "events in order": ["demo_form_start", "lead_submitted", "demo_booked"].every((e) => record.events.includes(e)),
};
if (switchTo !== undefined) {
  checks["switch keeps the query string (UTMs)"] = !!record.switch?.querySame;
  checks["switch is a client navigation"] = !!record.switch?.softNavigation;
  checks["switch keeps the attribution"] = !!record.switch?.attrSame;
  checks["switch changes <html lang>"] = record.switch?.htmlLang === ({ "": "en", "/pt-br": "pt-BR", "/de": "de", "/fr": "fr" }[switchTo]);
  checks["lead language follows the switch"] = lead.language === ({ "": "en", "/pt-br": "pt-BR", "/de": "de", "/fr": "fr" }[switchTo]);
}
record.checks = checks;
if (out) writeFileSync(out, JSON.stringify(record, null, 1));
for (const [k, v] of Object.entries(checks)) console.log(`${v ? "PASS" : "FAIL"}  ${k}`);
console.log("events:", record.events.join(" > "));
process.exit(Object.values(checks).every(Boolean) ? 0 : 2);
