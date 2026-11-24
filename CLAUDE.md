@AGENTS.md

# checkgrow-site

Checkgrow marketing website (waitlist launch page). Built and maintained under `>>website-builder` rules.

- **Dev URL:** http://localhost:8030 (`pnpm dev`; port registered in `../.ports.json` — user-specified 8030, an approved exception to the 8100–8999 range)
- **Design system:** bound to the Checkgrow Brand Pack at `~/developing-ai/Projects/brand/checkgrow` (tokens mapped in `src/app/globals.css`; never invent colours, type or icons — the pack wins). Docs in Obsidian: `Knowledge Projects/Projects/website-developer/checkgrow-site/`.
- **Stack:** Next.js App Router + TypeScript + Tailwind v4 + motion (motion.dev), pnpm.
- **Primary conversion:** Join the waitlist (form posts to `/api/waitlist`, stored in `.data/waitlist.jsonl` locally — swap for a real store before production).
- **Feature stories:** the homepage "In practice" section and `/features` play three-step animated feature screens from `src/lib/features.ts` (copy in `src/i18n/dictionaries/<lang>/features.ts`) + generated `src/lib/featureScreens.ts` (see `docs/features.md`). `public/mockups/dashboard.svg` remains only for `HeroV1`.

## Translations (en, pt-BR, de, fr)

The site ships in four languages; English is the source. Full rules: `docs/i18n.md`; terminology and typography: `docs/i18n-glossary.md`.

- Never write visible text in a component: every string (text, alt, aria, placeholder, metadata, validation) goes in `src/i18n/dictionaries/en/<namespace>.ts` and, in the same change, in `pt-BR/`, `de/` and `fr/`. A change that updates English only cannot ship: `pnpm build` runs `pnpm i18n:check` first and fails, so the Easy Panel build fails too.
- Page links use `LocalLink` / `localePath()`, never `next/link` or a raw `/path`.
- No new cookies or storage for language; never redirect by browser language; the language selector keeps the query string (UTMs).
- After regenerating a product mockup run `pnpm i18n:mockups` and translate the new texts in `src/i18n/dictionaries/<lang>/mockups.ts`.
- UI changes: run `pnpm i18n:layout` (all languages, 390/768/1440 px) before shipping. Anything touching tracking or the demo flow: run `pnpm i18n:flow` (add `--locale=/de` etc.).

## Shipping

- `project.json` and `docs/deploy.md` are the canonical deployment configuration and runbook.
- This website intentionally ships the **entire approved local working tree directly to `main`**. A push to `main` triggers the Easy Panel production deployment.
- Before staging, committing or pushing, print the complete `git add -A` manifest and wait for explicit approval.
- This repository has no Supabase deployment. The Next.js waitlist route and its external webhook integration ship with the website code.
