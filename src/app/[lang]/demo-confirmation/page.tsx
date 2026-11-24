import { DemoConfirmation } from "@/components/demo/DemoConfirmation";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { getDictionary } from "@/i18n/dictionaries";
import { langOf, pageMetadata } from "@/i18n/metadata";
import { setRequestLang } from "@/i18n/server";
import { Messages } from "@/i18n/client";

/* Its own URL so analytics can count confirmed bookings as a page view.
   Kept out of search results and the sitemap. */
export async function generateMetadata({ params }: PageProps<"/[lang]/demo-confirmation">) {
  const lang = langOf((await params).lang);
  const t = getDictionary(lang).demo.confirmation.meta;
  return pageMetadata(lang, {
    path: "/demo-confirmation",
    title: t.title,
    description: t.description,
    extra: { robots: { index: false, follow: true } },
  });
}

export default async function DemoConfirmationPage({ params }: PageProps<"/[lang]/demo-confirmation">) {
  const lang = langOf((await params).lang);
  setRequestLang(lang);
  const dict = getDictionary(lang);
  return (
    <Messages messages={{ demo: dict.demo }}>
      <DemoConfirmation />
      <CaseStudies afterBooking copy={dict.home.caseStudies} items={dict.testimonials.items} />
    </Messages>
  );
}
