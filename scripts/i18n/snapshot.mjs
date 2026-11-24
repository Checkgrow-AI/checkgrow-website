/* Page snapshot for i18n regression and layout QA.

   node scripts/i18n/snapshot.mjs <baseUrl> <outDir> [--shots] [--paths=/a,/b]

   For every URL in <baseUrl>/sitemap.xml (or --paths), records title, meta
   description, canonical, hreflang alternates, <html lang>, JSON-LD, the
   visible text of <body> and the dataLayer at load, into <outDir>/pages.json.
   With --shots it also writes full-page screenshots at 390/768/1440 px.
   Uses the installed Chrome headless (channel "chrome") and reduced motion,
   so scroll reveals and autoplay do not make captures flaky. */

import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const [base, out] = process.argv.slice(2);
const shots = process.argv.includes("--shots");
const pathsArg = process.argv.find((a) => a.startsWith("--paths="));
if (!base || !out) {
  console.error("usage: snapshot.mjs <baseUrl> <outDir> [--shots] [--paths=/a,/b]");
  process.exit(1);
}
mkdirSync(out, { recursive: true });

async function sitemapPaths() {
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

const paths = pathsArg ? pathsArg.slice(8).split(",") : [...new Set(await sitemapPaths())];
const browser = await chromium.launch({ channel: "chrome" });
const widths = [390, 768, 1440];
const result = {};

for (const path of paths) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  /* third-party consent and tag scripts are irrelevant to copy and make loads flaky */
  await page.route(/usercentrics|googletagmanager|google-analytics|facebook|linkedin|doubleclick/, (r) => r.abort());
  const res = await page.goto(base + path, { waitUntil: "load" });
  await page.waitForLoadState("networkidle", { timeout: 8000 }).catch(() => {});
  const data = await page.evaluate(() => {
    const meta = (sel) => document.querySelector(sel)?.getAttribute("content") ?? null;
    return {
      lang: document.documentElement.lang,
      title: document.title,
      description: meta('meta[name="description"]'),
      ogLocale: meta('meta[property="og:locale"]'),
      canonical: document.querySelector('link[rel="canonical"]')?.href ?? null,
      alternates: [...document.querySelectorAll('link[rel="alternate"][hreflang]')].map((l) => [l.hreflang, l.href]),
      jsonLd: [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => s.textContent),
      dataLayer: (window.dataLayer || []).filter((e) => e && !Array.isArray(e) && typeof e === "object" && !("0" in e)).map((e) => JSON.stringify(e)),
      text: document.body.innerText.replace(/[ \t]+/g, " ").replace(/\n{2,}/g, "\n").trim(),
    };
  });
  result[path] = { status: res?.status(), ...data };
  if (shots) {
    for (const w of widths) {
      await page.setViewportSize({ width: w, height: 900 });
      await page.waitForTimeout(250);
      const file = `${path === "/" ? "home" : path.slice(1).replace(/\//g, "__")}@${w}.png`;
      await page.screenshot({ path: join(out, file), fullPage: true });
    }
  }
  console.log(res?.status(), path);
  await ctx.close();
}

await browser.close();
writeFileSync(join(out, "pages.json"), JSON.stringify(result, null, 1));
console.log(`${paths.length} pages -> ${out}/pages.json`);
