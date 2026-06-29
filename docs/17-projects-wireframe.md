# Projects — Wireframe

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Goal

Showcase completed work and invite deeper exploration.

**User question:** What do you build?

**Primary persona:** Engineering Manager, Senior Engineer

---

## Decision

**No filtering for MVP.**

We don't have enough projects yet. Filters add complexity without value at three projects. Revisit when project count exceeds 6.

---

## Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]              Home  Projects  Resume  About  Contact    [Contact →]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  Projects                                                                   │
│  Production software I've designed, built, and deployed.                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐ │
│  │ [Screenshot]        │  │ [Screenshot]        │  │ [Screenshot]        │ │
│  │                     │  │                     │  │                     │ │
│  │ Bundo          ★    │  │ Real-Time Chat      │  │ Pizza Ordering      │ │
│  │ Full-stack app      │  │ WebSocket messaging │  │ Spring Boot API     │ │
│  │                     │  │                     │  │                     │ │
│  │ [React] [Node]      │  │ [React] [Socket]    │  │ [Java] [Spring]     │ │
│  │                     │  │                     │  │                     │ │
│  │ [View Project →]    │  │ [View Project →]    │  │ [View Project →]    │ │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘ │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  GitHub · Email · Resume · Bundo                          © 2026 Chiedu    │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Mobile (single column)

```
┌──────────────────────────┐
│  Navbar                  │
├──────────────────────────┤
│  Projects                │
│  Subtitle...             │
├──────────────────────────┤
│  ┌────────────────────┐  │
│  │ Bundo (featured)   │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ Real-Time Chat     │  │
│  └────────────────────┘  │
│  ┌────────────────────┐  │
│  │ Pizza Ordering     │  │
│  └────────────────────┘  │
├──────────────────────────┤
│  Footer                  │
└──────────────────────────┘
```

---

## Section Specifications

| Section | Content | Notes |
|---------|---------|-------|
| Page Hero | Title + one-line description | Static copy |
| Project Grid | 3 project cards | Featured first, then production, then demo |
| Footer | Standard | — |

---

## Card Anatomy

```
┌─────────────────────────────┐
│  [Project Screenshot]       │  ← 16:9 aspect ratio
├─────────────────────────────┤
│  Project Title        ★?    │  ← ★ if featured
│  One-line summary           │
│  [Tech] [Tech] [Tech]       │  ← max 3 badges visible
│  [View Project →]           │  ← entire card clickable
└─────────────────────────────┘
```

---

## Ordering Rules

| Order | Project | Reason |
|-------|---------|--------|
| 1 | Bundo | Featured, flagship case study |
| 2 | Real-Time Chat | Production project |
| 3 | Pizza Ordering Platform | Learning/demo project |

---

## Content Requirements

| Element | Source |
|---------|--------|
| Card data | `portfolio/projects/*/metadata.ts` |
| Summary | `metadata.summary` |
| Technologies | `metadata.technologies` (first 3) |
| Thumbnail | `screenshots.ts` (future) or placeholder |

---

## Responsive Grid

| Breakpoint | Columns |
|------------|---------|
| Mobile (< 768px) | 1 |
| Tablet (768–1024px) | 2 |
| Desktop (> 1024px) | 3 |

---

## Future (Post-MVP)

- Technology filter badges
- Search
- Sort by date

---

## Feature Module

Implementation lives in `apps/web/src/features/projects/`.

---

## Related Documents

| Document | Scope |
|----------|-------|
| `18-project-detail-wireframe.md` | Detail page template |
| `15-page-specifications.md` | Projects implementation contract |
