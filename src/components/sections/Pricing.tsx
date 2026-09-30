"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";

type Billing = "monthly" | "annual";

type Plan = {
  name: string;
  eyebrow: string;
  description: string;
  monthly: number;
  featured?: boolean;
  inheritance: string;
  suite?: {
    name: string;
    items: string[];
    note?: string;
  };
  included?: string[];
  trialSales?: boolean;
  features: Array<{
    label: string;
    note?: string;
  }>;
};

const plans: Plan[] = [
  {
    name: "Starter",
    eyebrow: "For lean teams looking to learn growth",
    description: "Build your growth system with room for three collaborators.",
    monthly: 79,
    inheritance: "Included in Starter",
    suite: {
      name: "Marketing suite",
      items: ["Social Media", "Influencers", "Campaigns", "Insights"],
    },
    trialSales: true,
    features: [
      { label: "750 Growth Credits / month" },
      { label: "Unused credits carry over", note: "Up to 150 Growth Credits" },
      { label: "3 team members" },
      { label: "1 brand" },
    ],
  },
  {
    name: "Pro",
    eyebrow: "For connected GTM teams",
    description: "Connect marketing and sales in one growth operating system.",
    monthly: 149,
    featured: true,
    inheritance: "Everything from Starter +",
    suite: {
      name: "Sales suite",
      items: ["Track Companies", "LinkedIn Outreach", "UTM Leads"],
      note: "Marketing suite included. Sales access continues after your trial.",
    },
    features: [
      { label: "1,500 Growth Credits / month" },
      { label: "Unused credits carry over", note: "Up to 300 Growth Credits" },
      { label: "5 team members" },
      { label: "1 brand" },
    ],
  },
  {
    name: "Business",
    eyebrow: "For companies scaling growth",
    description: "Scale your growth across brands, with space for every team.",
    monthly: 499,
    inheritance: "Everything from all plans +",
    included: ["Marketing suite", "Sales suite", "All features included"],
    features: [
      { label: "5,000 Growth Credits / month" },
      { label: "20% credit carry-over", note: "Up to 1,000 unused Growth Credits" },
      { label: "Unlimited team members" },
      { label: "3 brands" },
    ],
  },
];

const sharedFeatures = [
  {
    title: "Leads inbox & management",
    description: "View and organise every imported lead.",
  },
  {
    title: "Insights reporting",
    description: "Dashboards, GA and Meta reports, conversion events.",
  },
  {
    title: "Integrations",
    description: "Connect GA, Meta, Google Ads and more.",
  },
  {
    title: "Team & permissions",
    description: "Roles, feature access and company switching.",
  },
  {
    title: "Reports & exports",
    description: "Read every generated report and export your data.",
  },
];

