import type { Metadata } from "next";
import { DemoBookingForm } from "@/components/demo/DemoBookingForm";
import { DemoIcon, type DemoIconName } from "@/components/demo/DemoIcons";
import { Trustpilot } from "@/components/Trustpilot";
import { SITE_URL } from "@/lib/seo";
import styles from "@/components/demo/Demo.module.css";

const title = "Book a demo | Checkgrow";
const description =
  "Book a 30-minute Checkgrow demo. Leave with your company onboarded, a free AI growth strategy and the platform ready to run, plus competitor research, a website review and a 30-day free seat.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/book-a-demo" },
  openGraph: { title, description, type: "website", url: "/book-a-demo", siteName: "Checkgrow", locale: "en_GB" },
  twitter: { card: "summary_large_image", title, description },
};

type Benefit = { icon: DemoIconName; title: string; body: string };

/* What the call itself delivers: beside the form, titles only. */
const callResults: { icon: DemoIconName; title: string }[] = [
  { icon: "clock", title: "A 30-minute deep dive into results" },
  { icon: "bolt", title: "Instant onboarding, free AI strategy" },
  { icon: "rocket", title: "Leave ready to run" },
];

/* What the platform adds after the call: a compact row above the footer. */
const platformPerks: Benefit[] = [
  {
    icon: "radar",
    title: "Full competitor analysis",
    body: "Your competitors' channels, messages and campaigns, researched.",
  },
  {
    icon: "browser",
    title: "Website and conversion flow review",
    body: "Where visitors drop off, and what to fix first.",
  },
  {
    icon: "gift",
    title: "30-day free seat",
    body: "Test everything with your team. No credit card required.",
  },
];

export default function BookDemoPage() {
  const url = `${SITE_URL}/book-a-demo`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#page`,
    name: "Book a Checkgrow demo",
    description,
    url,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };

  return (
    <div className={`wrap ${styles.page}`}>
      <div className={styles.grid}>
        <header className={styles.head}>
          <p className="text-label text-accent">Book a demo</p>
          <h1 id="demo-title" className="text-h1 mt-4 max-w-xl">
            See your growth engine running in 30 minutes.
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
            A live session on your own company, competitors and website. You
            leave with Checkgrow set up and a clear plan for what to do next.
          </p>
        </header>

        <section className={styles.perks} aria-label="What you get from the demo">
          <ul className={`${styles.benefits} max-w-xl`}>
            {callResults.map((b) => (
              <li key={b.title} className={styles.benefit}>
                <DemoIcon name={b.icon} size={22} className="text-accent" />
                <h3>{b.title}</h3>
              </li>
            ))}
          </ul>

          <div className="mt-8 hidden lg:block">
            <Trustpilot />
          </div>
        </section>

        <div className={`${styles.panelWrap} ${styles.form}`}>
          <DemoBookingForm />
          <p className="mt-4 text-center text-sm text-muted">
            No credit card required · Your data stays yours
          </p>
          <div className="mt-6 flex justify-center lg:hidden">
            <Trustpilot />
          </div>
        </div>
      </div>

      <section className={styles.platform} aria-labelledby="demo-platform-title">
        <h2 id="demo-platform-title" className="text-label text-muted">
          Also included with Checkgrow
        </h2>
        <ul className={styles.platformRow}>
          {platformPerks.map((b) => (
            <li key={b.title} className={styles.platformItem}>
              <DemoIcon name={b.icon} size={20} className="shrink-0 text-accent" />
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
  );
}
