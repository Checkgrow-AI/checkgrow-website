# Use Cases: /use-cases

Archive plus one page per use case, in the News/Tutorials identity with product mockups on the brand backgrounds. Content adapted from the "Checkgrow Use Case Articles" design (October 2026) and checked against the platform.

| Piece | Role |
|---|---|
| `src/lib/useCases.ts` | Content: hero steps, problem and quote, four steps, "See it work", outcomes, testimonial, success-story proof, FAQ (incl. what Checkgrow doesn't do), related, keywords, share image |
| `src/components/use-cases/mockups/` | 15 mockups (`UseCaseMockups.tsx`, kit, CSS): 1200×900 light-UI artboards in the Feature Illustrations style, modelled on the real platform (labels, tabs, statuses). Figures are illustrative demo data, never client data |
| `src/components/use-cases/UseCaseStage.tsx` | Plays mockups through `FeatureStage` (hero: 3 tabs; steps: one animated screen) |
| `src/app/use-cases/` | Archive and `[slug]` pages; Article + HowTo + FAQPage + BreadcrumbList JSON-LD |
| `public/use-cases/` | 1200×630 share images (hero mockup on its background), content-hashed |

Also: footer "Use cases" link, sitemap entries, `llms.txt` / `llms-full.txt` sections. `FeatureStage` gained a single-screen mode (no tabs/autoplay).

Add a use case: add the record in `useCases.ts`, build any new mockup in `UseCaseMockups.tsx` and register its key, render a share image, then typecheck, lint, build and review desktop and phone.
