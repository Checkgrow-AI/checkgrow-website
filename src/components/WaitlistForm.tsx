"use client";

/* The waitlist form as a three-step story, shared by the hero and final
   CTA. Both use the dark palette; the closing form has an accent border:
     1 · work email + "Get Free Early Access"
     2 · the pill morphs into a First name / Last name double field
     3 · a personalised success card: tokens reserved, confirm the opt-in
         email at launch to validate them
   Steps cross-fade with a soft slide/blur; the success check draws
   itself. Signups still land in the local /api/waitlist store. */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { isCompanyEmail, COMPANY_EMAIL_MESSAGE } from "@/lib/freeEmailDomains";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const schema = z.object({
  email: z
    .string()
    .email("Enter a valid work email")
    .refine(isCompanyEmail, COMPANY_EMAIL_MESSAGE),
  firstName: z.string().trim().min(1, "Add your first name").max(80),
  lastName: z.string().trim().min(1, "Add your last name").max(80),
});
type FormValues = z.infer<typeof schema>;

type Step = "email" | "names" | "done";

const stepMotion = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(4px)" },
  transition: { duration: 0.32, ease: [0.2, 0, 0, 1] as const },
};

export function WaitlistForm({
  id,
  tone = "light",
}: {
  id: string;
  tone?: "light" | "ink";
}) {
  const [step, setStep] = useState<Step>("email");
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    trigger,
    getValues,
    setFocus,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  useEffect(() => {
    if (step === "names") {
      const raf = requestAnimationFrame(() => setFocus("firstName"));
      return () => cancelAnimationFrame(raf);
    }
  }, [step, setFocus]);

  const advance = async () => {
    setServerError(null);
    if (step === "email") {
      if (await trigger("email")) setStep("names");
      return;
    }
    if (step === "names") {
      if (!(await trigger(["firstName", "lastName"]))) return;
      setBusy(true);
      try {
        const res = await fetch("/api/waitlist", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(getValues()),
        });
        if (res.ok) {
          setStep("done");
          window.gtag?.("event", "generate_lead", { method: "waitlist" });
        } else setServerError("Something went wrong. Please try again.");
      } catch {
        setServerError("Something went wrong. Please try again.");
      } finally {
        setBusy(false);
      }
    }
  };

  const ink = tone === "ink";
  const firstName = getValues("firstName");
  const niceName = firstName
    ? firstName.trim().charAt(0).toUpperCase() + firstName.trim().slice(1)
    : "";

  const inputCls = `min-h-12 w-full min-w-0 rounded-full px-5 text-base outline-none focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 max-sm:ring-1 ${
    ink
      ? "bg-transparent text-foreground placeholder:text-muted max-sm:bg-raised max-sm:ring-accent/70"
      : "bg-transparent text-foreground placeholder:text-muted max-sm:bg-raised max-sm:shadow-soft max-sm:ring-control-line"
  }`;
  const buttonCls = "min-h-12 shrink-0 rounded-full bg-foreground px-7 text-base font-medium text-canvas transition-colors duration-200 hover:bg-accent disabled:opacity-60 max-sm:w-full";
  const pillCls = `sm:flex sm:items-center sm:gap-2 sm:rounded-full sm:p-1.5 ${
    ink
      ? "sm:bg-raised sm:ring-1 sm:ring-accent/70"
      : "sm:bg-raised sm:shadow-soft sm:ring-1 sm:ring-control-line"
  }`;

  if (step === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.2, 0, 0, 1] }}
        className={`w-full max-w-md rounded-card p-6 ${
          ink
            ? "bg-raised text-foreground ring-1 ring-lavender/25"
            : "bg-raised text-foreground shadow-soft ring-1 ring-line"
        }`}
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <span
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent"
            aria-hidden
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <motion.path
                d="M3.5 9.5 L7.5 13.5 L14.5 4.5"
                stroke="var(--color-canvas)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
              />
            </svg>
          </span>
          <div>
            <p className="text-base font-semibold">
              Welcome aboard{niceName ? `, ${niceName}` : ""}. You&apos;re on the
              list.
            </p>
            <p
              className={`mt-1.5 text-sm leading-relaxed ${
                "text-muted"
              }`}
            >
              Your{" "}
              <mark
                className="rounded-sm px-1 font-medium text-white"
                style={{ backgroundColor: "var(--color-brand-strong)" }}
              >
                Free access
              </mark>{" "}
              is reserved. At launch, look for our email and confirm the
              opt-in to validate it.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        advance();
      }}
      className="w-full max-w-md"
      noValidate
    >
      <div className={pillCls}>
        <AnimatePresence mode="wait" initial={false}>
          {step === "email" ? (
            <motion.div
              key="email"
              {...stepMotion}
              className="flex w-full flex-col gap-2 sm:flex-row sm:items-center"
            >
              <label htmlFor={`${id}-email`} className="sr-only">
                Work email
              </label>
              <div className="relative w-full min-w-0">
                <AnimatePresence>
                  {errors.email?.message === COMPANY_EMAIL_MESSAGE && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.96 }}
                      transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                      role="alert"
                      className="absolute bottom-full left-4 z-20 mb-3 whitespace-nowrap rounded-lg px-3.5 py-2 text-sm font-medium text-white shadow-raised"
                      style={{ backgroundColor: "var(--color-brand-strong)" }}
                    >
                      {COMPANY_EMAIL_MESSAGE}
                      <span
                        aria-hidden
                        className="absolute -bottom-1 left-6 size-2.5 rotate-45"
                        style={{ backgroundColor: "var(--color-brand-strong)" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <input
                  id={`${id}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Work email"
                  aria-invalid={!!errors.email}
                  className={inputCls}
                  {...register("email")}
                />
              </div>
              <button type="submit" className={buttonCls}>
                Get Free Early Access
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="names"
              {...stepMotion}
              className="flex w-full flex-col gap-2 sm:flex-row sm:items-center"
            >
              <div className="grid grid-cols-2 gap-2 sm:contents">
                <label htmlFor={`${id}-first`} className="sr-only">
                  First name
                </label>
                <input
                  id={`${id}-first`}
                  type="text"
                  autoComplete="given-name"
                  placeholder="First name"
                  aria-invalid={!!errors.firstName}
                  className={inputCls}
                  {...register("firstName")}
                />
                <span
                  aria-hidden
                  className={`hidden h-6 w-px shrink-0 sm:block ${ink ? "bg-lavender/30" : "bg-line"}`}
                />
                <label htmlFor={`${id}-last`} className="sr-only">
                  Last name
                </label>
                <input
                  id={`${id}-last`}
                  type="text"
                  autoComplete="family-name"
                  placeholder="Last name"
                  aria-invalid={!!errors.lastName}
                  className={inputCls}
                  {...register("lastName")}
                />
              </div>
              <button type="submit" disabled={busy} className={buttonCls}>
                {busy ? "Joining…" : "Confirm"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="waitlist-feedback mt-3 flex items-center gap-2 text-sm">
        {step === "email" &&
        errors.email &&
        errors.email.message !== COMPANY_EMAIL_MESSAGE ? (
          <p role="alert" className={"text-error"}>
            ⚠ {errors.email.message}
          </p>
        ) : step === "names" && (errors.firstName || errors.lastName) ? (
          <p role="alert" className={"text-error"}>
            ⚠ {errors.firstName?.message ?? errors.lastName?.message}
          </p>
        ) : serverError ? (
          <p role="alert" className={"text-error"}>
            ⚠ {serverError}
          </p>
        ) : step === "names" ? (
          <p className={"text-muted"}>
            Almost there: tell us who is joining.
          </p>
        ) : (
          <p className="waitlist-reassurance text-muted">
            Join now and guarantee{" "}
            <a href="#waitlist" className="inline-block">
              <mark
                className="cursor-pointer rounded-sm px-1 font-medium text-white transition-opacity duration-200 hover:opacity-85"
                style={{ backgroundColor: "var(--color-brand-strong)" }}
              >
                Free access
              </mark>
            </a>{" "}
            · No payment details · Your data stays yours
          </p>
        )}
      </div>
    </form>
  );
}
