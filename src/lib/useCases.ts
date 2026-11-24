/* Use cases: /use-cases and /use-cases/<slug>. Content adapted from the
   "Checkgrow Use Case Articles" design (October 2026) and checked against the
   platform. Each use case tells one job end to end: the problem, four steps
   inside Checkgrow (each with a product mockup), the result and an honest
   FAQ that also says what Checkgrow does not do. The copy lives in the
   "useCases" dictionary (src/i18n/dictionaries/<lang>/useCases.ts), keyed by
   slug; this module keeps the slugs, mockups, backgrounds, dates and links,
   and merges them with a language's copy. Mockups are keyed into
   src/components/use-cases/mockups; numbers inside them are illustrative. */

export type MockupKey =
  | "mo-campaigns" | "mo-creatives" | "mo-calendar" | "mo-integrations" | "mo-home"
  | "kc-completeness" | "kc-brand" | "kc-persona" | "kc-graph" | "kc-draft"
  | "in-funnel" | "in-adreport" | "in-winning" | "in-utm" | "in-live";

export type UseCaseSlug = "marketing-operations" | "brand-knowledge-ai" | "marketing-reporting";

export type UseCaseStep = {
  title: string;
  body: string;
  tag: string;
  mockup: MockupKey;
  background: string;
  backgroundColor: string;
};

export type UseCase = {
  slug: UseCaseSlug;
  feature: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  builtFor: readonly string[];
  worksWithLabel: string;
  worksWith: readonly { name: string; icon?: string }[];
  inShort: readonly string[];
  hero: { steps: readonly { label: string; caption: string }[]; mockups: readonly MockupKey[]; background: string; backgroundColor: string };
  problem: { title: string; body: string; quote: { text: string; author: string } };
  steps: readonly UseCaseStep[];
  see: UseCaseStep;
  outcomes: readonly { title: string; body: string }[];
  testimonial: { text: string; author: string };
  proof: readonly { slug: string; company: string; line: string }[];
  faq: readonly { q: string; a: string }[];
  related: readonly UseCaseSlug[];
  keywords: readonly string[];
  updatedAt: string;
  /* 1200×630 share image (hero mockup on the use case background) */
  socialImage: string;
};

/* one language's copy of a use case: the dictionary's useCases.items[slug] */
type StepCopy = { title: string; body: string; tag: string };
export type UseCaseCopy = {
  feature: string;
  title: string;
  metaTitle: string;
  description: string;
  lede: string;
  builtFor: readonly string[];
  worksWithLabel: string;
  worksWith: readonly { name: string; icon?: string }[];
  inShort: readonly string[];
  hero: { steps: readonly { label: string; caption: string }[] };
  problem: { title: string; body: string; quote: { text: string; author: string } };
  steps: readonly StepCopy[];
  see: StepCopy;
  outcomes: readonly { title: string; body: string }[];
  testimonial: { text: string; author: string };
  proof: readonly { slug: string; company: string; line: string }[];
  faq: readonly { q: string; a: string }[];
  keywords: readonly string[];
};
export type UseCasesCopy = { readonly [S in UseCaseSlug]: UseCaseCopy };

type Visual = { mockup: MockupKey; background: string; backgroundColor: string };
type UseCaseData = {
  slug: UseCaseSlug;
  socialImage: string;
  updatedAt: string;
  hero: { mockups: readonly MockupKey[]; background: string; backgroundColor: string };
  /* one per step of the copy, in order */
  steps: readonly Visual[];
  see: Visual;
  related: readonly UseCaseSlug[];
};

const BG = "/features/backgrounds/";

