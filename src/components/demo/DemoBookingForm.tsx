"use client";

/* Talk to us (/book-a-demo): a two-step booking form.
     Step 1 · Tailor your demo: one qualification screen (main goal from a
       dropdown, monthly ad spend), then contact details.
     Step 2 · Pick a time: month calendar and slots in the visitor's
       own time zone, read live from the team calendar (/api/demo-slots).
   Every answer travels with the booking so the team arrives with the
   competitor scan, website review and AI strategy already prepared.
   Two conversions, each a dataLayer event for GTM (see lib/track.ts):
     · "Send" on the contact step posts the lead to /api/demo-lead
       (leads webhook) → lead_submitted
     · "Book my call" posts to /api/demo-request (calendar booking,
       webhook update) and moves to /demo-confirmation → demo_booked
   Campaign attribution (lib/attribution.ts cookies) rides along in
   hidden fields on the contact step. */

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { isCompanyEmail } from "@/lib/freeEmailDomains";
import {
  challengeIds,
  challengeLabel,
  DEMO_MINUTES,
  describeSpend,
  formatSpend,
  spendStops,
} from "@/lib/demo";
import { DemoIcon } from "./DemoIcons";
import { ChallengeSelect } from "./ChallengeSelect";
import { saveDemoBooking } from "@/lib/demoBooking";
import { FoundersNote } from "./FoundersNote";
import { ATTRIBUTION_FIELDS, readAttribution, type Attribution } from "@/lib/attribution";
import { newEventId, track, trackAfterConsent } from "@/lib/track";
import { isPhone } from "@/lib/phone";
import { useLang, useLocalePath, useT } from "@/i18n/client";
import { localeInfo, type Locale } from "@/i18n/config";
import { fmt } from "@/i18n/format";
import type { Dictionary } from "@/i18n/dictionaries";
import styles from "./Demo.module.css";

type FormCopy = Dictionary["demo"]["form"];

/* same rules in every language; only the messages are copy */
const contactSchema = (e: FormCopy["errors"]) =>
  z.object({
    email: z
      .string()
      .trim()
      .email(e.email)
      .refine(isCompanyEmail, e.companyEmail),
    phone: z
      .string()
      .trim()
      .min(1, e.phoneRequired)
      .refine(isPhone, e.phoneInvalid),
    firstName: z.string().trim().min(1, e.firstName).max(80),
    lastName: z.string().trim().min(1, e.lastName).max(80),
    website: z
      .string()
      .trim()
      .min(1, e.websiteRequired)
      .max(200)
      .refine(
        (v) => /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v),
        e.websiteInvalid,
      ),
  });
type Contact = z.infer<ReturnType<typeof contactSchema>>;

const questions = ["qualify", "contact"] as const;
type Question = (typeof questions)[number];
type Step = Question | "time";

const slide = {
  initial: { opacity: 0, x: 18, filter: "blur(3px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -18, filter: "blur(3px)" },
  transition: { duration: 0.28, ease: [0.2, 0, 0, 1] as const },
};

/* dates and times: English keeps en-GB ("Monday 24 November", 14:00);
   other languages use their own tag. Weekday and month names come from Intl. */
const intlTagOf = (lang: Locale) => (lang === "en" ? "en-GB" : localeInfo[lang].tag);

const timeFmt = (tag: string, tz: string) =>
  new Intl.DateTimeFormat(tag, { hour: "2-digit", minute: "2-digit", timeZone: tz });

const dayKeyDate = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12));
};

type SlotsState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; slots: string[]; at: number };

async function fetchSlots(): Promise<SlotsState> {
  try {
    const res = await fetch("/api/demo-slots", { cache: "no-store" });
    if (!res.ok) return { status: "error" };
    const data: { slots: string[] } = await res.json();
    return { status: "ready", slots: data.slots, at: Date.now() };
  } catch {
    return { status: "error" };
  }
}

