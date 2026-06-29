# Developer OS — Design System

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Design Philosophy

> **Content is the hero. Motion supports it. Design never competes with it.**

Typography first. Whitespace second. Motion third. Color fourth — not the other way around.

Developer OS is not a marketing site. It is a professional engineering product. The design system exists to make content readable, navigable, and credible — never to impress with visual effects.

### Reference Aesthetic

Think: Linear, Vercel, Stripe, GitHub, Raycast.

- Minimal
- Confident
- Readable
- Fast

---

## 1. Principles

### Content First

Every design decision serves the content. Project case studies, architecture write-ups, and resume sections are the product. UI chrome exists only to frame and navigate content.

### Accessibility First

WCAG AA is the baseline, not a stretch goal. Color contrast, keyboard navigation, focus states, and semantic HTML are non-negotiable. Accessible design is good design.

### Consistency Over Creativity

One button style. One card style. One spacing rhythm. Consistency builds trust and reduces cognitive load. Creative expression belongs in content, not chrome.

### Motion With Purpose

Animation answers a question: *Why does this move?* If there is no answer, it does not animate. Motion guides attention, confirms interaction, and smooths transitions — it never decorates.

### Performance Is UX

A slow site is a broken site. Design choices that increase bundle size or block rendering require justification. Static generation, server components, and minimal client JavaScript are design constraints.

---

## 2. Visual Language

### Desired Feel

| Quality | Description |
|---------|-------------|
| **Modern** | Contemporary without trend-chasing |
| **Technical** | Feels built by engineers, for engineers |
| **Calm** | No visual noise; comfortable to read for 10+ minutes |
| **Spacious** | Generous whitespace; content breathes |
| **Professional** | Credible to recruiters, managers, and senior engineers |
| **Editorial** | Long-form content reads like quality technical writing |

### Avoid

- Glassmorphism
- Neon gradients
- Heavy shadows
- Visual clutter
- Excessive animation
- Decorative illustrations without purpose
- Auto-playing media

---

## 3. Color Philosophy

**Neutral-first.** Accent color appears only where it conveys meaning — links, CTAs, status indicators, focus states.

### Palette Roles

| Role | Purpose |
|------|---------|
| **Primary** | Primary text, headings, key UI elements |
| **Secondary** | Supporting text, labels, metadata |
| **Muted** | Placeholders, disabled states, subtle borders |
| **Accent** | Links, active states, primary CTAs |
| **Success** | Confirmations, positive status |
| **Warning** | Caution states |
| **Error** | Validation errors, destructive actions |

### Dark Mode

Dark mode is planned and tokens are structured to support it. MVP ships light mode only. No dark mode implementation until Epic 2 post-MVP.

### Rules

- Never use color alone to convey information (pair with text or icons)
- Body text contrast ratio ≥ 4.5:1
- Large text contrast ratio ≥ 3:1
- Accent color used sparingly — if everything is accent, nothing is

---

## 4. Typography Philosophy

Typography does most of the visual work. Hierarchy comes from **size**, **weight**, and **spacing** — not color.

### Hierarchy

| Level | Use |
|-------|-----|
| Display | Page heroes, landing headlines |
| Heading 1 | Page titles |
| Heading 2 | Major sections |
| Heading 3 | Subsections |
| Body | Paragraphs, case study content |
| Small | Metadata, captions, labels |
| Mono | Code snippets, technical labels |

### Rules

- Maximum two font families: one sans-serif, one monospace
- Line length: 65–75 characters for body text
- Line height: 1.5–1.7 for body, tighter for headings
- No all-caps for body content
- Bold for emphasis, not color

---

## 5. Motion Philosophy

### When to Animate

| Scenario | Motion |
|----------|--------|
| Page transition | Subtle fade (optional) |
| Hover state | Color or opacity shift |
| Modal open/close | Scale + fade |
| List item enter | Staggered fade-up (sparingly) |
| Scroll reveal | Avoid — content should be immediately visible |

### When Not to Animate

- Static content sections
- Navigation links
- Resume sections
- Case study body text
- Anything without a clear functional purpose

### Constraints

- Respect `prefers-reduced-motion`
- Duration: 150–300ms for micro-interactions
- Easing: ease-out for entrances, ease-in for exits
- No animation on initial page load for above-the-fold content

---

## 6. Component Engineering Rules

Every component in `packages/ui` must follow these rules:

| Rule | Description |
|------|-------------|
| **Stateless by default** | Props in, markup out. No internal business state. |
| **Server Components by default** | Client components only when interactivity requires it. |
| **Accessible by default** | ARIA labels, keyboard support, focus management built in. |
| **Theme-aware** | Consume design tokens; support future dark mode without rewrites. |
| **Independent of business logic** | No imports from `packages/core` or `platform/`. |

**Business logic** belongs in `packages/core`.  
**Presentation** belongs in `packages/ui`.  
**Applications** compose them together.

---

## Related Documents

| Document | Scope |
|----------|-------|
| `09-design-tokens.md` | Spacing, radius, shadows, breakpoints, container |
| `10-component-library.md` | Component inventory and specifications |
| `11-layout-system.md` | Page anatomy and section structure |
