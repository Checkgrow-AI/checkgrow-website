"use client";

/* Language selector (docs/i18n.md). Each option is a real link to the
   same page in that language (crawlable, hreflang on the anchor). A click
   navigates client-side, which keeps the in-memory campaign attribution
   (window.__cgAttr) for visitors who have not consented to cookies, and
   carries the query string (utm_*, click ids) and the hash along, so
   attribution is identical in every language. No cookie, no storage: the
   language lives in the URL.

   variant "menu": compact button with a disclosure list (header)
   variant "inline": a row of links (footer) */

import NextLink from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type MouseEvent } from "react";
import { localeInfo, localePath, locales, splitLocale } from "@/i18n/config";
import { useLang, useT } from "@/i18n/client";

function useTargets() {
  const pathname = usePathname() || "/";
  const { path } = splitLocale(pathname);
  return locales.map((l) => ({ locale: l, href: localePath(l, path) }));
}

/* keep utm_*, click ids and the hash when switching language. Language
   links never prefetch (prefetch={false}): a page view must not download
   the same page in three other languages. */
function useSwitch() {
  const router = useRouter();
  return (e: MouseEvent<HTMLAnchorElement>, href: string, after?: () => void) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return; // new tab: plain link
    e.preventDefault();
    after?.();
    router.push(href + window.location.search + window.location.hash);
  };
}

function Globe({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function LanguageSelector({ variant = "menu", compact = false }: { variant?: "menu" | "inline"; compact?: boolean }) {
  const lang = useLang();
  const t = useT("common").language;
  const targets = useTargets();
  const go = useSwitch();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (variant === "inline") {
    return (
      <nav aria-label={t.label} className="flex flex-wrap items-center gap-x-5 gap-y-2">
        <Globe size={14} />
        {targets.map(({ locale, href }) => (
          <NextLink
            key={locale}
            href={href}
            hrefLang={localeInfo[locale].tag}
            prefetch={false}
            lang={localeInfo[locale].tag}
            aria-current={locale === lang ? "true" : undefined}
            onClick={(e) => go(e, href)}
            className="transition-colors duration-200 hover:text-foreground aria-[current=true]:text-foreground"
          >
            {localeInfo[locale].name}
          </NextLink>
        ))}
      </nav>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        aria-label={`${t.choose}: ${localeInfo[lang].name}`}
        onClick={() => setOpen((v) => !v)}
        className={`flex min-h-11 items-center gap-1.5 rounded-full text-sm text-muted transition-colors duration-200 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6373FF] ${compact ? "px-2" : "px-3"} ${open ? "text-foreground" : ""}`}
      >
        <Globe />
        <span className="font-medium tabular-nums">{localeInfo[lang].short}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          <path d="M2 3.5 5 6.5 8 3.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <ul
        id={listId}
        hidden={!open}
        className="absolute right-0 top-full z-50 mt-2 min-w-52 overflow-hidden rounded-card bg-surface p-1.5 shadow-raised ring-1 ring-line"
      >
        {targets.map(({ locale, href }) => {
          const current = locale === lang;
          return (
            <li key={locale}>
              <NextLink
                href={href}
                hrefLang={localeInfo[locale].tag}
                prefetch={false}
                lang={localeInfo[locale].tag}
                aria-current={current ? "true" : undefined}
                onClick={(e) => go(e, href, () => setOpen(false))}
                className="flex min-h-11 items-center justify-between gap-4 rounded-[10px] px-3 text-sm text-foreground transition-colors duration-150 hover:bg-raised focus-visible:bg-raised focus-visible:outline-none"
              >
                <span>{localeInfo[locale].name}</span>
                {current ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden className="text-accent">
                    <path d="M5 12.5 10 17 19 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  <span className="text-xs text-muted">{localeInfo[locale].short}</span>
                )}
              </NextLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

