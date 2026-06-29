# Design Review Checklist

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

This checklist is used before merging any feature into `main`. Every item must pass. No exceptions for MVP.

Use this for pull requests, vertical slice completions, and pre-deployment reviews.

---

## Visual

- [ ] Typography follows tokens (`21-typography-spec.md`)
- [ ] No arbitrary font sizes or weights outside the scale
- [ ] Spacing follows the 4px scale (`09-design-tokens.md`)
- [ ] No arbitrary margin/padding values (e.g., `13px`, `37px`)
- [ ] Colors follow the palette (`packages/ui/styles/colors.ts`)
- [ ] No hardcoded hex values in components
- [ ] Components use approved variants only (`22-component-spec.md`)
- [ ] One primary button per visible section
- [ ] Consistent border radius per component type
- [ ] No glassmorphism, neon gradients, or heavy shadows

---

## Accessibility

- [ ] All interactive elements keyboard accessible
- [ ] Tab order is logical
- [ ] Skip to main content link present
- [ ] Focus visible on keyboard navigation (`:focus-visible`)
- [ ] Color contrast passes WCAG AA (`24-accessibility-spec.md`)
- [ ] Semantic HTML landmarks (`header`, `main`, `footer`, `nav`)
- [ ] One `h1` per page, no skipped heading levels
- [ ] All images have meaningful `alt` text
- [ ] Form fields have associated labels
- [ ] Error messages use `role="alert"` and `aria-describedby`
- [ ] External links announce "opens in new tab"
- [ ] `prefers-reduced-motion` respected
- [ ] Lighthouse Accessibility ≥ 95

---

## Performance

- [ ] No layout shift (CLS < 0.1)
- [ ] Images use Next.js `Image` with width/height
- [ ] Images lazy loaded below the fold
- [ ] Page is statically generated where specified (`07-system-architecture.md`)
- [ ] Server Components used by default
- [ ] Client Components justified and minimal
- [ ] Initial JS bundle impact reviewed (< 200KB target)
- [ ] No unnecessary client-side data fetching
- [ ] Fonts loaded via `next/font` with subset
- [ ] Lighthouse Performance ≥ 95

---

## SEO

- [ ] Page `title` set via metadata API
- [ ] Meta `description` set
- [ ] Canonical URL defined
- [ ] Open Graph tags present (title, description, image)
- [ ] `robots` directive appropriate (index/noindex)
- [ ] Semantic heading structure supports content outline
- [ ] Structured data (future — JSON-LD)

---

## Engineering

- [ ] No duplicated components — reuses `packages/ui`
- [ ] No business logic in UI components
- [ ] No direct imports from `platform/content/` in apps
- [ ] Content consumed through `packages/core`
- [ ] Uses shared packages only (`ui`, `core`, `types`, `config`)
- [ ] Dependency rules followed (`07-system-architecture.md`)
- [ ] TypeScript strict — no `any` without justification
- [ ] Zod validation on structured content
- [ ] Feature code in correct `src/features/` module
- [ ] Route files in `app/` are thin composition layers

---

## Interaction

- [ ] Hover states match spec (`23-interaction-spec.md`)
- [ ] Focus states match spec
- [ ] Transitions use approved durations (150ms, 200ms, 300ms)
- [ ] No animation without documented purpose
- [ ] Loading states use skeleton or inline spinner (not full-page)
- [ ] Error states display gracefully
- [ ] Empty states handled where applicable

---

## Content

- [ ] Content sourced from `platform/content/` — not hardcoded
- [ ] Passes Zod schema validation
- [ ] No placeholder text in production
- [ ] Links verified (GitHub, live demo, email)
- [ ] Project page follows case study template (`18-project-detail-wireframe.md`)

---

## Storybook (Components Only)

- [ ] New primitives have Storybook stories
- [ ] All variants documented
- [ ] All states documented (default, hover, focus, disabled, loading, invalid)
- [ ] Storybook build passes in CI

---

## CI / Quality Gates

- [ ] TypeScript type check passes
- [ ] Lint passes
- [ ] Build passes
- [ ] No new console errors or warnings

---

## Sign-Off

| Reviewer     | Date | Slice/Page |
| ------------ | ---- | ---------- |
| Chiedu David |      |            |

---

## Related Documents

| Document                    | Scope                      |
| --------------------------- | -------------------------- |
| `21-typography-spec.md`     | Typography rules           |
| `22-component-spec.md`      | Component variants         |
| `23-interaction-spec.md`    | Motion and hover           |
| `24-accessibility-spec.md`  | Accessibility requirements |
| `07-system-architecture.md` | Engineering rules          |
