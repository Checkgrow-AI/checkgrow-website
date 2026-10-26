"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Billing = "monthly" | "annual";

type Spec = { label: string; value: string; note?: string };

type Plan = {
  id: string;
  name: string;
  audience: string;
  description: string;
  /* null = custom quote */
  monthly: number | null;
  featured?: string;
  cta: { label: string; href: string; external?: boolean };
  ctaNote: string;
  specs: [Spec, Spec, Spec, Spec];
  service: { title: string; body: string; team?: boolean };
  inheritance: string;
  includes: string[];
};

const SALES_CALENDAR = "https://calendar.app.google/HhKnzyVUaZGaQ4u39";

/* Four plans in one row. Every card has the same blocks in the same order
   (audience, name, price, CTA, four specs, service, inclusions), laid on a
   shared subgrid so each block lines up across the row. */
const plans: Plan[] = [
  {
    id: "business",
    name: "Business",
    audience: "For a single brand",
    description: "The complete platform for a single brand, with room for the whole team.",
    monthly: 499,
    cta: { label: "Book a demo", href: "/book-a-demo" },
    ctaNote: "No credit card required",
    specs: [
      { label: "Brands", value: "1 brand" },
      { label: "Growth Credits", value: "5,000 / month", note: "Top up anytime" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Self-serve" },
    ],
    service: { title: "Help center & chat support", body: "Guides, tutorials and our team on chat when you need a hand." },
    inheritance: "The full platform",
    includes: [
      "Company brain in the Knowledge Center",
      "Marketing and Sales suites",
      "Creative Studio and AI Assistant",
      "Insights, funnel and smart reporting",
      "GA4, Meta, Google Ads and LinkedIn",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    audience: "For agencies and multi-brand teams",
    description: "Every brand and client in its own workspace, with our team in your corner.",
    monthly: 997,
    cta: { label: "Book a demo", href: "/book-a-demo" },
    ctaNote: "No credit card required",
    specs: [
      { label: "Brands", value: "Unlimited" },
      { label: "Growth Credits", value: "5,000 / month", note: "Shared pool · top up anytime" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Self-serve" },
    ],
    service: { title: "1 hour / month with our growth team", body: "A monthly customer-success session to review results and plan the next move." },
    inheritance: "Everything in Business, plus",
    includes: [
      "Multi-brand: unlimited client brands",
      "A separate company brain per brand",
      "Switch between client workspaces",
      "Monthly growth session with our team",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Your growth team, included",
    description: "Our specialists run your ads, reports and follow-up, alongside your team.",
    monthly: 4997,
    featured: "Done with you",
    cta: { label: "Talk to our team", href: SALES_CALENDAR, external: true },
    ctaNote: "Book a call with our team",
    specs: [
      { label: "Brands", value: "Unlimited" },
      { label: "Growth Credits", value: "5,000 / month", note: "Top up anytime" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Up to 3", note: "Extra accounts billed separately" },
    ],
    service: { title: "A dedicated growth team", body: "", team: true },
    inheritance: "Everything in Agency, plus",
    includes: [
      "Dedicated account manager",
      "Ad management: ads created, launched and optimised",
      "Performance reports for every account",
      "Customer success across your accounts",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "Built around your organisation",
    description: "Your growth platform, on your infrastructure, under your brand.",
    monthly: null,
    cta: { label: "Contact sales", href: SALES_CALENDAR, external: true },
    ctaNote: "Book a call with our team",
    specs: [
      { label: "Brands", value: "Unlimited" },
      { label: "Growth Credits", value: "Custom" },
      { label: "Team seats", value: "Unlimited" },
      { label: "Managed accounts", value: "Custom" },
    ],
    service: { title: "A custom team for your build", body: "Engineers and growth specialists dedicated to your roll-out." },
    inheritance: "Everything in Growth, plus",
    includes: [
      "Custom development and integrations",
      "White-label, branded platform",
      "Self-hosted infrastructure and data sovereignty",
      "Advanced security and compliance reviews",
      "Long-term agreements",
    ],
  },
];

/* The Growth plan's team: the roles that work on your accounts */
const growthTeam = [
  { initials: "AM", role: "Account manager" },
  { initials: "AD", role: "Ad management" },
  { initials: "CR", role: "Creative production" },
  { initials: "CS", role: "Customer success" },
];

const comparisonRows = [
  {
    cat: "Brand & knowledge",
    tools: "Notion or Frontify",
    toolNote: "Guidelines live in a doc nobody opens",
    price: "€49/mo",
    cg: "Knowledge Center + Brand Basics",
    cgNote: "A company brain built for growth, not files and chat prompts",
  },
  {
    cat: "AI content",
    tools: "Jasper or Copy.ai",
    toolNote: "Re-briefed on your business every prompt",
    price: "€99/mo",
    cg: "AI Agents (40+) + AI Assistant",
    cgNote: "Already knows your product, tone and audience",
  },
  {
    cat: "Campaign ops",
    tools: "CoSchedule or Monday",
    toolNote: "Briefs sit apart from the work itself",
    price: "€79/mo",
    cg: "Campaigns + Creatives",
    cgNote: "Brief, creative and tracking in one record",
  },
  {
    cat: "Social",
    tools: "Hootsuite or Sprout Social",
    toolNote: "Surfaces volume, not the right conversations",
    price: "€149/mo",
    cg: "Social Media + Content Monitoring",
    cgNote: "Matched against your buyer personas",
  },
  {
    cat: "Competitive intel",
    tools: "Semrush or Similarweb",
    toolNote: "Another login, another quarterly report",
    price: "€199/mo",
    cg: "Competitors",
    cgNote: "Live ad activity plus AI gap analysis",
  },
  {
    cat: "Prospecting",
    tools: "Apollo.io or ZoomInfo",
    toolNote: "Exports to a sheet that goes stale",
    price: "€199/mo",
    cg: "Companies",
    cgNote: "Fit score, buying signals, decision-makers",
  },
  {
    cat: "Conversion",
    tools: "Hotjar, VWO or a CRO agency",
    toolNote: "A PDF of findings once a quarter",
    price: "€129/mo",
    cg: "Website audit",
    cgNote: "Scored, with a ranked fix per finding",
  },
  {
    cat: "Analytics",
    tools: "Databox or Mixpanel",
    toolNote: "Dashboards you still have to interpret",
    price: "€99/mo",
    cg: "Insights + Smart Reporting",
    cgNote: "Plain-language findings, biggest drop-off flagged",
  },
  {
    cat: "Tracking",
    tools: "Cookiebot or OneTrust",
    toolNote: "Only checked after the data breaks",
    price: "€99/mo",
    cg: "Server-Side",
    cgNote: "Consent flow, tags and cookies checked live",
  },
  {
    cat: "Work tracking",
    tools: "Asana or ClickUp",
    toolNote: "Where good ideas go to be forgotten",
    price: "€59/mo",
    cg: "Tasks + Objectives",
    cgNote: "Tasks generated straight from findings and chats",
  },
  {
    cat: "Creative direction",
    tools: "Canva or Figma",
    toolNote: "Off-brand the moment a designer isn't looking",
    price: "€39/mo",
    cg: "Design System + Moodboard",
    cgNote: "On-brand mockups from your stored brand rules",
  },
];

function Check() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      aria-hidden
      className="mt-0.5 shrink-0 text-accent"
    >
      <path
        d="M2 7.8 5.4 11 13 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatPrice(value: number) {
  return new Intl.NumberFormat("en-GB", {
    minimumFractionDigits: Number.isInteger(value) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function ComparisonModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="pricing-comparison-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-6xl overflow-hidden rounded-card bg-surface p-0 text-foreground ring-1 ring-line shadow-raised backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-h-[calc(100dvh-32px)] flex-col">
        <header className="flex shrink-0 items-start justify-between gap-6 border-b border-line bg-surface px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-label flex items-center gap-2.5 text-muted">
              Full comparison
            </p>
            <h2 id="pricing-comparison-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              One platform against the typical growth stack.
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              Beyond price: one company brain built for growth instead of scattered files and prompts, a team that learns marketing as it works, and the option to self-host for data sovereignty.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close pricing comparison"
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-line bg-raised text-foreground transition-colors duration-200 hover:border-foreground/20 hover:bg-surface"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden>
              <path
                d="M2 2 12 12M12 2 2 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </header>

        <div className="overflow-y-auto overscroll-contain px-5 pb-6 pt-5 sm:px-8 sm:pb-8">
          <p className="mb-3 text-xs text-muted md:hidden">
            Swipe horizontally to compare every column.
          </p>
          <div className="overflow-x-auto rounded-card bg-raised ring-1 ring-line">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-[170px] px-6 py-4 text-label font-normal text-muted">
                    Function
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <span className="block text-sm font-semibold text-muted">Typical stack</span>
                    <span className="mt-0.5 block text-xs font-normal text-muted">11 tools · 11 logins</span>
                  </th>
                  <th scope="col" className="bg-brand/15 px-6 py-4 text-foreground">
                    <span className="block text-sm font-semibold">Checkgrow</span>
                    <span className="mt-0.5 block text-xs font-normal text-muted">1 platform · 1 context</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.cat} className="border-b border-line last:border-b-0">
                    <th scope="row" className="px-6 py-4 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                      {row.cat}
                    </th>
                    <td className="px-6 py-4 align-top">
                      <p className="text-sm font-semibold">{row.tools}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{row.toolNote}</p>
                      <p className="mt-1 text-xs font-semibold text-muted">{row.price}</p>
                    </td>
                    <td className="bg-brand/10 px-6 py-4 align-top">
                      <p className="text-sm font-semibold">{row.cg}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{row.cgNote}</p>
                      <p className="mt-1 text-xs font-semibold text-success">included</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-card bg-raised p-6 ring-1 ring-line">
              <p className="text-label text-muted">Typical full stack</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-muted line-through decoration-muted/85 decoration-[4px]">
                €1,199/mo
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Before seats, overages and the time spent stitching every tool together.
              </p>
            </div>
            <div className="rounded-card bg-brand-strong p-6 text-white shadow-raised">
              <p className="text-label text-white">Checkgrow</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">From €499/mo</p>
              <p className="mt-2 text-sm leading-relaxed text-white">
                One operating system, one source of truth and one bill.
              </p>
              <Link
                href="/book-a-demo"
                onClick={onClose}
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted">
            Third-party tools are category examples. Prices are typical list prices for comparable plans.
          </p>
        </div>
      </div>
    </dialog>
  );
}

export function Pricing() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [comparisonOpen, setComparisonOpen] = useState(false);

  return (
    <section className="border-t border-line bg-surface py-24 md:py-32" id="pricing">
      <div className="wrap">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <Reveal className="max-w-2xl">
            <p className="text-label flex items-center gap-2.5 text-muted">
              Pricing
            </p>
            <h2 className="text-h1 mt-6 text-balance">The platform, the brands, or the whole team.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Every plan runs on the same company brain. Choose one brand, every brand, or our specialists running growth with you.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="inline-flex w-full rounded-full bg-raised p-1.5 shadow-soft ring-1 ring-line sm:w-auto"
              role="group"
              aria-label="Billing frequency"
            >
              <button
                type="button"
                aria-pressed={billing === "monthly"}
                onClick={() => setBilling("monthly")}
                className={`min-h-11 flex-1 rounded-full px-5 text-sm font-semibold transition-all duration-200 sm:flex-none ${
                  billing === "monthly"
                    ? "bg-foreground text-canvas shadow-soft"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={billing === "annual"}
                onClick={() => setBilling("annual")}
                className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-all duration-200 sm:flex-none ${
                  billing === "annual"
                    ? "bg-foreground text-canvas shadow-soft"
                    : "text-muted hover:text-foreground"
                }`}
              >
                Annual
                <span className={`rounded-full px-2 py-0.5 text-[10px] ${billing === "annual" ? "bg-canvas/10 text-canvas" : "bg-brand/10 text-accent"}`}>
                  Save 10%
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* One row of four. On large screens every card spans the same 8
            rows of a shared subgrid, so names, prices, buttons, specs,
            service and inclusions line up across the row. */}
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-[repeat(8,auto)] xl:gap-x-4 xl:gap-y-0">
          {plans.map((plan) => {
            const price = plan.monthly === null ? null : billing === "monthly" ? plan.monthly : plan.monthly * 0.9;
            const featured = Boolean(plan.featured);
            const external = plan.cta.external;
            return (
              <Reveal key={plan.id} className="h-full xl:row-span-8 xl:grid xl:grid-rows-subgrid">
                <article
                  aria-labelledby={`plan-${plan.id}`}
                  className={`relative flex h-full flex-col overflow-hidden rounded-card xl:row-span-8 xl:grid xl:grid-rows-subgrid ${
                    featured
                      ? "bg-raised bg-linear-to-b from-brand/12 via-transparent to-transparent shadow-[0_0_72px_-28px_var(--color-brand)] ring-1 ring-accent/60"
                      : "bg-canvas shadow-soft ring-1 ring-line"
                  }`}
                >
                  {/* 1 · audience band */}
                  <div className={`flex min-h-14 items-center justify-between gap-3 border-b px-6 ${featured ? "border-brand bg-brand-strong text-white" : "border-line text-muted"}`}>
                    <p className={`truncate text-sm leading-5 ${featured ? "font-semibold" : "font-medium"}`}>{plan.audience}</p>
                  </div>

                  {/* 2 · name and promise */}
                  <div className="px-6 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <h3 id={`plan-${plan.id}`} className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
                      {plan.featured && <span className="shrink-0 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-accent ring-1 ring-accent/40">{plan.featured}</span>}
                    </div>
                    <p className="mt-2 text-sm leading-5 text-muted">{plan.description}</p>
                  </div>

                  {/* 3 · price */}
                  <div className="px-6 pt-5" aria-live="polite">
                    {price === null ? (
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-semibold tracking-[-0.045em]">Custom</span>
                      </div>
                    ) : (
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-semibold tracking-[-0.045em]">€{formatPrice(price)}</span>
                        <span className="pb-1 text-sm text-muted">/month</span>
                      </div>
                    )}
                    <p className="mt-2 text-xs text-muted">
                      {price === null
                        ? "Tailored agreement"
                        : billing === "monthly"
                          ? "Billed monthly, excl. VAT"
                          : `€${formatPrice((plan.monthly ?? 0) * 12 * 0.9)} billed yearly`}
                    </p>
                  </div>

                  {/* 4 · call to action */}
                  <div className="px-6 pt-5">
                    {external ? (
                      <a
                        href={plan.cta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-200 ${
                          featured ? "bg-brand-strong text-white hover:bg-brand-hover" : "border border-brand text-accent hover:bg-brand-strong hover:text-white"
                        }`}
                      >
                        {plan.cta.label}
                        <span className="sr-only"> (opens booking calendar in a new tab)</span>
                      </a>
                    ) : (
                      <Link
                        href={plan.cta.href}
                        className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-200 ${
                          featured ? "bg-brand-strong text-white hover:bg-brand-hover" : "border border-brand text-accent hover:bg-brand-strong hover:text-white"
                        }`}
                      >
                        {plan.cta.label}
                      </Link>
                    )}
                    <p className="mt-2 text-center text-xs text-muted">{plan.ctaNote}</p>
                  </div>

                  {/* 5 · the four specs, same labels on every plan */}
                  <dl className="mx-6 mt-6 divide-y divide-line border-y border-line">
                    {plan.specs.map((spec) => (
                      <div key={spec.label} className="flex h-[4.25rem] flex-col justify-center gap-0.5">
                        <dt className="text-[11px] uppercase tracking-[0.08em] text-muted">{spec.label}</dt>
                        <dd className="flex flex-wrap items-baseline gap-x-2">
                          <span className="text-sm font-semibold">{spec.value}</span>
                          {spec.note && <span className="text-[11px] leading-4 text-muted">{spec.note}</span>}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* 6 · the human service that comes with the plan */}
                  <div className="px-6 pt-6">
                    <div className={`h-full rounded-card p-4 ${featured ? "bg-brand/12 ring-1 ring-accent/30" : "bg-surface ring-1 ring-line"}`}>
                      <p className="text-sm font-semibold">{plan.service.title}</p>
                      {plan.service.team ? (
                        <>
                          <p className="mt-1 text-xs text-muted">{growthTeam.length} specialist roles on your accounts</p>
                          <ul role="list" className="mt-3 grid gap-2">
                            {growthTeam.map((m) => (
                              <li key={m.role} className="flex items-center gap-2.5 text-xs">
                                <span aria-hidden className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-strong text-[10px] font-semibold tracking-wide text-white">
                                  {m.initials}
                                </span>
                                <span className="text-foreground">{m.role}</span>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <p className="mt-1.5 text-xs leading-relaxed text-muted">{plan.service.body}</p>
                      )}
                    </div>
                  </div>

                  {/* 7 · inheritance */}
                  <p className="px-6 pt-6 text-sm font-semibold">{plan.inheritance}</p>

                  {/* 8 · inclusions */}
                  <ul role="list" className="flex-1 space-y-2.5 px-6 pb-7 pt-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-5">
                        <Check />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs text-muted">
          Need more Growth Credits? Top up anytime on any plan. Prices exclude VAT.
        </p>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-6 px-6 py-2 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-label text-muted">
                Compare the full stack
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                See everything Checkgrow replaces.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                Compare Checkgrow with the 11 subscriptions, logins and disconnected workflows a typical growth team manages today.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setComparisonOpen(true)}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-control-line px-7 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-muted hover:bg-raised lg:self-auto"
            >
              Compare our pricing
              <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden>
                <path d="M2 6.5h8M7 3l3.5 3.5L7 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <ComparisonModal open={comparisonOpen} onClose={() => setComparisonOpen(false)} />
    </section>
  );
}
