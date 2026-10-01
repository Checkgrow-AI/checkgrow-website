# Features: In practice and /features

## Approved direction (1 October 2026)

Bruno asked to replace the five static SVG mockups in the homepage "In practice" section with the new feature illustrations from the "Checkgrow Feature Illustrations" design canvas (claude.ai/artifact/XTQpCTrnxkeptwXHsrYd8H), each animated through its three steps on its own background. The homepage shows six features: Knowledge Centre, Insights, Campaigns, Creative Studio, Competitors and AI Assistant. A "See all features" button links to a new `/features` page that follows the Tutorials page design and shows all nine designed features (adding Content, Social Media and Sales).

- Layout follows Bruno's split-screen draft: framed stage on one side, eyebrow, title, scenario, body and three points on the other, alternating sides. Section labels have no dot (1 October editorial rule); media frames use the 8px card radius.
- Copy is rewritten per feature from the brief and the product inventory. It describes capabilities and invents no results. Numbers inside the mockups are illustrative product UI.
- Every stage has one standard size: rows that swap sides also mirror the 1.3fr/1fr columns, so alternate features never get the narrower column (feedback 1 October).
- Mockup UI keeps the canvas styling (light UI, `#6373FF` primary) inside the frame. Website controls keep the dark-site tokens.

## How it works

| Piece | Role |
| --- | --- |
| `src/lib/features.ts` | Single source: copy, three steps (label + caption), screen keys, background, `onHome` flag, `featurePath()` |
| `src/lib/featureScreens.ts` | Generated, static, inline-styled HTML for the 27 screens (1200×900). Do not hand-edit; regenerate from the canvas or kit |
| `src/components/features/FeatureStory.tsx` | Server component: renders the screens on the server (not in the client bundle) plus the story copy |
| `src/components/features/FeatureStage.tsx` | Client component: scales the artboard to the frame, cycles the steps, provides tabs, captions and pause |
| `src/components/features/Features.module.css` | Stage, tabs, layer choreography and `/features` page layout |
| `public/features/` | WebP backgrounds and portraits, channel/model logos, `social.webp` |

Stage behaviour:
- The artboard shows the central 1040px (980px below a 560px frame) so the UI reads larger. All screens keep their content within x 120–1080.
- Steps advance every 6s only while the stage is ≥35% in view, the tab is visible, the mouse is not over the frame and the visitor has not paused. Elements tagged `data-layer` fade up in sequence when a step becomes active. Progress bars grow and chart lines draw.
- Reduced motion: no autoplay and no layer animation; the tabs still switch steps.
- Accessibility: WAI-ARIA tabs with arrow/Home/End keys. The stage is a tabpanel with a screen-reader caption. Mockup markup is `aria-hidden` and `inert`, so its buttons are never focusable. A 44px pause/play toggle covers WCAG 2.2.2.

## SEO

`/features` has its own title, description, canonical, Open Graph/Twitter image (`/features/social.webp`, 1200×630), CollectionPage + ItemList + BreadcrumbList JSON-LD, one H1 and an H2 per feature with stable anchors (`/features#creative-studio`). It is in the sitemap, `llms.txt` and `llms-full.txt`, and the footer "Features" link now points to it. The homepage keeps its existing schema.

## Add or change a feature

1. Design or update the three screens on the canvas or with the feature-mockups kit (`data-layer` names drive animation).
2. Regenerate `src/lib/featureScreens.ts` and copy any new assets into `public/features/` (WebP for raster).
3. Add or edit the record in `src/lib/features.ts`; set `onHome` for the homepage.
4. Run `node --test tests/*.test.mjs`, typecheck, lint and build, then review desktop and phone.

The five retired SVGs (`knowledge-center`, `campaigns`, `ai-tasks`, `insights`, `website-reporting`) were deleted from `public/mockups/`; `dashboard.svg` stays for `HeroV1`.

## Verification — 1 October 2026

- `node --test tests/*.test.mjs`: 72 passing, including 14 new feature checks (unique anchors, homepage order, complete copy, 3 steps/3 screens, every referenced asset exists, no scripts or blob links in screens, no retired colour).
- TypeScript, ESLint and `next build` pass; `/features` is prerendered static.
- Scripted Chrome review at 1440×900 and 390×844 for the homepage section and `/features`: no horizontal overflow and no console errors. Step tab clicks, arrow-key focus movement, captions and pause/play were exercised. Steps 2 and 3 render correctly.
- Nothing was staged, committed, pushed or deployed.
