# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **pnpm** (lockfile is `pnpm-lock.yaml`). Cloudflare Worker deployment uses pnpm — keep in sync.

- `pnpm install` — install deps (runs `nuxt prepare` postinstall)
- `pnpm run dev` — dev server at `http://localhost:3000`
- `pnpm run build` — production build (SSR)
- `pnpm run generate` — static site generation
- `pnpm run preview` — preview built output

No test suite or linter is configured.

## Architecture

Nuxt 3 personal site. Single-page home plus a Markdown-driven `/posts` section.

- **Routing**: file-based via `pages/`. `pages/index.vue` composes the homepage from components in `components/` (auto-imported by Nuxt). `pages/posts/index.vue` lists posts; `pages/posts/[slug].vue` renders a single post.
- **Content**: posts live in `content/posts/*.md` and are served by `@nuxt/content` using `<ContentList>` / `<ContentDoc>` / `<ContentRenderer>`. Slugs come from filenames; frontmatter provides `title`, `description`, `date`, `tags`.
- **Styling**: Tailwind via `@nuxtjs/tailwindcss`. Global styles in `assets/css/global.css` (loaded via `nuxt.config.ts`). Custom theme tokens (`text`, `emphasis`, `background`, `regular`/`bold`/`small` font sizes, `spacing.margin`) are defined in `tailwind.config.js` — use these over hardcoded values to stay on-theme (pink text on black).
- **Client plugins**: `plugins/analytics.client.ts` injects `@vercel/analytics` (client-only by naming convention).
- **Public assets**: `public/oneko.js` is loaded globally via `useHead` in `app.vue` (cursor-chasing cat). `public/robots.txt` and favicon also served from here.

## Conventions

- Components are auto-imported; don't add explicit imports for anything under `components/`.
- Homepage copy lives inside component templates (no CMS for the home page) — edit `components/Introduction.vue`, `AboutMe.vue`, `Links.vue`, `MyPlaylist.vue` directly.
- New posts: drop a Markdown file into `content/posts/` with the frontmatter shape used by existing posts.
