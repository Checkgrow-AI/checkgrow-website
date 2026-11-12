import type { Metadata } from "next";
import Link from "next/link";
import { allFaqItems, faqAnchor, faqCategories } from "@/lib/faq";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/seo";

const title = "Checkgrow FAQ | AI growth marketing platform questions answered";
const description =
  "Answers about Checkgrow: what the AI growth marketing platform does, how it learns your company, integrations and AI models, LinkedIn outreach, pricing and plans, and data security and GDPR.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/faq", types: { "text/markdown": "/faq.md" } },
  openGraph: { title, description, type: "website", url: "/faq", siteName: "Checkgrow", locale: "en_GB", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE.url] },
};

/* All questions on plain black: native <details> so every answer is in the
   HTML, a category index for quick scanning, and an anchor per question. */
export default function FaqPage() {
  const url = `${SITE_URL}/faq`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage", "@id": `${url}#faq`, url, name: title, description, inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: allFaqItems.map((item) => ({
          "@type": "Question", name: item.q,
          url: `${url}#${faqAnchor(item.q)}`,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "FAQ", item: url },
        ],
      },
    ],
  };

  return (
    <div className="bg-canvas pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="wrap">
        <div className="max-w-3xl">
        <p className="text-label text-muted">FAQ</p>
        <h1 className="text-h1 mt-6 text-balance">Frequently asked questions</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          Everything teams ask before and after they start with Checkgrow: the platform, your company
          brain, integrations, sales outreach, pricing and security. {allFaqItems.length} answers, one page.
        </p>

        <nav aria-label="FAQ topics" className="mt-10 flex flex-wrap gap-2">
          {faqCategories.map((category) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex min-h-10 items-center whitespace-nowrap rounded-full border border-line px-4 text-sm text-muted transition-colors hover:border-foreground/40 hover:text-foreground"
            >
              {category.title}
            </a>
          ))}
        </nav>

        {faqCategories.map((category) => (
          <section key={category.id} id={category.id} aria-labelledby={`${category.id}-title`} className="mt-20 scroll-mt-28">
            <h2 id={`${category.id}-title`} className="text-2xl font-semibold tracking-tight text-balance">{category.title}</h2>
            <p className="mt-3 text-muted">{category.intro}</p>
            <div className="mt-6 flex flex-col divide-y divide-line border-y border-line">
              {category.items.map((item) => (
                <details key={item.q} id={faqAnchor(item.q)} className="group scroll-mt-28">
                  <summary className="flex min-h-14 w-full cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-medium [&::-webkit-details-marker]:hidden">
                    <h3>{item.q}</h3>
                    <span aria-hidden className="text-xl text-muted transition-transform duration-200 group-open:rotate-45">+</span>
                  </summary>
                  <p className="pb-5 leading-relaxed text-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </section>
        ))}

        <section className="mt-24 border-t border-line pt-12">
          <h2 className="text-2xl font-semibold tracking-tight">Still have a question?</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            See Checkgrow on your own brand in a demo, or read the step-by-step guides in our documentation.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/book-a-demo"
              className="inline-flex min-h-12 items-center whitespace-nowrap rounded-full bg-foreground px-7 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
            >
              Book a demo
            </Link>
            <a
              href="https://doc.checkgrow.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4 transition-colors hover:text-foreground"
            >
              Read the documentation <span aria-hidden>↗</span>
            </a>
          </div>
        </section>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
