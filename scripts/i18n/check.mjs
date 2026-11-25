/* i18n guard (docs/i18n.md): nothing ships with a missing or broken
   translation. Runs before every `pnpm build` (so the Easy Panel Docker
   build fails and production keeps the last good version) and in the
   pre-push hook.

     node scripts/i18n/check.mjs            all checks
     node scripts/i18n/check.mjs --source   only the source checks (no
                                            translation completeness), for
                                            work in progress on English

   Checks
   1. Hardcoded copy: visible text, alt, title, aria and placeholder attributes, and prose
      string literals outside the dictionaries (TypeScript AST, not regex).
   2. Links: page links go through LocalLink/localePath, not next/link or
      a raw "/path" navigation.
   3. Dictionaries stay server-side: no "use client" module imports them.
   4. Every language is a real translation (not an alias of English), and
      its strings differ from English unless they are names or codes
      (allowlist below), with identical {placeholders} and the same
      figures (numbers compared without separators, so only the format
      may change).
   5. Fields that never translate (ids, slugs, hrefs, images...) are
      identical to English in every language.
   6. Typography per language (French spacing before : ; ! ? and inside
      guillemets; no straight quotes in prose).
   7. Mockup text: every text node in the generated product mockups has a
      translation in every language.

   Shape (every key, list length, numbers) is enforced by tsc through the
   Localized<> type, so it is not repeated here. */

import ts from "typescript";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";
import { createRequire } from "node:module";

const ROOT = resolve(dirname(new URL(import.meta.url).pathname), "../..");
const SRC = join(ROOT, "src");
const SOURCE_ONLY = process.argv.includes("--source");
/* --locale=de: only that language's translation checks (source checks still run) */
const ONLY = process.argv.find((a) => a.startsWith("--locale="))?.slice(9);
const errors = [];
const err = (check, where, msg) => errors.push({ check, where, msg });

/* ------------------------------------------------------------------ */
/* configuration                                                       */

/* Files whose strings are not visitor-facing website copy. Each needs a
   reason; anything else is checked. */
