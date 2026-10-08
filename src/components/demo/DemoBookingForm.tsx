"use client";

/* Book a demo: a two-step booking form.
     Step 1 · Tailor your demo: five quick questions, one at a time
       (challenges → ad spend → AI team → goals → contact). Taps
       auto-advance where a single answer is enough.
     Step 2 · Pick a time: month calendar and slots in the visitor's
       own time zone, read live from the team calendar (/api/demo-slots).
   Every answer travels with the booking so the team arrives with the
   competitor scan, website review and AI strategy already prepared.
   Requests post to /api/demo-request; a confirmed booking moves to
   /demo-confirmation (its own page view, and the generate_lead
   conversion fires there). */

import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { isCompanyEmail, COMPANY_EMAIL_MESSAGE } from "@/lib/freeEmailDomains";
import {
  aiTeamOptions,
  challengeGroups,
  challengeLabel,
  DEMO_MINUTES,
  describeSpend,
  formatSpend,
  MAX_CHALLENGES,
  MAX_GOALS,
  spendStops,
  suggestGoals,
} from "@/lib/demo";
import { DemoIcon } from "./DemoIcons";
import { saveDemoBooking } from "@/lib/demoBooking";
import styles from "./Demo.module.css";

const contactSchema = z.object({
  email: z
    .string()
    .trim()
    .email("Enter a valid work email")
    .refine(isCompanyEmail, COMPANY_EMAIL_MESSAGE),
  firstName: z.string().trim().min(1, "Add your first name").max(80),
  lastName: z.string().trim().min(1, "Add your last name").max(80),
  website: z
    .string()
    .trim()
    .min(1, "Add your company website")
    .max(200)
    .refine(
      (v) => /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i.test(v),
      "Enter a website like company.com",
    ),
});
type Contact = z.infer<typeof contactSchema>;

const questions = ["challenges", "spend", "team", "goals", "contact"] as const;
type Question = (typeof questions)[number];
type Step = Question | "time";

