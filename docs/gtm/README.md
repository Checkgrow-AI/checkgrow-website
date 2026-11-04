# GTM container · checkgrow.com (GTM-WZ5LH56L)

All marketing and analytics tags live in this container. The site itself only
loads GTM and pushes named dataLayer events; it holds no GA4, Meta or LinkedIn
code.

- Source: `build_container.py` (edit, then run `python3 docs/gtm/build_container.py`)
- Import file: `GTM-WZ5LH56L_checkgrow-site.json`
- Meta Pixel template (Facebook's community template): `templates/facebook-pixel.json`

## What the site sends

| dataLayer | When | Source |
|---|---|---|
| `attribution_*` values | every page, before `gtm.js` | `<head>` script, `src/lib/attribution.ts` |
| `consent_status` (`ucCategory.marketing`) | Usercentrics load and every consent change | Usercentrics |
| `demo_form_start` | first answer on /book-a-demo | `src/lib/track.ts` |
| `demo_form_step` (`form_step`, `form_step_number`) | each question / the calendar shown | form |
| **`lead_submitted`** (`event_id`, `lead_challenges`, `lead_ad_spend`, `lead_ai_team`) | **Conversion 1**: "Request demo" accepted by `/api/demo-lead` | form |
| **`demo_booked`** (`event_id`) | **Conversion 2**: calendar booking confirmed, on /demo-confirmation | confirmation page |

Conversions wait (max 4 s) for `consent_status`, so consent is known when they
land. No email, phone or name ever enters the dataLayer.

## Attribution (consent-aware)

The `<head>` script reads the landing URL before GTM loads and keeps the
campaign **in memory** (`window.__cgAttr`). Internal links are Next.js links,
so that memory survives the visit and the demo form always receives the
campaign as hidden fields. **Nothing is stored before consent.**

Once Usercentrics reports consent for the service **"Checkgrow Campaign
Attribution"** (or, while that service is missing, the Marketing category),
two cookies are written: `cg_attr_lt` (last non-direct touch) and `cg_attr_ft`
(first touch), 90 days on `.checkgrow.com`, JSON with
`utm_source/medium/campaign/term/content/id`,
`gclid/gbraid/wbraid/fbclid/li_fat_id/msclkid/ttclid`, `landing_page`,
`referrer`, `ts`. Refusing or withdrawing consent deletes them. Without
consent, a later full visit starts fresh.

Rules: campaign parameters or an external referrer make a new touch; direct
visits and internal navigation never do; Google and Microsoft click ids
without UTMs become `google / cpc` and `bing / cpc`; search engines become
`<engine> / organic`, social sites `<site> / social`. The leads webhook gets
the last touch in its `utm_*`, `referrer` and `page_url` fields and both
touches plus click ids in `notes`.

**UTM convention for campaigns** (lower case):

| Platform | utm_source | utm_medium |
|---|---|---|
| Google Ads | `google` | `cpc` (auto-tagging gclid also works) |
| Meta Ads | `facebook` or `instagram` | `paid_social` |
| LinkedIn Ads | `linkedin` | `paid_social` |
| Newsletter | `newsletter` | `email` |

Always set `utm_campaign`; use `utm_content` for the creative/ad and `utm_term`
for the keyword or audience.

## Tags

| Folder | Tag | Fires on | Consent |
|---|---|---|---|
| GA4 | Google tag | All Pages | Consent Mode |
| GA4 | `generate_lead`, `demo_booked`, `demo_form_start`, `demo_form_step`, `cta_click` | matching events / Book a demo link clicks | Consent Mode |
| Google Ads | Google tag, Conversion Linker | All Pages | Consent Mode |
| Google Ads | Conversion - Demo lead (label `R9C2CL2trMsbEJLdqYJC`) | `lead_submitted` | Consent Mode |
| Google Ads | Conversion - Demo booked (label `CSBBCN3f6psdEJLdqYJC`) | `demo_booked` | Consent Mode |
| Meta | PageView (first page / page change), Lead, Schedule | marketing consent + events | Usercentrics marketing + `ad_storage` |
| LinkedIn | Insight Tag (partner `11099313`), Conversion - Demo lead (`31877625`) / booked (`31877633`) | marketing consent + events | Usercentrics marketing + `ad_storage` |

`event_id` is the Google Ads order id and the Meta eventID, ready for
deduplication with server-side conversions later.

## Production security policy and tracking verification

The website's production CSP is defined in `src/lib/contentSecurityPolicy.ts`
and applied to all routes by `next.config.ts`. GTM loading or a tag showing
"Fired" does **not** prove that its vendor SDK loaded or its event was sent.
A stub such as `window.fbq` can exist while CSP blocks `fbevents.js`, leaving
events queued indefinitely.

The policy explicitly permits the configured vendors' script, connection,
image and frame destinations. Meta's larger-event fallback submits a hidden
form to a frame: both `form-action` and `frame-src` permit only its
`https://www.facebook.com/tr/` path, not arbitrary external form targets.
Google regional measurement hosts are pinned
from its [official list](https://www.google.com/supported_domains), following
the [Google CSP guidance](https://developers.google.com/tag-platform/security/guides/csp).
Those regional hosts are measurement-only, not script origins. Host-only
sources inherit HTTPS on the production site, keeping the CSP below 7,500
bytes. Check the **whole response header size** as well when adding vendors,
since reverse proxies can have an 8 KiB response-header buffer.

Consent still belongs to Usercentrics and GTM. The CSP does not grant consent.
Do not remove the consent gates, add `unsafe-eval`, allow all HTTPS hosts, or
disable CSP to make a tag fire. Update the existing policy at its source;
adding a second, more permissive CSP header cannot override the first.

### Required checks before a tracking release

1. Run the unit tests, typecheck, lint and `pnpm build`. The regression tests
   in `tests/contentSecurityPolicy.test.mjs` check vendor destinations,
   regional hosts, header size and retained security boundaries.
2. Serve the **production build** on a separate local port. `pnpm dev` does
   not emit the production CSP and is not sufficient for this check.
3. In an isolated browser, intercept measurement requests and mock all lead,
   calendar and email-producing requests. Load the real public GTM and vendor
   scripts, but never send synthetic conversions to the advertising accounts.
4. With cookies rejected, verify Meta/LinkedIn SDKs and events stay blocked.
   Google may send consent-mode, cookieless pings; that is a different mechanism.
5. With cookies accepted, verify that the actual Meta runtime has loaded
   (`fbq.callMethod`, not merely `fbq`). Observe outgoing `PageView`, `Lead`
   and `Schedule` requests, the two Google Ads labels above, and both LinkedIn
   conversion IDs. Check CSP violations as well as GTM firing status.
6. Exercise the form with mocked successful and failed lead/booking responses;
   a failed booking must not fire `demo_booked`, and refreshing confirmation
   must not duplicate it. No contact details belong in the dataLayer.
7. After an approved deployment, check the live response headers, then verify
   receipt in Meta Test Events and GTM Preview. An intercepted local request
   proves the browser attempted delivery, **not** that a vendor received it.

Use regular Chrome for the final browser check. During the November 2026
checks, Meta loaded in headless Chrome but emitted no beacons; regular Chrome
emitted all three events under the same test conditions. Keep this distinction
separate from CSP failures and from receipt in Events Manager.

### Custom destinations need explicit approval

The Pixel's remote configuration can introduce additional server-side event
gateways. These are not automatically trusted just because a Meta script
references them. Confirm ownership and purpose before adding exact endpoints;
never allow all `*.cloud.run` or `*.on.aws` hosts. Standard Meta browser events
can work while an unapproved gateway remains blocked.

## Import and publish

1. GTM → Admin → **Import container** → `GTM-WZ5LH56L_checkgrow-site.json`.
2. Workspace: **New** (e.g. "Website rebuild"); option **Overwrite**. This
   replaces the old site's tags, triggers and variables.
3. Nothing to fill in: every ID is set.
4. **Preview** against https://checkgrow.com, accept cookies, then walk the demo
   form; check `lead_submitted` and `demo_booked` fire the GA4, Google Ads and
   Meta tags.
5. Publish.

Outside GTM:

- **GA4**: mark `generate_lead` and `demo_booked` as key events; register the
  custom dimensions `form_step`, `lead_source`, `lead_medium`, `lead_campaign`,
  `first_source`, `first_medium`, `first_campaign` if you want them in reports.
- **Usercentrics**: add **LinkedIn Insight Tag** (Marketing) and a custom
  service named exactly **Checkgrow Campaign Attribution** (Marketing) listing
  the cookies `cg_attr_ft` and `cg_attr_lt`.
- **Google Ads**: rename the reused conversion action to "Website demo lead"
  ("Website demo booked" exists).
