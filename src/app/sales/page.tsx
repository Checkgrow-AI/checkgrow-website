import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Faq } from "@/components/sections/Faq";
import { SalesMockup } from "@/components/sales/SalesMockup";
import { ModuleShowcase } from "@/components/sales/ModuleShowcase";
import { SalesIcon } from "@/components/sales/SalesIcon";
import { salesCompany, salesControls, salesFaq, salesHero, salesModules, salesPillars } from "@/lib/sales";
import { testimonials } from "@/lib/testimonials";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/seo";

const title = "Checkgrow Sales | The AI Sales Brain for go-to-market teams";
const description =
  "Checkgrow Sales builds an AI Sales Brain from your own conversations: ICP-ranked lists, approved LinkedIn outreach in every rep's voice, replies sorted for you, and one history leadership can follow.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/sales", types: { "text/markdown": "/sales.md" } },
  openGraph: { title, description, type: "website", url: "/sales", siteName: "Checkgrow", locale: "en_GB", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE.url] },
};

const quotes = ["salim-sayed", "minka", "amanda-bester"].map((id) => testimonials.find((t) => t.id === id)!);
const heroScreen = salesModules[2].functions[1];

/* keep "go-to-market" on one line in headlines */
const noBreak = (text: string) =>
  text.split("go-to-market").flatMap((part, i) => (i ? [<span key={i} className="whitespace-nowrap">go-to-market</span>, part] : [part]));

const primaryCta =
  "inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full bg-foreground px-8 text-base font-medium text-canvas transition-colors duration-200 hover:bg-accent";
const secondaryCta =
  "inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full px-6 text-base text-muted ring-1 ring-line transition-colors duration-200 hover:text-foreground hover:ring-foreground/40";

export default function SalesPage() {
  const url = `${SITE_URL}/sales`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": url, url, name: title, description, inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: {
          "@type": "SoftwareApplication", name: "Checkgrow Sales", applicationCategory: "BusinessApplication",
          operatingSystem: "Web", url,
          featureList: salesModules.flatMap((m) => m.functions.map((f) => `${m.name}: ${f.title}`)),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: salesFaq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Sales", item: url },
        ],
      },
    ],
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pb-20 pt-36 md:pb-28 md:pt-44" aria-labelledby="sales-title">
        <div className="wrap">
          <Reveal className="mx-auto max-w-4xl text-center">
            <p className="text-label text-muted">{salesHero.eyebrow}</p>
            <h1 id="sales-title" className="mt-6 text-balance text-[clamp(2.75rem,7.4vw,5.75rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
              {noBreak(salesHero.title)}
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-balance text-lg leading-relaxed text-muted md:text-xl">{salesHero.intro}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/book-a-demo" className={`${primaryCta} max-sm:w-full`}>Book a demo</Link>
              <a href="#modules" className={`${secondaryCta} max-sm:w-full`}>See how it works <span aria-hidden>↓</span></a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="relative mx-auto mt-16 max-w-6xl md:mt-20">
            <div className="relative overflow-hidden rounded-card p-4 sm:p-10 md:p-14 lg:p-20">
              <Image src="/backgrounds/graphite-light.webp" alt="" aria-hidden fill sizes="(min-width: 1200px) 1152px, 100vw" className="pointer-events-none object-cover" priority />
              <div className="relative mx-auto max-w-2xl">
                <SalesMockup id={heroScreen.mockup} label={heroScreen.screen} className="shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] ring-1 ring-white/10" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <LogoMarquee />

      {/* Proof */}
      <section className="py-20 md:py-28" aria-label="What go-to-market leaders say">
        <div className="wrap grid gap-4 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.id} delay={0.06 * i} className="h-full">
              <figure className="flex h-full flex-col justify-between rounded-card bg-surface p-8 ring-1 ring-line">
                <blockquote className="text-lg leading-snug tracking-tight">“{q.quote}”</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <Image src={q.photo} alt={q.person} width={44} height={44} className="size-11 shrink-0 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium">{q.person}</p>
                    <p className="truncate text-sm text-muted">{q.role}, {q.company}</p>
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
            <p className="text-label text-muted">One brain for every rep</p>
            <h2 id="modules-title" className="text-h1 mt-6 text-balance">Find the right accounts, reach them well, and get better every week.</h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Three modules work from the same company brain your marketing uses: your ICPs, personas, products and voice. Every result flows back into it.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-10">
            {salesModules.map((m, i) => (
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
      {salesModules.map((m) => (
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
            <p className="text-label text-muted">Why Checkgrow Sales</p>
            <h2 id="difference-title" className="mt-6 text-balance text-[clamp(2.25rem,5.6vw,4.25rem)] font-semibold leading-[1] tracking-[-0.05em]">
              Most tools send messages. Checkgrow builds your sales brain.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Every conversation becomes company knowledge: a proprietary dataset of what your buyers respond to, owned by you and compounding with every rep.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-card bg-line ring-1 ring-line sm:grid-cols-2 lg:grid-cols-4">
            {salesPillars.map((p, i) => (
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
              <p className="text-label text-muted">Built for enterprise go-to-market</p>
              <h2 id="controls-title" className="text-h1 mt-6 text-balance">Scale outreach without losing control.</h2>
            </div>
            <p className="max-w-xl self-end text-lg leading-relaxed text-muted">
              Leadership sets the rules once. Every rep works inside them, every action is approved by a person, and the whole team runs on one governed system.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
            {salesControls.map((c, i) => (
              <Reveal key={c.title} delay={0.04 * i}>
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
            <p className="text-label text-muted">{salesCompany.eyebrow}</p>
            <h2 id="company-title" className="text-h1 mt-6 text-balance">{noBreak(salesCompany.title)}</h2>
            {salesCompany.body.map((p) => (
              <p key={p} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{p}</p>
            ))}
          </Reveal>
          <Reveal delay={0.08}>
            <Image
              src={salesCompany.image.src}
              alt={salesCompany.image.alt}
              width={salesCompany.image.width}
              height={salesCompany.image.height}
              sizes="(min-width: 1280px) 680px, (min-width: 1024px) 55vw, 100vw"
              className="aspect-[5/4] w-full rounded-card object-cover"
            />
          </Reveal>
        </div>
      </section>

      <Faq items={salesFaq} title="Questions from sales leaders" id="sales-questions">
        <Link href="/faq#sales" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4 transition-colors hover:text-foreground">
          All questions <span aria-hidden>→</span>
        </Link>
      </Faq>

      {/* Closing call to action */}
      <section className="bg-surface py-24 md:py-32" aria-labelledby="sales-cta-title">
        <div className="wrap">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Image src="/brand/logos/symbol-transparent-light.svg" alt="" aria-hidden width={56} height={56} className="mx-auto" />
            <h2 id="sales-cta-title" className="text-h1 mt-8 text-balance">Sales that compounds starts here.</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
              See Checkgrow Sales on your own ICP, accounts and voice in a 30-minute demo with our team.
            </p>
            <div className="mt-10 flex justify-center">
              <Link href="/book-a-demo" className={`${primaryCta} max-sm:w-full`}>Book a demo</Link>
            </div>
          </Reveal>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
