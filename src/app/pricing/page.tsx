import type { Metadata } from "next";
import Link from "next/link";
import { Pricing } from "@/components/sections/Pricing";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { CustomerProof } from "@/components/pricing/CustomerProof";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { plans, pricingDescription, pricingFaqItems } from "@/lib/pricing";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/seo";

const title = "Checkgrow Pricing | Plans for brands, agencies and growth teams";

export const metadata: Metadata = {
  title,
  description: pricingDescription,
  alternates: { canonical: "/pricing", types: { "text/markdown": "/pricing.md" } },
  openGraph: {
    title, description: pricingDescription, type: "website", url: "/pricing",
    siteName: "Checkgrow", locale: "en_GB", images: [SOCIAL_IMAGE],
  },
  twitter: { card: "summary_large_image", title, description: pricingDescription, images: [SOCIAL_IMAGE.url] },
};

export default function PricingPage() {
  const url = `${SITE_URL}/pricing`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage", "@id": url, url, name: title,
        description: pricingDescription, inLanguage: "en-GB",
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
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Pricing", item: url },
        ],
      },
    ],
  };

  return (
    <>
      <Pricing standalone />
      <LogoMarquee />
      <CustomerProof />
      <Faq items={pricingFaqItems} title="A few things worth knowing." id="pricing-questions">
        <p className="mt-6 max-w-sm text-base leading-relaxed text-muted">Choosing between plans? We can walk through your brands, team and growth priorities in a demo.</p>
        <Link href="/book-a-demo" className="mt-6 inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-full border border-brand px-6 text-sm font-medium text-accent transition-colors hover:bg-brand-strong hover:text-white">Help me choose a plan</Link>
        <div className="mt-10 max-w-sm">
          <h3 className="text-base font-medium">Doing your due diligence?</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted">Review our public security update, or discuss private infrastructure with our team.</p>
          <Link href="/news/security-update-october-2026" className="mt-3 inline-flex min-h-11 items-center gap-3 text-sm text-accent underline underline-offset-4 hover:text-foreground">Read the security update <span aria-hidden>↗</span></Link>
        </div>
      </Faq>
      <FinalCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </>
  );
}
