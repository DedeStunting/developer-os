# Developer OS — Navigation

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

This document specifies navigation behavior, interaction patterns, and accessibility requirements. Navigation is the primary way users move through Developer OS — it must be fast, predictable, and accessible.

---

## 1. Desktop Navigation

### Navbar

| Property              | Specification                      |
| --------------------- | ---------------------------------- |
| Position              | Sticky top                         |
| Height                | 64px                               |
| Background (hero)     | Transparent                        |
| Background (scrolled) | Solid `background` with `border-b` |
| Scroll threshold      | 16px                               |
| Max width             | 1280px (container)                 |
| Z-index               | 50                                 |

### Layout

```
[Logo]                    [Home] [Projects] [Resume] [About] [Contact]    [CTA Button]
```

- **Logo:** Text or mark, links to `/`
- **Nav links:** Horizontal, evenly spaced
- **CTA:** "Contact" primary button, links to `/contact`

### Scroll Behavior

1. Page loads: navbar transparent over hero
2. User scrolls past 16px: navbar transitions to solid background
3. Transition: 200ms ease-out opacity and background-color
4. No layout shift on transition

### Hover & Active States

| State                 | Style                          |
| --------------------- | ------------------------------ |
| Default               | `foreground-secondary` text    |
| Hover                 | `foreground` text              |
| Active (current page) | `accent` color + underline     |
| Focus                 | 2px focus ring, `accent` color |

---

## 2. Mobile Navigation

### Breakpoint

Navigation collapses below `lg` (1024px).

### Mobile Nav Pattern

Drawer (slide-in from right). No nested menus.

| Property     | Specification                        |
| ------------ | ------------------------------------ |
| Trigger      | Hamburger icon, 44×44px touch target |
| Drawer width | 280px or 80vw (whichever is smaller) |
| Overlay      | Semi-transparent backdrop            |
| Animation    | 250ms ease-out slide                 |
| Close        | X button, overlay click, Escape key  |

### Drawer Contents

```
[Logo]
─────────────
Home
Projects
Resume
About
Contact
─────────────
[Contact CTA Button]
```

### Accessibility

- `aria-expanded` on hamburger button
- `aria-controls` linking to drawer panel
- Focus trap when drawer is open
- Escape key closes drawer
- Focus returns to hamburger on close
- Body scroll locked when open

---

## 3. Footer Navigation

### Layout

```
[Nav Links]          [Social Links]          [Copyright]
```

### Footer Links (MVP)

| Link   | Destination          |
| ------ | -------------------- |
| GitHub | External profile URL |
| Email  | `mailto:` link       |
| Resume | `/resume`            |
| Bundo  | `/projects/bundo`    |

### Future Footer Links

| Link        | Status                          |
| ----------- | ------------------------------- |
| RSS         | Reserved — Epic 7               |
| Source Code | Reserved — links to GitHub repo |

---

## 4. Breadcrumbs

Used on project detail pages only (MVP).

```
Home → Projects → Bundo
```

| Property     | Specification                              |
| ------------ | ------------------------------------------ |
| Position     | Below navbar, above hero                   |
| Separator    | `/` or chevron                             |
| Current page | Not linked, `foreground-muted`             |
| Links        | `foreground-secondary`, underline on hover |

Not used on top-level pages (Home, Projects listing, etc.).

---

## 5. Active Link Detection

Active state determined by current route:

| Route                      | Active Link |
| -------------------------- | ----------- |
| `/`                        | Home        |
| `/projects`, `/projects/*` | Projects    |
| `/resume`                  | Resume      |
| `/about`                   | About       |
| `/contact`                 | Contact     |

Project detail pages highlight "Projects" in nav, not the project name.

---

## 6. Keyboard Navigation

| Key               | Action                           |
| ----------------- | -------------------------------- |
| `Tab`             | Move focus through nav links     |
| `Enter` / `Space` | Activate focused link            |
| `Escape`          | Close mobile drawer              |
| `Arrow keys`      | Not used (flat nav, no submenus) |

### Focus Order

1. Skip to main content link (hidden until focused)
2. Logo
3. Nav links (left to right)
4. CTA button
5. Main content

---

## 7. Skip Link

Hidden link visible on focus, first element in DOM:

```html
<a href="#main-content">Skip to main content</a>
```

Jumps to `<main id="main-content">` on every page.

---

## 8. Future Navigation

Reserved nav items defined in `packages/config/features.ts`. Not rendered until feature is enabled.

| Item        | Route          | Epic      |
| ----------- | -------------- | --------- |
| Blog        | `/blog`        | Epic 6    |
| Speaking    | `/speaking`    | Version 4 |
| Notes       | `/notes`       | Epic 6    |
| Open Source | `/open-source` | Version 4 |

When a feature ships, its nav item is inserted before "Contact" without restructuring the navigation system.

---

## 9. Configuration

Navigation items are defined in two places:

| Source                                | Purpose                                         |
| ------------------------------------- | ----------------------------------------------- |
| `platform/content/site/navigation.ts` | Content labels and hrefs                        |
| `packages/config/navigation.ts`       | App behavior (order, visibility, feature flags) |

Applications merge config with content at build time through `packages/core`.

---

## Related Documents

| Document                         | Scope                                        |
| -------------------------------- | -------------------------------------------- |
| `12-information-architecture.md` | Site map and page hierarchy                  |
| `10-component-library.md`        | Navbar, Mobile Nav, Footer, Breadcrumb specs |
| `15-page-specifications.md`      | Per-page navigation context                  |
