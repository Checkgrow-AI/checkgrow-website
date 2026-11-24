/* Text inside the generated product mockups (src/lib/featureScreens.ts and
   src/components/sales/salesMockups.generated.ts). Those files are
   regenerated from design canvases and never hand-edited, so their text is
   translated at render time: each language has a table from the English
   text of a node to its translation (src/i18n/dictionaries/<lang>/mockups.ts).

   pnpm i18n:check re-extracts the texts on every build and fails if a
   regenerated mockup brings a text that has no translation.

   Plain TypeScript with no path aliases, so node scripts can import it. */

export type MockupTable = Readonly<Record<string, string>>;

const decode = (s: string) =>
  s.replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'");
const encodeText = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;");
const encodeAttr = (s: string) => encodeText(s).replace(/"/g, "&quot;");
const normalise = (s: string) => decode(s).replace(/\s+/g, " ").trim();

const TEXT_NODE = /(<style[\s\S]*?<\/style>|<script[\s\S]*?<\/script>)|>([^<]+)(?=<)/g;
const TEXT_ATTR = /(\s(?:alt|title|aria-label|placeholder)=")([^"]*)(")/g;
const hasLetters = (s: string) => /\p{L}/u.test(s);

/* every visible text of one mockup, in document order */
export function mockupTexts(html: string): string[] {
  const out: string[] = [];
  for (const m of html.matchAll(TEXT_NODE)) if (!m[1] && m[2]) {
    const t = normalise(m[2]);
    if (hasLetters(t)) out.push(t);
  }
  for (const m of html.matchAll(TEXT_ATTR)) {
    const t = normalise(m[2]);
    if (hasLetters(t)) out.push(t);
  }
  return out;
}

/* the mockup in another language; untranslated nodes stay as they are */
export function translateMockup(html: string, table: MockupTable | null | undefined): string {
  if (!table) return html;
  return html
    .replace(TEXT_NODE, (all, skip: string | undefined, text: string | undefined) => {
      if (skip || !text) return all;
      const key = normalise(text);
      const tr = table[key];
      if (tr === undefined || tr === key) return all; // untouched unless it really changes
      const lead = text.match(/^\s*/)![0];
      const trail = text.match(/\s*$/)![0];
      return `>${lead}${encodeText(tr)}${trail}`;
    })
    .replace(TEXT_ATTR, (all, open: string, value: string, close: string) => {
      const key = normalise(value);
      const tr = table[key];
      return tr === undefined || tr === key ? all : `${open}${encodeAttr(tr)}${close}`;
    });
}
