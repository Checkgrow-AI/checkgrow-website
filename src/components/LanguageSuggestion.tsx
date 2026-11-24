"use client";

/* Suggest, never redirect (docs/i18n.md): when the browser's preferred
   supported language is not the page's, a small note offers it in that
   language. Nothing changes until the visitor clicks; the switch keeps the
   query string (utm_*, click ids) and the hash. A dismissal is remembered
   in memory for the visit only: no cookie, no storage. Not shown in the
   booking flow, where switching would interrupt a form in progress. */

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { localeInfo, localePath, locales, splitLocale, type Locale } from "@/i18n/config";
import { useLang } from "@/i18n/client";

type Copy = { suggestion: string; switchTo: string; dismiss: string };

let dismissedThisVisit = false;

function preferredLocale(): Locale | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const t = tag.toLowerCase();
    const exact = locales.find((l) => localeInfo[l].tag.toLowerCase() === t);
    if (exact) return exact;
    const base = locales.find((l) => localeInfo[l].tag.toLowerCase().split("-")[0] === t.split("-")[0]);
    if (base) return base;
  }
  return null;
}

export function LanguageSuggestion({ copy }: { copy: Record<Locale, Copy> }) {
  const lang = useLang();
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [target, setTarget] = useState<Locale | null>(null);
  const { path } = splitLocale(pathname);
  const inBookingFlow = /^\/(book-a-demo|demo-confirmation)(\/|$)/.test(path);

  useEffect(() => {
    if (dismissedThisVisit || inBookingFlow) return;
    const want = preferredLocale();
    if (!want || want === lang) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- the browser language is only known on the client
      setTarget(null);
      return;
    }
    /* never on top of the consent banner: wait for the visitor's consent
       choice (Usercentrics' consent_status), or show anyway if the CMP
       never loads (blocked) */
    let tries = 0;
    const consentDecided = () => (window.dataLayer ?? []).some((e) => e && (e as { event?: string }).event === "consent_status");
    const tick = () => {
      tries++;
      if (consentDecided() || (tries >= 10 && !(window as { __ucCmp?: unknown }).__ucCmp)) {
        window.clearInterval(iv);
        setTarget(want);
      }
    };
    const iv = window.setInterval(tick, 500);
    tick();
    return () => window.clearInterval(iv);
  }, [lang, inBookingFlow]);

  if (!target || inBookingFlow) return null;
  const c = copy[target];
  const dismiss = () => {
    dismissedThisVisit = true;
    setTarget(null);
  };

  return (
    <div
      role="region"
      aria-label={c.suggestion}
      lang={localeInfo[target].tag}
      className="fixed inset-x-3 bottom-3 z-40 mx-auto flex max-w-md items-center gap-3 rounded-card bg-surface/95 py-2.5 pl-4 pr-2 text-sm shadow-raised ring-1 ring-line backdrop-blur-md sm:inset-x-auto sm:left-4"
    >
      <p className="min-w-0 flex-1 leading-snug text-muted">{c.suggestion}</p>
      <a
        href={localePath(target, path)}
        hrefLang={localeInfo[target].tag}
        onClick={(e) => {
          e.preventDefault();
          dismissedThisVisit = true;
          router.push(localePath(target, path) + window.location.search + window.location.hash);
        }}
        className="inline-flex min-h-10 shrink-0 items-center whitespace-nowrap rounded-full bg-foreground px-4 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
      >
        {c.switchTo}
      </a>
      <button
        type="button"
        onClick={dismiss}
        aria-label={c.dismiss}
        className="flex size-10 shrink-0 items-center justify-center rounded-full text-muted transition-colors duration-200 hover:text-foreground"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
          <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
    </div>
  );
}
