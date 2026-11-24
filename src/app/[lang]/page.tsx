import { Nav } from "@/components/Nav";
import { MobileScrollRail } from "@/components/MobileScrollRail";
import { HeroV2 } from "@/components/sections/HeroV2";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Credibility } from "@/components/sections/Credibility";
import { PlatformFilm } from "@/components/sections/PlatformFilm";
import { Problem } from "@/components/sections/Problem";
import { Shift } from "@/components/sections/Shift";
import { Difference } from "@/components/sections/Difference";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { UseCases } from "@/components/sections/UseCases";
import { Roles } from "@/components/sections/Roles";
import { Pricing } from "@/components/sections/Pricing";
import { Integrations } from "@/components/sections/Integrations";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { softwareJsonLd, faqJsonLd, videosJsonLd } from "@/lib/seo";
import { homeFaqItems } from "@/lib/faq";
import { LocalLink as Link, Messages } from "@/i18n/client";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";

/* The homepage's metadata is the root layout's (generateMetadata in
   app/[lang]/layout.tsx, path "/"). */
export default async function Home({ params }: PageProps<"/[lang]">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  /* the FAQ renders these, and its FAQPage JSON-LD is built from them */
  const faqItems = homeFaqItems(dict.faq);
  return (
    /* client sections read `home` (hero, film, problem, shift, scroll
       rail) and `pricing` (the Pricing section); the real stories get
       their copy and the testimonials as props */
    <Messages messages={{ home: dict.home, pricing: dict.pricing }}>
      <Nav overLight />
      <MobileScrollRail />
      <main id="top">
        <HeroV2 />
        <LogoMarquee />
        <Credibility />
        <PlatformFilm />
        <Problem />
        <Shift />
        <Difference />
        <CaseStudies copy={dict.home.caseStudies} items={dict.testimonials.items} />
        <UseCases />
        <Integrations />
        <Roles />
        <Pricing />
        <Faq items={faqItems} title={dict.faq.homeTitle}>
          <Link href="/faq" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4 transition-colors hover:text-foreground">
            {dict.home.faqLink} <span aria-hidden>→</span>
          </Link>
        </Faq>
        <FinalCta />
      </main>
      <Footer />
      {[softwareJsonLd(dict.seo.software), faqJsonLd(faqItems), videosJsonLd(dict.seo.videos)].map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
    </Messages>
  );
}
