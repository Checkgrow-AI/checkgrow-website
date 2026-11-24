"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { LocalLink as Link, useLang, useT } from "@/i18n/client";
import { fmt, plural } from "@/i18n/format";
import { ANNUAL_DISCOUNT, buildPlans, comparisonRowsOf, comparisonTotal, lowestMonthly, planPrice, type Billing } from "@/lib/pricing";
import { displayPrice, rateDateLabel, type Currency } from "@/lib/pricingCurrency";
import { usePricingCurrency } from "@/lib/usePricingCurrency";
import { CurrencySelect } from "@/components/pricing/CurrencySelect";

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

function ComparisonModal({ open, onClose, currency, rate }: { open: boolean; onClose: () => void; currency: Currency; rate: number }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const lang = useLang();
  const t = useT("pricing").comparison;
  const price = (euros: number) => displayPrice(euros, currency, rate, lang);

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
              {t.eyebrow}
            </p>
            <h2 id="pricing-comparison-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              {t.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
              {t.intro}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
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
            {t.swipe}
          </p>
          <div className="overflow-x-auto rounded-card bg-raised ring-1 ring-line">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead>
                <tr className="border-b border-line">
                  <th scope="col" className="w-[170px] px-6 py-4 text-label font-normal text-muted">
                    {t.function}
                  </th>
                  <th scope="col" className="px-6 py-4">
                    <span className="block text-sm font-semibold text-muted">{t.stack}</span>
                    <span className="mt-0.5 block text-xs font-normal text-muted">{t.stackNote}</span>
                  </th>
                  <th scope="col" className="bg-brand/15 px-6 py-4 text-foreground">
                    <span className="block text-sm font-semibold">{t.checkgrow}</span>
                    <span className="mt-0.5 block text-xs font-normal text-muted">{t.checkgrowNote}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRowsOf(t.rows).map((row) => (
                  <tr key={row.id} className="border-b border-line last:border-b-0">
                    <th scope="row" className="px-6 py-4 text-xs font-medium uppercase tracking-[0.08em] text-muted">
                      {row.cat}
                    </th>
                    <td className="px-6 py-4 align-top">
                      <p className="text-sm font-semibold">{row.tools}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{row.toolNote}</p>
                      <p className="mt-1 text-xs font-semibold text-muted">{fmt(t.perMonth, { price: price(row.monthly) })}</p>
                    </td>
                    <td className="bg-brand/10 px-6 py-4 align-top">
                      <p className="text-sm font-semibold">{row.cg}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted">{row.cgNote}</p>
                      <p className="mt-1 text-xs font-semibold text-success">{t.included}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-card bg-raised p-6 ring-1 ring-line">
              <p className="text-label text-muted">{t.fullStack}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-muted line-through decoration-muted/85 decoration-[4px]">
                {fmt(t.perMonth, { price: price(comparisonTotal) })}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {t.fullStackNote}
              </p>
            </div>
            <div className="rounded-card bg-brand-strong p-6 text-white shadow-raised">
              <p className="text-label text-white">{t.checkgrow}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">{fmt(t.from, { price: price(lowestMonthly) })}</p>
              <p className="mt-2 text-sm leading-relaxed text-white">
                {t.checkgrowBody}
              </p>
              <Link
                href="/book-a-demo"
                onClick={onClose}
                className="mt-5 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-canvas transition-colors duration-200 hover:bg-accent"
              >
                {t.bookDemo}
              </Link>
            </div>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted">
            {fmt(t.footnote, { currency })}
          </p>
        </div>
      </div>
    </dialog>
  );
}

export function Pricing({ standalone = false }: { standalone?: boolean }) {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [comparisonOpen, setComparisonOpen] = useState(false);
  const { currency, rate, snapshot, status, selectCurrency, retry } = usePricingCurrency();
  const lang = useLang();
  const t = useT("pricing");
  const plans = buildPlans(t);
  const price = (euros: number) => displayPrice(euros, currency, rate, lang);
  const Heading = standalone ? "h1" : "h2";
  const PlanHeading = standalone ? "h2" : "h3";

  return (
    <section className={standalone ? "bg-surface pb-16 pt-28 md:pb-20" : "border-t border-line bg-surface py-24 md:py-32"} id="pricing">
      <div className="wrap">
        <div className="grid items-end gap-8 xl:grid-cols-[minmax(0,1fr)_auto]">
          <Reveal className="max-w-2xl" immediate={standalone}>
            <p className="text-label flex items-center gap-2.5 text-muted">
              {t.section.eyebrow}
            </p>
            <Heading className="text-h1 mt-6 text-balance">{t.section.title}</Heading>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t.section.intro}
            </p>
            {standalone && (
              <Link href="/book-a-demo" className="mt-6 inline-flex min-h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-canvas transition-colors hover:bg-accent sm:hidden">{t.section.bookDemo}</Link>
            )}
          </Reveal>

          <Reveal delay={0.06} immediate={standalone} className="relative z-20">
            <div className="flex flex-wrap items-center gap-2" aria-label={t.section.optionsLabel}>
              <CurrencySelect value={currency} ratesReady={status === "ready"} onChange={selectCurrency} />
              <div
                className="inline-flex rounded-full bg-raised p-1.5 shadow-soft ring-1 ring-line"
                role="group"
                aria-label={t.section.billingLabel}
              >
                <button
                  type="button"
                  aria-pressed={billing === "monthly"}
                  onClick={() => setBilling("monthly")}
                  className={`min-h-11 flex-1 rounded-full px-3 text-sm font-semibold transition-all duration-200 sm:flex-none sm:px-5 ${
                    billing === "monthly"
                      ? "bg-foreground text-canvas shadow-soft"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {t.section.monthly}
                </button>
                <button
                  type="button"
                  aria-pressed={billing === "annual"}
                  onClick={() => setBilling("annual")}
                  className={`flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-3 text-sm font-semibold transition-all duration-200 sm:flex-none sm:px-5 ${
                    billing === "annual"
                      ? "bg-foreground text-canvas shadow-soft"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {t.section.yearly}
                  <span className={`shrink-0 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] ${billing === "annual" ? "bg-canvas/10 text-canvas" : "bg-brand/10 text-accent"}`}>
                    {fmt(t.section.save, { percent: ANNUAL_DISCOUNT * 100 })}
                  </span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>

        {/* One row of four. On large screens every card spans the same 8
            rows of a shared subgrid, so names, prices, buttons, specs,
            service and inclusions line up across the row. */}
        <div className="mt-12 grid items-stretch gap-4 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-[repeat(8,auto)] xl:gap-x-4 xl:gap-y-0">
          {plans.map((plan) => {
            const amount = planPrice(plan, billing);
            const featured = Boolean(plan.featured);
            return (
              <Reveal key={plan.id} className="h-full xl:row-span-8 xl:grid xl:grid-rows-subgrid" immediate={standalone}>
                <article
                  aria-labelledby={`plan-${plan.id}`}
                  className={`relative flex h-full flex-col overflow-hidden rounded-card xl:row-span-8 xl:grid xl:grid-rows-subgrid ${
                    featured
                      ? "bg-raised bg-linear-to-b from-brand/12 via-transparent to-transparent shadow-[0_0_72px_-28px_var(--color-brand)] ring-1 ring-accent/60"
                      : "bg-canvas shadow-soft ring-1 ring-line"
                  }`}
                >
                  {/* 1 · audience band */}
                  <div className={`flex min-h-14 min-w-0 items-center justify-between gap-3 border-b px-6 ${featured ? "border-brand bg-brand-strong text-white" : "border-line text-muted"}`}>
                    {/* up to two lines (the band holds them, the subgrid keeps all four aligned): longer languages, and English "multi-brand teams", are never cut off */}
                    <p className={`line-clamp-2 text-balance text-sm leading-5 ${featured ? "font-semibold" : "font-medium"}`}>{plan.audience}</p>
                  </div>

                  {/* 2 · name and promise */}
                  <div className="px-6 pt-6">
                    <div className="flex items-center justify-between gap-3">
                      <PlanHeading id={`plan-${plan.id}`} className="text-2xl font-semibold tracking-tight">{plan.name}</PlanHeading>
                      {plan.featured && <span className="shrink-0 rounded-full bg-brand/20 px-2.5 py-1 text-[11px] font-semibold text-accent ring-1 ring-accent/40">{plan.featured}</span>}
                    </div>
                    <p className="mt-2 text-sm leading-5 text-muted">{plan.description}</p>
                  </div>

                  {/* 3 · price */}
                  <div className="px-6 pt-5" aria-live="polite">
                    {amount === null ? (
                      <div className="flex items-end gap-1.5">
                        <span className="text-4xl font-semibold tracking-[-0.045em]">{t.card.custom}</span>
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-end gap-x-1.5 gap-y-1">
                        <span className={`${currency === "EUR" ? "text-4xl" : "text-3xl"} whitespace-nowrap font-semibold tabular-nums tracking-[-0.045em]`} data-plan-price>{price(amount)}</span>
                        <span className="pb-1 text-sm text-muted">{t.card.perMonth}</span>
                      </div>
                    )}
                    <p className="mt-2 text-xs text-muted">
                      {amount === null
                        ? t.card.tailored
                        : billing === "monthly"
                          ? currency === "EUR" ? t.card.billedMonthly : t.card.monthlyEstimate
                          : fmt(currency === "EUR" ? t.card.perYearVat : t.card.perYearEstimate, { price: price(amount * 12) })}
                    </p>
                  </div>

                  {/* 4 · call to action */}
                  <div className="px-6 pt-5">
                    <Link
                      href={plan.cta.href}
                      className={`inline-flex min-h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold transition-colors duration-200 ${
                        featured ? "bg-brand-strong text-white hover:bg-brand-hover" : "border border-brand text-accent hover:bg-brand-strong hover:text-white"
                      }`}
                    >
                      {plan.cta.label}
                    </Link>
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
                          <p className="mt-1 text-xs text-muted">{plural(lang, t.growthTeam.length, t.card.specialistRoles)}</p>
                          <ul role="list" className="mt-3 grid gap-2">
                            {t.growthTeam.map((m) => (
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
          {t.topUp}
        </p>

        <div id="pricing-currency-note" className="mt-3 min-h-10 text-center text-xs leading-relaxed text-muted" role="status" aria-live="polite" aria-atomic="true">
          <p>{t.notes.estimates}</p>
          {status === "loading" ? (
            <p>{t.notes.loading}</p>
          ) : status === "error" ? (
            <p>{t.notes.error} <button type="button" onClick={retry} className="inline-flex min-h-11 items-center text-accent underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent">{t.notes.retry}</button></p>
          ) : snapshot && (
            <p><a href="https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground">{t.notes.ratesLink}</a> {fmt(t.notes.ratesAfter, { date: rateDateLabel(snapshot.date, lang) })}</p>
          )}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-6 px-6 py-2 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-label text-muted">
                {t.compare.eyebrow}
              </p>
              <PlanHeading className="mt-3 text-xl font-semibold tracking-tight sm:text-2xl">
                {t.compare.title}
              </PlanHeading>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                {t.compare.body}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setComparisonOpen(true)}
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-full border border-control-line px-7 text-sm font-semibold text-foreground transition-colors duration-200 hover:border-muted hover:bg-raised lg:self-auto"
            >
              {t.compare.button}
              <svg width="13" height="13" viewBox="0 0 13 13" aria-hidden>
                <path d="M2 6.5h8M7 3l3.5 3.5L7 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </Reveal>
      </div>

      <ComparisonModal open={comparisonOpen} onClose={() => setComparisonOpen(false)} currency={currency} rate={rate} />
    </section>
  );
}
