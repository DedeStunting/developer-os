# App Router — Framework Entry Points

Next.js App Router routes live here. Each route file is a thin composition layer that imports from `src/features/`.

## Planned Routes (Phase 3)

| File                       | Route             |
| -------------------------- | ----------------- |
| `page.tsx`                 | `/`               |
| `layout.tsx`               | Root layout       |
| `about/page.tsx`           | `/about`          |
| `projects/page.tsx`        | `/projects`       |
| `projects/[slug]/page.tsx` | `/projects/:slug` |
| `resume/page.tsx`          | `/resume`         |
| `contact/page.tsx`         | `/contact`        |
| `not-found.tsx`            | 404               |

Routes are implemented in Phase 3. See `docs/15-page-specifications.md`.