const SOURCE_EXEMPT = [
  [/^src\/i18n\/dictionaries\//, "the dictionaries themselves"],
  [/^src\/app\/api\//, "API routes: sales emails, webhooks and errors for internal use"],
  [/^src\/lib\/(leadEmail|demoAvailability|demoLead|google|freeEmailDomains)\.ts$/, "server-side lead handling for the sales team (English)"],
  [/^src\/lib\/(featureScreens|contentSecurityPolicy|attribution|track|pricingExchangeRates)\.ts$/, "generated markup or technical strings"],
  [/^src\/components\/sales\/salesMockups\.generated\.ts$/, "generated mockup markup (text is checked by check 7)"],
  [/^src\/lib\/ai-glyph\//, "SVG geometry"],
  [/^src\/app\/(llms\.txt|llms-full\.txt|markdown)\//, "English-only AI surfaces (llms.txt, markdown)"],
  [/^src\/lib\/markdown\.ts$/, "English-only AI surface (reads the English dictionary)"],
  [/^src\/components\/SiteScripts\.tsx$/, "consent and tag scripts"],
];

/* attributes whose string value a visitor reads or hears */
const TEXT_ATTRS = new Set(["alt", "title", "aria-label", "aria-description", "aria-roledescription", "aria-valuetext", "placeholder", "label", "summary"]);

/* identical in every language: names, codes, units */
const SAME_EVERYWHERE = [
  /^[\s\p{P}\p{S}\d]*$/u, // numbers, symbols, punctuation only
  /^(Euro|Checkgrow|Checkgrow Sales|Checkgrow MCP|Creative Studio|Insights|Sales Brain|Growth Credits|Business|Agency|Growth|Enterprise|Supabase|n8n|Notion|Google Drive|Meta Ads|LinkedIn Ads|Microsoft Ads|Grow|GA4|SEO|GEO|CMO|CEO|CFO|CRM|ICP|ICPs|ROI|ROAS|CAC|KPI|KPIs|API|B2B|B2C|SaaS|AI|LinkedIn|Meta|Google|Google Ads|Google Analytics|Instagram|Facebook|YouTube|TikTok|HubSpot|Salesforce|Slack|Notion|WhatsApp|Pipedrive|Shopify|WordPress|Webflow|Trustpilot|EN|PT|DE|FR|OK|PDF|CSV|URL|UTM|GDPR|DSGVO|RGPD|LGPD|ISO 27001|SOC 2|Zagreb|Croatia|FAQ|CTR|CPC|CPM|CPA|MQL|SQL|SDR|SDRs|BDR|ROI)$/u,
  /^https?:\/\//,
  /^[\w.+-]+@[\w-]+\.[\w.]+$/,
];

/* keys whose values must be identical to English in every language */
/* keep in step with FixedKey in src/i18n/types.ts */
const FIXED_KEY = /^(id|ids|slug|href|src|poster|icon|mockup|key|image|images|cover|coverFit|social|logo|photo|video|url|path|anchor|sectionId|category|categories|kind|type|variant|layout|tone|color|accent|focus|width|height|duration|durationSeconds|date|publishedAt|updatedAt|uploadDate|currency|code|draft|big|person|company|captions|socialImage)$/;

/* ------------------------------------------------------------------ */
/* helpers                                                             */

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(tsx?|mjs)$/.test(name)) out.push(p);
  }
  return out;
}
const rel = (p) => relative(ROOT, p);
/* components nothing renders are exempt only while nothing imports them */
const UNUSED = ["src/components/sections/HeroV1.tsx", "src/components/WaitlistForm.tsx"];
/* imports from other unused files do not count (HeroV1 imports WaitlistForm) */
const allSource = walk(SRC).filter((p) => !UNUSED.includes(rel(p))).map((p) => readFileSync(p, "utf8")).join("\n");
const stillUnused = (file) => UNUSED.includes(file) && !new RegExp(`from\\s+["'][^"']*${file.split("/").pop().replace(".tsx", "")}["']`).test(allSource);
const exempt = (file) => SOURCE_EXEMPT.some(([re]) => re.test(file)) || stillUnused(file);

/* prose: letters and at least one space between words, not a class list,
   path, identifier, CSS value or query */
function looksLikeProse(s) {
  const t = s.trim();
  if (t.length < 2 || !/\p{L}{2,}/u.test(t)) return false;
  if (/^(https?:|mailto:|tel:|\/|#|\.|data:)/.test(t)) return false;
  if (/^[a-z0-9_.:/[\]()#%-]+$/i.test(t) && !/\s/.test(t)) return false; // identifiers, slugs, paths
  const words = t.split(/\s+/);
  const classy = words.filter((w) => /^[!-]?[a-z0-9]+([:-][a-z0-9[\]().%/#_-]+)+$|^(flex|grid|block|hidden|inline|relative|absolute|fixed|sticky|static|contents|underline|italic|truncate|uppercase|lowercase|capitalize|sr-only|group|peer|container|wrap|shrink|grow|transition|transform|border|rounded|shadow|ring|outline|isolate)$/.test(w));
  if (classy.length && classy.length >= words.length * 0.5) return false; // Tailwind class lists
  if (/^[\w-]+(\s*[,;]\s*[\w-]+)+$/.test(t) && !/\s\p{L}+\s/u.test(t)) return false; // value lists
  if (/(^|\s)(var\(|calc\(|rgba?\(|cubic-bezier|translate|scale[XYZ3d]*\s*\(|rotate[XYZ]?\(|linear-gradient|\d+(px|rem|em|vh|vw|ms|s|%)\b)/.test(t)) return false; // CSS
  if (/^[A-Z_]+$/.test(t)) return false; // CONSTANTS
  return /\s/.test(t) || /^\p{Lu}\p{Ll}+$/u.test(t); // multi-word, or a single capitalised word
}

/* ------------------------------------------------------------------ */
/* 1-3. source checks                                                  */

const LINK_OK = new Set(["src/i18n/client.tsx", "src/components/LanguageSelector.tsx"]);

for (const abs of walk(SRC)) {
  const file = rel(abs);
  const text = readFileSync(abs, "utf8");
  const isClient = /^\s*["']use client["']/.test(text);
  const sf = ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
  const line = (node) => sf.getLineAndCharacterOfPosition(node.getStart()).line + 1;
  const allowed = (node) => {
    /* an explicit, reviewed exception on the line itself or the line before */
    const lines = text.split("\n");
    const n = line(node);
    return /i18n-allow:/.test(lines[n - 1] ?? "") || /i18n-allow:/.test(lines[n - 2] ?? "");
  };

  /* 3. dictionaries stay server-side */
  if (isClient && /import\s+(?!type\b)[^;]*?from\s+["'](@\/i18n\/dictionaries|\.\.?\/.*dictionaries)/.test(text)) err("server-only", file, "a \"use client\" module imports the dictionaries; pass copy through <Messages>/useT instead");

  /* 2. links */
  if (!LINK_OK.has(file) && /from\s+["']next\/link["']/.test(text)) err("links", file, "imports next/link; use LocalLink from @/i18n/client so links stay in the visitor's language");

  if (exempt(file)) continue;

  const visit = (node) => {
    /* 1a. visible JSX text */
    if (ts.isJsxText(node)) {
      const t = node.getText().replace(/\s+/g, " ").trim();
      if (/\p{L}{2,}/u.test(t) && !allowed(node)) err("hardcoded", `${file}:${line(node)}`, `JSX text "${t.slice(0, 70)}"`);
    }
    /* 1b. text attributes */
    if (ts.isJsxAttribute(node) && node.initializer) {
      const name = node.name.getText();
      const init = node.initializer;
      const lit = ts.isStringLiteral(init) ? init : ts.isJsxExpression(init) && init.expression && (ts.isStringLiteral(init.expression) || ts.isNoSubstitutionTemplateLiteral(init.expression)) ? init.expression : null;
      if (lit && TEXT_ATTRS.has(name) && /\p{L}{2,}/u.test(lit.text) && !SAME_EVERYWHERE.some((re) => re.test(lit.text)) && !allowed(node)) err("hardcoded", `${file}:${line(node)}`, `${name}="${lit.text.slice(0, 70)}"`);
      /* 2b. raw page links in href */
      if (lit && name === "href" && /^\/(?!\/|api\/|_next\/|markdown)/.test(lit.text) && !/\.[a-z0-9]+([?#].*)?$/i.test(lit.text) && !allowed(node)) {
        const tag = node.parent?.parent?.tagName?.getText?.() ?? "";
        if (tag !== "Link" && tag !== "LocalLink" && tag !== "NextLink") err("links", `${file}:${line(node)}`, `raw page href "${lit.text}" on <${tag || "?"}>; wrap with localePath() or use <LocalLink>`);
      }
      return; // the attribute's literal is handled
    }
    /* 2c. programmatic navigation to a page */
    if (ts.isCallExpression(node)) {
      const callee = node.expression.getText();
      const arg = node.arguments[0];
      if (/(location\.(assign|replace)|router\.(push|replace)|location\.href\s*=)$/.test(callee) && arg && (ts.isStringLiteral(arg) || ts.isNoSubstitutionTemplateLiteral(arg)) && arg.text.startsWith("/") && !allowed(node)) err("links", `${file}:${line(node)}`, `navigation to "${arg.text}" is not localised; use localePath(lang, …)`);
      /* strings passed to console/Error/regex/fetch are not copy */
      if (/^(console\.\w+|new Error|Error|RegExp|fetch|require|import|JSON\.parse|document\.\w+|Intl\.\w+|matchMedia|URLSearchParams|cn|clsx|track|trackAfterConsent|setFocus|setValue|getValues|register|trigger|querySelector|getElementById)$/.test(callee.replace(/^window\./, ""))) return;
    }
    if (ts.isNewExpression(node) && /^(Error|RegExp|URL|Intl\.\w+|URLSearchParams)$/.test(node.expression.getText())) return;
    if (ts.isImportDeclaration(node) || ts.isExportDeclaration(node)) return;
    /* 1c. prose string literals (data and props) */
    if (ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
      const p = node.parent;
      const isKey = p && (ts.isPropertyAssignment(p) || ts.isPropertySignature?.(p)) && p.name === node;
      const isType = p && (ts.isLiteralTypeNode(p));
      const isCase = p && ts.isCaseClause(p);
      const isCompare = p && ts.isBinaryExpression(p) && /^(===|!==|==|!=)$/.test(p.operatorToken.getText());
      const isDirective = p && ts.isExpressionStatement(p) && /^use (client|server)$/.test(node.text);
      if (!isKey && !isType && !isCase && !isCompare && !isDirective && looksLikeProse(node.text) && !SAME_EVERYWHERE.some((re) => re.test(node.text.trim())) && !allowed(node)) err("hardcoded", `${file}:${line(node)}`, `string "${node.text.slice(0, 70)}"`);
    }
    if (ts.isTemplateExpression(node)) {
      const parts = [node.head.text, ...node.templateSpans.map((s) => s.literal.text)];
      const raw = parts.join(" {} ");
      const glued = parts.join("");
      /* copy has words separated by spaces in its own text; selectors,
         paths and ids built with ${} do not */
      if (!/^[/#?.]/.test(glued.trim()) && /\p{L}{2,}\s+\p{L}/u.test(glued) && looksLikeProse(raw) && !allowed(node)) err("hardcoded", `${file}:${line(node)}`, `template "${raw.slice(0, 70)}"`);
    }
    ts.forEachChild(node, visit);
  };
  visit(sf);
}

/* ------------------------------------------------------------------ */
/* 4-6. dictionaries                                                   */

/* load the TypeScript dictionaries without a build step: transpile each
   module to CommonJS and evaluate it with a tiny resolver */
const cache = new Map();
function loadTs(abs) {
  if (cache.has(abs)) return cache.get(abs).exports;
  const code = ts.transpileModule(readFileSync(abs, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText;
  const mod = { exports: {} };
  cache.set(abs, mod);
  const req = (spec) => {
    if (spec.startsWith(".")) {
      const base = resolve(dirname(abs), spec);
      const hit = [base + ".ts", base + ".tsx", join(base, "index.ts")].find(existsSync);
      if (!hit) throw new Error(`cannot resolve ${spec} from ${rel(abs)}`);
      return loadTs(hit);
    }
    if (spec.startsWith("@/")) {
      const base = join(SRC, spec.slice(2));
      const hit = [base + ".ts", base + ".tsx", join(base, "index.ts")].find(existsSync);
      if (!hit) throw new Error(`cannot resolve ${spec}`);
      return loadTs(hit);
    }
    return createRequire(abs)(spec);
  };
  new Function("exports", "require", "module", code)(mod.exports, req, mod);
  return mod.exports;
}

const DICT = join(SRC, "i18n/dictionaries");
const LOCALES = { "pt-BR": "pt-BR", de: "de", fr: "fr" };
const en = loadTs(join(DICT, "en/index.ts")).en;
const indexText = readFileSync(join(DICT, "index.ts"), "utf8");

const placeholders = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");
/* the figures in a string, with any separator between digits removed, so
   307,650 / 307.650 / 307 650 and 3.45 / 3,45 compare equal */
const figures = (s) => [...s.replace(/\{\w+\}/g, "").replace(/(\d)[.,\u202f\u00a0 '](?=\d)/g, "$1").matchAll(/\d+/g)].map((m) => m[0]).sort();
const same = (s) => SAME_EVERYWHERE.some((re) => re.test(s.trim()));

/* strings deliberately identical to English in one language, by path
   (e.g. a product name kept in English): scripts/i18n/same-as-english.json */
/* scripts/i18n/same-as-english/<locale>*.json: arrays of dictionary paths
   (or "mockups:<text>", "figures:<path>") reviewed as correctly identical
   to English, or with figures written out in words */
const keepDir = join(ROOT, "scripts/i18n/same-as-english");
const keep = {};
if (existsSync(keepDir)) for (const name of readdirSync(keepDir).filter((n) => n.endsWith(".json"))) {
  const locale = name.replace(/(\.[\w-]+)?\.json$/, "");
  (keep[locale] ??= []).push(...JSON.parse(readFileSync(join(keepDir, name), "utf8")));
}

function compare(locale, a, b, path) {
  if (typeof a === "string") {
    if (typeof b !== "string") return err("shape", `${locale}:${path}`, "not a string");
    const key = path.split(".").pop().replace(/\[\d+\]$/, "");
    if (FIXED_KEY.test(key)) {
      if (a !== b) err("fixed", `${locale}:${path}`, `must equal English "${a.slice(0, 60)}" (ids, links and images never translate)`);
      return;
    }
    if (placeholders(a) !== placeholders(b)) err("placeholders", `${locale}:${path}`, `{placeholders} differ: en {${placeholders(a)}} vs {${placeholders(b)}}`);
    {
      const fb = figures(b);
      const missing = figures(a).filter((d) => { const i = fb.indexOf(d); if (i < 0) return true; fb.splice(i, 1); return false; });
      if (missing.length && !(keep[locale] ?? []).includes(`figures:${path}`)) err("figures", `${locale}:${path}`, `figures missing or changed (${missing.join(", ")}): "${b.slice(0, 70)}"`);
    }
    if (!SOURCE_ONLY && a === b && a.trim() && !same(a) && !(keep[locale] ?? []).includes(path)) err("untranslated", `${locale}:${path}`, `identical to English: "${a.slice(0, 70)}"`);
    if (locale === "fr") {
      if (/(\p{L}|\d)[;!?](\s|$)/u.test(b) || / [;:!?»]/.test(b) || /« /.test(b) || /(\p{L}|\d): /u.test(b)) err("typography", `fr:${path}`, `French needs a narrow no-break space (U+202F) before ; : ! ? » and after «: "${b.slice(0, 70)}"`);
    }
    if (/(^|\s)"[^"]+"/.test(b) && locale !== "en") err("typography", `${locale}:${path}`, `straight quotes; use the language's quotation marks (de „…“, fr « … », pt-BR “…”): "${b.slice(0, 60)}"`);
    return;
  }
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return err("shape", `${locale}:${path}`, "list length differs from English");
    a.forEach((v, i) => compare(locale, v, b[i], `${path}[${i}]`));
    return;
  }
  if (a && typeof a === "object") {
    for (const k of Object.keys(a)) {
      if (!(k in (b ?? {}))) err("shape", `${locale}:${path}.${k}`, "missing");
      else compare(locale, a[k], b[k], path ? `${path}.${k}` : k);
    }
    return;
  }
  if (a !== b) err("fixed", `${locale}:${path}`, `must equal English (${a})`);
}

for (const [locale, folder] of Object.entries(LOCALES)) {
  if (ONLY && ONLY !== locale) continue;
  const idx = join(DICT, folder, "index.ts");
  if (!existsSync(idx)) {
    if (!SOURCE_ONLY) err("missing-locale", locale, `no dictionary at src/i18n/dictionaries/${folder}/index.ts`);
    continue;
  }
  const exported = loadTs(idx);
  const dict = Object.values(exported)[0];
  if (new RegExp(`["']?${locale}["']?\\s*:\\s*en\\b`).test(indexText)) err("alias", locale, "is an alias of English in dictionaries/index.ts");
  compare(locale, en, dict, "");
}
if (!SOURCE_ONLY && !ONLY) for (const locale of Object.keys(LOCALES)) {
  if (new RegExp(`["']?${locale}["']?\\s*:\\s*en\\b`).test(indexText)) err("alias", locale, "is still an alias of English in dictionaries/index.ts");
}

/* ------------------------------------------------------------------ */
/* 7. mockup text                                                      */

{
  const { collect } = await import("./mockups.mjs");
  const current = collect().where;
  const genPath = join(SRC, "i18n/mockupTexts.generated.ts");
  const generated = existsSync(genPath) ? loadTs(genPath).mockupTexts : {};
  const stale = [...current.keys()].filter((t) => !(t in generated)).concat(Object.keys(generated).filter((t) => !current.has(t)));
  if (stale.length) err("mockups", "src/i18n/mockupTexts.generated.ts", `out of date (${stale.length} texts): run node scripts/i18n/mockups.mjs, then translate the new texts`);
  if (!SOURCE_ONLY) for (const [locale, folder] of Object.entries(LOCALES)) {
    if (ONLY && ONLY !== locale) continue;
    const file = join(DICT, folder, "mockups.ts");
    if (!existsSync(file)) { err("mockups", locale, `no mockup translations at src/i18n/dictionaries/${folder}/mockups.ts`); continue; }
    const table = loadTs(file).mockups ?? {};
    for (const t of current.keys()) {
      if (!(t in table)) { err("mockups", `${locale}:mockups`, `no translation for "${t.slice(0, 60)}"`); continue; }
      const tr = table[t];
      if (tr === t && !same(t) && !(keep[locale] ?? []).includes(`mockups:${t}`)) err("untranslated", `${locale}:mockups`, `identical to English: "${t.slice(0, 60)}"`);
      if (locale === "fr" && (/(\p{L}|\d)[;!?](\s|$)/u.test(tr) || / [;:!?»]/.test(tr) || /« /.test(tr) || /(\p{L}|\d): /u.test(tr))) err("typography", `fr:mockups`, `French spacing (U+202F) in "${tr.slice(0, 60)}"`);
    }
    for (const t of Object.keys(table)) if (!current.has(t)) err("mockups", `${locale}:mockups`, `stale translation for a text no mockup has any more: "${t.slice(0, 60)}"`);
  }
}

/* ------------------------------------------------------------------ */

if (errors.length) {
  const byCheck = {};
  for (const e of errors) (byCheck[e.check] ??= []).push(e);
  for (const [check, list] of Object.entries(byCheck)) {
    console.error(`\n✗ ${check} (${list.length})`);
    const limit = process.argv.includes("--all") ? Infinity : 60;
    for (const e of list.slice(0, limit)) console.error(`  ${e.where}  ${e.msg}`);
    if (list.length > limit) console.error(`  … and ${list.length - limit} more (--all to list everything)`);
  }
  console.error(`\ni18n check failed: ${errors.length} problem(s). See docs/i18n.md.`);
  process.exit(1);
}
console.log(`i18n check passed${SOURCE_ONLY ? " (source only)" : ""}.`);
