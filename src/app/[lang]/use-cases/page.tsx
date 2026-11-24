import { localizeUseCases, pathToUseCase } from "@/lib/useCases";
import { SITE_URL, SOCIAL_IMAGE, jsonLdLanguage } from "@/lib/seo";
import { UseCaseStage } from "@/components/use-cases/UseCaseStage";
import styles from "@/components/use-cases/UseCases.module.css";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { LocalLink as Link } from "@/i18n/client";
import { fmt, plural } from "@/i18n/format";

export async function generateMetadata({ params }: PageProps<"/[lang]/use-cases">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).useCases.index.meta;
  return pageMetadata(lang, {
    path: "/use-cases",
    title: t.title,
    description: t.description,
    markdown: "/use-cases.md",
    extra: {
      openGraph: { type: "website", images: [SOCIAL_IMAGE] },
      twitter: { images: [SOCIAL_IMAGE.url] },
    },
  });
}

export default async function UseCasesPage({ params }: PageProps<"/[lang]/use-cases">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang).useCases;
  const t = dict.index;
  const useCases = localizeUseCases(dict.items);
  const abs = (path: string) => `${SITE_URL}${localePath(lang, path)}`;
  const home = lang === "en" ? SITE_URL : abs("/");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", name: t.schemaName, description: t.meta.description, url: abs("/use-cases"),
        /* English has never declared it here; translations name their language */
        ...(lang === "en" ? {} : { inLanguage: jsonLdLanguage(lang) }),
        mainEntity: { "@type": "ItemList", itemListElement: useCases.map((item, index) => ({
          "@type": "ListItem", position: index + 1, url: abs(pathToUseCase(item.slug)), name: item.title,
        })) },
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: dict.breadcrumbs.home, item: home },
        { "@type": "ListItem", position: 2, name: dict.breadcrumbs.useCases, item: abs("/use-cases") },
      ] },
    ],
  };
  return (
    <div className={`wrap ${styles.page}`}>
      <header className={styles.indexHeader}>
        <h1>{t.title}</h1>
        <p>{t.intro}</p>
      </header>
      <section aria-labelledby="use-case-list">
        <div className={styles.listBar}>
          <h2 id="use-case-list">{t.listTitle}</h2>
          <p>{plural(lang, useCases.length, t.count)}</p>
        </div>
        <div className={styles.grid}>
          {useCases.map((item) => (
            <article key={item.slug}>
              <Link href={pathToUseCase(item.slug)} className={styles.card}>
                <div className={styles.cardStage}>
                  <UseCaseStage
                    id={`card-${item.slug}`}
                    name={item.feature}
                    mockups={[item.hero.mockups[0]]}
                    steps={[item.hero.steps[0]]}
                    background={item.hero.background}
                    backgroundColor={item.hero.backgroundColor}
                  />
                </div>
                <p className={styles.cardMeta}>{item.feature}</p>
                <h3>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
                <p className={styles.cardFor}>{fmt(t.builtFor, { audiences: item.builtFor.join(t.audienceSeparator) })}</p>
                <span className={styles.readLink}>{t.read} <span aria-hidden>↗</span></span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
