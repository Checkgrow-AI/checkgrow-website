"use client";

import Image from "next/image";
import { newsCategoryHref } from "@/lib/newsCategories";
import { PrivacySettingsLink } from "@/components/PrivacySettingsLink";
import { LanguageSelector } from "@/components/LanguageSelector";
import { LocalLink as Link, useLocalePath, useT } from "@/i18n/client";

export function Footer({ homePage = true }: { homePage?: boolean }) {
  const t = useT("common").footer;
  const lp = useLocalePath();
  const homeAnchor = (id: string) => (homePage ? `#${id}` : lp(`/#${id}`));
  return (
    <footer className="-mt-px bg-surface pb-10 pt-4 text-foreground">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 pt-10 md:flex-row md:items-center">
          <div>
            <Image
              src="/brand/logos/wordmark-light.svg"
              alt="Checkgrow"
              width={152}
              height={27}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{t.tagline}</p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <a href={homeAnchor("platform")} className="transition-colors duration-200 hover:text-foreground">
              {t.links.platform}
            </a>
            <a href={homeAnchor("solution")} className="transition-colors duration-200 hover:text-foreground">
              {t.links.solution}
            </a>
            <a href={homeAnchor("stories")} className="transition-colors duration-200 hover:text-foreground">
              {t.links.stories}
            </a>
            <Link href="/features" className="transition-colors duration-200 hover:text-foreground">
              {t.links.features}
            </Link>
            <Link href="/sales" className="transition-colors duration-200 hover:text-foreground">
              {t.links.sales}
            </Link>
            <Link href="/pricing" className="transition-colors duration-200 hover:text-foreground">
              {t.links.pricing}
            </Link>
            <Link href="/faq" className="transition-colors duration-200 hover:text-foreground">
              {t.links.faq}
            </Link>
            <Link href="/use-cases" className="transition-colors duration-200 hover:text-foreground">
              {t.links.useCases}
            </Link>
            <Link href={newsCategoryHref("success-stories")} className="transition-colors duration-200 hover:text-foreground">
              {t.links.successStories}
            </Link>
            <Link href="/news" className="transition-colors duration-200 hover:text-foreground">
              {t.links.news}
            </Link>
            <Link href="/book-a-demo" className="transition-colors duration-200 hover:text-foreground">
              {t.links.bookDemo}
            </Link>
            <a
              href="https://doc.checkgrow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              {t.links.documentation}
            </a>
            <a
              href="https://doc.checkgrow.com/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              {t.links.changelog}
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-6 text-xs text-muted sm:flex-row sm:items-end">
          <div className="flex flex-col gap-4">
            <LanguageSelector variant="inline" />
            <p>{t.copyright}</p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="w-full text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:w-auto">
                {t.backedBy}
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/backers/aymo-ventures.png"
                // i18n-allow: the backer's brand name, the same in every language
                alt="AYMO Ventures"
                width={120}
                height={42}
                loading="lazy"
                className="h-auto w-[104px] max-w-[120px] opacity-90"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/backers/eu.png"
                alt={t.euAlt}
                width={120}
                height={27}
                loading="lazy"
                className="h-auto w-[120px] max-w-[120px] opacity-90"
              />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href="https://ai.checkgrow.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              {t.privacyPolicy}
            </a>
            <a
              href="https://ai.checkgrow.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              {t.terms}
            </a>
            <PrivacySettingsLink label={t.privacySettings} className="transition-colors duration-200 hover:text-foreground" />
            </div>
          </div>
        </div>
        <p className="mt-8 text-[11px] leading-relaxed text-muted">{t.legal}</p>
      </div>
    </footer>
  );
}
