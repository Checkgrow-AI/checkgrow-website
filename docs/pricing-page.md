# Dedicated pricing page

## Purpose and design

`/pricing` is the buying destination linked from desktop navigation, mobile navigation and the footer. The homepage retains its pricing section and `#pricing` anchor.

Reuse the approved dark site system: Geist, black/charcoal surfaces, brand-purple emphasis, 8px card corners, pill actions and the existing 1200px content grid. This is an extension of the approved homepage, not a new visual direction.

The page sequence is the shared plan table and comparison modal, customer logos, customer evidence, buying questions, and the existing demo invitation. Every conversion CTA leads to `/book-a-demo` in the same tab, including Growth, Enterprise and security-review enquiries. No new trial, cancellation, certification or outcome guarantees are introduced.

Reference patterns reviewed: [Linear pricing](https://linear.app/pricing) and [Notion pricing](https://www.notion.com/pricing), for plan comparison, customer proof and buying guidance. Their prices, claims and assets are not reused.

## Synchronisation contract

- `src/lib/pricing.ts` owns plans, allowances, CTAs, annual discount, price formatting, pricing description and pricing FAQs.
- Both pages render `Pricing`. `standalone` changes the opening spacing, heading level and quick links only. The dedicated page renders its opening content immediately, without waiting for a scroll reveal.
- Both pages' FAQs use `pricingFaqItems`; the dedicated page uses that same data in FAQ structured data and Markdown.
- Customer logos reuse `LogoMarquee`; the quote reads `testimonials`; results read non-draft entries in `successStories`. Keep measurement periods, context and links attached to customer figures.
- The homepage's scroll-progress navigation still uses the `pricing` section; clicking Pricing opens `/pricing` on every page. The active internal page is marked with `aria-current`.

## Discoverability

The page has its own canonical, Markdown alternate, social metadata, software offers, FAQ and breadcrumb structured data. It appears in the sitemap. `/pricing.md`, content negotiation and the existing `llms.txt` map now refer to the real HTML `/pricing` destination instead of the homepage anchor.

## Verification

Run `node --test tests/*.test.mjs`, TypeScript, ESLint and the production build. In the browser, verify both billing modes, the comparison dialog (including Escape and focus return), the mobile menu, FAQ disclosure, customer links, demo navigation and viewport sizes 390, 768 and 1440px. Compare homepage and standalone pricing. Do not submit a lead or book an appointment during checks.

Changes stay local until the owner approves shipping. The historical Obsidian notes are not rewritten.

### Local review, 3 November 2026

- TypeScript, ESLint, the production build and `git diff --check` pass. `/pricing` is prerendered.
- All five pricing tests pass. The broader suite passes 91 of 93 tests when run with an extensionless TypeScript import resolver. Two unchanged News tests expect the security release to be the newest article and omit the already-published Success Stories category. Direct Node execution also needs that resolver for the existing News imports; no test or source in that area was changed.
- Inspected desktop (1440×900), tablet (768×1024) and phone (390×844) screenshots; checked overflow at 320×568 and header clearance at 1280×464. All four desktop cards have matching top edges, heights and CTA positions. The dedicated page displays its opening table immediately.
- Verified identical monthly/annual values on homepage and Pricing, yearly totals, 11-row comparison dialog, Escape dismissal/focus return, native FAQ disclosure, mobile menu dismissal and Pricing navigation from home and Features.
- Followed the Business CTA to the existing demo page. No lead, booking or payment was submitted. External plan actions retain their existing calendar destination and safe new-tab attributes.
- Pricing, the existing homepage and Features, demo, linked customer articles, security article, sitemap, robots, llms map and pricing Markdown return HTTP 200. Canonical, one H1, active navigation, parsed offer/FAQ/breadcrumb schemas and Markdown negotiation pass.
- Browser warnings were the existing Usercentrics localhost allowlist/CMP messages. No new page error was observed.
- Work is uncommitted on `feat/pricing-page`. Production is unchanged.

### Unified booking flow, 4 November 2026

- Supersedes the previous calendar-link behaviour: all four plans now use `/book-a-demo`. The shared plan type restricts CTA destinations to that route, and the shared pricing component renders internal links only.
- Audited existing header, footer, hero, feature, use-case, article and closing conversion links. Updated the security-review enquiry and the mobile rail's booking shortcut too. Ordinary navigation, legal links and the existing booking form's own controls remain unchanged. The unmounted legacy waitlist form is preserved.
- Machine-readable pricing and contact content now sends every plan through the same booking flow.
- Fixed mobile-rail taps being captured as drags: capture begins only after meaningful movement, while keyboard activation remains available after dragging.
- Verification: TypeScript, ESLint, six pricing tests and the production build pass. A built-page audit checked 66 conversion links across 18 HTML pages: all use `/book-a-demo`, none opens a new tab, and no old calendar URL remains.
- Browser checks passed for Growth and Enterprise navigation, mobile rail tap and keyboard booking, and the unchanged FAQ section shortcut. The demo form was reached without submitting a lead or appointment. Final pricing view inspected; temporary mobile viewport restored.
- Changes remain local and uncommitted on `feat/pricing-page`; no push or deployment performed.

### Release preflight, 4 November 2026

- Fetched `origin/main`; the working branch is based on the latest production commit, `8f4a8835e24d4da260b37f09cf1f9d08c0e16165`, with no outgoing commits or other worktrees.
- Corrected two stale News test expectations to cover the existing Success Stories category and retain the security post without requiring it to remain the newest article. No News content changed; newest-first ordering, article retention, assets and category filtering remain asserted.
- All 94 tests pass using Node's `registerHooks` resolver for the repository's existing extensionless TypeScript imports. TypeScript, ESLint, the production build and whitespace checks pass.
- Rechecked pricing at 390, 768 and 1440px with no horizontal overflow. Monthly/annual prices, comparison dialog and Escape dismissal, mobile menu dismissal and Enterprise navigation to the demo page pass. The annual discount badge now stays on one line on phones.
- Homepage, Pricing, pricing Markdown, Features, News, demo, sitemap, robots and llms map return HTTP 200 locally; pricing Markdown content negotiation also passes. The existing production availability endpoint returns HTTP 200 with 144 available slots. No lead or appointment was submitted, so email/invite delivery was not exercised.
- Release scope is 18 files, including documentation and tests. No credentials, environment files, API implementations, database changes or dependency updates are included. Awaiting approval of the complete manifest before commit/push; production is not yet updated.
