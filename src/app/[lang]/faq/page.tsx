import { allFaqItems } from "@/lib/faq";
import { SITE_URL, SOCIAL_IMAGE, jsonLdLanguage } from "@/lib/seo";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { plural } from "@/i18n/format";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { LocalLink as Link } from "@/i18n/client";

export async function generateMetadata({ params }: PageProps<"/[lang]/faq">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).faq.page.meta;
  return pageMetadata(lang, {
    path: "/faq",
    title: t.title,
    description: t.description,
    markdown: "/faq.md",
    extra: {
      openGraph: { type: "website", images: [SOCIAL_IMAGE] },
      twitter: { images: [SOCIAL_IMAGE.url] },
    },
  });
}

/* All questions on plain black: native <details> so every answer is in the
   HTML, a category index for quick scanning, and an anchor per question. */
export default async function FaqPage({ params }: PageProps<"/[lang]/faq">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const faq = getDictionary(lang).faq;
  const t = faq.page;
  const faqCategories = faq.categories;
  const items = allFaqItems(faq);
  const absolute = (path: string) => {
    const local = localePath(lang, path);
    return local === "/" ? SITE_URL : `${SITE_URL}${local}`;
  };
  const url = absolute("/faq");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage", "@id": `${url}#faq`, url, name: t.meta.title, description: t.meta.description, inLanguage: jsonLdLanguage(lang),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: items.map((item) => ({
          "@type": "Question", name: item.q,
          url: `${url}#${item.anchor}`,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumb.home, item: absolute("/") },
          { "@type": "ListItem", position: 2, name: t.breadcrumb.faq, item: url },
        ],
      },
    ],
  };

  return (
    <div className="bg-canvas pb-24 pt-36 md:pb-32 md:pt-44">
      <div className="wrap">
        <div className="max-w-3xl">
        <p className="text-label text-muted">{t.eyebrow}</p>
        <h1 className="text-h1 mt-6 text-balance">{t.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          {t.intro} {plural(lang, items.length, t.count)}
        </p>

        <nav aria-label={t.topics} className="mt-10 flex flex-wrap gap-2">
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
                <details key={item.anchor} id={item.anchor} className="group scroll-mt-28">
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
          <h2 className="text-2xl font-semibold tracking-tight">{t.stillTitle}</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-muted">
            {t.stillBody}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Link
              href="/book-a-demo"
              className="inline-flex min-h-12 items-center whitespace-nowrap rounded-full bg-foreground px-7 text-sm font-medium text-canvas transition-colors duration-200 hover:bg-accent"
            >
              {t.bookDemo}
            </Link>
            <a
              href="https://doc.checkgrow.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-accent underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {t.docs} <span aria-hidden>↗</span>
            </a>
          </div>
        </section>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
