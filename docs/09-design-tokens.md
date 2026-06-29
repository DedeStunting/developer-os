# Developer OS — Design Tokens

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Design tokens are the single source of truth for visual values. All tokens are defined as TypeScript constants in `packages/ui/styles/` and consumed by components and applications. No hardcoded values in components.

---

## 1. Spacing Scale

Based on a 4px base unit. Use consistently for margin, padding, and gap.

| Token      | Value | Use                             |
| ---------- | ----- | ------------------------------- |
| `space-1`  | 4px   | Tight inline spacing, icon gaps |
| `space-2`  | 8px   | Compact padding, badge padding  |
| `space-3`  | 12px  | Small component padding         |
| `space-4`  | 16px  | Default component padding       |
| `space-6`  | 24px  | Card padding, section gaps      |
| `space-8`  | 32px  | Section padding (mobile)        |
| `space-10` | 40px  | Medium section spacing          |
| `space-12` | 48px  | Large section spacing           |
| `space-16` | 64px  | Section margins                 |
| `space-20` | 80px  | Major section breaks            |
| `space-24` | 96px  | Page section spacing            |
| `space-32` | 128px | Hero spacing, page top padding  |

### Rules

- Use scale values only — no arbitrary values like `13px` or `37px`
- Vertical rhythm: prefer `space-16` and `space-24` between page sections
- Component internal padding: prefer `space-4` to `space-6`

---

## 2. Radius Scale

| Token         | Value  | Use                 |
| ------------- | ------ | ------------------- |
| `radius-sm`   | 4px    | Badges, small chips |
| `radius-md`   | 8px    | Buttons, inputs     |
| `radius-lg`   | 12px   | Cards, modals       |
| `radius-xl`   | 16px   | Large cards, images |
| `radius-2xl`  | 20px   | Hero elements       |
| `radius-3xl`  | 24px   | Feature containers  |
| `radius-full` | 9999px | Avatars, pills      |

### Rules

- Cards use `radius-lg`
- Buttons and inputs use `radius-md`
- Avoid mixing radius sizes within the same component group

---

## 3. Shadow Levels

Keep shadows subtle. Developer OS is not a material design showcase.

| Token         | Value      | Use                         |
| ------------- | ---------- | --------------------------- |
| `shadow-none` | none       | Default — most elements     |
| `shadow-sm`   | subtle     | Cards on hover, dropdowns   |
| `shadow-md`   | moderate   | Modals, popovers            |
| `shadow-lg`   | pronounced | Rare — floating panels only |

### Rules

- Default state: `shadow-none`
- Elevation on interaction only (hover, focus, open)
- Never stack multiple shadow levels on one element

---

## 4. Breakpoints

Mobile-first. Design for smallest screen, enhance upward.

| Token | Value  | Target       |
| ----- | ------ | ------------ |
| `sm`  | 640px  | Large phones |
| `md`  | 768px  | Tablets      |
| `lg`  | 1024px | Laptops      |
| `xl`  | 1280px | Desktops     |
| `2xl` | 1536px | Wide screens |

### Rules

- Base styles target mobile (< 640px)
- Navigation collapses to mobile menu below `lg`
- Project grid: 1 column → 2 columns (`md`) → 3 columns (`lg`)

---

## 5. Container Width

| Token               | Value                                                        |
| ------------------- | ------------------------------------------------------------ |
| `container-max`     | 1280px                                                       |
| `container-padding` | `space-4` (mobile), `space-6` (tablet+), `space-8` (desktop) |

**Never wider than 1280px.** Content readability degrades beyond this width. Wide screens show more whitespace, not wider content.

### Content Width Variants

| Variant            | Max Width | Use                          |
| ------------------ | --------- | ---------------------------- |
| `container`        | 1280px    | Default page layout          |
| `container-narrow` | 768px     | Blog posts, case study prose |
| `container-wide`   | 1280px    | Project grids, resume layout |

---

## 6. Color Tokens

See `packages/ui/styles/colors.ts` for implementation.

| Category   | Tokens                                                   |
| ---------- | -------------------------------------------------------- |
| Background | `background`, `background-subtle`, `background-muted`    |
| Foreground | `foreground`, `foreground-secondary`, `foreground-muted` |
| Border     | `border`, `border-subtle`                                |
| Accent     | `accent`, `accent-foreground`                            |
| Semantic   | `success`, `warning`, `error` (+ foreground variants)    |

All color tokens are defined as CSS-compatible string values. Dark mode variants will be added as `*-dark` counterparts when implemented.

---

## 7. Typography Tokens

See `packages/ui/styles/typography.ts` for implementation.

| Category       | Tokens                                                     |
| -------------- | ---------------------------------------------------------- |
| Font family    | `font-sans`, `font-mono`                                   |
| Font size      | `text-xs` through `text-6xl`                               |
| Font weight    | `font-normal`, `font-medium`, `font-semibold`, `font-bold` |
| Line height    | `leading-tight`, `leading-normal`, `leading-relaxed`       |
| Letter spacing | `tracking-tight`, `tracking-normal`                        |

---

## 8. Token Consumption

```typescript
import { spacing, colors, typography } from "@developer-os/ui/styles";

// Components consume tokens — never hardcode values
const cardPadding = spacing[6]; // 24px
```

### Rules

- Components import from `@developer-os/ui/styles`
- Applications import components from `@developer-os/ui`
- No token values duplicated in application code
- Tailwind config will extend from these tokens when UI is implemented

---

## Implementation

| File                                | Tokens                 |
| ----------------------------------- | ---------------------- |
| `packages/ui/styles/spacing.ts`     | Spacing scale          |
| `packages/ui/styles/radius.ts`      | Border radius          |
| `packages/ui/styles/shadows.ts`     | Box shadows            |
| `packages/ui/styles/breakpoints.ts` | Responsive breakpoints |
| `packages/ui/styles/colors.ts`      | Color palette          |
| `packages/ui/styles/typography.ts`  | Type scale             |
