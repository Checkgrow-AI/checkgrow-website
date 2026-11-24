/* Every Checkgrow question in one place. /faq shows them all, grouped, with
   FAQPage structured data and a markdown copy for AI assistants; the
   homepage shows a short selection (homeFaqItems) and links here; the
   pricing page shows the buying questions (pricingQuestions).
   The copy lives in the faq dictionary namespace; this module only picks
   and orders questions by their stable anchor. Product facts follow the
   documentation at doc.checkgrow.com; prices follow src/lib/pricing.ts. */

export type FaqItem = { readonly q: string; readonly a: string };
export type FaqEntry = FaqItem & { readonly anchor: string };
export type FaqCategory = { readonly id: string; readonly title: string; readonly intro: string; readonly items: readonly FaqEntry[] };
/* the part of the faq namespace this module reads */
export type FaqCopy = { readonly categories: readonly FaqCategory[] };

export const allFaqItems = (faq: FaqCopy): FaqEntry[] => faq.categories.flatMap((category) => category.items);

function pick(faq: FaqCopy, anchors: readonly string[]): FaqEntry[] {
  const all = allFaqItems(faq);
  return anchors.map((anchor) => {
    const item = all.find((f) => f.anchor === anchor);
    if (!item) throw new Error(`FAQ question missing from the faq dictionary: ${anchor}`);
    return item;
  });
}

const GET_STARTED = "how-do-i-get-started";

/* The pricing page's questions: the "pricing" category, then how to get
   started (which /faq lists under "Getting started"). */
export function pricingQuestions(faq: FaqCopy): FaqEntry[] {
  const pricing = faq.categories.find((category) => category.id === "pricing");
  if (!pricing) throw new Error("faq dictionary has no pricing category");
  return [...pricing.items, ...pick(faq, [GET_STARTED])];
}

/* The homepage keeps the questions that decide a demo booking: what it is,
   who it is for, the difference, fit, data, price and the next step. */
const HOME_QUESTIONS = [
  "what-is-checkgrow",
  "who-is-checkgrow-for",
  "how-is-checkgrow-different-from-chatgpt-or-a-generic-ai-tool",
  "which-platforms-does-checkgrow-connect-to",
  "who-owns-the-data-and-knowledge-i-put-in",
  "can-we-self-host-checkgrow-on-our-own-infrastructure",
  "how-much-does-checkgrow-cost",
  "which-plan-is-right-for-my-team",
  GET_STARTED,
];

export function homeFaqItems(faq: FaqCopy): readonly FaqEntry[] {
  return pick(faq, HOME_QUESTIONS);
}

/* stable anchor for an English question, e.g. /faq#where-is-my-data-stored
   (the dictionary stores each question's anchor, identical in every
   language) */
export const faqAnchor = (q: string) =>
  q.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
