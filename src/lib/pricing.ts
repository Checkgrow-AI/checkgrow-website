/* Plans and the stack comparison: ids, prices and limits for the pricing
   table, the structured data, the markdown pages and llms.txt. Their copy
   (names, descriptions, specs, CTA labels) lives in the pricing
   dictionary namespace and is merged in with buildPlans() and
   comparisonRowsOf(); the buying questions live in the faq namespace. */

import { localeInfo, type Locale } from "../i18n/config.ts";

export type Billing = "monthly" | "annual";

export type PlanId = "business" | "agency" | "growth" | "enterprise";

export type Spec = { label: string; value: string; note?: string };

export type Plan = {
  id: PlanId;
  name: string;
  audience: string;
  description: string;
  /* null = custom quote */
  monthly: number | null;
  featured?: string;
  cta: { label: string; href: "/book-a-demo" };
  ctaNote: string;
  specs: readonly [Spec, Spec, Spec, Spec];
  service: { title: string; body: string; team?: boolean };
  inheritance: string;
  includes: readonly string[];
};

/* the copy one plan takes from the dictionary */
type SpecCopy = { readonly value: string; readonly note?: string };
export type PlanCopy = {
  readonly name: string;
  readonly audience: string;
  readonly description: string;
  readonly featured?: string;
  readonly cta: string;
  readonly ctaNote: string;
  readonly specs: readonly [SpecCopy, SpecCopy, SpecCopy, SpecCopy];
  readonly service: { readonly title: string; readonly body?: string };
  readonly inheritance: string;
  readonly includes: readonly string[];
};
export type PlansCopy = {
  readonly specLabels: readonly [string, string, string, string];
  readonly plans: { readonly [K in PlanId]: PlanCopy };
};

/* Four plans in one row. Every card has the same blocks in the same order
   (audience, name, price, CTA, four specs, service, inclusions), laid on a
   shared subgrid so each block lines up across the row. */
const PLAN_DATA: readonly { id: PlanId; monthly: number | null; featured?: true; team?: true }[] = [
  { id: "business", monthly: 499 },
  { id: "agency", monthly: 997 },
  { id: "growth", monthly: 4997, featured: true, team: true },
  { id: "enterprise", monthly: null },
];

export function buildPlans(copy: PlansCopy): Plan[] {
  return PLAN_DATA.map(({ id, monthly, featured, team }) => {
    const c = copy.plans[id];
    const [a, b, d, e] = c.specs.map((spec, i) => ({ label: copy.specLabels[i], ...spec }));
    return {
      id,
      name: c.name,
      audience: c.audience,
      description: c.description,
      monthly,
      ...(featured && c.featured ? { featured: c.featured } : {}),
      cta: { label: c.cta, href: "/book-a-demo" },
      ctaNote: c.ctaNote,
      specs: [a, b, d, e],
      service: { title: c.service.title, body: c.service.body ?? "", ...(team ? { team } : {}) },
      inheritance: c.inheritance,
      includes: c.includes,
    };
  });
}

/* the lowest listed monthly price ("From €499/mo") */
export const lowestMonthly = Math.min(...PLAN_DATA.flatMap((plan) => (plan.monthly === null ? [] : [plan.monthly])));

/* The typical growth stack Checkgrow replaces: one row per function, with
   a typical monthly list price in EUR. Copy: pricing.comparison.rows. */
const COMPARISON = [
  { id: "brandKnowledge", monthly: 49 },
  { id: "aiContent", monthly: 99 },
  { id: "campaignOps", monthly: 79 },
  { id: "socialMedia", monthly: 149 },
  { id: "competitiveIntel", monthly: 199 },
  { id: "prospecting", monthly: 199 },
  { id: "conversion", monthly: 129 },
  { id: "analytics", monthly: 99 },
  { id: "tracking", monthly: 99 },
  { id: "workTracking", monthly: 59 },
  { id: "creativeDirection", monthly: 39 },
] as const;

export type ComparisonId = (typeof COMPARISON)[number]["id"];
type ComparisonRowCopy = { readonly cat: string; readonly tools: string; readonly toolNote: string; readonly cg: string; readonly cgNote: string };
export type ComparisonRow = ComparisonRowCopy & { id: ComparisonId; monthly: number };

export function comparisonRowsOf(rows: { readonly [K in ComparisonId]: ComparisonRowCopy }): ComparisonRow[] {
  return COMPARISON.map(({ id, monthly }) => ({ id, monthly, ...rows[id] }));
}

/* the typical stack's monthly total (€1,199) */
export const comparisonTotal = COMPARISON.reduce((sum, row) => sum + row.monthly, 0);

/* annual billing saves 10% */
export const ANNUAL_DISCOUNT = 0.1;

/* English keeps en-GB number formatting */
export function formatPrice(value: number, lang: Locale = "en") {
  return new Intl.NumberFormat(lang === "en" ? "en-GB" : localeInfo[lang].tag, {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function planPrice(plan: Pick<Plan, "monthly">, billing: Billing) {
  return plan.monthly === null ? null : plan.monthly * (billing === "annual" ? 1 - ANNUAL_DISCOUNT : 1);
}
