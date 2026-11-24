/* Consent defaults, campaign attribution, Google Tag Manager, the
   Usercentrics banner and site-wide structured data: identical on every
   page, including the global 404 (app/global-not-found.tsx), so tracking
   can never differ between the layout and the 404. Moved verbatim from the
   root layout; see lib/attribution.ts and lib/track.ts. */
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { ATTRIBUTION_SCRIPT } from "@/lib/attribution";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const GTM_ID = "GTM-WZ5LH56L";

export function SiteHeadScripts() {
  return (
    <>
      {/* Consent Mode v2 defaults to denied and must reach the dataLayer
          before GTM loads; the Usercentrics CMP lifts consent
          (consent_status event), so nothing personal fires before the
          visitor agrees */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  ad_storage: 'denied',
  ad_user_data: 'denied',
  ad_personalization: 'denied',
  analytics_storage: 'denied',
  wait_for_update: 2000
});`,
        }}
      />
      {/* campaign attribution cookies + attribution_* dataLayer values,
          ready for GTM's first page view (see lib/attribution.ts) */}
      <script dangerouslySetInnerHTML={{ __html: ATTRIBUTION_SCRIPT }} />
      {/* Google Tag Manager: every tag (GA4, Google Ads, Meta, LinkedIn)
          lives in the container; the site only sends dataLayer events
          (lib/track.ts). Container source: docs/gtm/. */}
      {/* eslint-disable-next-line @next/next/next-script-for-ga -- plain
          snippet keeps the Consent Mode default ahead of the container */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
      {/* scroll reveals start hidden and are animated in by JavaScript;
          without it, show everything (components/Reveal.tsx) */}
      <noscript>
        <style>{"[data-reveal]{opacity:1!important;transform:none!important}.sales-mockup *{animation-play-state:running!important}"}</style>
      </noscript>
    </>
  );
}

/* Usercentrics banner language: English keeps today's exact tag (the CMP
   picks its default); other languages force theirs. Each language must be
   enabled in the Usercentrics admin, or the banner falls back. */
const CMP_LANGUAGE: Partial<Record<Locale, string>> = { "pt-BR": "pt", de: "de", fr: "fr" };

export function SiteBodyStartScripts({ lang }: { lang: Locale }) {
  return (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
      {/* Usercentrics consent banner — async scripts are hoisted into <head> */}
      <script
        id="usercentrics-cmp"
        src="https://web.cmp.usercentrics.eu/ui/loader.js"
        data-settings-id="vrUg52RzUffi2O"
        data-language={CMP_LANGUAGE[lang]}
        async
      />
    </>
  );
}

/* site-wide structured data in the page's language (description and
   inLanguage; English keeps en-GB) */
export function SiteBodyEndScripts({ lang }: { lang: Locale }) {
  const t = getDictionary(lang).seo;
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd(t.organization.description)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd(lang)) }}
      />
    </>
  );
}
