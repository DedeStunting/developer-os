# Home — Wireframe

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Goal

A recruiter should understand who you are within **30 seconds**.

**User question:** Who are you?

**Primary persona:** Technical Recruiter

---

## Decision

**Only one featured project on the homepage: Bundo.**

Everything else lives on the Projects page. The home page is a conversion funnel, not a portfolio gallery.

---

## Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]              Home  Projects  Resume  About  Contact    [Contact →]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         Chiedu David                                        │
│                    Software Engineer                                        │
│                                                                             │
│         I design, build, and deploy production software.                    │
│                                                                             │
│              [Download Resume]    [View Projects]                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  FEATURED PROJECT                                                           │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │  [Screenshot]          Bundo                                        │   │
│  │                        Full-stack production application            │   │
│  │                        [React] [Node.js] [PostgreSQL]               │   │
│  │                                                                     │   │
│  │                        [View Case Study →]                          │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  EXPERIENCE                                                                 │
│  ┌──────────────────────────┐  ┌──────────────────────────┐              │
│  │ Role @ Company           │  │ Role @ Company           │              │
│  │ 2024 — Present           │  │ 2022 — 2024              │              │
│  │ Brief description...     │  │ Brief description...     │              │
│  └──────────────────────────┘  └──────────────────────────┘              │
│                                                                             │
│                              [View full resume →]                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TECHNOLOGIES                                                               │
│  [TypeScript] [React] [Node.js] [PostgreSQL] [AWS] [Docker] ...           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    Let's work together.                                     │
│                                                                             │
│                       [Get in Touch →]                                      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  GitHub · Email · Resume · Bundo                          © 2026 Chiedu    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section Specifications

| Section | Height | Content | Interaction |
|---------|--------|---------|-------------|
| Navbar | 64px fixed | Logo, nav links, CTA | Sticky, transparent → solid |
| Hero | ~60vh desktop | Name, title, mission, 2 CTAs | None |
| Featured Project | Auto | Bundo card only | Link to case study |
| Experience | Auto | 2 most recent roles | Link to resume |
| Technologies | Auto | Top 6–8 skill badges | None |
| CTA | Auto | Single line + button | Link to contact |
| Footer | Auto | Links, copyright | External + internal links |

---

## Content Requirements

| Element | Source | Max Length |
|---------|--------|------------|
| Name | `resume/profile.ts` | — |
| Title | `resume/profile.ts` | — |
| Mission | `resume/profile.ts` → summary | 1 sentence |
| Featured project | `portfolio/projects/bundo/` | Card summary only |
| Experience | `resume/experience.ts` | 2 entries |
| Skills | `resume/skills.ts` | Top categories |

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Mobile (< 768px) | Hero stacks; featured project image above text; experience cards stack |
| Tablet (768–1024px) | Hero centered; featured project side-by-side |
| Desktop (> 1024px) | Full wireframe as shown |

---

## 30-Second Test

A recruiter scanning top-to-bottom should see:

1. **0–5s:** Name, title, mission
2. **5–15s:** Featured project proves real work
3. **15–25s:** Recent experience confirms fit
4. **25–30s:** Download resume or contact CTA

---

## Feature Module

Implementation lives in `apps/web/src/features/home/`.

---

## Related Documents

| Document | Scope |
|----------|-------|
| `15-page-specifications.md` | Home implementation contract |
| `14-content-strategy.md` | Home content requirements |
| `11-layout-system.md` | Home section anatomy |
