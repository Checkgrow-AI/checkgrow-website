import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Faq } from "@/components/sections/Faq";
import { SalesFilm } from "@/components/sales/SalesFilm";
import { SALES_FILM } from "@/lib/salesFilm";
import { ModuleShowcase } from "@/components/sales/ModuleShowcase";
import { SalesIcon } from "@/components/sales/SalesIcon";
import { salesQuoteIds, salesTeamImage } from "@/lib/sales";
import { SITE_URL, SOCIAL_IMAGE, jsonLdLanguage } from "@/lib/seo";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { LocalLink as Link, Messages, MockupText } from "@/i18n/client";
import { getMockupTable } from "@/i18n/dictionaries/mockupTables";
import { fmt } from "@/i18n/format";

export async function generateMetadata({ params }: PageProps<"/[lang]/sales">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).sales.meta;
  return pageMetadata(lang, {
    path: "/sales",
    title: t.title,
    description: t.description,
    markdown: "/sales.md",
    extra: {
      openGraph: { type: "website", images: [SOCIAL_IMAGE] },
      twitter: { images: [SOCIAL_IMAGE.url] },
    },
  });
}

/* structured data language: English keeps en-GB, like the rest of the site */

/* keep one phrase (English: "go-to-market") on one line in headlines */
const noBreak = (text: string, phrase: string) =>
  phrase ? text.split(phrase).flatMap((part, i) => (i ? [<span key={i} className="whitespace-nowrap">{phrase}</span>, part] : [part])) : [text];

const primaryCta =
  "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-foreground px-8 text-base font-medium text-canvas transition-colors duration-200 hover:bg-accent";
const secondaryCta =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-base text-muted ring-1 ring-line transition-colors duration-200 hover:text-foreground hover:ring-foreground/40";

