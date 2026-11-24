import { Pricing } from "@/components/sections/Pricing";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CustomerProof } from "@/components/pricing/CustomerProof";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { buildPlans } from "@/lib/pricing";
import { pricingQuestions } from "@/lib/faq";
import { SITE_URL, SOCIAL_IMAGE, jsonLdLanguage } from "@/lib/seo";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { LocalLink as Link, Messages } from "@/i18n/client";

export async function generateMetadata({ params }: PageProps<"/[lang]/pricing">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).pricing.meta;
  return pageMetadata(lang, {
    path: "/pricing",
    title: t.title,
    description: t.description,
    markdown: "/pricing.md",
    extra: {
      openGraph: { type: "website", images: [SOCIAL_IMAGE] },
      twitter: { images: [SOCIAL_IMAGE.url] },
    },
  });
}

export default async function PricingPage({ params }: PageProps<"/[lang]/pricing">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  const t = dict.pricing;
  const plans = buildPlans(t);
  const pricingFaqItems = pricingQuestions(dict.faq);
  const absolute = (path: string) => {
    const local = localePath(lang, path);
    return local === "/" ? SITE_URL : `${SITE_URL}${local}`;
  };
  const url = absolute("/pricing");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": url, url, name: t.meta.title,
        description: t.meta.description, inLanguage: jsonLdLanguage(lang),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: {
          "@type": "SoftwareApplication", name: "Checkgrow", url: SITE_URL,
          applicationCategory: "BusinessApplication", operatingSystem: "Web",
          offers: plans.filter((plan) => plan.monthly !== null).map((plan) => ({
            "@type": "Offer", name: plan.name, description: plan.description,
            url: `${url}#plan-${plan.id}`, price: plan.monthly, priceCurrency: "EUR",
            priceSpecification: {
              "@type": "UnitPriceSpecification", price: plan.monthly, priceCurrency: "EUR",
              unitText: "month", billingDuration: "P1M", valueAddedTaxIncluded: false,
            },
          })),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: pricingFaqItems.map((item) => ({
          "@type": "Question", name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumb.home, item: absolute("/") },
          { "@type": "ListItem", position: 2, name: t.breadcrumb.pricing, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Messages messages={{ pricing: t }}>
        <Pricing standalone />
      </Messages>
      <LogoMarquee />
      <CustomerProof />
      <Faq items={pricingFaqItems} title={t.page.faqTitle} id="pricing-questions">
        <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">{t.page.faqIntro}</p>
        <Link href="/book-a-demo" className="mt-6 inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-brand px-6 text-sm font-medium text-accent transition-colors hover:bg-brand-strong hover:text-white">{t.page.helpChoose}</Link>
        <div className="mt-10 max-w-sm">
          <h3 className="text-base font-medium">{t.page.diligenceTitle}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">{t.page.diligenceBody}</p>
          <Link href="/news/security-update-october-2026" className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm text-accent underline underline-offset-4 hover:text-foreground">{t.page.securityLink} <span aria-hidden>↗</span></Link>
        </div>
      </Faq>
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
