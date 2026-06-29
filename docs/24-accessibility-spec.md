# Accessibility Specification

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Accessibility is a portfolio differentiator. WCAG 2.1 Level AA is the minimum standard for every page and component. Accessible design is not optional — it is a core engineering requirement.

**Target:** Lighthouse Accessibility score ≥ 95 on every page.

---

## 1. Keyboard Navigation

### Tab Order

Logical, predictable tab order on every page:

1. Skip to main content link
2. Logo / home link
3. Primary navigation links (left to right)
4. CTA button
5. Main content (top to bottom, left to right)
6. Footer links

### Focus Management

| Context | Behavior |
|---------|----------|
| Page load | Focus on skip link (hidden until Tab) |
| Mobile drawer open | Focus trap inside drawer |
| Mobile drawer close | Focus returns to hamburger button |
| Form submission success | Focus moves to success message |
| Form validation error | Focus moves to first invalid field |

### Focus Trap (Mobile Nav)

- Tab cycles within drawer when open
- Shift+Tab cycles backward
- Escape closes drawer and restores focus

### Skip to Content

```html
<a href="#main-content" class="sr-only focus:not-sr-only">
  Skip to main content
</a>
<main id="main-content">
```

First focusable element in DOM on every page.

---

## 2. Focus Visibility

| Requirement | Implementation |
|-------------|----------------|
| Focus ring always visible on keyboard nav | `:focus-visible` with 2px ring |
| No focus ring on mouse click | `:focus:not(:focus-visible)` — no ring |
| Ring color | `accent` with 2px offset |
| Contrast | Focus ring meets 3:1 against background |

All interactive elements must have a visible focus state.

---

## 3. Color Contrast

WCAG AA minimum ratios:

| Content Type | Ratio | Standard |
|-------------|-------|----------|
| Normal text (< 18px) | 4.5:1 | AA |
| Large text (≥ 18px bold or ≥ 24px) | 3:1 | AA |
| UI components & graphics | 3:1 | AA |
| Focus indicators | 3:1 | AA |

### Verified Pairs (Light Mode)

| Foreground | Background | Ratio | Pass |
|------------|------------|-------|------|
| `foreground` (#09090b) | `background` (#ffffff) | 19.8:1 | ✓ |
| `foreground-secondary` (#3f3f46) | `background` (#ffffff) | 9.7:1 | ✓ |
| `foreground-muted` (#71717a) | `background` (#ffffff) | 4.6:1 | ✓ |
| `accentForeground` (#fafafa) | `accent` (#18181b) | 17.4:1 | ✓ |

### Rules

- Never use color alone to convey information
- Error states: icon + text + `aria-invalid`
- Required fields: asterisk + `aria-required`

---

## 4. Reduced Motion

Respect `prefers-reduced-motion: reduce` on all animations and transitions.

| Animation | Reduced Motion Behavior |
|-----------|------------------------|
| Navbar background transition | Instant |
| Drawer slide | Instant show/hide |
| Button hover | Color change only, no scale |
| Skeleton pulse | Static background |
| Smooth scroll | `scroll-behavior: auto` |

See `23-interaction-spec.md` for implementation.

---

## 5. Screen Readers

### Semantic Landmarks

Every page includes:

```html
<header>   <!-- Navbar -->
<main>     <!-- Page content -->
<footer>   <!-- Footer -->
<nav>      <!-- Navigation, with aria-label -->
```

### Heading Hierarchy

- One `h1` per page
- No skipped levels
- Section headings match content outline

### ARIA Usage

**Use ARIA only when HTML semantics are insufficient.**

| Use ARIA | When |
|----------|------|
| `aria-label` | Icon-only buttons, external links |
| `aria-expanded` | Mobile nav hamburger |
| `aria-controls` | Hamburger → drawer relationship |
| `aria-busy` | Loading buttons |
| `aria-invalid` | Form validation errors |
| `aria-describedby` | Error messages linked to inputs |
| `role="alert"` | Success/error announcements |

**Do not use ARIA when native HTML suffices:**

- Use `<button>` not `<div role="button">`
- Use `<nav>` not `<div role="navigation">`
- Use `<main>` not `<div role="main">`

---

## 6. Images

Every image must have meaningful `alt` text.

| Image Type | Alt Text |
|------------|----------|
| Project screenshot | "{Project name} application screenshot" |
| Architecture diagram | Description of what the diagram shows |
| Decorative | `alt=""` (empty, not omitted) |
| Avatar | "{Name}'s profile photo" |
| Logo | "Developer OS" or site name |

### Rules

- Never omit `alt` attribute
- Decorative images: `alt=""` explicitly
- Complex diagrams: short alt + longer description nearby
- Next.js `Image` component required for all images

---

## 7. Forms

| Requirement | Implementation |
|-------------|----------------|
| Labels | Visible `<label>` for every input, associated via `htmlFor` |
| Required fields | `aria-required="true"` + visual asterisk |
| Errors | `aria-invalid="true"` + `aria-describedby` pointing to error |
| Error announcement | `role="alert"` on error message |
| Submit loading | `aria-busy="true"` on button |
| Honeypot | `aria-hidden="true"`, `tabindex="-1"` |

---

## 8. Links

| Type | Requirement |
|------|-------------|
| Internal | Descriptive link text (not "click here") |
| External | `target="_blank"` + `rel="noopener noreferrer"` |
| External announcement | `aria-label` includes "opens in new tab" |
| Icon-only links | `aria-label` required |

---

## 9. Touch Targets

Minimum touch target size: **44×44px** on mobile.

| Element | Minimum Size |
|---------|-------------|
| Buttons | 40px height (md), 44px on mobile |
| Nav links | 44px tap area |
| Hamburger menu | 44×44px |
| Form inputs | 40px height |

---

## 10. Testing Requirements

Before any page ships:

- [ ] Keyboard-only navigation test (no mouse)
- [ ] Screen reader test (VoiceOver or NVDA)
- [ ] Lighthouse Accessibility ≥ 95
- [ ] axe DevTools — zero violations
- [ ] Color contrast verified for all text pairs
- [ ] `prefers-reduced-motion` tested
- [ ] Mobile touch targets verified

---

## Related Documents

| Document | Scope |
|----------|-------|
| `23-interaction-spec.md` | Focus and motion |
| `25-design-review-checklist.md` | Pre-merge checklist |
| `22-component-spec.md` | Component accessibility states |
