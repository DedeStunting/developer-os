# Developer OS — System Architecture

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## 1. Purpose

This document defines the technical architecture of Developer OS. It is the authoritative reference for all implementation decisions in Phase 2 and beyond.

### Architectural Goals

| Goal | Description |
|------|-------------|
| **Maintainability** | Code and content are organized so changes are localized and predictable. |
| **Scalability** | New products, pages, and content types fit without architectural rewrites. |
| **Replaceability** | Applications are thin consumers; the platform and core layers persist if UI frameworks change. |
| **Performance** | Static generation by default; client JavaScript minimized. |
| **Testability** | Business logic in `packages/core` is framework-agnostic and unit-testable. |
| **Developer Experience** | Clear dependency rules, typed contracts, and schema validation reduce errors. |

---

## 2. High-Level Architecture

```
                    Developer OS

                    Platform Layer
     ┌──────────────────────────────────────────┐
     │ Content │ Schemas │ Config │ Generated   │
     └──────────────────────────────────────────┘
                      │
                      ▼
                  Core Package
     ┌──────────────────────────────────────────┐
     │ Validation │ SEO │ Services │ Formatting │
     └──────────────────────────────────────────┘
                      │
        ┌─────────────┴─────────────┐
        ▼                           ▼
     Web App                   Resume App
```

Developer OS is a **platform**, not a website. Applications are products that consume platform data and core services.

### Product Applications

| Product | Path | Purpose |
|---------|------|---------|
| **Web** | `apps/web` | Primary website — portfolio, resume, blog, contact, and all public-facing pages |
| **Studio** | `apps/studio` | Future content management application |
| **Resume** | `apps/resume` | Dedicated resume generator — ATS and branded PDF variants |

"Portfolio" is a feature within Web, not a product. Web grows to contain portfolio, blog, speaking, open source, uses, notes, architecture, timeline, certifications, reading, and contact — without renaming the application.

---

## 3. Layer Responsibilities

### Platform (`platform/`)

**Owns:**

- Content (`platform/content/`)
- Schemas (`platform/schemas/`)
- Generated artifacts (`platform/generated/`)
- Configuration (`platform/config/`)
- Assets (`platform/assets/`)

**Never renders UI.**

The platform is the single source of truth for all professional content. It has no knowledge of React, Next.js, or any presentation framework.

### Core (`packages/core/`)

**Owns:**

- Business logic
- Content validation wrappers
- SEO metadata generation
- RSS and sitemap services
- Formatting utilities
- Analytics helpers

**No React.**

Core is framework-agnostic TypeScript. It can be tested, reused across products, and run in build scripts without a browser.

### Applications (`apps/`)

**Own:**

- Pages
- Components
- Routing
- Rendering
- User interactions

**Thin by design.**

Applications import from `packages/core`, `packages/ui`, and `packages/types`. They do not contain business logic, content parsing, or schema definitions.

---

## 4. Dependency Rules

Dependency flow is strictly downward. Violations are build failures.

### Allowed

```
apps/web
    ↓
packages/ui
    ↓
packages/core
    ↓
packages/types
    ↓
platform
```

Applications may import from `ui`, `core`, `types`, and platform schemas. Core may import from `types` and platform. Types may import from nothing in the monorepo.

### Forbidden

| Rule | Reason |
|------|--------|
| `platform` → React | Platform must remain framework-agnostic |
| `platform` → Next.js | Platform must remain framework-agnostic |
| `packages/core` → Next.js | Core must remain framework-agnostic |
| `packages/core` → React | Core must remain framework-agnostic |
| `packages/types` → any app or UI package | Types are leaf contracts |
| `apps/*` → `platform/content` directly | Apps consume content through `packages/core` |

These rules keep the architecture clean and prevent coupling that would make applications difficult to replace.

---

## 5. Package Dependency Diagram

```
apps/web
    │
    ├── @developer-os/ui
    ├── @developer-os/core
    └── @developer-os/types

packages/ui
    │
    ├── @developer-os/types
    └── (React, Tailwind, shadcn/ui)

packages/core
    │
    ├── @developer-os/types
    └── @developer-os/platform (schemas)

packages/types
    │
    └── (no internal dependencies)

platform
    │
    └── zod
```

### Shared Type Contracts (`packages/types/`)

TypeScript interfaces define contracts between packages and applications. Zod schemas in `platform/schemas/` validate data at runtime. Types and schemas describe the same shapes — schemas enforce, types contract.

| File | Domain |
|------|--------|
| `project.ts` | Project metadata and listing |
| `resume.ts` | Profile, experience, education, skills |
| `navigation.ts` | Site navigation items |
| `seo.ts` | Page-level SEO metadata |
| `blog.ts` | Blog post metadata (future) |

---

## 6. Rendering Strategy

Every page must declare its rendering strategy at implementation time.