const comparisonRows = [
  {
    cat: "Brand & knowledge",
    tools: "Notion or Frontify",
    toolNote: "Guidelines live in a doc nobody opens",
    price: "€49/mo",
    cg: "Knowledge Center + Brand Basics",
    cgNote: "Read automatically by every AI output",
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

function CornerDownRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden className="mt-0.5 shrink-0 text-accent">
      <path d="M3 2v5a2 2 0 0 0 2 2h7M9 6l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-6xl overflow-hidden rounded-xl bg-surface p-0 text-foreground ring-1 ring-line shadow-raised backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-h-[calc(100dvh-32px)] flex-col">
        <header className="flex shrink-0 items-start justify-between gap-6 border-b border-line bg-surface px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-label flex items-center gap-2.5 text-muted">
              <span className="dot-marker" aria-hidden />
              Full comparison
            </p>
            <h2 id="pricing-comparison-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              One platform against the typical growth stack.
            </h2>
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
          <div className="overflow-x-auto rounded-xl bg-raised ring-1 ring-line">
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
            <div className="rounded-xl bg-raised p-6 ring-1 ring-line">
              <p className="text-label text-muted">Typical full stack</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-muted line-through decoration-muted/85 decoration-[4px]">
                €1,199/mo
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Before seats, overages and the time spent stitching every tool together.
              </p>
            </div>
            <div className="rounded-xl bg-brand-strong p-6 text-white shadow-raised">
              <p className="text-label text-white">Checkgrow</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">From €79/mo</p>
              <p className="mt-2 text-sm leading-relaxed text-white">
                One operating system, one source of truth and one bill.
              </p>
              <a
                href="#waitlist"
                onClick={onClose}
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent"
              >
                Get Free Early Access
              </a>
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
              <span className="dot-marker" aria-hidden />
              Pricing
            </p>
            <h2 className="text-h1 mt-6 text-balance">Choose the capacity your growth team needs.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              Every plan connects your knowledge, marketing and reporting. Move up when your team needs more credits, people and sales capacity.
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

        {/* Reveal each card independently: the stacked mobile grid can be
            taller than the viewport's intersection threshold. */}
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((plan) => {
            const displayPrice = billing === "monthly" ? plan.monthly : plan.monthly * 0.9;
            const annualTotal = plan.monthly * 12 * 0.9;
            const featured = plan.featured;

            return (
              <Reveal key={plan.name} className="h-full">
                <article
                  aria-labelledby={`plan-${plan.name.toLowerCase()}`}
                  className={`relative flex h-full flex-col overflow-hidden rounded-xl ${
                    featured
                      ? "bg-raised bg-linear-to-br from-brand/10 via-transparent to-brand/5 text-foreground shadow-[0_0_64px_-24px_var(--color-brand)] ring-1 ring-accent/60"
                      : "bg-surface text-foreground shadow-soft ring-1 ring-line"
                  }`}
                >
                  <div className={`flex min-h-16 items-center border-b px-6 py-2 ${featured ? "border-brand bg-brand-strong text-white" : "border-line text-muted"}`}>
                    <p className={`text-sm leading-5 ${featured ? "font-semibold" : "font-medium"}`}>
                      {featured ? "Best to start and scale" : plan.eyebrow}
                    </p>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 id={`plan-${plan.name.toLowerCase()}`} className="text-2xl font-semibold tracking-tight">{plan.name}</h3>
                    <p className="mt-2 text-sm leading-5 text-muted lg:min-h-10">
                      {plan.description}
                    </p>

                    <div
                      aria-live="polite"
                      className="mt-4"
                    >
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                          €{formatPrice(displayPrice)}
                        </span>
                        <span className="pb-1 text-sm text-muted">/month</span>
                      </div>
                      <p className="mt-2 text-xs text-muted">
                        {billing === "monthly" ? "Billed monthly" : `€${formatPrice(annualTotal)} billed yearly`}
                      </p>
                    </div>

                    <a
                      href="#waitlist"
                      className={`mt-5 inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-colors duration-200 ${
                        featured
                          ? "bg-brand-strong text-white hover:bg-brand-hover"
                          : "border border-brand text-accent hover:bg-brand-strong hover:text-white"
                      }`}
                    >
                      Get Free Early Access
                    </a>
                    <div className="mt-2 text-center text-xs leading-relaxed">
                      <p className="font-medium text-foreground">3 months free, guaranteed</p>
                      <p className="mt-0.5 text-muted">No credit card required</p>
                    </div>

                    <ul role="list" className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                      {plan.features.map((feature) => (
                        <li key={feature.label} className="flex items-start gap-3 text-sm leading-relaxed">
                          <Check />
                          <div>
                            <span>{feature.label}</span>
                            {feature.note && (
                              <p className="mt-1 text-xs text-muted">{feature.note}</p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex-1">
                      <p className="text-sm font-semibold text-foreground">{plan.inheritance}</p>
                      {plan.suite && <ul role="list" className="mt-3">
                        <li>
                          <div className="flex items-start gap-3 text-sm font-semibold">
                            <Check />
                            {plan.suite.name}
                          </div>
                          <ul role="list" className="mt-2 space-y-1.5 text-sm leading-5 text-muted">
                            {plan.suite.items.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <CornerDownRight />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {plan.suite.note && <p className="mt-3 text-xs leading-relaxed text-muted">{plan.suite.note}</p>}
                        </li>
                      </ul>}
                      {plan.included && (
                        <ul role="list" className="mt-3 space-y-2.5">
                          {plan.included.map((item) => (
                            <li key={item} className="flex items-start gap-3 text-sm leading-5">
                              <Check />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {plan.trialSales && (
                        <p className="mt-3 text-xs leading-relaxed text-muted">
                          <span className="font-semibold text-accent">Plus Sales suite during your free trial.</span>{" "}
                          Sales access ends when the trial finishes.
                        </p>
                      )}
                    </div>

                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.08}>
          <div className="mt-5 overflow-hidden rounded-xl bg-raised p-6 text-foreground ring-1 ring-line shadow-soft sm:p-8">
            <div className="grid gap-4 border-b border-white/10 pb-6 md:grid-cols-[1fr_1.2fr] md:items-end">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Included on every plan. No credits needed.
              </h3>
              <p className="text-sm leading-relaxed text-muted md:text-right">
                Credits are only spent when an action calls a paid AI or data provider. Reading and managing your existing information never costs Growth Credits.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3">
              {sharedFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className={`flex gap-3 border-white/10 py-5 md:px-5 ${
                    index > 0 ? "border-t" : ""
                  } ${index % 2 === 1 ? "md:border-l" : ""} ${index > 1 ? "md:border-t" : ""} ${
                    index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"
                  } ${index > 2 ? "lg:border-t" : "lg:border-t-0"}`}
                >
                  <Check />
                  <div>
                    <p className="text-sm font-semibold">{feature.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <article aria-labelledby="enterprise-pricing-title" className="mt-5 flex flex-col gap-8 rounded-xl bg-canvas p-6 shadow-raised ring-1 ring-line sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-label text-accent">Enterprise</p>
              <h3 id="enterprise-pricing-title" className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Your growth platform. Your infrastructure.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted">
                Run Checkgrow’s AI marketing and growth platform in your own space, on self-hosted private infrastructure.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 lg:items-center">
              <a
                href="https://calendar.app.google/HhKnzyVUaZGaQ4u39"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-foreground px-7 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-brand-strong hover:text-white"
              >
                Contact sales
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M3 11 11 3M3 3h8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="sr-only"> (opens booking calendar in a new tab)</span>
              </a>
              <p className="text-center text-xs text-muted">Book a call with our team</p>
            </div>
          </article>
        </Reveal>

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