/* the use cases in display order */
const useCaseData: readonly UseCaseData[] = [
  {
    slug: "marketing-operations",
    socialImage: "/use-cases/checkgrow-use-case-marketing-operations-f53b5a70.jpg",
    updatedAt: "2026-10-14",
    hero: {
      mockups: ["mo-calendar", "mo-campaigns", "mo-integrations"],
      background: BG + "02-apricot-blush.webp",
      backgroundColor: "#d99a7a",
    },
    steps: [
      {
        mockup: "mo-campaigns",
        background: BG + "09-terracotta-sage.webp",
        backgroundColor: "#a8705a",
      },
      {
        mockup: "mo-creatives",
        background: BG + "07-blush-butter.webp",
        backgroundColor: "#e0b48c",
      },
      {
        mockup: "mo-calendar",
        background: BG + "01-sage-peach-sky.webp",
        backgroundColor: "#c9a58a",
      },
      {
        mockup: "mo-integrations",
        background: BG + "04-aqua-mint.webp",
        backgroundColor: "#7fb8a8",
      },
    ],
    see: {
      mockup: "mo-home",
      background: BG + "13-brand-indigo-bloom.webp",
      backgroundColor: "#4a52c9",
    },
    related: ["brand-knowledge-ai", "marketing-reporting"],
  },
  {
    slug: "brand-knowledge-ai",
    socialImage: "/use-cases/checkgrow-use-case-brand-knowledge-ai-2d160706.jpg",
    updatedAt: "2026-10-14",
    hero: {
      mockups: ["kc-graph", "kc-brand", "kc-persona"],
      background: BG + "06-periwinkle-lilac.webp",
      backgroundColor: "#8f8fd1",
    },
    steps: [
      {
        mockup: "kc-completeness",
        background: BG + "03-moss-cream.webp",
        backgroundColor: "#8a8f74",
      },
      {
        mockup: "kc-brand",
        background: BG + "10-ice-rose-lavender.webp",
        backgroundColor: "#c8b6d3",
      },
      {
        mockup: "kc-persona",
        background: BG + "01-sage-peach-sky.webp",
        backgroundColor: "#c9a58a",
      },
      {
        mockup: "kc-graph",
        background: BG + "14-brand-indigo-curtains.webp",
        backgroundColor: "#3f45b5",
      },
    ],
    see: {
      mockup: "kc-draft",
      background: BG + "12-brand-indigo-bands.webp",
      backgroundColor: "#4b54cc",
    },
    related: ["marketing-operations", "marketing-reporting"],
  },
  {
    slug: "marketing-reporting",
    socialImage: "/use-cases/checkgrow-use-case-marketing-reporting-bda8f5e9.jpg",
    updatedAt: "2026-10-14",
    hero: {
      mockups: ["in-winning", "in-funnel", "in-adreport"],
      background: BG + "05-cobalt-sky.webp",
      backgroundColor: "#3b6fe0",
    },
    steps: [
      {
        mockup: "in-funnel",
        background: BG + "08-deep-teal-seafoam.webp",
        backgroundColor: "#2f6b6b",
      },
      {
        mockup: "in-adreport",
        background: BG + "11-brand-indigo-diagonal.webp",
        backgroundColor: "#4a52c9",
      },
      {
        mockup: "in-winning",
        background: BG + "10-ice-rose-lavender.webp",
        backgroundColor: "#c8b6d3",
      },
      {
        mockup: "in-utm",
        background: BG + "04-aqua-mint.webp",
        backgroundColor: "#7fb8a8",
      },
    ],
    see: {
      mockup: "in-live",
      background: BG + "15-brand-indigo-crossflow.webp",
      backgroundColor: "#4b54cc",
    },
    related: ["marketing-operations", "brand-knowledge-ai"],
  },
];

/* every use case in one language */
export function localizeUseCases(copy: UseCasesCopy): UseCase[] {
  return useCaseData.map((data) => {
    const c = copy[data.slug];
    return {
      ...c,
      slug: data.slug,
      socialImage: data.socialImage,
      updatedAt: data.updatedAt,
      related: data.related,
      hero: { ...data.hero, steps: c.hero.steps },
      steps: data.steps.map((visual, i) => ({ ...c.steps[i], ...visual })),
      see: { ...c.see, ...data.see },
    };
  });
}

export const useCaseSlugs: readonly UseCaseSlug[] = useCaseData.map((d) => d.slug);
export const findUseCase = (list: readonly UseCase[], slug: string) => list.find((item) => item.slug === slug);
export const pathToUseCase = (slug: string) => `/use-cases/${slug}`;
