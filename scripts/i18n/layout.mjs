/* Layout QA for translations: longer German, French or Portuguese copy
   must not break the UI.

     node scripts/i18n/layout.mjs <baseUrl> [--locales=pt-br,de,fr] [--paths=/a,/b] [--widths=390,768,1440] [--shots=dir] [--out=file.json]

   For every page of the sitemap, in English and each language, at each
   width, it scrolls the whole page (so scroll reveals render) and finds:

     page-scroll   the page scrolls horizontally
     clipped       text cut off by its own box (overflow hidden, ellipsis)
     offscreen     visible text extending past the viewport, outside any
                   horizontal scroller or marquee
     tall-control  a button or link label wrapping past three lines
     nav-overflow  header items that do not fit their bar

   Issues that already exist in English are reported separately: the run
   fails (exit 2) only on issues a translation introduced. Needs Chrome
   (Playwright, channel "chrome"); run against `next start` or the dev
   server. Part of the ship checklist (docs/i18n.md). */

import { chromium } from "playwright";
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const base = process.argv[2];
const arg = (k) => process.argv.find((a) => a.startsWith(`--${k}=`))?.slice(k.length + 3);
if (!base) {
  console.error("usage: layout.mjs <baseUrl> [--locales=pt-br,de,fr] [--paths=/a,/b] [--widths=390,768,1440] [--shots=dir] [--out=file.json]");
  process.exit(1);
}
const locales = (arg("locales") ?? "pt-br,de,fr").split(",").filter(Boolean);
const widths = (arg("widths") ?? "390,768,1440").split(",").map(Number);
const shots = arg("shots");
if (shots) mkdirSync(shots, { recursive: true });

async function sitemapPaths() {
  const xml = await (await fetch(`${base}/sitemap.xml`)).text();
  const all = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
  /* English paths only; every language mirrors them */
  return [...new Set(all.filter((p) => !/^\/(pt-br|de|fr)(\/|$)/.test(p)))];
}
const paths = arg("paths") ? arg("paths").split(",") : [...(await sitemapPaths()), "/demo-confirmation"];
const withPrefix = (prefix, path) => (prefix ? (path === "/" ? `/${prefix}` : `/${prefix}${path}`) : path);

/* runs in the page: returns the layout problems at the current width */
function inspect() {
  const vw = document.documentElement.clientWidth;
  const issues = [];
  /* the element's position in the document: the same in every language,
     so issues are matched between English and a translation precisely */
  const domPath = (el) => {
    const parts = [];
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      /* landmarks anchor the path, so overlays added to <body> (the
         language suggestion, the consent banner) never shift it */
      if (/^(MAIN|HEADER|FOOTER)$/.test(n.tagName)) { parts.unshift(n.tagName.toLowerCase()); break; }
      parts.unshift(`${n.tagName.toLowerCase()}:${[...n.parentElement.children].indexOf(n)}`);
    }
    return parts.join(">");
  };
  const label = (el) => {
    const id = el.id ? `#${el.id}` : "";
    const cls = typeof el.className === "string" ? el.className.split(/\s+/).filter((c) => c && !c.includes(":") && !c.includes("[")).slice(0, 3).map((c) => `.${c}`).join("") : "";
    const text = (el.innerText || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim().slice(0, 60);
    return `${el.tagName.toLowerCase()}${id}${cls} "${text}"`;
  };
  const hidden = (el) => {
    for (let n = el; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (cs.display === "none" || cs.visibility === "hidden" || Number(cs.opacity) === 0 || n.getAttribute("aria-hidden") === "true" || n.hasAttribute("hidden")) return true;
      /* visually hidden on purpose (sr-only: 1px box, clipped) */
      if (cs.position === "absolute" && (cs.clip === "rect(0px, 0px, 0px, 0px)" || cs.clipPath === "inset(50%)" || (parseFloat(cs.width) <= 1 && parseFloat(cs.height) <= 1))) return true;
    }
    return false;
  };
  /* horizontal scrollers, marquees and transformed tracks may legitimately run past the viewport */
  const insideScroller = (el) => {
    for (let n = el.parentElement; n && n !== document.body; n = n.parentElement) {
      const cs = getComputedStyle(n);
      if (/(auto|scroll|hidden|clip)/.test(cs.overflowX) && n.scrollWidth > n.clientWidth + 1) return true;
      if (cs.animationName && cs.animationName !== "none" && /translate|matrix/.test(cs.transform)) return true;
    }
    return false;
  };

  if (document.documentElement.scrollWidth > vw + 1) issues.push({ kind: "page-scroll", where: `document ${document.documentElement.scrollWidth}px > ${vw}px` });

  const textEls = [...document.body.querySelectorAll("*")].filter((el) =>
    [...el.childNodes].some((n) => n.nodeType === 3 && /\p{L}/u.test(n.textContent ?? "")),
  );
  for (const el of textEls) {
    if (hidden(el)) continue;
    const cs = getComputedStyle(el);
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    /* text cut off by its own box; [data-i18n-clip-ok] marks deliberate truncation */
    if ((/(hidden|clip)/.test(cs.overflowX) || cs.textOverflow === "ellipsis") && el.scrollWidth > el.clientWidth + 2 && !el.closest("[data-i18n-clip-ok]")) {
      issues.push({ kind: "clipped", where: label(el), path: domPath(el) });
    }
    if ((r.right > vw + 1 || r.left < -1) && !insideScroller(el) && cs.position !== "fixed") issues.push({ kind: "offscreen", where: label(el), path: domPath(el) });
  }
  for (const el of document.body.querySelectorAll("button, a[class*='rounded-full'], a[class*='min-h-1']")) {
    if (hidden(el)) continue;
    const lh = parseFloat(getComputedStyle(el).lineHeight) || 20;
    const text = el.innerText.trim();
    if (text && el.getBoundingClientRect().height > lh * 3.2 + 24) issues.push({ kind: "tall-control", where: label(el), path: domPath(el) });
  }
  const nav = document.querySelector("header nav");
  if (nav && nav.scrollWidth > nav.clientWidth + 1) issues.push({ kind: "nav-overflow", where: `header nav ${nav.scrollWidth}px > ${nav.clientWidth}px` });
  return issues;
}

