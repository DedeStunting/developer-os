# Developer OS — Component Library

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

This document defines every UI component before implementation. Components live in `packages/ui/components/` and are consumed by all applications. No component is built without a documented purpose, props contract, and accessibility requirements.

### Engineering Rules (All Components)

- Stateless by default
- Server Components by default (where applicable)
- Accessible by default (WCAG AA)
- Theme-aware via design tokens
- No business logic — presentation only

---

## Foundation

### Button

Primary interactive element for actions.

| Variant       | Use                                          |
| ------------- | -------------------------------------------- |
| `primary`     | Main CTAs — contact, download resume         |
| `secondary`   | Secondary actions — view project, learn more |
| `ghost`       | Tertiary actions — navigation, cancel        |
| `destructive` | Irreversible actions (future admin)          |

| Size | Use                        |
| ---- | -------------------------- |
| `sm` | Inline actions, compact UI |
| `md` | Default                    |
| `lg` | Hero CTAs                  |

**Props:** `variant`, `size`, `disabled`, `loading`, `asChild`  
**Accessibility:** `aria-disabled`, focus ring, keyboard activation

---

### Badge

Compact label for metadata and status.

| Variant   | Use                         |
| --------- | --------------------------- |
| `default` | Technology tags, categories |
| `outline` | Subtle labels               |
| `success` | Status indicators           |

**Props:** `variant`, `children`  
**Use:** Technology badges on project cards, skill labels

---

### Link

Styled anchor for internal and external navigation.

| Variant    | Use                                                |
| ---------- | -------------------------------------------------- |
| `default`  | Inline text links                                  |
| `nav`      | Navigation items                                   |
| `external` | External links (GitHub, live demo) — includes icon |

**Props:** `href`, `variant`, `external`  
**Accessibility:** External links announce "opens in new tab"

---

### Icon

Wrapper for Lucide React icons with consistent sizing.

| Size | Value |
| ---- | ----- |
| `sm` | 16px  |
| `md` | 20px  |
| `lg` | 24px  |

**Props:** `name`, `size`, `className`  
**Rule:** Icons always paired with text or `aria-label`

---

### Avatar

Profile image or initials fallback.

**Props:** `src`, `alt`, `fallback`, `size`  
**Use:** About page, resume header (future)

---

## Layout

### Container

Max-width wrapper with horizontal padding.

**Props:** `size` (`default` | `narrow` | `wide`), `children`  
**Default:** `container-max` (1280px) with responsive padding

---

### Section

Vertical page section with consistent spacing.

**Props:** `id`, `spacing` (`default` | `compact` | `loose`), `children`  
**Default:** `space-24` top/bottom padding

---

### Grid

Responsive CSS grid for card layouts.

**Props:** `cols` (1 | 2 | 3), `gap`, `children`  
**Use:** Project grid, skills grid

---

### Stack

Vertical flex layout with consistent gap.

**Props:** `gap`, `align`, `children`  
**Use:** Form fields, card content, resume sections

---

### Divider

Horizontal rule for section separation.

**Props:** `variant` (`default` | `subtle`)  
**Use:** Resume sections, case study sections

---

## Navigation

### Navbar

Primary site navigation — desktop horizontal, mobile hamburger.

**Contains:** Logo, nav links, CTA button  
**Behavior:** Sticky on scroll, transparent → solid background  
**Breakpoint:** Collapses below `lg` (1024px)

---

### Mobile Nav

Slide-out or overlay navigation for mobile.

**Contains:** Nav links, CTA  
**Accessibility:** Focus trap, escape to close, `aria-expanded`

---

### Footer

Site footer with links and metadata.

**Contains:** Navigation links, social links, copyright  
**Layout:** Single row desktop, stacked mobile

---

### Breadcrumb

Hierarchical navigation for nested pages.

**Use:** Project details, blog posts (future)  
**Props:** `items: { label, href }[]`

---

## Portfolio

### Project Card

Summary card for project listing grid.

**Contains:** Title, summary, technology badges, links  
**Props:** `project: Project`  
**Interaction:** Hover elevation (`shadow-sm`), entire card clickable

---

### Technology Badge

Specialized badge for tech stack display.

**Props:** `name`, `icon?`  
**Variant:** `outline` by default

---

### Timeline

Vertical timeline for experience and career history.

**Contains:** Date range, role, company, description  
**Use:** About page, resume

---

### Experience Card

Individual experience entry within timeline.

**Props:** `experience: ExperienceEntry`  
**Layout:** Date left, content right (desktop); stacked (mobile)

---

### Case Study Hero

Full-width hero for project detail pages.

**Contains:** Project title, summary, tech stack, live demo + GitHub links  
**Layout:** Title + metadata left, screenshot right (desktop)

---

## Resume

### Resume Header

Name, title, contact information, summary.

**Props:** `profile: Profile`  
**Layout:** Centered, minimal

---

### Resume Section

Titled section wrapper for resume content blocks.

**Props:** `title`, `children`  
**Use:** Experience, Education, Skills, Projects

---

### Skill Group

Grouped skill list by category.

**Props:** `category`, `skills: string[]`  
**Layout:** Category label + badge row

---

### Experience Item

Single work experience entry.

**Props:** `experience: ExperienceEntry`  
**Contains:** Company, role, dates, bullet points

---

## Blog (Future — Epic 6)

### Article Card

Blog post preview card.

**Contains:** Title, summary, date, tags, reading time  
**Props:** `post: BlogPostMeta`

---

### TOC (Table of Contents)

Sticky sidebar table of contents for long articles.

**Props:** `headings: { id, text, level }[]`  
**Behavior:** Highlights active section on scroll

---

### Code Block

Syntax-highlighted code with copy button.

**Props:** `code`, `language`, `filename?`  
**Accessibility:** Copy button with success feedback

---

### Callout

Highlighted block for notes, warnings, tips.

| Variant   | Use            |
| --------- | -------------- |
| `info`    | General notes  |
| `warning` | Cautions       |
| `tip`     | Best practices |

---

## Forms

### Input

Text input field.

**Props:** `label`, `error`, `required`, standard input props  
**Accessibility:** Associated label, `aria-invalid`, error message

---

### Textarea

Multi-line text input.

**Props:** `label`, `error`, `rows`, standard textarea props  
**Use:** Contact form message field

---

### Label

Form field label.

**Props:** `htmlFor`, `required`, `children`

---

### Error

Form validation error message.

**Props:** `message`  
**Accessibility:** `role="alert"`, linked via `aria-describedby`

---

### Form Button

Submit button with loading state.

**Extends:** Button  
**Props:** `loading`, `type="submit"`  
**Use:** Contact form submission

---

## Component Inventory Summary

| Category   | Count  | MVP Priority   |
| ---------- | ------ | -------------- |
| Foundation | 5      | High           |
| Layout     | 5      | High           |
| Navigation | 4      | High           |
| Portfolio  | 5      | High           |
| Resume     | 4      | High           |
| Blog       | 4      | Deferred       |
| Forms      | 5      | High (Contact) |
| **Total**  | **32** | **24 for MVP** |

---

## Implementation Order (Epic 2)

1. Design tokens (`packages/ui/styles/`)
2. Foundation components (Button, Badge, Link, Icon)
3. Layout components (Container, Section, Grid, Stack)
4. Navigation (Navbar, Footer, Mobile Nav)
5. Portfolio (Project Card, Technology Badge, Case Study Hero)
6. Resume components
7. Forms (Contact page)
8. Blog components (Epic 6)
