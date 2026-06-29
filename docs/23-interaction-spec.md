# Interaction Specification

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Motion is intentional. Every animation answers: _Why does this move?_ If there is no answer, it does not animate. This document defines durations, easing, hover rules, scroll behavior, and loading patterns.

---

## 1. Duration Scale

| Token    | Value | Use                                             |
| -------- | ----- | ----------------------------------------------- |
| `fast`   | 150ms | Micro-interactions — opacity, color             |
| `normal` | 200ms | Standard transitions — hover, focus             |
| `slow`   | 300ms | Layout changes — drawer open, navbar background |

### Rules

- Never exceed 300ms for UI transitions
- No animation on initial page load for above-the-fold content
- Page transitions: none (static site)

---

## 2. Easing

Use a **single easing curve** consistently across all interactions.

| Token         | Value                          | Use                     |
| ------------- | ------------------------------ | ----------------------- |
| `ease-out`    | `cubic-bezier(0, 0, 0.2, 1)`   | Entrances, hover states |
| `ease-in`     | `cubic-bezier(0.4, 0, 1, 1)`   | Exits, drawer close     |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | State toggles           |

**Default:** `ease-out` for all hover and focus transitions.

```css
transition: property 200ms cubic-bezier(0, 0, 0.2, 1);
```

---

## 3. Hover Rules

### Buttons

| Property         | Transition                |
| ---------------- | ------------------------- |
| Background color | `fast` (150ms) `ease-out` |
| Opacity          | `fast` (150ms) `ease-out` |
| Scale (active)   | `fast` (150ms) `ease-out` |

No shadow change on hover for buttons.

### Links

| Property  | Transition              |
| --------- | ----------------------- |
| Color     | `fast` (150ms)          |
| Underline | Instant (no transition) |

### Cards (Project Cards)

| Property     | Transition                    |
| ------------ | ----------------------------- |
| Shadow       | `normal` (200ms) `ease-out`   |
| Border color | `normal` (200ms)              |
| Transform    | None — no lift/scale on hover |

Entire card is clickable. Cursor: pointer.

### Project Cards (Specific)

```
Default:  shadow-none, border border
Hover:    shadow-sm, border foregroundMuted/20
```

No image zoom. No card lift. Subtle elevation only.

### Navigation Links

| Property           | Transition     |
| ------------------ | -------------- |
| Color              | `fast` (150ms) |
| Underline (active) | None           |

---

## 4. Focus Rules

| Element             | Focus Style                            |
| ------------------- | -------------------------------------- |
| Buttons             | 2px ring, `accent`, offset 2px         |
| Links               | 2px ring, `accent`, offset 2px         |
| Inputs              | Border `accent` + ring `accent` at 20% |
| Cards (interactive) | 2px ring, `accent`, offset 2px         |

Focus visible on keyboard navigation only (`:focus-visible`). No focus ring on mouse click.

---

## 5. Scroll Behavior

| Behavior              | Specification                                        |
| --------------------- | ---------------------------------------------------- |
| **Smooth scroll**     | `scroll-behavior: smooth` for anchor links only      |
| **Navbar transition** | Transparent → solid at 16px scroll, `normal` (200ms) |
| **Sticky navbar**     | `position: sticky`, `top: 0`                         |
| **Scroll reveal**     | Not used — content visible immediately               |
| **Parallax**          | Not used                                             |

### Navbar Scroll Transition

```
scrollY < 16px:  background transparent, no border
scrollY >= 16px: background background, border-b border
Transition:      background-color 200ms ease-out, border-color 200ms ease-out
```

---

## 6. Loading Patterns

### Preference: Skeletons over Spinners

| Context                | Pattern                                     |
| ---------------------- | ------------------------------------------- |
| Page content           | Static generation — no loading state needed |
| Contact form submit    | Button loading spinner (inline)             |
| Image loading          | Blur placeholder via Next.js Image          |
| Future dynamic content | Skeleton components                         |

### Skeleton Specs

| Property   | Value                    |
| ---------- | ------------------------ |
| Background | `backgroundMuted`        |
| Animation  | Pulse opacity 50% ↔ 100% |
| Duration   | 1.5s infinite            |
| Radius     | Match target component   |

### Button Loading

- Replace label with spinner
- Preserve button width (no layout shift)
- `aria-busy="true"`
- Disabled during load

---

## 7. Empty States

| Context              | Message                      | Action                 |
| -------------------- | ---------------------------- | ---------------------- |
| No projects (future) | "No projects yet."           | —                      |
| Form success         | "Message sent successfully." | —                      |
| 404                  | "Page not found."            | Link to Home, Projects |

Empty states use `body` typography, `foreground-muted`, centered layout.

---

## 8. Error States

| Context                 | Pattern                                 |
| ----------------------- | --------------------------------------- |
| Form validation         | Inline error below field, `error` color |
| Form submission failure | Alert banner above form, `role="alert"` |
| 404                     | Full page, recovery links               |
| Build failure           | N/A — caught at CI                      |

Error messages: `body-sm`, `error` color, `role="alert"` where appropriate.

---

## 9. Reduced Motion

When `prefers-reduced-motion: reduce` is set:

| Behavior        | Change                    |
| --------------- | ------------------------- |
| All transitions | `0ms` or removed          |
| Skeleton pulse  | Static `backgroundMuted`  |
| Navbar scroll   | Instant background change |
| Drawer          | Instant open/close        |
| Smooth scroll   | `scroll-behavior: auto`   |

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. What Does Not Animate

- Page content on load
- Typography
- Resume sections
- Case study body text
- Footer
- Static images
- Badge appearance

---

## Related Documents

| Document                   | Scope                 |
| -------------------------- | --------------------- |
| `22-component-spec.md`     | Component states      |
| `24-accessibility-spec.md` | Reduced motion, focus |
| `08-design-system.md`      | Motion philosophy     |
