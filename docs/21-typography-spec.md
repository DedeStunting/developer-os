# Typography Specification

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Typography does the majority of visual work on Developer OS. Hierarchy comes from size, weight, and spacing — not color. Every text style is defined here. No arbitrary font sizes in components.

---

## 1. Font Stack

| Role | Font | Fallback | Use |
|------|------|----------|-----|
| **Primary** | Geist Sans | `ui-sans-serif, system-ui, sans-serif` | UI, headings, body |
| **Monospace** | Geist Mono | `ui-monospace, monospace` | Code, technical labels |

### Why Geist?

- Modern and highly readable
- Native Next.js support via `next/font`
- Used by Vercel — aligns with reference aesthetic
- Lightweight with excellent subset loading
- Professional without being generic

### Implementation

```typescript
// apps/web — loaded via next/font
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
```

Token reference: `packages/ui/styles/typography.ts` → `fontFamily.sans`, `fontFamily.mono`

---

## 2. Heading Scale

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|-------|------|--------|-------------|----------------|-----|
| `display` | 64px | 700 | 1.1 | -0.03em | Landing heroes only |
| `h1` | 48px | 700 | 1.15 | -0.025em | Page titles |
| `h2` | 36px | 700 | 1.2 | -0.025em | Major sections |
| `h3` | 30px | 600 | 1.25 | -0.02em | Subsections |
| `h4` | 24px | 600 | 1.3 | -0.015em | Card titles |
| `h5` | 20px | 600 | 1.4 | normal | Minor headings |
| `h6` | 18px | 600 | 1.4 | normal | Labels, overlines |

### Rules

- One `h1` per page
- Never skip heading levels (`h1` → `h3`)
- `display` reserved for Home and About heroes
- Headings use `foreground`, never `accent` for hierarchy

### HTML Mapping

| Token | Element |
|-------|---------|
| `display` | `h1` with `display` class on hero only |
| `h1`–`h6` | Semantic `h1`–`h6` |

---

## 3. Body Scale

| Token | Size | Weight | Line Height | Use |
|-------|------|--------|-------------|-----|
| `body-lg` | 20px | 400 | 1.625 | Lead paragraphs, hero subtext |
| `body` | 16px | 400 | 1.5 | Default body text, MDX prose |
| `body-sm` | 14px | 400 | 1.5 | Secondary text, metadata |
| `caption` | 12px | 400 | 1.4 | Captions, footnotes, timestamps |

### Prose Rules

- Max line length: **65–75 characters** (`container-narrow`)
- Paragraph spacing: `space-4` (16px) between paragraphs
- Lists: `space-2` (8px) between items
- Bold for emphasis — not color, not underline

---

## 4. Line Heights

| Token | Value | Use |
|-------|-------|-----|
| `leading-tight` | 1.25 | Large headings (h3–h6) |
| `leading-snug` | 1.375 | h4, h5 |
| `leading-normal` | 1.5 | Body text, UI labels |
| `leading-relaxed` | 1.625 | Long-form prose, case studies |

### Ratios by Context

| Context | Size → Line Height |
|---------|-------------------|
| Display (64px) | 1.1 |
| H1 (48px) | 1.15 |
| H2 (36px) | 1.2 |
| H3 (30px) | 1.25 |
| Body (16px) | 1.5 |
| Body-lg (20px) | 1.625 |
| Caption (12px) | 1.4 |

---

## 5. Letter Spacing

**Only headings receive custom tracking.** Body text uses `normal` (0em).

| Token | Value | Applied To |
|-------|-------|------------|
| `tracking-tighter` | -0.03em | Display |
| `tracking-tight` | -0.025em | H1, H2 |
| `tracking-snug` | -0.02em | H3 |
| `tracking-normal` | 0em | H4–H6, all body text |

### Rules

- Never apply negative tracking to body text
- Never use positive letter-spacing (no spaced caps)
- Mono text uses `tracking-normal` always

---

## 6. Font Weights

| Token | Value | Use |
|-------|-------|-----|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Nav links, labels |
| `font-semibold` | 600 | h3–h6, emphasis |
| `font-bold` | 700 | h1, h2, display |

Only these four weights. No `font-light` (300) or `font-extrabold` (800).

---

## 7. Special Text Styles

| Style | Font | Size | Use |
|-------|------|------|-----|
| `code-inline` | Geist Mono | 14px | Inline code in prose |
| `code-block` | Geist Mono | 14px | Code blocks |
| `overline` | Geist Sans | 12px, 600, uppercase | Section labels (sparingly) |
| `link` | Geist Sans | inherit | Underline on hover |

---

## 8. Responsive Typography

Headings scale down on mobile:

| Token | Desktop | Mobile (< 768px) |
|-------|---------|------------------|
| `display` | 64px | 40px |
| `h1` | 48px | 32px |
| `h2` | 36px | 28px |
| `h3` | 30px | 24px |
| `h4`–`h6` | As defined | No change |
| `body` | 16px | 16px (no change) |

Body text never scales below 16px.

---

## 9. Token Implementation

```typescript
// packages/ui/styles/typography.ts
export const typography = {
  fontFamily: {
    sans: "var(--font-geist-sans)",
    mono: "var(--font-geist-mono)",
  },
  fontSize: {
    caption: 12,
    sm: 14,
    base: 16,
    lg: 20,
    xl: 24,
    "2xl": 30,
    "3xl": 36,
    "4xl": 48,
    "5xl": 64,
  },
  // ...
};
```

---

## Related Documents

| Document | Scope |
|----------|-------|
| `08-design-system.md` | Typography philosophy |
| `09-design-tokens.md` | Spacing and layout tokens |
| `22-component-spec.md` | Component text styles |