| Page | Strategy | Rationale |
|------|----------|-----------|
| Home | Static | Content rarely changes; maximum performance |
| About | Static | Content rarely changes |
| Projects (listing) | Static | Rebuilt on content change |
| Project Details | Static | MDX + metadata compiled at build time |
| Resume | Static | Content-driven; PDF generated separately |
| Contact | Server Action | Form submission requires server runtime |

### Component Defaults

| Type | Default | When to use Client |
|------|---------|-------------------|
| Server Component | Yes | Default for all pages and layouts |
| Client Component | No | Forms, animations, interactive UI only |

### Caching

- Static pages: generated at build time, served from CDN
- ISR: not used in MVP; reconsider for blog in Epic 6
- Dynamic: contact form handler only

---

## 7. Build Pipeline

```
Content (platform/content/)
        ↓
Validation (platform/schemas + packages/core/validation)
        ↓
Generated Metadata (platform/generated/)
        ↓
Next.js Build (apps/web)
        ↓
Static Output
        ↓
Deploy (Vercel)
```

### Build Steps

1. **Validate** — All structured content files pass Zod schema validation
2. **Generate** — SEO metadata, sitemap entries, RSS feeds written to `platform/generated/`
3. **Compile** — Next.js builds static pages from validated content via `packages/core`
4. **Deploy** — Vercel serves static output; server actions available for contact form

Build fails on invalid schema. No invalid content reaches production.

---

## 8. Error Boundaries

| Failure | Behavior |
|---------|----------|
| Missing content file | `404` page |
| Invalid schema at build time | Build failure with descriptive error |
| Invalid schema at runtime | Log error; render fallback UI |
| Contact form submission failure | Graceful UI message; no stack trace exposed |
| Missing project slug | `404` page |
| External link failure (GitHub, demo) | Link renders; failure is external |

### Error Page Strategy

- `not-found.tsx` for missing routes and content
- `error.tsx` for unexpected runtime failures
- Build-time validation prevents most runtime content errors

---

## 9. Performance Strategy

### Targets

| Metric | Target |
|--------|--------|
| Initial JavaScript | < 200 KB |
| Lighthouse Performance | ≥ 95 |
| Time to Interactive | < 2 seconds |
| Largest Contentful Paint | < 1.5 seconds |

### Strategies

- **Static generation by default** — All MVP pages pre-rendered at build time
- **Server Components first** — Client bundles contain only interactive features
- **Image optimization** — Next.js `Image` component with WebP/AVIF
- **Font optimization** — `next/font` with subset loading
- **Lazy-loaded interactivity** — Framer Motion and form components loaded on demand
- **No unnecessary client state** — Content passed as props from server

---

## 10. Security

Although Developer OS is a personal platform, production security standards apply.

| Concern | Strategy |
|---------|----------|
| **CSP** | Content Security Policy headers via Next.js config |
| **Secure headers** | `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy` |
| **Rate limiting** | Contact form rate limited per IP (Vercel middleware or Upstash) |
| **Input validation** | Zod validation on all form inputs server-side |
| **Email abuse prevention** | Honeypot field + rate limiting on contact form |
| **Environment variables** | Secrets in Vercel env; never committed to repository |
| **Dependencies** | Regular audit via `pnpm audit` in CI |

---

## 11. Scalability

New products fit into the architecture without structural changes.

```
apps/
├── web/        ← primary website (portfolio, blog, contact, ...)
├── studio/     ← future CMS
├── resume/     ← resume generator
└── api/        ← future public API
```

Adding a new product:

1. Create `apps/<product>/` as a Next.js application
2. Add workspace entry to `pnpm-workspace.yaml`
3. Import from `packages/core`, `packages/ui`, `packages/types`
4. No changes to `platform/` or `packages/core/` unless new content types are required

Adding a new page to Web:

1. Add content to `platform/content/`
2. Add route in `apps/web/`
3. Rebuild — no architectural changes

Adding a new content type:

1. Add Zod schema to `platform/schemas/`
2. Add TypeScript type to `packages/types/`
3. Add loader to `packages/core/content/`
4. Applications consume through core — never directly from platform

---

## 12. Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Content | MDX + TypeScript modules |
| Validation | Zod |
| Monorepo | Turborepo + pnpm |
| Deployment | Vercel |
| Email | Resend |
| Analytics | Plausible (post-MVP) |

---

## Related Documents

| Document | Scope |
|----------|-------|
| `08-design-system.md` | Visual language and component standards |
| `09-routing-architecture.md` | URL structure and navigation |
| `10-component-architecture.md` | Component hierarchy and patterns |
| `11-data-flow.md` | Content loading and prop flow |
| `12-state-management.md` | Client and server state strategy |
| `13-deployment-architecture.md` | CI/CD, environments, and hosting |
