# News

## Direction and routes

The approved Tutorials editorial design now serves a News hub. It keeps the existing dark surfaces, Geist typography, 8px media corners, abstract brand imagery, narrow reading column and shared header/footer. Instant category buttons are the only new interactive UI: All news, Tutorials and Security Releases. The pressed state, keyboard focus and live result count are accessible; no API or database is needed.

- `/news`: newest-first listing, linked from the shared footer and Features page.
- `/news/sales-outreach`: existing tutorial, videos and captions preserved.
- `/news/security-update-october-2026`: public security release summary.
- `/tutorials` and `/tutorials/:slug`: permanent 308 redirects to the matching News routes. Nested media URLs do not redirect.
- Sitemap, canonicals, social metadata, structured data and `llms.txt` use the News routes.

Tutorial media and typed content remain reusable. Add tutorial records in `src/lib/tutorials.ts`; the News catalogue includes them automatically. Category definitions, catalogue records and security copy are in `src/lib/news.ts`. Keep the shared article template and video player rather than adding page-specific duplicates. Future security releases need their own dated content record and rendering selection before adding them to the catalogue; do not reuse the October article for a new date.

## Security editorial review, 2 October 2026

Purpose: provide a clear customer/POC overview of implemented protections without publishing operational details. Primary action: discuss security requirements using the existing public business contact. The early-access flow remains unchanged.

Sources inspected read-only:

- User-supplied six-page Security Report, whose status ledger covers production checks on 1 October and a follow-up on 2 October. The original stays outside this repository.
- Platform assessment dated 28 September: staging-only scope, source review, automated analysis and selected role/company-boundary tests. It is not evidence of an independently commissioned production penetration test.
- Platform production branch history and release records. Release v1.604, PR #1048, includes encryption (#1046), deletion/retention (#1045) and the preceding account/access work. Its production workflow completed successfully on 1 October. Later production releases were also checked; their success does not imply a fresh comprehensive penetration test.

Public claims are deliberately limited:

| Public area | Supporting record | Wording boundary |
| --- | --- | --- |
| Account and session controls | #949, #945, #984, #993, #996, #1003 | MFA is available and company-configurable, not enabled for everyone. |
| Company and private-file access | #987, #1010, #1016, #1017, #1021 | Describes reviewed controls, not exhaustive platform coverage. |
| Integration credentials | #1046 and supplied production verification | Encryption at rest for the named integrations, not a universal data-encryption claim. |
| Retention and deletion | #1045 | Scheduled clean-up and platform-generated deletion evidence, not a third-party certificate. |
| Provider response storage | #1009 | Application request setting, not universal zero data retention. |
| Security development checks | #1011, #1013, #1015 | Ongoing checks, not a permanent vulnerability-free result. |

The public article explicitly identifies Checkgrow as its author, dates its scope and says it is not an independent penetration-test report, third-party attestation or compliance certification. No independent assessor, signed attestation or permission to name one was supplied. If this evidence is later provided, verify assessor, dates, environment, scope, retest status and permission to publish before changing that language.

The follow-up editorial pass replaces long paragraphs with labelled technical bullet lists and two short, semantic tables: session controls and operational-record retention. Public technical terminology includes TOTP, server-side authorisation, AES-256-GCM and browser security headers. Algorithms and control names explain the protection without publishing secret formats, key derivation, internal routes or exploit details. Retention values (12 months for activity/error logs; 24 months for AI usage records) are scoped to those record types and grounded in the reviewed release note.

Excluded from public files: raw reports, exploit steps, finding identifiers, internal URLs, source paths, project identifiers, secret formats, implementation keys and customer details. Open or unverified protections are not promoted as complete. The report also flags older external documentation claims for review; this website task does not modify the separate documentation service.

## Verification

Static editorial/UI change; no platform authentication, permissions, database, waitlist API or form submissions changed. Publishing requires the website’s separate exact-manifest approval.

Completed locally on 2 October 2026:

- TypeScript (`tsc --noEmit --incremental false`), ESLint and `git diff --check` passed.
- All 88 tests passed, including five new News tests covering catalogue/filter behaviour, safe copy boundaries, table structure/retention values and redirect configuration; existing tutorial/media tests still pass.
- Production build passed. News and both article pages are statically generated.
- Browser review at 390px, 768px and 1440px: no horizontal overflow, readable article text, working header clearance and 44px category controls. Inspected listing, article body and mobile POC contact card visually.
- All three category states work; keyboard Enter selects Tutorials and the result count updates. Footer → News → article navigation works.
- Legacy listing and article URLs return 308 redirects; new pages return 200; unknown article returns 404. Existing video/caption URLs return 206 byte-range responses with the expected media types.
- Both tutorial recordings play. Keyboard Enter starts the short version; starting the full version pauses the short one. Neither video has a source before interaction.
- Rendered pages have one H1, correct canonical URLs, Checkgrow authorship and BlogPosting/breadcrumb schema; the tutorial retains two VideoObjects and the security article has none. Sitemap contains News paths, not redirecting Tutorial page paths.
- Existing early-access link reaches the homepage form. No form submission or email was sent. Browser console showed no errors during the reviewed journey.
- No new packages, public report copies or platform/backend edits. No commit, push or production deployment.

Local preview: `http://127.0.0.1:8030/news` (same project server on port 8030).