export default async function SalesPage({ params }: PageProps<"/[lang]/sales">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  const t = dict.sales;
  const quotes = salesQuoteIds.map((id) => dict.testimonials.items.find((q) => q.id === id)!);
  const url = `${SITE_URL}${localePath(lang, "/sales")}`;
  const home = lang === "en" ? SITE_URL : `${SITE_URL}${localePath(lang, "/")}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": url, url, name: t.meta.title, description: t.meta.description, inLanguage: jsonLdLanguage(lang),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "SoftwareApplication", name: t.schema.product, applicationCategory: "BusinessApplication",
          operatingSystem: "Web", url,
          featureList: t.modules.flatMap((m) => m.functions.map((f) => `${m.name}: ${f.title}`)),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: t.faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      },
      {
        "@type": "VideoObject",
        "@id": `${url}#walkthrough`,
        name: t.schema.videoName,
        description: t.schema.videoDescription,
        thumbnailUrl: `${SITE_URL}${SALES_FILM.poster}`,
        contentUrl: `${SITE_URL}${SALES_FILM.src}`,
        uploadDate: SALES_FILM.uploadDate,
        duration: SALES_FILM.duration,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.schema.home, item: home },
          { "@type": "ListItem", position: 2, name: t.schema.page, item: url },
        ],
      },
    ],
  };

  return (
    <Messages messages={{ sales: t }}>
    <MockupText table={getMockupTable(lang, "sales")}>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44" aria-labelledby="sales-title">
        <div className="wrap">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-label text-muted">{t.hero.eyebrow}</p>
            <h1 id="sales-title" className="mt-6 text-balance text-[clamp(2.75rem,7.4vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              {noBreak(t.hero.title, t.nowrap)}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl">{t.hero.intro}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/book-a-demo" className={`${primaryCta} max-sm:w-full`}>{t.hero.bookDemo}</Link>
              <a href="#modules" className={`${secondaryCta} max-sm:w-full`}>{t.hero.seeHow} <span aria-hidden>↓</span></a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto mt-16 max-w-6xl md:mt-20">
            <div className="relative overflow-hidden rounded-card p-3 sm:p-8 md:p-12 lg:p-16">
              <Image src="/backgrounds/graphite-light.webp" alt="" aria-hidden fill sizes="(min-width: 1200px) 1152px, 100vw" className="pointer-events-none object-cover" priority />
              <div className="relative">
                <SalesFilm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      {/* Proof */}
      <section className="py-20 md:py-28" aria-label={t.proof.label}>
        <div className="wrap grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.id} delay={0.06 * i} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-card bg-surface p-8 ring-1 ring-line">
                <blockquote className="text-lg leading-snug tracking-tight">{fmt(t.proof.quote, { quote: q.quote })}</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Image src={q.photo} alt={q.person} width={44} height={44} className="size-11 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{q.person}</p>
                    <p className="truncate text-sm text-muted">{fmt(t.proof.byline, { role: q.role, company: q.company })}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Overview: three modules, one brain */}
      <section id="modules" className="scroll-mt-24 py-24 md:py-32" aria-labelledby="modules-title">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="text-label text-muted">{t.overview.eyebrow}</p>
            <h2 id="modules-title" className="text-h1 mt-6 text-balance">{t.overview.title}</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t.overview.intro}
            </p>
          </Reveal>
          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
            {t.modules.map((m, i) => (
              <Reveal key={m.id} delay={0.06 * i}>
                <a href={`#${m.id}`} className="group block">
                  <h3 className="text-2xl font-semibold tracking-tight transition-colors group-hover:text-accent">{m.name}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{m.intro}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The three modules */}
      {t.modules.map((m) => (
        <section key={m.id} id={m.id} className="scroll-mt-24 py-20 md:py-28" aria-labelledby={`${m.id}-title`}>
          <div className="wrap">
            <ModuleShowcase module={m} />
          </div>
        </section>
      ))}

      {/* The difference */}
      <section className="border-t border-line bg-surface py-24 md:py-32" aria-labelledby="difference-title">
        <div className="wrap">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-label text-muted">{t.difference.eyebrow}</p>
            <h2 id="difference-title" className="mt-6 text-balance text-[clamp(2.25rem,5.6vw,4.25rem)] font-semibold leading-[1] tracking-[-0.05em]">
              {t.difference.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              {t.difference.intro}
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-card bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
            {t.pillars.map((p, i) => (
              <Reveal key={p.title} delay={0.05 * i} className="h-full">
                <div className="h-full bg-surface p-8">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise controls */}
      <section className="py-24 md:py-32" aria-labelledby="controls-title">
        <div className="wrap">
          <Reveal className="grid gap-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
            <div>
              <p className="text-label text-muted">{t.governance.eyebrow}</p>
              <h2 id="controls-title" className="text-h1 mt-6 text-balance">{t.governance.title}</h2>
            </div>
            <p className="max-w-xl self-end text-lg leading-relaxed text-muted">
              {t.governance.intro}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {t.controls.map((c, i) => (
              <Reveal key={c.icon} delay={0.04 * i}>
                <h3 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
                  <SalesIcon name={c.icon} className="size-5 shrink-0 text-accent" />
                  {c.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The company */}
      <section className="border-t border-line py-24 md:py-32" aria-labelledby="company-title">
        <div className="wrap grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <Reveal>
            <p className="text-label text-muted">{t.team.eyebrow}</p>
            <h2 id="company-title" className="text-h1 mt-6 text-balance">{noBreak(t.team.title, t.nowrap)}</h2>
            {t.team.body.map((p) => (
              <p key={p} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src={salesTeamImage.src}
              alt={t.team.imageAlt}
              width={salesTeamImage.width}
              height={salesTeamImage.height}
              sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
              className="aspect-[5/4] w-full rounded-card object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Faq items={t.faq} title={t.faqTitle} id="sales-questions">
        <Link href="/faq#sales" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4 transition-colors hover:text-foreground">
          {t.allQuestions} <span aria-hidden>→</span>
        </Link>
      </Faq>

      {/* Closing call to action */}
      <section className="bg-surface py-24 md:py-32" aria-labelledby="sales-cta-title">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Image src="/brand/logos/symbol-transparent-light.svg" alt="" aria-hidden width={56} height={56} className="mx-auto" />
            <h2 id="sales-cta-title" className="text-h1 mt-8 text-balance">{t.cta.title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t.cta.body}
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/book-a-demo" className={`${primaryCta} max-sm:w-full`}>{t.cta.bookDemo}</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </MockupText>
    </Messages>
  );
}
