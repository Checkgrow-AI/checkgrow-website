import type { Metadata } from "next";
import Link from "next/link";
import { FeatureStory } from "@/components/features/FeatureStory";
import { features, featurePath } from "@/lib/features";
import { SITE_URL } from "@/lib/seo";
import styles from "@/components/features/Features.module.css";

const title = "Checkgrow Features | AI marketing platform, feature by feature";
const description =
  "See every Checkgrow feature at work: Knowledge Centre, Insights, Campaigns, Creative Studio, Content, Social Media, Competitors, Sales and the AI Assistant.";
const image = "/features/social.webp";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: featurePath() },
  openGraph: {
    title, description, type: "website", url: featurePath(), siteName: "Checkgrow", locale: "en_GB",
    images: [{ url: image, width: 1200, height: 630, alt: "Checkgrow features: AI growth marketing in one platform" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [image] },
};

export default function FeaturesPage() {
  const url = `${SITE_URL}${featurePath()}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "Checkgrow Features",
        description,
        url,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@type": "SoftwareApplication", name: "Checkgrow", applicationCategory: "BusinessApplication", operatingSystem: "Web", url: SITE_URL },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: features.length,
          itemListElement: features.map((feature, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}${featurePath(feature.slug)}`,
            name: feature.name,
            description: `${feature.title} ${feature.scenario}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Features", item: url },
        ],
      },
    ],
  };

  return (
    <div className={`wrap ${styles.page}`}>
      <header className={styles.pageHeader}>
        <h1>Features</h1>
        <p>
          Every Checkgrow feature reads from the same company brain. See each
          one at work in three steps, from knowledge and research to
          campaigns, creatives and sales.
        </p>
      </header>

      <nav className={styles.jump} aria-labelledby="feature-index-title">
        <h2 id="feature-index-title">All features</h2>
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
        <h2 id="features-cta-title">One platform. Every feature connected.</h2>
        <p>
          Get early access and put the whole system to work, with onboarding
          from our team to set up your Knowledge Centre.
        </p>
        <div className={styles.ctaActions}>
          <Link href="/#waitlist" className={styles.primary}>Get Free Early Access</Link>
          <Link href="/tutorials" className={styles.secondary}>Watch the tutorials <span aria-hidden>↗</span></Link>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
