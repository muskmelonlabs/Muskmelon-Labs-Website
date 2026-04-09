# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

- **muskmelon-website** (`artifacts/muskmelon-website/`) — Main Muskmelon Labs marketing/product website. React + Vite, no backend. Serves at `/` (root). Sections: Hero, Trust bar, Products grid, Case Studies, Process accordion, Team, Philosophy, Contact, Footer. Dark `#0B0F14` theme, sharp edges (no border-radius), clip-path angled cards, fade-in animations, orange `#FF6A00` accent. Nav links to Brand Book at `/brand-book/`.
- **brand-book** (`artifacts/brand-book/`) — Muskmelon Labs Brand Identity System. React + Vite, no backend. Serves at `/brand-book/`. Includes: Identity, Values, Logo, Color, Typography, Design Language, Product Principles sections. Dark `#0F172A` navy theme, Inter font, faceted geometric visual system derived from the logo SVG.
- **mockup-sandbox** (`artifacts/mockup-sandbox/`) — Canvas mockup server. Brand book mockup lives at `src/components/mockups/brand-book/MuskmelonBrandBook.tsx`.
- **api-server** (`artifacts/api-server/`) — Shared Express 5 API backend. Serves at `/api`.

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
