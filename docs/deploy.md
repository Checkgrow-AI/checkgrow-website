# Checkgrow Website — Ship and Release Runbook

This is the canonical deployment runbook for `checkgrow-site`.

## Release rule

This repository intentionally ships **directly to `main`**. It has no staging branch and no release pull request. A successful push to `main` triggers the Easy Panel production deployment for `checkgrow.com`.

Every release remains approval-gated: show the complete working-tree manifest and wait for explicit approval before staging, committing or pushing. Once approved, `git add -A` ships every local website change in one commit. Nothing is selectively held back.

## Coordinates

| | |
|---|---|
| Repository | `https://github.com/Checkgrow-AI/checkgrow-website.git` (`origin`); SSH equivalent `git@github.com:Checkgrow-AI/checkgrow-website.git` |
| Ship and production branch | `main` |
| Production | Easy Panel builds `Dockerfile` and proxies the standalone Next.js server on port 3000 |
| Local development | `pnpm dev` at `http://localhost:8030` |
| Required production variable | `WAITLIST_WEBHOOK_URL` |

## `>>ship` sequence

1. Confirm the repository, direct `main` target and clean Git operation state.
2. Fetch `origin/main` and inspect the entire local working tree.
3. Confirm there are no Supabase migrations or edge functions. This frontend-only repository has no Supabase deployment step.
4. Run `pnpm exec tsc --noEmit --incremental false`, `pnpm lint` and `pnpm build`.
5. For UI changes, inspect the result at 390px, 768px and 1440px and check for horizontal overflow.
6. Print every file that `git add -A` will stage and wait for explicit approval.
7. Switch to `main` when needed, preserving the approved working tree, then run `git add -A` and commit everything with a descriptive subject.
8. Push directly to `origin/main`.
9. Confirm the working tree is clean and local `main` equals `origin/main`.

## Backend policy

- This repository contains no Supabase project, migrations or edge functions.
- `/api/waitlist` is a Next.js route deployed with the website. It forwards accepted leads to the existing Checkgrow webhook through `WAITLIST_WEBHOOK_URL`.
- Never test production signup delivery during a ship unless creating a test lead is explicitly authorised.
- A missing or failing webhook must remain a loud 5xx response. Never report a signup success after a failed delivery.

## Production notes

- Easy Panel performs the Docker build remotely because Docker is unavailable on the local Mac.
- The Docker service listens on port 3000. Local development stays on the registered port 8030.
- `checkgrow.com` is canonical; `www.checkgrow.com` redirects to the apex domain.