const slotsStale = (state: SlotsState) =>
  state.status === "error" || (state.status === "ready" && Date.now() - state.at > 60_000);

const localDayKey = (at: Date, tz: string) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: tz,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(at);

export function DemoBookingForm() {
  const t = useT("demo").form;
  const lang = useLang();
  const lp = useLocalePath();
  const [step, setStep] = useState<Step>("qualify");
  /* one main goal (a challenge id), sent as a one-item list as before */
  const [challenge, setChallenge] = useState<string | null>(null);
  const [spendIndex, setSpendIndex] = useState(spendStops.indexOf(10_000));
  const [noAds, setNoAds] = useState(false);
  const [slot, setSlot] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<number | null>(null);
  /* the website the email last filled in: while the field still holds
     it (or is empty), it follows the email; a manual edit stops that */
  const [autoWebsite, setAutoWebsite] = useState("");
  const startedRef = useRef(false);
  const leadSent = useRef<string | null>(null);
  const leadTracked = useRef(false);
  const [attribution, setAttribution] = useState<Attribution>({ first: null, last: null });
  const tz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    [],
  );
  const [slotsState, setSlotsState] = useState<SlotsState>({ status: "loading" });
  const loadSlots = async () => {
    setSlotsState((cur) => (cur.status === "ready" ? cur : { status: "loading" }));
    setSlotsState(await fetchSlots());
  };

  const schema = useMemo(() => contactSchema(t.errors), [t.errors]);
  const {
    register,
    trigger,
    getValues,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<Contact>({ resolver: zodResolver(schema), mode: "onSubmit", reValidateMode: "onChange" });

  const qIndex = questions.indexOf(step as Question);
  const inQuestions = qIndex >= 0;

  useEffect(() => () => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
  }, []);

  /* campaign cookies are written in <head> before hydration */
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- cookies are only readable in the browser
    setAttribution(readAttribution());
  }, []);

  useEffect(() => {
    const n = step === "time" ? questions.length + 1 : questions.indexOf(step as Question) + 1;
    track("demo_form_step", { form_name: "book_a_demo", form_step: step, form_step_number: n });
  }, [step]);

  useEffect(() => {
    if (step === "contact") {
      const raf = requestAnimationFrame(() => setFocus("email"));
      return () => cancelAnimationFrame(raf);
    }
  }, [step, setFocus]);

  const go = (next: Step) => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    /* availability older than a minute is refreshed on arrival */
    if (next === "time" && slotsStale(slotsState)) {
      loadSlots();
    }
    setServerError(null);
    setStep(next);
    /* on phones the panel can sit below the fold: keep the new question in view */
    const top = panelRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const back = () => {
    if (step === "time") return go("contact");
    if (qIndex > 0) go(questions[qIndex - 1]);
  };

  const markStarted = () => {
    if (startedRef.current) return;
    startedRef.current = true;
    track("demo_form_start", { form_name: "book_a_demo" });
  };

  /* the work email usually names the company: keep its website in step */
  const syncWebsite = (raw: string) => {
    const email = raw.trim().toLowerCase();
    const domain = email.split("@")[1] ?? "";
    const next = /^([a-z0-9-]+\.)+[a-z]{2,}$/.test(domain) && isCompanyEmail(email) ? domain : "";
    const current = (getValues("website") ?? "").trim();
    if (current && current !== autoWebsite) return;
    setAutoWebsite(next);
    if (next !== current) {
      setValue("website", next, { shouldDirty: true, shouldValidate: !!next && !!errors.website });
    }
  };

  const answers = () => ({
    ...getValues(),
    challenges: challenge ? [challenge] : [],
    adSpend: noAds ? null : spendStops[spendIndex],
    noActiveAds: noAds,
    timeZone: tz,
    language: lang,
    attribution,
    pageUrl: window.location.href,
    referrer: document.referrer,
  });

  /* conversion 1: the lead reaches the leads webhook before the calendar.
     A failure never blocks the visitor: the booking step sends it again. */
  const submitContact = async () => {
    if (!(await trigger())) return;
    const payload = answers();
    const key = JSON.stringify(payload);
    if (leadSent.current !== key) {
      setBusy(true);
      const eventId = newEventId();
      try {
        const res = await fetch("/api/demo-lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...payload, eventId }),
        });
        if (res.ok) {
          leadSent.current = key;
          if (!leadTracked.current) {
            leadTracked.current = true;
            trackAfterConsent("lead_submitted", {
              form_name: "book_a_demo",
              event_id: eventId,
              lead_challenges: challenge,
              lead_ad_spend: noAds ? 0 : spendStops[spendIndex],
            });
          }
        }
      } catch {
        // offline or blocked: the booking request carries the lead again
      }
      setBusy(false);
    }
    go("time");
  };

  /* ---------- slots ---------- */
  /* fetch early so the calendar is ready by step 2 */
  useEffect(() => {
    let live = true;
    fetchSlots().then((next) => live && setSlotsState(next));
    return () => {
      live = false;
    };
  }, []);

  const slotsByLocalDay = useMemo(() => {
    const map = new Map<string, Date[]>();
    if (slotsState.status !== "ready") return map;
    for (const iso of slotsState.slots) {
      const at = new Date(iso);
      const key = localDayKey(at, tz);
      map.set(key, [...(map.get(key) ?? []), at]);
    }
    return map;
  }, [slotsState, tz]);
  const days = useMemo(() => [...slotsByLocalDay.keys()].sort(), [slotsByLocalDay]);
  const [day, setDay] = useState<string | null>(null);
  const activeDay = day && slotsByLocalDay.has(day) ? day : (days[0] ?? null);
  const [monthOffset, setMonthOffset] = useState(0);

  const confirm = async () => {
    if (!slot) return;
    setBusy(true);
    setServerError(null);
    try {
      const eventId = newEventId();
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...answers(), slot, eventId }),
      });
      if (res.ok) {
        const { email, firstName, website } = getValues();
        saveDemoBooking({ email, firstName, website, slot, timeZone: tz, eventId });
        /* a full page load, so analytics records the confirmation page */
        window.location.assign(lp("/demo-confirmation"));
        return; // keep "Booking…" showing until the page changes
      } else if (res.status === 409) {
        setSlot(null);
        setServerError(t.booking.taken);
        await loadSlots();
      } else if (res.status === 429) {
        setServerError(t.booking.tooMany);
      } else {
        setServerError(t.booking.failed);
      }
      setBusy(false);
    } catch {
      setServerError(t.booking.failed);
      setBusy(false);
    }
  };

  /* ---------- render ---------- */
  const primaryBtn =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-foreground px-7 text-base font-medium text-canvas transition-colors duration-200 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-foreground";

  const phase = inQuestions ? 1 : 2;

  return (
    <div ref={panelRef} className={styles.panel} id="book">
      {/* header: step, pitch and progress */}
      <div className="px-5 pb-2 pt-5 sm:px-7 sm:pt-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-label min-w-0 text-accent">
            {fmt(t.stepOf, { n: phase, total: 2, name: phase === 1 ? t.phases.questions : t.phases.time })}
          </p>
          <p className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm text-muted">
            <DemoIcon name="clock" size={15} />
            {phase === 1 ? t.phaseLength.questions : fmt(t.phaseLength.time, { n: DEMO_MINUTES })}
          </p>
        </div>
        {/* phones and tablets: the founders note leads the form (the left
            column, where it sits on desktop, is below the form there) */}
        {phase === 1 && <FoundersNote className="mt-4 lg:hidden" />}
        <p className={`mt-3 text-sm leading-relaxed text-muted ${phase === 1 ? "hidden lg:block" : ""}`}>
          {phase === 1 ? t.intro.questions : t.intro.time}
        </p>
        <div className="mt-4 flex gap-1.5" aria-hidden>
          {questions.map((q, i) => (
            <span
              key={q}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                !inQuestions || i <= qIndex ? "bg-brand" : "bg-line"
              }`}
            />
          ))}
          <span className="w-2" />
          <span
            className={`h-1 flex-[1.6] rounded-full transition-colors duration-300 ${
              step === "time" ? "bg-brand" : "bg-line"
            }`}
          />
        </div>
      </div>

      <div className={`px-5 py-6 sm:px-7 ${styles.body}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step} {...slide}>
            {step === "qualify" && (
              <div>
                <div className="space-y-7">
                  {/* 1 · main goal */}
                  <div>
                    <p id="demo-challenge-label" className="text-xl font-semibold tracking-tight sm:text-2xl">
                      {t.challenges.title}
                    </p>
                    <div className="mt-4">
                      <ChallengeSelect
                        value={challenge}
                        options={challengeIds.map((id) => ({ id, label: t.challenges.labels[id] }))}
                        placeholder={t.challenges.placeholder}
                        labelledBy="demo-challenge-label"
                        onChange={(id) => {
                          markStarted();
                          setChallenge(id);
                        }}
                      />
                    </div>
                  </div>

                  {/* 2 · monthly ad spend */}
                  <div>
                    <p className="text-base font-semibold">{t.spend.title}</p>
                    <div
                      className={`mt-3 rounded-card bg-raised px-5 pb-4 pt-4 ring-1 ring-line transition-opacity duration-200 ${
                        noAds ? "opacity-45" : ""
                      }`}
                    >
                      <div className="flex items-end justify-between gap-3">
                        <p className="tabular-nums" aria-live="polite">
                          <span className="block text-sm text-muted">
                            {spendIndex === 0 || spendIndex === spendStops.length - 1 ? t.spend.monthly : t.spend.around}
                          </span>
                          <span className="text-2xl font-semibold tracking-tight">{formatSpend(spendStops[spendIndex])}</span>
                          <span className="ml-1.5 text-base text-muted">{t.spend.perMonth}</span>
                        </p>
                        <div className="flex gap-1.5">
                          <button
                            type="button"
                            aria-label={t.spend.less}
                            disabled={spendIndex === 0}
                            onClick={() => {
                              markStarted();
                              setNoAds(false);
                              setSpendIndex((i) => Math.max(0, i - 1));
                            }}
                            className={styles.nudge}
                          >
                            <span aria-hidden>−</span>
                          </button>
                          <button
                            type="button"
                            aria-label={t.spend.more}
                            disabled={spendIndex === spendStops.length - 1}
                            onClick={() => {
                              markStarted();
                              setNoAds(false);
                              setSpendIndex((i) => Math.min(spendStops.length - 1, i + 1));
                            }}
                            className={styles.nudge}
                          >
                            <span aria-hidden>+</span>
                          </button>
                        </div>
                      </div>
                      <label htmlFor="demo-spend" className="sr-only">
                        {t.spend.monthly}
                      </label>
                      <input
                        id="demo-spend"
                        type="range"
                        min={0}
                        max={spendStops.length - 1}
                        step={1}
                        value={spendIndex}
                        aria-valuetext={fmt(t.spend.valueText, { amount: describeSpend(spendStops[spendIndex]) })}
                        onChange={(e) => {
                          markStarted();
                          setNoAds(false);
                          setSpendIndex(Number(e.target.value));
                        }}
                        className={styles.range}
                        style={
                          {
                            "--fill": `${(spendIndex / (spendStops.length - 1)) * 100}%`,
                          } as React.CSSProperties
                        }
                      />
                      <div className={styles.ticks} aria-hidden>
                        {[0, 10_000, 100_000, 1_000_000].map((v) => (
                          <span
                            key={v}
                            style={{ "--at": spendStops.indexOf(v) / (spendStops.length - 1) } as React.CSSProperties}
                          >
                            {formatSpend(v)}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-pressed={noAds}
                      onClick={() => {
                        markStarted();
                        setNoAds((v) => !v);
                      }}
                      className={`${styles.option} ${styles.optionWide} ${noAds ? styles.optionOn : ""} mt-2 w-full`}
                    >
                      <DemoIcon name="close" className={noAds ? "text-accent" : "text-muted"} />
                      <span className="text-left">{t.spend.noAds}</span>
                      <span className={styles.tick} aria-hidden>
                        <DemoIcon name="check" size={12} />
                      </span>
                    </button>
                  </div>
                </div>
                <Footer>
                  <span />
                  <button
                    type="button"
                    className={primaryBtn} data-qa="form-next"
                    disabled={!challenge}
                    onClick={() => go("contact")}
                  >
                    {t.continue} <DemoIcon name="arrowRight" size={16} />
                  </button>
                </Footer>
              </div>
            )}

            {step === "contact" && (
              <form
                noValidate
                onSubmit={(e) => {
                  e.preventDefault();
                  submitContact();
                }}
              >
                <QuestionHead title={t.contact.title} />
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Field label={t.contact.email} error={errors.email?.message}>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder={t.contact.emailPlaceholder}
                      aria-invalid={!!errors.email}
                      className={styles.input}
                      required
                      aria-required
                      {...register("email", { onChange: (e) => syncWebsite(e.target.value) })}
                    />
                  </Field>
                  <Field label={t.contact.phone} error={errors.phone?.message}>
                    <input
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder={t.contact.phonePlaceholder}
                      aria-invalid={!!errors.phone}
                      className={styles.input}
                      required
                      aria-required
                      {...register("phone")}
                    />
                  </Field>
                  <Field label={t.contact.firstName} error={errors.firstName?.message}>
                    <input
                      autoComplete="given-name"
                      aria-invalid={!!errors.firstName}
                      className={styles.input}
                      required
                      aria-required
                      {...register("firstName")}
                    />
                  </Field>
                  <Field label={t.contact.lastName} error={errors.lastName?.message}>
                    <input
                      autoComplete="family-name"
                      aria-invalid={!!errors.lastName}
                      className={styles.input}
                      required
                      aria-required
                      {...register("lastName")}
                    />
                  </Field>
                  <Field label={t.contact.website} error={errors.website?.message} wide>
                    <div className="relative">
                      <DemoIcon
                        name="globe"
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                      />
                      <input
                        inputMode="url"
                        autoComplete="url"
                        placeholder={t.contact.websitePlaceholder}
                        aria-invalid={!!errors.website}
                        className={`${styles.input} ${styles.inputIcon}`}
                        required
                        aria-required
                        {...register("website")}
                      />
                    </div>
                  </Field>
                </div>
                {/* campaign attribution from the cg_attr_* cookies (last touch) */}
                {ATTRIBUTION_FIELDS.map((k) => (
                  <input key={k} type="hidden" name={k} value={attribution.last?.[k] ?? ""} readOnly />
                ))}
                <p className="mt-4 text-xs leading-relaxed text-muted">
                  {t.contact.consent.before}{" "}
                  <a
                    href="https://ai.checkgrow.com/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground underline underline-offset-2 hover:text-accent"
                  >
                    {t.contact.consent.link}
                  </a>
                  {t.contact.consent.after}
                </p>
                <Footer onBack={back}>
                  <button type="submit" className={primaryBtn} data-qa="form-next" disabled={busy}>
                    {busy ? t.contact.sending : t.contact.submit} <DemoIcon name="arrowRight" size={16} />
                  </button>
                </Footer>
              </form>
            )}

            {/* the calendar step opens with an invitation to finish: book the call now */}
            {step === "time" && (
              <div className="mb-5">
                <QuestionHead title={t.time.title} />
              </div>
            )}

            {step === "time" && slotsState.status !== "ready" && (
              <div>
                {slotsState.status === "loading" ? (
                  <div className="space-y-3" role="status" aria-label={t.time.loading}>
                    <div className="h-5 w-40 animate-pulse rounded bg-raised" />
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 35 }, (_, i) => (
                        <span key={i} className="aspect-square max-h-11 animate-pulse rounded-full bg-raised" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div role="alert" className="rounded-card bg-raised p-5 ring-1 ring-line">
                    <p className="font-medium">{t.time.loadError}</p>
                    <p className="mt-1 text-sm text-muted">{t.time.loadErrorHint}</p>
                    <button type="button" onClick={loadSlots} className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline">
                      {t.time.retry}
                    </button>
                  </div>
                )}
                <Footer onBack={back}>
                  <button type="button" className={primaryBtn} data-qa="form-next" disabled>
                    {t.time.confirm}
                  </button>
                </Footer>
              </div>
            )}

            {step === "time" && slotsState.status === "ready" && (
              <TimePicker
                days={days}
                slotsByLocalDay={slotsByLocalDay}
                activeDay={activeDay}
                onDay={(d) => {
                  setDay(d);
                  setSlot(null);
                }}
                monthOffset={monthOffset}
                onMonth={setMonthOffset}
                slot={slot}
                onSlot={setSlot}
                tz={tz}
                intlTag={intlTagOf(lang)}
                t={t.time}
                summary={[
                  ...(challenge ? [challengeLabel(challenge, t.challenges.labels)] : []),
                  noAds ? t.time.noAds : fmt(t.time.spendPerMonth, { amount: describeSpend(spendStops[spendIndex]) }),
                ]}
                onEdit={() => go("qualify")}
                footer={
                  <Footer onBack={back}>
                    <button
                      type="button"
                      className={primaryBtn} data-qa="confirm-demo"
                      disabled={!slot || busy}
                      onClick={confirm}
                    >
                      {busy ? t.time.confirming : t.time.confirm}
                    </button>
                  </Footer>
                }
                error={serverError}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ---------- pieces ---------- */

/* The progress bar carries the position; the question stands alone. */
function QuestionHead({ title }: { title: string }) {
  return <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>;
}

function Footer({ children, onBack }: { children: React.ReactNode; onBack?: () => void }) {
  const back = useT("demo").form.back;
  return (
    <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full pr-3 text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          <DemoIcon name="arrowLeft" size={16} /> {back}
        </button>
      ) : null}
      {children}
    </div>
  );
}

function Field({
  label,
  error,
  wide,
  children,
}: {
  label: string;
  error?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${wide ? "col-span-2" : "col-span-2 sm:col-span-1"}`}>
      <span className="mb-1.5 block text-sm font-medium">
        {label}
        <span className="ml-0.5 text-accent" aria-hidden>
          *
        </span>
      </span>
      {children}
      {error && (
        <span role="alert" className="mt-1.5 block text-sm text-error">
          {error}
        </span>
      )}
    </label>
  );
}

function TimePicker({
  days,
  slotsByLocalDay,
  activeDay,
  onDay,
  monthOffset,
  onMonth,
  slot,
  onSlot,
  tz,
  intlTag,
  t,
  summary,
  onEdit,
  footer,
  error,
}: {
  days: string[];
  slotsByLocalDay: Map<string, Date[]>;
  activeDay: string | null;
  onDay: (d: string) => void;
  monthOffset: number;
  onMonth: (n: number) => void;
  slot: string | null;
  onSlot: (s: string) => void;
  tz: string;
  intlTag: string;
  t: FormCopy["time"];
  summary: string[];
  onEdit: () => void;
  footer: React.ReactNode;
  error: string | null;
}) {
  const first = days[0] ? dayKeyDate(days[0]) : new Date();
  const last = days.at(-1) ? dayKeyDate(days.at(-1)!) : first;
  const view = new Date(Date.UTC(first.getUTCFullYear(), first.getUTCMonth() + monthOffset, 1, 12));
  const canNext =
    view.getUTCFullYear() * 12 + view.getUTCMonth() <
    last.getUTCFullYear() * 12 + last.getUTCMonth();
  const monthLabel = new Intl.DateTimeFormat(intlTag, {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(view);

  /* Monday-first grid */
  const lead = (view.getUTCDay() + 6) % 7;
  const daysInMonth = new Date(Date.UTC(view.getUTCFullYear(), view.getUTCMonth() + 1, 0)).getUTCDate();
  const cells: (string | null)[] = [
    ...Array<null>(lead).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => {
      const d = new Date(Date.UTC(view.getUTCFullYear(), view.getUTCMonth(), i + 1));
      return d.toISOString().slice(0, 10);
    }),
  ];

  const hm = timeFmt(intlTag, tz);
  const dayFmt = new Intl.DateTimeFormat(intlTag, { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
  /* Monday-first initials (1 January 2024 was a Monday) */
  const weekdays = Array.from({ length: 7 }, (_, i) =>
    new Intl.DateTimeFormat(intlTag, { weekday: "narrow", timeZone: "UTC" }).format(new Date(Date.UTC(2024, 0, 1 + i, 12))),
  );
  const slots = activeDay ? (slotsByLocalDay.get(activeDay) ?? []) : [];
  const dayLabel = activeDay ? dayFmt.format(dayKeyDate(activeDay)) : "";
  const tzLabel = tz.replace(/_/g, " ");

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-sm text-muted">{t.tailoredFor}</span>
        {summary.map((s) => (
          <span key={s} className="rounded-full bg-raised px-2.5 py-1 text-xs text-foreground ring-1 ring-line">
            {s}
          </span>
        ))}
        <button type="button" onClick={onEdit} className="ml-0.5 text-xs text-accent underline-offset-4 hover:underline">
          {t.edit}
        </button>
      </div>

      <div className={`mt-5 ${styles.timeGrid}`}>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">{monthLabel}</p>
            <div className="flex gap-1">
              <button
                type="button"
                aria-label={t.previousMonth}
                disabled={monthOffset === 0}
                onClick={() => onMonth(monthOffset - 1)}
                className={styles.navBtn}
              >
                <DemoIcon name="chevronLeft" size={16} />
              </button>
              <button
                type="button"
                aria-label={t.nextMonth}
                disabled={!canNext}
                onClick={() => onMonth(monthOffset + 1)}
                className={styles.navBtn}
              >
                <DemoIcon name="chevronRight" size={16} />
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-muted" aria-hidden>
            {weekdays.map((d, i) => (
              <span key={i} className="py-1">
                {d}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1" role="grid" aria-label={monthLabel}>
            {cells.map((key, i) => {
              if (!key) return <span key={`b${i}`} />;
              const open = slotsByLocalDay.has(key);
              const on = key === activeDay;
              const n = Number(key.slice(8));
              return (
                <button
                  key={key}
                  type="button"
                  disabled={!open}
                  aria-pressed={on}
                  aria-label={open ? dayFmt.format(dayKeyDate(key)) : fmt(t.dayUnavailable, { day: dayFmt.format(dayKeyDate(key)) })}
                  onClick={() => onDay(key)}
                  className={`${styles.day} ${open ? styles.dayOpen : ""} ${on ? styles.dayOn : ""}`}
                >
                  {n}
                </button>
              );
            })}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
            <DemoIcon name="globe" size={14} /> {fmt(t.zone, { zone: tzLabel })}
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium">{dayLabel}</p>
          <div className={`mt-3 ${styles.slots}`} role="radiogroup" aria-label={fmt(t.timesOn, { day: dayLabel })}>
            {slots.map((at) => {
              const iso = at.toISOString();
              const on = slot === iso;
              return (
                <button
                  key={iso}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => onSlot(iso)}
                  className={`${styles.slot} ${on ? styles.slotOn : ""}`}
                >
                  {hm.format(at)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 text-sm text-error">
          {error}
        </p>
      )}
      {footer}
    </div>
  );
}