const slide = {
  initial: { opacity: 0, x: 18, filter: "blur(3px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -18, filter: "blur(3px)" },
  transition: { duration: 0.28, ease: [0.2, 0, 0, 1] as const },
};

const timeFmt = (tz: string) =>
  new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz });

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
  const [step, setStep] = useState<Step>("challenges");
  const [challenges, setChallenges] = useState<string[]>([]);
  const [spendIndex, setSpendIndex] = useState(spendStops.indexOf(10_000));
  const [noAds, setNoAds] = useState(false);
  const [aiTeam, setAiTeam] = useState<string | null>(null);
  const [goals, setGoals] = useState<string[]>([]);
  const [goalDraft, setGoalDraft] = useState("");
  const [slot, setSlot] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [challengeHint, setChallengeHint] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<number | null>(null);

  const {
    register,
    trigger,
    getValues,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<Contact>({ resolver: zodResolver(contactSchema), mode: "onSubmit", reValidateMode: "onChange" });

  const qIndex = questions.indexOf(step as Question);
  const inQuestions = qIndex >= 0;

  useEffect(() => () => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
  }, []);

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
  const goSoon = (next: Step) => {
    if (advanceTimer.current) window.clearTimeout(advanceTimer.current);
    advanceTimer.current = window.setTimeout(() => go(next), 260);
  };
  const back = () => {
    if (step === "time") return go("contact");
    if (qIndex > 0) go(questions[qIndex - 1]);
  };

  const toggleChallenge = (id: string) => {
    setChallengeHint(false);
    setChallenges((cur) => {
      if (cur.includes(id)) return cur.filter((c) => c !== id);
      if (cur.length >= MAX_CHALLENGES) {
        setChallengeHint(true);
        return cur;
      }
      return [...cur, id];
    });
  };

  const addGoal = (goal: string) => {
    const g = goal.trim().slice(0, 80);
    if (!g || goals.length >= MAX_GOALS) return;
    if (goals.some((x) => x.toLowerCase() === g.toLowerCase())) return;
    setGoals([...goals, g]);
  };

  /* the work email usually names the company: prefill its website */
  const prefillWebsite = () => {
    const email = getValues("email")?.trim() ?? "";
    const domain = email.split("@")[1];
    if (domain && isCompanyEmail(email) && !getValues("website")) {
      setValue("website", domain.toLowerCase(), { shouldValidate: true, shouldDirty: true });
    }
  };

  const submitContact = async () => {
    if (await trigger()) go("time");
  };

  /* ---------- slots ---------- */
  const tz = useMemo(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC",
    [],
  );
  const [slotsState, setSlotsState] = useState<SlotsState>({ status: "loading" });
  const loadSlots = async () => {
    setSlotsState((cur) => (cur.status === "ready" ? cur : { status: "loading" }));
    setSlotsState(await fetchSlots());
  };
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
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...getValues(),
          challenges,
          adSpend: noAds ? null : spendStops[spendIndex],
          noActiveAds: noAds,
          aiTeam,
          goals,
          slot,
          timeZone: tz,
        }),
      });
      if (res.ok) {
        const { email, firstName, website } = getValues();
        saveDemoBooking({ email, firstName, website, slot, timeZone: tz });
        /* a full page load, so analytics records the confirmation page */
        window.location.assign("/demo-confirmation");
        return; // keep "Booking…" showing until the page changes
      } else if (res.status === 409) {
        setSlot(null);
        setServerError("That time was just taken. Please pick another one.");
        await loadSlots();
      } else if (res.status === 429) {
        setServerError("Too many attempts. Please try again in a few minutes.");
      } else {
        setServerError("We couldn't book that slot. Please try again.");
      }
      setBusy(false);
    } catch {
      setServerError("We couldn't book that slot. Please try again.");
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
            Step {phase} of 2 · {phase === 1 ? "Tailor your demo" : "Pick a time"}
          </p>
          <p className="flex shrink-0 items-center gap-1.5 whitespace-nowrap text-sm text-muted">
            <DemoIcon name="clock" size={15} />
            {phase === 1 ? "60 sec" : `${DEMO_MINUTES} min`}
          </p>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {phase === 1
            ? "Your answers set up your onboarding: we prepare your competitor scan, website review and AI strategy before the call."
            : "Choose a slot that suits you. The invite and video link follow by email."}
        </p>
        <div className="mt-4 flex gap-1.5" aria-hidden>
          {questions.map((q, i) => (
            <span
              key={q}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                !inQuestions || i <= qIndex ? "bg-brand" : "bg-raised"
              }`}
            />
          ))}
          <span className="w-2" />
          <span
            className={`h-1 flex-[1.6] rounded-full transition-colors duration-300 ${
              step === "time" ? "bg-brand" : "bg-raised"
            }`}
          />
        </div>
      </div>

      <div className={`px-5 py-6 sm:px-7 ${styles.body}`}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={step} {...slide}>
            {step === "challenges" && (
              <div>
                <QuestionHead title="What do you want to fix first?" />
                <div className="mt-5 space-y-5">
                  {challengeGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2.5 flex items-center gap-2 text-sm font-medium">
                        <span className="rounded-sm bg-tint px-1.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-brand-strong">
                          {group.tag}
                        </span>
                        {group.label}
                      </p>
                      <div className={`grid grid-cols-2 gap-2 ${styles.cardGrid}`}>
                        {group.items.map((item) => {
                          const on = challenges.includes(item.id);
                          return (
                            <button
                              key={item.id}
                              type="button"
                              aria-pressed={on}
                              onClick={() => toggleChallenge(item.id)}
                              className={`${styles.option} ${on ? styles.optionOn : ""}`}
                            >
                              <DemoIcon
                                name={item.icon}
                                className={`shrink-0 ${on ? "text-accent" : "text-muted"}`}
                              />
                              <span className="min-w-0 text-left">{item.label}</span>
                              <span className={styles.tick} aria-hidden>
                                <DemoIcon name="check" size={12} />
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
                <Footer>
                  <p
                    className={`text-sm ${challengeHint ? "text-accent" : "text-muted"}`}
                    aria-live="polite"
                  >
                    {challengeHint
                      ? `Up to ${MAX_CHALLENGES}: deselect one to swap.`
                      : `${challenges.length} of ${MAX_CHALLENGES} selected`}
                  </p>
                  <button
                    type="button"
                    className={primaryBtn}
                    disabled={!challenges.length}
                    onClick={() => go("spend")}
                  >
                    Continue <DemoIcon name="arrowRight" size={16} />
                  </button>
                </Footer>
              </div>
            )}

            {step === "spend" && (
              <div>
                <QuestionHead title="How much do you spend on ads each month?" />
                <div
                  className={`mt-6 rounded-card bg-raised p-5 ring-1 ring-line transition-opacity duration-200 ${
                    noAds ? "opacity-45" : ""
                  }`}
                >
                  <div className="flex items-end justify-between gap-3">
                    <p className="tabular-nums" aria-live="polite">
                      <span className="block text-sm text-muted">
                        {spendIndex === 0 || spendIndex === spendStops.length - 1 ? "Monthly ad spend" : "Around"}
                      </span>
                      <span className="text-h2">{formatSpend(spendStops[spendIndex])}</span>
                      <span className="ml-1.5 text-base text-muted">/ month</span>
                    </p>
                    <div className="flex gap-1.5">
                      <button
                        type="button"
                        aria-label="Less"
                        disabled={spendIndex === 0}
                        onClick={() => {
                          setNoAds(false);
                          setSpendIndex((i) => Math.max(0, i - 1));
                        }}
                        className={styles.nudge}
                      >
                        <span aria-hidden>−</span>
                      </button>
                      <button
                        type="button"
                        aria-label="More"
                        disabled={spendIndex === spendStops.length - 1}
                        onClick={() => {
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
                    Monthly ad spend
                  </label>
                  <input
                    id="demo-spend"
                    type="range"
                    min={0}
                    max={spendStops.length - 1}
                    step={1}
                    value={spendIndex}
                    aria-valuetext={`${describeSpend(spendStops[spendIndex])} per month`}
                    onChange={(e) => {
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
                    setNoAds(true);
                    goSoon("team");
                  }}
                  className={`${styles.option} ${styles.optionWide} ${noAds ? styles.optionOn : ""} mt-3 w-full`}
                >
                  <DemoIcon name="close" className={noAds ? "text-accent" : "text-muted"} />
                  <span className="text-left">No active ads yet</span>
                  <span className={styles.tick} aria-hidden>
                    <DemoIcon name="check" size={12} />
                  </span>
                </button>
                <Footer onBack={back}>
                  <button type="button" className={primaryBtn} onClick={() => go("team")}>
                    Continue <DemoIcon name="arrowRight" size={16} />
                  </button>
                </Footer>
              </div>
            )}

            {step === "team" && (
              <div>
                <QuestionHead title="How many people use AI in your company?" />
                <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3" role="radiogroup">
                  {aiTeamOptions.map((o) => {
                    const on = aiTeam === o.id;
                    return (
                      <button
                        key={o.id}
                        type="button"
                        role="radio"
                        aria-checked={on}
                        onClick={() => {
                          setAiTeam(o.id);
                          goSoon("goals");
                        }}
                        className={`${styles.option} ${styles.optionCentred} ${on ? styles.optionOn : ""}`}
                      >
                        <span>{o.label}</span>
                        <span className={styles.tick} aria-hidden>
                          <DemoIcon name="check" size={12} />
                        </span>
                      </button>
                    );
                  })}
                </div>
                <Footer onBack={back}>
                  <button
                    type="button"
                    className={primaryBtn}
                    disabled={!aiTeam}
                    onClick={() => go("goals")}
                  >
                    Continue <DemoIcon name="arrowRight" size={16} />
                  </button>
                </Footer>
              </div>
            )}

            {step === "goals" && (
              <div>
                <QuestionHead title="What are your goals for this year?" />
                <form
                  className="mt-5 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    addGoal(goalDraft);
                    setGoalDraft("");
                  }}
                >
                  <label htmlFor="demo-goal" className="sr-only">
                    Add a goal
                  </label>
                  <input
                    id="demo-goal"
                    value={goalDraft}
                    onChange={(e) => setGoalDraft(e.target.value)}
                    maxLength={80}
                    disabled={goals.length >= MAX_GOALS}
                    placeholder={
                      goals.length >= MAX_GOALS ? "Five goals added" : "e.g. Open the German market"
                    }
                    className={styles.input}
                  />
                  <button
                    type="submit"
                    aria-label="Add goal"
                    disabled={!goalDraft.trim() || goals.length >= MAX_GOALS}
                    className="flex size-12 shrink-0 items-center justify-center rounded-full bg-raised text-foreground ring-1 ring-control-line transition-colors duration-200 hover:bg-brand-strong hover:ring-brand-strong disabled:opacity-40 disabled:hover:bg-raised disabled:hover:ring-control-line"
                  >
                    <DemoIcon name="plus" size={18} />
                  </button>
                </form>

                {goals.length > 0 && (
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Your goals">
                    <AnimatePresence initial={false}>
                      {goals.map((g) => (
                        <motion.li
                          key={g}
                          layout
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.18 }}
                          className="flex items-center gap-1 rounded-full bg-brand-strong py-1.5 pl-3.5 pr-1.5 text-sm font-medium text-white"
                        >
                          {g}
                          <button
                            type="button"
                            aria-label={`Remove ${g}`}
                            onClick={() => setGoals(goals.filter((x) => x !== g))}
                            className="flex size-6 items-center justify-center rounded-full hover:bg-white/15"
                          >
                            <DemoIcon name="close" size={13} />
                          </button>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </ul>
                )}

                {goals.length < MAX_GOALS && (
                  <div className="mt-5">
                    <p className="text-label text-muted">Suggested for you</p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {suggestGoals(challenges, goals).map((g) => (
                        <button
                          key={g}
                          type="button"
                          onClick={() => addGoal(g)}
                          className="inline-flex min-h-10 items-center gap-1.5 rounded-full px-3.5 text-sm text-foreground ring-1 ring-line transition-colors duration-200 hover:bg-raised hover:ring-control-line"
                        >
                          <DemoIcon name="plus" size={14} className="text-accent" />
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <Footer onBack={back}>
                  <button type="button" className={primaryBtn} onClick={() => go("contact")}>
                    {goals.length ? "Continue" : "Skip for now"}{" "}
                    <DemoIcon name="arrowRight" size={16} />
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
                <QuestionHead title="Where should we send your invite?" />
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <Field label="Work email" error={errors.email?.message} wide>
                    <input
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      aria-invalid={!!errors.email}
                      className={styles.input}
                      required
                      aria-required
                      {...register("email", { onBlur: prefillWebsite })}
                    />
                  </Field>
                  <Field label="First name" error={errors.firstName?.message}>
                    <input
                      autoComplete="given-name"
                      aria-invalid={!!errors.firstName}
                      className={styles.input}
                      required
                      aria-required
                      {...register("firstName")}
                    />
                  </Field>
                  <Field label="Last name" error={errors.lastName?.message}>
                    <input
                      autoComplete="family-name"
                      aria-invalid={!!errors.lastName}
                      className={styles.input}
                      required
                      aria-required
                      {...register("lastName")}
                    />
                  </Field>
                  <Field label="Company website" error={errors.website?.message} wide>
                    <div className="relative">
                      <DemoIcon
                        name="globe"
                        size={18}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                      />
                      <input
                        inputMode="url"
                        autoComplete="url"
                        placeholder="company.com"
                        aria-invalid={!!errors.website}
                        className={`${styles.input} ${styles.inputIcon}`}
                        required
                      aria-required
                      {...register("website")}
                      />
                    </div>
                  </Field>
                </div>
                <Footer onBack={back}>
                  <button type="submit" className={primaryBtn}>
                    Choose a time <DemoIcon name="calendar" size={16} />
                  </button>
                </Footer>
              </form>
            )}

            {step === "time" && slotsState.status !== "ready" && (
              <div>
                {slotsState.status === "loading" ? (
                  <div className="space-y-3" role="status" aria-label="Loading available times">
                    <div className="h-5 w-40 animate-pulse rounded bg-raised" />
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: 35 }, (_, i) => (
                        <span key={i} className="aspect-square max-h-11 animate-pulse rounded-full bg-raised" />
                      ))}
                    </div>
                  </div>
                ) : (
                  <div role="alert" className="rounded-card bg-raised p-5 ring-1 ring-line">
                    <p className="font-medium">We couldn&apos;t load the calendar.</p>
                    <p className="mt-1 text-sm text-muted">Your answers are saved here. Try again in a moment.</p>
                    <button type="button" onClick={loadSlots} className="mt-4 text-sm font-medium text-accent underline-offset-4 hover:underline">
                      Try again
                    </button>
                  </div>
                )}
                <Footer onBack={back}>
                  <button type="button" className={primaryBtn} disabled>
                    Confirm demo
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
                summary={[
                  ...challenges.map(challengeLabel),
                  noAds ? "No active ads" : `${describeSpend(spendStops[spendIndex])} / month`,
                ]}
                onEdit={() => go("challenges")}
                footer={
                  <Footer onBack={back}>
                    <button
                      type="button"
                      className={primaryBtn}
                      disabled={!slot || busy}
                      onClick={confirm}
                    >
                      {busy ? "Booking…" : "Confirm demo"}
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
  return (
    <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full pr-3 text-sm text-muted transition-colors duration-200 hover:text-foreground"
        >
          <DemoIcon name="arrowLeft" size={16} /> Back
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
  const monthLabel = new Intl.DateTimeFormat("en-GB", {
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

  const fmt = timeFmt(tz);
  const slots = activeDay ? (slotsByLocalDay.get(activeDay) ?? []) : [];
  const dayLabel = activeDay
    ? new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }).format(dayKeyDate(activeDay))
    : "";
  const tzLabel = tz.replace(/_/g, " ");

  return (
    <div>
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-sm text-muted">Tailored for</span>
        {summary.map((s) => (
          <span key={s} className="rounded-full bg-raised px-2.5 py-1 text-xs text-foreground ring-1 ring-line">
            {s}
          </span>
        ))}
        <button type="button" onClick={onEdit} className="ml-0.5 text-xs text-accent underline-offset-4 hover:underline">
          Edit
        </button>
      </div>

      <div className={`mt-5 ${styles.timeGrid}`}>
        <div>
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">{monthLabel}</p>
            <div className="flex gap-1">
              <button
                type="button"
                aria-label="Previous month"
                disabled={monthOffset === 0}
                onClick={() => onMonth(monthOffset - 1)}
                className={styles.navBtn}
              >
                <DemoIcon name="chevronLeft" size={16} />
              </button>
              <button
                type="button"
                aria-label="Next month"
                disabled={!canNext}
                onClick={() => onMonth(monthOffset + 1)}
                className={styles.navBtn}
              >
                <DemoIcon name="chevronRight" size={16} />
              </button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-7 gap-1 text-center text-xs text-muted" aria-hidden>
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
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
                  aria-label={new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" }).format(dayKeyDate(key)) + (open ? "" : ", unavailable")}
                  onClick={() => onDay(key)}
                  className={`${styles.day} ${open ? styles.dayOpen : ""} ${on ? styles.dayOn : ""}`}
                >
                  {n}
                </button>
              );
            })}
          </div>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
            <DemoIcon name="globe" size={14} /> Times in your zone: {tzLabel}
          </p>
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium">{dayLabel}</p>
          <div className={`mt-3 ${styles.slots}`} role="radiogroup" aria-label={`Times on ${dayLabel}`}>
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
                  {fmt.format(at)}
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
