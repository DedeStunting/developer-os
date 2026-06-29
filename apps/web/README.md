# Web Application

The primary Developer OS product — public website for portfolio, resume, blog, and contact.

## Structure

```
apps/web/
├── app/          # Next.js App Router — framework entry points (routes, layouts)
└── src/          # Application code — features, shared components, utilities
```

### Separation of Concerns

| Directory | Responsibility |
|-----------|----------------|
| `app/` | Route definitions, layouts, loading/error boundaries, metadata exports |
| `src/features/` | Page-specific logic, components, and actions grouped by domain |
| `src/components/` | App-level shared components not tied to a single feature |
| `src/lib/` | App-level utilities and helpers |

### Feature Modules

| Feature | Route | Wireframe |
|---------|-------|-----------|
| `home` | `/` | `docs/16-home-wireframe.md` |
| `about` | `/about` | `docs/15-page-specifications.md` |
| `projects` | `/projects`, `/projects/[slug]` | `docs/17-projects-wireframe.md`, `docs/18-project-detail-wireframe.md` |
| `resume` | `/resume` | `docs/19-resume-wireframe.md` |
| `contact` | `/contact` | `docs/20-contact-wireframe.md` |

Route `page.tsx` files in `app/` compose feature modules from `src/features/`. Business logic stays in `packages/core`.

## Phase 3

Next.js application setup and route implementation begins in Phase 3 — Vertical Slice 1 (Foundation).
