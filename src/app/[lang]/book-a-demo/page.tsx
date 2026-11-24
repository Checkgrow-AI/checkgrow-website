import { DemoBookingForm } from "@/components/demo/DemoBookingForm";
import { DemoIcon, type DemoIconName } from "@/components/demo/DemoIcons";
import { Trustpilot } from "@/components/Trustpilot";
import { FoundersNote } from "@/components/demo/FoundersNote";
import { SITE_URL, SOCIAL_IMAGE, jsonLdLanguage } from "@/lib/seo";
import { localePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { Messages } from "@/i18n/client";
import styles from "@/components/demo/Demo.module.css";

export async function generateMetadata({ params }: PageProps<"/[lang]/book-a-demo">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).demo.meta;
  return pageMetadata(lang, {
    path: "/book-a-demo",
    title: t.title,
    description: t.description,
    extra: {
      openGraph: { type: "website", images: [SOCIAL_IMAGE] },
      twitter: { images: [SOCIAL_IMAGE.url] },
    },
  });
}

/* What the call itself delivers: beside the form, titles only
   (copy: demo.page.callResults, same order). */
const callResultIcons: DemoIconName[] = ["clock", "bolt", "rocket"];

/* What the platform adds after the call: a compact row above the footer
   (copy: demo.page.platformPerks, same order). */
const platformPerkIcons: DemoIconName[] = ["radar", "browser", "gift"];

export default async function BookDemoPage({ params }: PageProps<"/[lang]/book-a-demo">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  const t = dict.demo.page;
  const url = `${SITE_URL}${localePath(lang, "/book-a-demo")}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#page`,
    name: dict.demo.meta.schemaName,
    description: dict.demo.meta.description,
    url,
    inLanguage: jsonLdLanguage(lang),
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <Messages messages={{ demo: dict.demo }}>
      <div className={`wrap ${styles.page}`}>
        <div className={styles.grid}>
          <header className={styles.head}>
            <p className="text-label text-accent">{t.eyebrow}</p>
            <h1 id="demo-title" className="text-h1 mt-4 max-w-xl">
              {t.title}
            </h1>
            {/* phones: hidden, so the form starts in the first screen */}
            <p className="mt-5 hidden max-w-lg text-lg leading-relaxed text-muted sm:block">
              {t.lead}
            </p>
          </header>

          <section className={styles.perks} aria-label={t.perksLabel}>
            <ul className={`${styles.benefits} max-w-xl`}>
              {t.callResults.map((title, i) => (
                <li key={callResultIcons[i]} className={styles.benefit}>
                  <DemoIcon name={callResultIcons[i]} size={22} className="text-accent" />
                  <h3>{title}</h3>
                </li>
              ))}
            </ul>

            <div className="mt-8 hidden lg:block">
              <Trustpilot copy={dict.home.trustpilot} />
            </div>
            <FoundersNote className="mt-7 hidden lg:flex" />
          </section>

          <div className={`${styles.panelWrap} ${styles.form}`}>
            <DemoBookingForm />
            <p className="mt-4 text-center text-sm text-muted">
              {t.reassurance}
            </p>
            <div className="mt-6 flex justify-center lg:hidden">
              <Trustpilot copy={dict.home.trustpilot} />
            </div>
          </div>
        </div>

        <section className={styles.platform} aria-labelledby="demo-platform-title">
          <h2 id="demo-platform-title" className="text-label text-muted">
            {t.platformTitle}
          </h2>
          <ul className={styles.platformRow}>
            {t.platformPerks.map((b, i) => (
              <li key={platformPerkIcons[i]} className={styles.platformItem}>
                <DemoIcon name={platformPerkIcons[i]} size={20} className="shrink-0 text-accent" />
                <div className="min-w-0">
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      </div>
    </Messages>
  );
}
