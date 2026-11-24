/* Compare two snapshot runs (scripts/i18n/snapshot.mjs) page by page:
   status, <html lang>, title, description, canonical, JSON-LD, dataLayer
   (ignoring GTM's load timestamp) and visible text, line by line.

     node scripts/i18n/compare.mjs <before/pages.json> <after/pages.json> [--allow=line1|line2]

   --allow lists visible lines expected to be new (e.g. the language
   selector), which are then not reported. Exit 1 on any other difference. */
import { readFileSync } from "node:fs";

const [a, b] = process.argv.slice(2).filter((x) => !x.startsWith("--")).map((f) => JSON.parse(readFileSync(f, "utf8")));
const allowArg = process.argv.find((x) => x.startsWith("--allow="));
const allowed = new Set(allowArg ? allowArg.slice(8).split("|") : []);
const norm = (p) => ({ ...p, dataLayer: (p.dataLayer ?? []).map((e) => e.replace(/"gtm\.start":\d+/, '"gtm.start":0')) });
let bad = 0;
for (const path of Object.keys(a)) {
  const x = norm(a[path]);
  const y = b[path] ? norm(b[path]) : null;
  if (!y) { console.log(`MISSING  ${path}`); bad++; continue; }
  const fields = ["status", "lang", "title", "description", "canonical", "jsonLd", "dataLayer"].filter((k) => JSON.stringify(x[k]) !== JSON.stringify(y[k]));
  const before = x.text.split("\n"), after = y.text.split("\n");
  const gone = before.filter((l) => !after.includes(l));
  const added = after.filter((l) => !before.includes(l) && !allowed.has(l));
  if (!fields.length && !gone.length && !added.length) { console.log(`OK       ${path}`); continue; }
  bad++;
  console.log(`DIFF     ${path}${fields.length ? `  [${fields.join(", ")}]` : ""}`);
  for (const l of gone.slice(0, 6)) console.log(`   - ${l.slice(0, 150)}`);
  for (const l of added.slice(0, 6)) console.log(`   + ${l.slice(0, 150)}`);
  if (fields.includes("jsonLd")) {
    const xj = x.jsonLd ?? [], yj = y.jsonLd ?? [];
    for (let i = 0; i < Math.max(xj.length, yj.length); i++) if (xj[i] !== yj[i]) {
      let k = 0; const s1 = xj[i] ?? "", s2 = yj[i] ?? "";
      while (s1[k] === s2[k] && k < s1.length) k++;
      console.log(`   jsonLd[${i}] ${JSON.stringify(s1.slice(Math.max(0, k - 40), k + 60))}\n        => ${JSON.stringify(s2.slice(Math.max(0, k - 40), k + 60))}`);
    }
  }
  for (const k of ["title", "description", "canonical", "lang"]) if (fields.includes(k)) console.log(`   ${k}: ${JSON.stringify(x[k])} => ${JSON.stringify(y[k])}`);
}
console.log(`\n${Object.keys(a).length} pages, ${bad} with differences.`);
process.exit(bad ? 1 : 0);
