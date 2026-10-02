import Image from "next/image";
import Link from "next/link";
import { PrivacySettingsLink } from "@/components/PrivacySettingsLink";

export function Footer({ homePage = true }: { homePage?: boolean }) {
  const homeAnchor = (id: string) => `${homePage ? "" : "/"}#${id}`;
  return (
    <footer className="-mt-px bg-surface pb-10 pt-4 text-foreground">
      <div className="wrap">
        <div className="flex flex-col justify-between gap-8 border-t border-line pt-10 md:flex-row md:items-center">
          <div>
            <Image
              src="/brand/logos/wordmark-light.svg"
              alt="Checkgrow"
              width={152}
              height={27}
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              AI Native Growth Marketing. One system where knowledge,
              research, execution and measurement connect and compound.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted">
            <a href={homeAnchor("platform")} className="transition-colors duration-200 hover:text-foreground">
              Platform
            </a>
            <a href={homeAnchor("solution")} className="transition-colors duration-200 hover:text-foreground">
              Solution
            </a>
            <a href={homeAnchor("stories")} className="transition-colors duration-200 hover:text-foreground">
              Real stories
            </a>
            <Link href="/features" className="transition-colors duration-200 hover:text-foreground">
              Features
            </Link>
            <a href={homeAnchor("pricing")} className="transition-colors duration-200 hover:text-foreground">
              Pricing
            </a>
            <a href={homeAnchor("faq")} className="transition-colors duration-200 hover:text-foreground">
              FAQ
            </a>
            <Link href="/news" className="transition-colors duration-200 hover:text-foreground">
              News
            </Link>
            <a
              href="mailto:bruno@checkgrow.com"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Contact
            </a>
            <a
              href="https://doc.checkgrow.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Documentation
            </a>
            <a
              href="https://doc.checkgrow.com/changelog"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Changelog
            </a>
          </nav>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-6 text-xs text-muted sm:flex-row sm:items-end">
          <p>© Copyright Checkgrow · checkgrow.com</p>
          <div className="flex flex-col items-start gap-4 sm:items-end">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <span className="w-full text-[10px] font-semibold uppercase tracking-[0.14em] text-muted sm:w-auto">
                Backed by
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/backers/aymo-ventures.png"
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
                alt="Co-funded by the European Union"
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
              Privacy Policy
            </a>
            <a
              href="https://ai.checkgrow.com/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-foreground"
            >
              Terms of Service
            </a>
            <PrivacySettingsLink className="transition-colors duration-200 hover:text-foreground" />
            </div>
          </div>
        </div>
        <p className="mt-8 text-[11px] leading-relaxed text-muted">
          Checkgrow d.o.o., registered in Zagreb, Croatia, VAT ID:
          HR16006061302, operates in accordance with applicable Croatian and
          European Union regulations. We do not collect, process, or store any
          personal or business data without explicit user consent or a lawful
          basis as defined under the General Data Protection Regulation
          (GDPR). All integrations and authentications are handled securely
          through authorised providers, and we do not store passwords or
          access third-party accounts without proper permission. All rights,
          obligations, data usage terms, payment conditions, and compliance
          details are fully outlined in our Terms and Conditions and Privacy
          Policy. By using the Checkgrow platform, you acknowledge and agree
          to these policies.
        </p>
      </div>
    </footer>
  );
}
