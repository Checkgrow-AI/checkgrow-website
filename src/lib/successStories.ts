/* Success stories (News category "success-stories"), imported from the
   "Checkgrow Case Study Articles" design on 14 October 2026. Images live in
   public/success-stories/<slug>/. Every figure is dated and confirmed by the
   client; a story stays a draft until the client approves it.

   Drafts render in local development only: production builds leave them out
   of the listing, the article routes and the sitemap. To publish a story,
   set draft: false once the client has approved it. */

export type StoryStat = { value: string; label: string; big?: boolean };
export type StoryImage = { src: string; alt: string; width: number; height: number };
export type StoryBlock =
  | { type: "p"; text: string }
  | { type: "figure"; variant: "wide" | "narrow"; image: StoryImage; caption: string }
  | { type: "figure"; variant: "card"; image: StoryImage; stats: readonly StoryStat[]; caption: string }
  | { type: "gallery"; images: readonly StoryImage[]; caption: string }
  | { type: "stats"; variant: "findings" | "results"; items: readonly StoryStat[] }
  | { type: "callout"; text: string; cite: string };

export type SuccessStory = {
  slug: string;
  company: string;
  draft: boolean;
  title: string;
  description: string;
  kicker: string;
  publishedAt: string;
  heroStats: readonly StoryStat[];
  features: readonly string[];
  hero: StoryImage;
  /* "contain" for logo artwork that must not be cropped on square cards */
  coverFit?: "contain";
  clientMark: string;
  about: { summary: string; facts: readonly { label: string; value: string }[] };
  lead: string;
  /* "Key takeaways": short, self-contained statements near the top, the
     form search and AI answer engines quote */
  takeaways?: readonly string[];
  /* article keywords for structured data (schema.org BlogPosting) */
  keywords?: readonly string[];
  sections: readonly { label: string; title: string; blocks: readonly StoryBlock[] }[];
  statement: { text: string; cite: string } | null;
  faq: readonly { q: string; a: string }[];
  footnote: string;
};

export const showDrafts = process.env.NODE_ENV !== "production";
/* drafts render in local development only */
export const publishedStories = (items: readonly SuccessStory[]) => items.filter(story => showDrafts || !story.draft);
export const findStory = (items: readonly SuccessStory[], slug: string) => publishedStories(items).find(story => story.slug === slug);
/* the table of contents drops a leading article ("The challenge" ->
   "Challenge", "Le défi" -> "Défi", "Die Ausgangslage" -> "Ausgangslage") */
const LEADING_ARTICLE: Record<string, RegExp> = {
  en: /^The /,
  "pt-BR": /^(O|A|Os|As) /,
  de: /^(Der|Die|Das) /,
  fr: /^(Le |La |Les |L['’])/,
};
export const contentsLabel = (label: string, lang: string) =>
  label.replace(LEADING_ARTICLE[lang] ?? /^$/, "").replace(/^./, (c) => c.toLocaleUpperCase(lang));

/* an anchor id from a section label; accents are dropped first, so a
   translated label reads naturally ("Le défi" -> "le-defi"). English ids
   are unchanged. */
export const storySectionId = (label: string) => label.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
