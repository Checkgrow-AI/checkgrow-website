"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";

type Billing = "monthly" | "annual";

type Plan = {
  name: string;
  eyebrow: string;
  description: string;
  monthly: number;
  featured?: boolean;
  features: Array<{
    label: string;
    note?: string;
    badge?: string;
  }>;
};

const plans: Plan[] = [
  {
    name: "Starter",
    eyebrow: "For lean growth teams",
    description: "Build your connected growth system with room for three collaborators.",
    monthly: 79,
    features: [
      { label: "750 Growth Credits every month" },
      { label: "Up to 150 unused Growth Credits carried over" },
      { label: "3 team members" },
      { label: "3 months free trial" },
      {
        label: "Sales suite included during the free trial",
        note: "Sales access ends with the trial.",
        badge: "Trial only",
      },
    ],
  },
  {
    name: "Pro",
    eyebrow: "For connected GTM teams",
    description: "Bring marketing and sales into one operating system with more capacity.",
    monthly: 149,
    featured: true,
    features: [
      { label: "1,500 Growth Credits every month" },
      { label: "Up to 300 unused Growth Credits carried over" },
      { label: "5 team members" },
      { label: "Sales suite: Companies, Sales and Leads" },
    ],
  },
  {
    name: "Business",
    eyebrow: "For companies scaling growth",
    description: "Give every team the context and capacity to operate from the same system.",
    monthly: 499,
    features: [
      { label: "5,000 Growth Credits every month" },
      { label: "Up to 1,000 unused Growth Credits carried over" },
      { label: "Unlimited team members" },
      { label: "Sales suite: Companies, Sales and Leads" },
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

function Check({ light = false }: { light?: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      aria-hidden
      className={`mt-0.5 shrink-0 ${light ? "text-accent" : "text-[#6373FF]"}`}
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
      className="m-auto max-h-[calc(100dvh-32px)] w-[calc(100%-32px)] max-w-6xl overflow-hidden rounded-xl bg-cream p-0 text-ink shadow-raised backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-h-[calc(100dvh-32px)] flex-col">
        <header className="flex shrink-0 items-start justify-between gap-6 border-b border-cream-3 bg-cream px-5 py-5 sm:px-8 sm:py-6">
          <div>
            <p className="text-label flex items-center gap-2.5 text-ink-soft">
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
            className="flex size-11 shrink-0 items-center justify-center rounded-full border border-cream-3 bg-white text-ink transition-colors duration-200 hover:border-ink/20 hover:bg-cream-2"
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
          <p className="mb-3 text-xs text-ink-soft md:hidden">
            Swipe horizontally to compare every column.
          </p>
          <div className="overflow-x-auto rounded-xl bg-white ring-1 ring-cream-3">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-cream-3">
                  <th scope="col" className="w-[170px] px-6 py-4 text-label font-normal text-ink-soft">
                    Function
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <span className="block text-sm font-semibold text-ink-soft">Typical stack</span>
                    <span className="mt-0.5 block text-xs font-normal text-ink-soft/70">11 tools · 11 logins</span>
                  </th>
                  <th scope="col" className="bg-ink px-6 py-4 text-cream">
                    <span className="block text-sm font-semibold">Checkgrow</span>
                    <span className="mt-0.5 block text-xs font-normal text-tint/80">1 platform · 1 context</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.cat} className="border-b border-cream-3 last:border-b-0">
                    <th scope="row" className="px-6 py-4 text-xs font-medium uppercase tracking-[0.08em] text-ink-soft">
                      {row.cat}
                    </th>
                    <td className="px-6 py-4 align-top">
                      <p className="text-sm font-semibold">{row.tools}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{row.toolNote}</p>
                      <p className="mt-1 text-xs font-semibold text-ink-soft">{row.price}</p>
                    </td>
                    <td className="bg-tint/30 px-6 py-4 align-top">
                      <p className="text-sm font-semibold">{row.cg}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{row.cgNote}</p>
                      <p className="mt-1 text-xs font-semibold text-[#1E7A4F]">included</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl bg-white p-6 ring-1 ring-cream-3">
              <p className="text-label text-ink-soft">Typical full stack</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-ink-soft/55 line-through decoration-ink-soft/85 decoration-[4px]">
                €1,199/mo
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Before seats, overages and the time spent stitching every tool together.
              </p>
            </div>
            <div className="rounded-xl bg-[#6373FF] p-6 text-white shadow-raised">
              <p className="text-label text-white/80">Checkgrow</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">From €79/mo</p>
              <p className="mt-2 text-sm leading-relaxed text-white/85">
                One operating system, one source of truth and one bill.
              </p>
              <a
                href="#waitlist"
                onClick={onClose}
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#6373FF] transition-colors duration-200 hover:bg-cream"
              >
                Join the waitlist
              </a>
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-ink-soft">
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
    <section className="border-t border-cream-3 bg-cream-2 py-24 md:py-32" id="pricing">
      <div className="wrap">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_auto]">
          <Reveal className="max-w-2xl">
            <p className="text-label flex items-center gap-2.5 text-ink-soft">
              <span className="dot-marker" aria-hidden />
              Pricing
            </p>
            <h2 className="text-h1 mt-6 text-balance">Choose the capacity your growth team needs.</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Every plan connects your knowledge, marketing and reporting. Move up when your team needs more credits, people and sales capacity.
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div
              className="inline-flex w-full rounded-full bg-white p-1.5 shadow-soft ring-1 ring-cream-3 sm:w-auto"
              role="group"
              aria-label="Billing frequency"
            >
              <button
                type="button"
                aria-pressed={billing === "monthly"}
                onClick={() => setBilling("monthly")}
                className={`min-h-11 flex-1 rounded-full px-5 text-sm font-semibold transition-all duration-200 sm:flex-none ${
                  billing === "monthly"
                    ? "bg-ink text-cream shadow-soft"
                    : "text-ink-soft hover:text-ink"
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
                    ? "bg-ink text-cream shadow-soft"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                Annual
                <span className={`rounded-full px-2 py-0.5 text-[10px] ${billing === "annual" ? "bg-white/15 text-white" : "bg-tint text-[#5262E8]"}`}>
                  Save 10%
                </span>
              </button>
            </div>
          </Reveal>
        </div>

        <RevealStagger className="mt-14 grid items-stretch gap-5 lg:grid-cols-3" gap={0.08}>
          {plans.map((plan, index) => {
            const displayPrice = billing === "monthly" ? plan.monthly : plan.monthly * 0.9;
            const annualTotal = plan.monthly * 12 * 0.9;
            const featured = plan.featured;

            return (
              <RevealItem key={plan.name} className="h-full">
                <article
                  className={`relative flex h-full flex-col overflow-hidden rounded-xl p-6 sm:p-7 ${
                    featured
                      ? "bg-ink text-cream shadow-raised ring-1 ring-ink lg:-translate-y-3"
                      : "bg-white text-ink shadow-soft ring-1 ring-cream-3"
                  }`}
                >
                  {featured && <div className="absolute inset-x-0 top-0 h-1 bg-[#6373FF]" aria-hidden />}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={`text-label ${featured ? "text-tint/75" : "text-ink-soft"}`}>0{index + 1} · {plan.eyebrow}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-tight">{plan.name}</h3>
                    </div>
                    {featured && (
                      <span className="shrink-0 rounded-full bg-[#6373FF] px-3 py-1 text-[11px] font-semibold text-white">
                        Most popular
                      </span>
                    )}
                  </div>

                  <p className={`mt-4 min-h-12 text-sm leading-relaxed ${featured ? "text-tint/85" : "text-ink-soft"}`}>
                    {plan.description}
                  </p>

                  <div
                    aria-live="polite"
                    className={`mt-6 border-y py-5 ${featured ? "border-white/12" : "border-cream-3"}`}
                  >
                    <div className="flex items-end gap-1.5">
                      <span className="text-4xl font-semibold tracking-[-0.045em] sm:text-5xl">
                        €{formatPrice(displayPrice)}
                      </span>
                      <span className={`pb-1 text-sm ${featured ? "text-tint/75" : "text-ink-soft"}`}>/month</span>
                    </div>
                    <p className={`mt-2 text-xs ${featured ? "text-tint/70" : "text-ink-soft"}`}>
                      {billing === "monthly" ? "Billed monthly" : `€${formatPrice(annualTotal)} billed yearly`}
                    </p>
                  </div>

                  <ul className="mt-6 flex flex-1 flex-col gap-4">
                    {plan.features.map((feature) => (
                      <li key={feature.label} className="flex items-start gap-3 text-sm leading-relaxed">
                        <Check light={featured} />
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <span>{feature.label}</span>
                            {feature.badge && (
                              <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${featured ? "bg-white/10 text-tint" : "bg-tint text-[#5262E8]"}`}>
                                {feature.badge}
                              </span>
                            )}
                          </div>
                          {feature.note && (
                            <p className={`mt-1 text-xs ${featured ? "text-tint/65" : "text-ink-soft"}`}>{feature.note}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#waitlist"
                    className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-semibold transition-colors duration-200 ${
                      featured
                        ? "bg-[#6373FF] text-white hover:bg-[#5262E8]"
                        : "border border-[#6373FF] text-[#6373FF] hover:bg-[#6373FF] hover:text-white"
                    }`}
                  >
                    Join the waitlist
                  </a>
                  <p className={`mt-3 text-center text-xs ${featured ? "text-tint/65" : "text-ink-soft"}`}>
                    No payment today
                  </p>
                </article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        <Reveal delay={0.08}>
          <div className="mt-5 overflow-hidden rounded-xl bg-ink p-6 text-cream shadow-raised sm:p-8">
            <div className="grid gap-4 border-b border-white/10 pb-6 md:grid-cols-[1fr_1.2fr] md:items-end">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Included on every plan. No credits needed.
              </h3>
              <p className="text-sm leading-relaxed text-tint/75 md:text-right">
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
                  <Check light />
                  <div>
                    <p className="text-sm font-semibold">{feature.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-tint/70">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-col gap-6 rounded-xl bg-white p-6 shadow-soft ring-1 ring-cream-3 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-label flex items-center gap-2.5 text-ink-soft">
                <span className="dot-marker" aria-hidden />
                Compare the full stack
              </p>
              <h3 className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                See everything Checkgrow replaces.
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft sm:text-base">
                Compare Checkgrow with the 11 subscriptions, logins and disconnected workflows a typical growth team manages today.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setComparisonOpen(true)}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full bg-ink px-7 text-sm font-semibold text-cream transition-colors duration-200 hover:bg-[#6373FF] lg:self-auto"
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
