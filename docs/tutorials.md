# Tutorials

> Updated 2 October 2026: Tutorials is now a category of the News hub. The canonical listing is `/news` and the Sales guide is `/news/sales-outreach`. Old page URLs permanently redirect; media stays under `/tutorials/`. See `docs/news.md` for the current publishing and verification notes. The original delivery record below is retained as history.

## Approved direction

Extend the approved dark homepage with a reusable Tutorials listing and article template. Follow the supplied OpenAI editorial references through generous whitespace, unboxed article cards, clear metadata and a narrow reading column, expressed in Checkgrow's existing Geist, black/charcoal and purple tokens. Use the current 8px media radius, restrained hover/focus states and supplied abstract imagery. No new sign-up or payment flow.

- Listing: `/tutorials`, linked from the shared footer.
- First article: `/tutorials/sales-outreach`.
- Primary article action: watch the short or full tutorial.
- Secondary conversion: existing `/#waitlist` early-access flow.
- Content: local typed tutorial records with one reusable article layout, ready for future posts.
- Media: self-hosted H.264 MP4 (short) and VP9 WebM (full), explicit click-to-play, native controls, no autoplay or video download before interaction.
- SEO: unique titles/descriptions, canonicals, social images, article/video/breadcrumb structured data and sitemap/LLM page entries.

The requested screenshots and first-post brief authorise this internal-page extension. Existing homepage changes and the current branch remain intact; no commit, push or deployment is part of this work.

## Source material

The two supplied recordings live outside the repository in `checkgrow-videos/tutorials/Drooms - Sales feature explained`. Preserve those originals. Review narration locally and cross-check the visible interface before writing instructional copy. Web copies must each stay below 15,000,000 bytes.

Layout references:
- https://openai.com/index/two-years-of-openai-academy/
- https://openai.com/index/paul-christiano-joins-openai-foundation-board/
- https://openai.com/index/introducing-dots/

## Verification

Static UI/content extension: the light verification path applies. No authentication, API, data-write or form-handling code was changed for this feature.

- TypeScript, ESLint and production build pass. Both tutorial routes are statically generated.
- All 59 tests pass (51 existing, 8 tutorial checks). Tutorial tests cover route lookup, unique anchors, required content, media size, caption timing and the live-send warning.
- Browser review at 320px, 390px, 768px and desktop widths: no horizontal overflow; readable headings, cards and videos; header clearance and in-page anchors work. Tablet listing uses two columns, desktop three, phone one.
- Both recordings play with native controls. Keyboard Enter starts the short video and Space pauses native playback. Starting the second recording pauses the first. Video elements have no source until the visitor presses Play.
- Footer → Tutorials → article and article → existing homepage early-access form checked. No live lead was submitted.
- HTTP checks: listing/article/home/sitemap return 200, unknown tutorial returns 404, both video and caption files support 206 byte-range responses with correct media types.
- Article metadata includes its own canonical, BlogPosting, VideoObject and breadcrumbs. Listing has CollectionPage/ItemList. Homepage FAQ/software/video schema stays on the homepage, not on tutorial pages.
- New pages introduce no package dependencies or external video embeds. Existing CSP permits the local media. Existing Docker recipe copies all public assets into production.
- No commit, push or deployment performed.

## Media preparation

| Recording | Duration | Web file | Exact size | Encoding |
| --- | --- | --- | --- | --- |
| Short | 6:36 | `sales-overview.mp4` | 14,315,447 bytes | H.264, two-pass 245 kb/s, 1280×746 at 15 fps, mono AAC 40 kb/s, fast-start |
| Full | 14:17 | `sales-full.webm` | 14,591,667 bytes | VP9, two-pass 108 kb/s, 1280×746 at 10 fps, mono Opus 24 kb/s |

Both are below the strict 15,000,000-byte ceiling. The full recording uses VP9 to preserve more interface detail than the tested H.264 version at this file size. The low frame rates suit screen demonstrations but are a deliberate trade-off for the requested size cap. Use current browsers; the playback error state offers a direct media link if embedded playback fails. The original MOVs remain unchanged outside this repository.

The guide was written from locally transcribed narration and reviewed video frames. Captions are supplied as WebVTT and explicitly labelled “English (auto-generated)”; name corrections were applied, but they are not a human-certified transcript. No recordings were uploaded for transcription. The copy distinguishes Message playground practice from approval in the live queue, which sends the message.

The listing and social images use supplied `checkgrow-bg-05-cobalt-sky` artwork. Posters are frames from the corresponding original recordings. Images are compressed WebP; the listing's first cover loads eagerly and subsequent covers lazily.

## Add another tutorial

1. Add a typed record to `src/lib/tutorials.ts`, with a unique slug, publication date, original copy, steps and two video records (short, then full).
2. Place the cover, `social.webp` (1200×630), posters, captions and compressed recordings in `public/tutorials/<slug>/`. Set exact paths and rounded duration seconds in the record. Keep each recording below 15 MB.
3. The News listing, static article route at `/news/<slug>`, canonical, structured data and sitemap derive from that record automatically. Add a descriptive article link to `public/llms.txt`.
4. Run typecheck, lint, all tests and the production build. Preview the new article on desktop and phone, play both videos, check captions, anchors and the existing early-access link. Publishing remains a separate approved action.
