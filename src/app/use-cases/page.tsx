import type { Metadata } from "next";
import Link from "next/link";
import { useCases, pathToUseCase } from "@/lib/useCases";
import { SITE_URL, SOCIAL_IMAGE } from "@/lib/seo";
import { UseCaseStage } from "@/components/use-cases/UseCaseStage";
import styles from "@/components/use-cases/UseCases.module.css";

const title = "Checkgrow Use Cases | How teams run marketing with Checkgrow";
const description = "See how marketing teams use Checkgrow to plan and report in one place, write with AI that knows their brand, and show the board what marketing returns.";

export const metadata: Metadata = {
  title, description, alternates: { canonical: "/use-cases", types: { "text/markdown": "/use-cases.md" } },
  openGraph: { title, description, type: "website", url: "/use-cases", siteName: "Checkgrow", images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title, description, images: [SOCIAL_IMAGE.url] },
};

export default function UseCasesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage", name: "Checkgrow Use Cases", description, url: `${SITE_URL}/use-cases`,
        mainEntity: { "@type": "ItemList", itemListElement: useCases.map((item, index) => ({
          "@type": "ListItem", position: index + 1, url: `${SITE_URL}${pathToUseCase(item.slug)}`, name: item.title,
        })) },
      },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Use Cases", item: `${SITE_URL}/use-cases` },
      ] },
    ],
  };
  return (
    <div className={`wrap ${styles.page}`}>
      <header className={styles.indexHeader}>
        <h1>Use Cases</h1>
        <p>The jobs marketing teams bring to Checkgrow, shown end to end: the problem, the four steps inside the platform, and what changes for the team. Including what Checkgrow doesn&apos;t do.</p>
      </header>
      <section aria-labelledby="use-case-list">
        <div className={styles.listBar}>
          <h2 id="use-case-list">All use cases</h2>
          <p>{useCases.length} use cases</p>
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
                <p className={styles.cardFor}>Built for {item.builtFor.join(" · ")}</p>
                <span className={styles.readLink}>Read the use case <span aria-hidden>↗</span></span>
              </Link>
            </article>
          ))}
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </div>
  );
}
