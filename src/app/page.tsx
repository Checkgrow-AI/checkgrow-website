import { Nav } from "@/components/Nav";
import { MobileScrollRail } from "@/components/MobileScrollRail";
import { HeroV2 } from "@/components/sections/HeroV2";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { Credibility } from "@/components/sections/Credibility";
import { PlatformFilm } from "@/components/sections/PlatformFilm";
import { Problem } from "@/components/sections/Problem";
import { Shift } from "@/components/sections/Shift";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { UseCases } from "@/components/sections/UseCases";
import { Roles } from "@/components/sections/Roles";
import { Pricing } from "@/components/sections/Pricing";
import { Integrations } from "@/components/sections/Integrations";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { softwareJsonLd, faqJsonLd, videosJsonLd } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <Nav />
      <MobileScrollRail />
      <main id="top">
        <HeroV2 />
        <LogoMarquee />
        <Credibility />
        <PlatformFilm />
        <Problem />
        <Shift />
        <CaseStudies />
        <UseCases />
        <Integrations />
        <Roles />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      {[softwareJsonLd, faqJsonLd, videosJsonLd].map((data, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
    </>
  );
}