const browser = await chromium.launch({ channel: "chrome" });
const results = [];
const run = async (prefix, path, width) => {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.route(/usercentrics|googletagmanager|google-analytics|facebook|linkedin\.com|doubleclick/, (r) => r.abort());
  const url = base + withPrefix(prefix, path);
  const res = await page.goto(url, { waitUntil: "load" });
  await page.waitForLoadState("networkidle", { timeout: 6000 }).catch(() => {});
  /* scroll through so scroll-driven reveals and lazy sections render */
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += Math.round(innerHeight * 0.8)) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    scrollTo(0, 0);
  });
  await page.waitForTimeout(300);
  const issues = await page.evaluate(inspect);
  if (shots) await page.screenshot({ path: join(shots, `${prefix || "en"}${path === "/" ? "_home" : path.replace(/\//g, "_")}@${width}.png`), fullPage: true });
  await ctx.close();
  return { status: res?.status() ?? 0, issues };
};

for (const path of paths) for (const width of widths) {
  const en = await run("", path, width);
  const key = (i) => `${i.kind}|${i.path ?? i.where.replace(/".*"/, "")}`;
  const enKeys = new Set(en.issues.map(key));
  for (const prefix of locales) {
    const tr = await run(prefix, path, width);
    const fresh = tr.issues.filter((i) => !enKeys.has(key(i)));
    results.push({ locale: prefix, path, width, status: tr.status, new: fresh, inEnglishToo: tr.issues.length - fresh.length });
    const tag = tr.status !== 200 ? `HTTP ${tr.status}` : fresh.length ? `${fresh.length} new issue(s)` : "ok";
    console.log(`${prefix.padEnd(5)} ${String(width).padStart(4)}  ${path.padEnd(48)} ${tag}`);
    for (const i of fresh.slice(0, 8)) console.log(`        ${i.kind.padEnd(12)} ${i.where}`);
  }
  if (en.issues.length) console.log(`en    ${String(width).padStart(4)}  ${path.padEnd(48)} (${en.issues.length} pre-existing in English, not counted)`);
}
await browser.close();

const out = arg("out");
if (out) writeFileSync(out, JSON.stringify(results, null, 1));
const bad = results.filter((r) => r.status !== 200 || r.new.length);
console.log(`\n${results.length} page views checked, ${bad.length} with new layout issues.`);
process.exit(bad.length ? 2 : 0);
