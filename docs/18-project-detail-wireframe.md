# Project Detail — Wireframe

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Goal

Demonstrate engineering thinking through a comprehensive case study.

**User question:** How do you think?

**Primary persona:** Engineering Manager, Senior Engineer

---

## Decision

**Every future project must follow this template.**

This page is the engineering case-study engine. Bundo is the reference implementation. All new projects copy this structure.

---

## Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]              Home  Projects  Resume  About  Contact    [Contact →]  │
├─────────────────────────────────────────────────────────────────────────────┤
│  Home / Projects / Bundo                                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌──────────────────────────────┐  ┌──────────────────────────────────┐  │
│  │                              │  │  [Project Screenshot]              │  │
│  │  Bundo                       │  │                                  │  │
│  │  Full-stack production app   │  │                                  │  │
│  │                              │  └──────────────────────────────────┘  │
│  │  [React] [Node] [Postgres]   │                                        │
│  │                              │  [Live Demo →]  [GitHub →]             │
│  └──────────────────────────────┘                                        │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  OVERVIEW                                                                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Executive summary of the project. What it does, who it's for,            │
│  and why it matters. 2–3 paragraphs.                                      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  THE PROBLEM                                                                │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Business Problem                                                           │
│  What business need did this solve?                                         │
│                                                                             │
│  Technical Problem                                                          │
│  What engineering challenges existed?                                       │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ARCHITECTURE                                                               │
│  ─────────────────────────────────────────────────────────────────────────  │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │                                                                     │   │
│  │              [Architecture Diagram]                                 │   │
│  │                                                                     │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│  Explanation of system design decisions...                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  TECHNOLOGY CHOICES                                                         │
│  ─────────────────────────────────────────────────────────────────────────  │
│  [React] [Node.js] [PostgreSQL] [Redis] [AWS] [Docker]                     │
│  Rationale for each major technology choice...                              │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CHALLENGES                                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│  • Challenge one and how it was solved                                      │
│  • Challenge two and how it was solved                                      │
│  • Challenge three and how it was solved                                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  LESSONS LEARNED                                                            │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Honest reflection on what went well, what didn't, and what you'd           │
│  do differently. This section differentiates you from other candidates.   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  NEXT PROJECT                                                               │
│  ┌─────────────────────────────────────────────────────────────────────┐   │
│  │  ← Real-Time Chat                                                   │   │
│  │  WebSocket-based messaging application                              │   │
│  └─────────────────────────────────────────────────────────────────────┘   │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  GitHub · Email · Resume · Bundo                          © 2026 Chiedu    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Section Template (Required for All Projects)

| # | Section | Content Source | MVP |
|---|---------|----------------|-----|
| 1 | Hero | `metadata.ts` | ✓ |
| 2 | Overview | `overview.mdx` | ✓ |
| 3 | The Problem | `overview.mdx` | ✓ |
| 4 | Architecture | `architecture.mdx` | ✓ |
| 5 | Technology Choices | `metadata.ts` + MDX | ✓ |
| 6 | Challenges | `overview.mdx` | ✓ |
| 7 | Lessons Learned | `lessons.mdx` | ✓ |
| 8 | Next Project | Derived from project list | ✓ |

### Future Sections (Post-MVP)

| Section | Epic |
|---------|------|
| System Design diagram | Epic 4 |
| API Design | Epic 4 |
| Security | Epic 4 |
| Performance | Epic 4 |
| Deployment | Epic 4 |
| Screenshot Gallery | Epic 4 |
| Future Improvements | Epic 4 |

---

## Content Width

| Section | Container |
|---------|-----------|
| Hero | `container` (1280px) |
| Prose sections | `container-narrow` (768px) |
| Architecture diagram | `container` (full width within max) |
| Next Project | `container` |

---

## MDX Prose Layout

```
┌──────────────────────────────────────┐
│  Section Heading (h2)                │
│  ──────────────────────────────────  │
│                                      │
│  Body text with comfortable          │
│  line length (65–75 chars).          │
│                                      │
│  • Bullet points                     │
│  • For key decisions                 │
│                                      │
│  ```code blocks```                   │
│                                      │
└──────────────────────────────────────┘
```

---

## Hero Specifications

| Element | Detail |
|---------|--------|
| Title | `metadata.title` |
| Summary | `metadata.summary` |
| Tech badges | `metadata.technologies` |
| Live Demo | `metadata.liveUrl` (if exists) |
| GitHub | `metadata.repositoryUrl` |
| Screenshot | Right side desktop, below title mobile |

---

## Navigation Between Projects

Bottom of page shows next project in list order:

```
Bundo → Real-Time Chat → Pizza Ordering → (loop or end)
```

---

## Feature Module

Implementation lives in `apps/web/src/features/projects/`.

| Subfolder | Responsibility |
|-----------|----------------|
| `components/` | ProjectCard, CaseStudyHero, ProjectContent |
| `lib/` | Project loader, slug validation |
| `index.ts` | Public exports |

---

## Related Documents

| Document | Scope |
|----------|-------|
| `14-content-strategy.md` | Case study content requirements |
| `17-projects-wireframe.md` | Projects listing |
| `15-page-specifications.md` | Project detail spec |
