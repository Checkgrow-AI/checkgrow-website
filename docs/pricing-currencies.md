# Pricing currency display

- The homepage and `/pricing` share `Pricing.tsx`, `pricing.ts` and the currency control. All conversion CTAs still lead to `/book-a-demo`.
- EUR is the canonical commercial currency. EUR, CHF, USD and BRL are display choices, identified by flag and ISO code before Monthly/Yearly. The dark pill controls use existing colour, radius, focus and spacing tokens.
- `displayPrice` converts the original EUR amount, then drops the fractional part. Annual totals use the unrounded discounted EUR monthly price multiplied by 12, never twelve truncated displayed months. The comparison modal follows the chosen currency but retains its monthly comparison basis.
- Exact commercial EUR amounts, annual discount, metadata and machine-readable pricing remain unchanged. The public FAQ explains that the whole-number figures are estimates, not new billing amounts.
- `GET /api/exchange-rates` retrieves CHF, USD and BRL from [Frankfurter v2](https://frankfurter.dev/), restricted to ECB observations, with EUR as base. These are daily reference rates, not live trading quotes; the observation date is visible beside the source attribution.
- The server validates all three rates and their common date, rejects non-positive/non-finite rates, future dates and observations older than seven days. This allows weekends and public holidays without labelling old quotes as live.
- Validated snapshots are cached for one hour per server process, simultaneous requests share the same fetch, and errors back off for one minute. The provider fetch times out after five seconds; the browser request after eight. Public successful responses can be browser-cached for five minutes. Errors return HTTP 503 with `no-store` and `Retry-After: 60`.
- On loading/failure, EUR prices and booking links remain usable. Other currencies become available once a valid snapshot loads. Failure shows an explanation and Retry rates action; no invented or silently stale rates are substituted.
- The browser refreshes hourly and on returning to an old tab. Only the chosen currency code is kept in session storage for navigation/reload; blocked storage does not break conversion. There are no cookies, identity fields, account data or writes in this endpoint.
- The browser calls only the same-origin endpoint. No CSP expansion, API key, new dependency, tracking gateway or client data transfer is needed.

## Verification

`tests/pricingCurrency.test.mjs` covers supported currencies, truncation, both billing modes, annual totals, invalid/stale/future observations, provider errors, timeouts, deduplication, cache expiry and HTTP status. Existing pricing tests retain exact underlying EUR commercial amounts. Also verify the dropdown, comparison modal, booking links, keyboard access, retry and both page locations at mobile, tablet and desktop sizes before shipping.

Local verification on 5 November 2026:

- Original production-mode browser checks passed at 320, 390, 768, 1280 and 1440px for all four currencies and both billing modes. Screenshots inspected at desktop and mobile widths.
- Comparison prices, Enterprise Custom, all plan CTA destinations, reload preference and shared homepage pricing passed. Simulated rate failure preserved EUR; retry restored conversion even with session storage denied.
- The real rate endpoint returned 200 with ECB observations dated 4 November; a POST returned 405. The endpoint is public/read-only with no identities, tenant data or persistence, so tenant permission and database-write tests do not apply.
- Unrelated pre-existing issue: the homepage `FeatureStage.tsx` conditionally renders its pause control from `useReducedMotion`, causing a hydration warning with reduced motion enabled. No changes made to that animation component. Currency-page tests with reduced motion and homepage tests with ordinary motion passed.

## Menu design refinement

Bruno rejected the native operating-system dropdown because its blue selection and square menu were inconsistent with the site. `CurrencySelect.tsx` now renders a branded select-only combobox before the billing toggle: 8px menu corners, existing raised surface and purple accents, full currency names, flags and a selected checkmark. It shares the billing control's height, typography and pill shape. No exchange-rate or billing logic changed.

Keyboard support includes arrows, Home/End, initial-letter navigation, Enter/Space selection, Escape cancellation and Tab selection without trapping focus. Outside clicks dismiss; unavailable conversions are visibly and semantically disabled. The panel opens above the trigger when there is insufficient space below.

The refined menu passed browser checks at 320, 390, 768 and 1440px for every currency/billing combination, keyboard interaction, click-away, reload preference, touch selection and error/retry recovery. The full test suite, typecheck, lint and production build were rerun.

## Pricing layout refinement

The Customer results and Pricing questions shortcut links were removed from the pricing header to bring the plans higher into view. The mobile Book a demo shortcut remains. The whole-number/EUR disclaimer, rate-source link, observation date and failure/retry status now sit below all four plan cards, beside the Growth Credits note. The currency trigger retains its accessible connection to that status text. Customer stories and FAQ sections remain on the page.
