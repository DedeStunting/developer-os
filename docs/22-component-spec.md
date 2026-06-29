# Component Specification

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Every primitive component is defined here with variants, states, sizes, and visual rules. Components live in `packages/ui/primitives/`. No ad-hoc styling in applications.

---

## 1. Button

**Location:** `packages/ui/primitives/Button`

### Variants

| Variant | Background | Text | Border | Use |
|---------|------------|------|--------|-----|
| `primary` | `accent` | `accentForeground` | none | Main CTAs — Contact, Download Resume |
| `secondary` | `background` | `foreground` | `border` | Secondary actions — View Projects |
| `ghost` | transparent | `foreground-secondary` | none | Tertiary actions — Cancel |
| `link` | transparent | `accent` | none | Inline text actions |

### States

| State | Visual Change |
|-------|---------------|
| **Default** | Base variant styles |
| **Hover** | `primary`: opacity 90%; `secondary`: `backgroundSubtle`; `ghost`: `backgroundMuted`; `link`: underline |
| **Active** | Scale 0.98, darker background |
| **Focus** | 2px ring, `accent`, offset 2px |
| **Disabled** | Opacity 50%, `cursor-not-allowed`, no hover |
| **Loading** | Spinner replaces label, `aria-busy`, disabled |

### Sizes

| Size | Height | Padding X | Font Size |
|------|--------|-----------|-----------|
| `sm` | 32px | 12px | 14px |
| `md` | 40px | 16px | 16px |
| `lg` | 48px | 24px | 16px |

### Rules

- One primary button per visible section
- Loading state preserves button width (no layout shift)
- Icon + text: 8px gap (`space-2`)

---

## 2. Card

**Location:** `packages/ui/primitives/Card`

### Variants

| Variant | Background | Border | Shadow | Use |
|---------|------------|--------|--------|-----|
| `elevated` | `background` | `border` | `shadow-sm` on hover | Project cards |
| `outline` | transparent | `border` | none | Subtle containers |
| `flat` | `backgroundSubtle` | none | none | Resume sections |

### States

| State | Visual Change |
|-------|---------------|
| **Default** | Base variant |
| **Hover** (elevated only) | `shadow-sm`, border `foregroundMuted` at 20% |
| **Focus** (if interactive) | 2px focus ring |

### Anatomy

```
┌─────────────────────────────┐
│  CardHeader (optional)      │
│  CardTitle                  │
│  CardDescription            │
├─────────────────────────────┤
│  CardContent                │
├─────────────────────────────┤
│  CardFooter (optional)      │
└─────────────────────────────┘
```

Padding: `space-6` (24px). Radius: `radius-lg` (12px).

---

## 3. Badge

**Location:** `packages/ui/primitives/Badge`

### Variants

| Variant | Background | Text | Use |
|---------|------------|------|-----|
| `default` | `backgroundMuted` | `foreground` | General labels |
| `success` | `success` at 10% | `success` | Status positive |
| `warning` | `warning` at 10% | `warning` | Status caution |
| `error` | `error` at 10% | `error` | Status negative |
| `technology` | `backgroundSubtle` | `foreground-secondary` | Tech stack tags |

### Specs

| Property | Value |
|----------|-------|
| Height | 24px |
| Padding | 4px 8px |
| Font size | 12px (`caption`) |
| Font weight | 500 |
| Radius | `radius-sm` (4px) |

---

## 4. Input

**Location:** `packages/ui/primitives/Input`

### States

| State | Border | Background | Other |
|-------|--------|------------|-------|
| **Default** | `border` | `background` | — |
| **Hover** | `foregroundMuted` | `background` | — |
| **Focus** | `accent` | `background` | 2px ring, `accent` at 20% |
| **Invalid** | `error` | `background` | Error message below |
| **Disabled** | `borderSubtle` | `backgroundMuted` | Opacity 50% |

### Specs

| Property | Value |
|----------|-------|
| Height | 40px |
| Padding | 8px 12px |
| Font size | 16px (prevents iOS zoom) |
| Radius | `radius-md` (8px) |

---

## 5. Textarea

**Location:** `packages/ui/primitives/Textarea`

Same states as Input.

| Property | Value |
|----------|-------|
| Min height | 120px |
| Padding | 12px |
| Resize | Vertical only |

---

## 6. Link

**Location:** `packages/ui/primitives/Link`

### Variants

| Variant | Default | Hover | Use |
|---------|---------|-------|-----|
| `default` | `foreground`, no underline | Underline | Inline prose links |
| `nav` | `foreground-secondary` | `foreground` | Navigation items |
| `external` | `foreground-secondary` | `foreground` + external icon | GitHub, live demo |

### States

| State | Visual |
|-------|--------|
| **Default** | Per variant |
| **Hover** | Underline (default), color shift (nav) |
| **Visited** | Same as default (no distinct visited color) |
| **Focus** | 2px focus ring, offset 2px |
| **External** | ↗ icon after label, `aria-label` includes "opens in new tab" |

---

## 7. Icon

**Location:** `packages/ui/primitives/Icon`

| Size | Dimensions | Stroke |
|------|------------|--------|
| `sm` | 16px | 1.5px |
| `md` | 20px | 2px |
| `lg` | 24px | 2px |

Source: Lucide React. Always paired with text or `aria-label`.

---

## 8. Avatar

**Location:** `packages/ui/primitives/Avatar`

| Size | Dimensions |
|------|------------|
| `sm` | 32px |
| `md` | 40px |
| `lg` | 64px |

Radius: `radius-full`. Fallback: initials on `backgroundMuted`.

---

## 9. Divider

**Location:** `packages/ui/layouts/Divider`

| Variant | Style |
|---------|-------|
| `default` | 1px `border` |
| `subtle` | 1px `borderSubtle` |

Margin: `space-8` vertical.

---

## 10. Component State Matrix

| Component | Default | Hover | Focus | Active | Disabled | Loading | Invalid |
|-----------|---------|-------|-------|--------|----------|---------|---------|
| Button | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | — |
| Card | ✓ | ✓* | ✓* | — | — | — | — |
| Badge | ✓ | — | — | — | — | — | — |
| Input | ✓ | ✓ | ✓ | — | ✓ | — | ✓ |
| Textarea | ✓ | ✓ | ✓ | — | ✓ | — | ✓ |
| Link | ✓ | ✓ | ✓ | — | — | — | — |

*Interactive cards only

---

## Storybook Requirements

Every primitive must have stories for:

- All variants
- All sizes (where applicable)
- All states (default, hover, focus, disabled, loading, invalid)

Location: `apps/storybook/stories/primitives/`

---

## Related Documents

| Document | Scope |
|----------|-------|
| `21-typography-spec.md` | Text styles used in components |
| `23-interaction-spec.md` | Motion and hover timing |
| `24-accessibility-spec.md` | Focus and keyboard requirements |
