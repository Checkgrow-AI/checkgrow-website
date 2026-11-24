import { FeatureStory } from "@/components/features/FeatureStory";
import { featuresOf, featurePath } from "@/lib/features";
import { SITE_URL, jsonLdLanguage } from "@/lib/seo";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { LocalLink as Link } from "@/i18n/client";
import styles from "@/components/features/Features.module.css";

const image = "/features/social.webp";

export async function generateMetadata({ params }: PageProps<"/[lang]/features">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).features.meta;
  return pageMetadata(lang, {
    path: featurePath(),
    title: t.title,
    description: t.description,
    markdown: `${featurePath()}.md`,
    extra: {
      openGraph: { type: "website", images: [{ url: image, width: 1200, height: 630, alt: t.imageAlt }] },
      twitter: { images: [image] },
    },
  });
}

export default async function FeaturesPage({ params }: PageProps<"/[lang]/features">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const t = getDictionary(lang).features;
  const features = featuresOf(t);
  const absolute = (path: string) => {
    const local = localePath(lang, path);
    return local === "/" ? SITE_URL : `${SITE_URL}${local}`;
  };
  const url = absolute(featurePath());
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: t.page.schemaName,
        description: t.meta.description,
        url,
        inLanguage: jsonLdLanguage(lang),
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@type": "SoftwareApplication", name: "Checkgrow", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: SITE_URL },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: features.length,
          itemListElement: features.map((feature, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: absolute(featurePath(feature.slug)),
            name: feature.name,
            description: `${feature.title} ${feature.scenario}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: t.breadcrumb.home, item: absolute("/") },
          { "@type": "ListItem", position: 2, name: t.breadcrumb.features, item: url },
        ],
      },
    ],
  };

  return (
    <div className={`wrap ${styles.page}`}>
      <header className={styles.pageHeader}>
        <h1>{t.page.title}</h1>
        <p>
          {t.page.intro}
        </p>
      </header>

      <nav className={styles.jump} aria-labelledby="feature-index-title">
        <h2 id="feature-index-title">{t.page.indexTitle}</h2>
        <ul>
          {features.map((feature) => (
            <li key={feature.slug}>
              <a href={`#${feature.slug}`}>{feature.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.list}>
        {features.map((feature, index) => (
          <FeatureStory key={feature.slug} feature={feature} reverse={index % 2 === 1} heading="h2" />
        ))}
      </div>

      <section className={styles.pageCta} aria-labelledby="features-cta-title">
        <h2 id="features-cta-title">{t.page.ctaTitle}</h2>
        <p>
          {t.page.ctaBody}
        </p>
        <div className={styles.ctaActions}>
          <Link href="/book-a-demo" className={styles.primary}>{t.page.bookDemo}</Link>
          <Link href="/news" className={styles.secondary}>{t.page.explore} <span aria-hidden>↗</span></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
