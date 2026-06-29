# Developer OS — Information Architecture

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Information architecture defines the structure of Developer OS — what pages exist, how they relate, and why each page earns its place. Every page must answer a meaningful user question. Pages that do not answer a question do not exist.

### Page Purpose Framework

| User Question          | Page                           |
| ---------------------- | ------------------------------ |
| Who are you?           | Home                           |
| What do you build?     | Projects                       |
| How do you think?      | Project Details (Case Studies) |
| Can you do the job?    | Resume                         |
| Tell me your story     | About                          |
| How can I contact you? | Contact                        |

---

## 1. Site Map (MVP)

```
/
├── /about
├── /projects
│   ├── /projects/bundo
│   ├── /projects/chat-application
│   └── /projects/pizza-ordering-platform
├── /resume
├── /contact
└── /404
```

**Total MVP pages:** 9 (5 top-level + 3 project details + 404)

### Explicitly Excluded from MVP

These features are planned but not designed or built in MVP:

- Blog
- Speaking
- Notes
- Uses
- Reading
- Timeline
- Certifications
- Open Source dashboard
- Public API

We do not design for features we are not building.

---

## 2. Page Inventory

| Route              | Page           | User Question          | Primary Persona     |
| ------------------ | -------------- | ---------------------- | ------------------- |
| `/`                | Home           | Who are you?           | Recruiter           |
| `/about`           | About          | Tell me your story     | Founder             |
| `/projects`        | Projects       | What do you build?     | Engineering Manager |
| `/projects/[slug]` | Project Detail | How do you think?      | Senior Engineer     |
| `/resume`          | Resume         | Can you do the job?    | Recruiter           |
| `/contact`         | Contact        | How can I contact you? | Recruiter, Founder  |
| `/404`             | Not Found      | —                      | All                 |

---

## 3. Navigation Hierarchy

### Primary Navigation

Flat structure. No dropdowns. No mega menus.

```
Home → Projects → Resume → About → Contact
```

| Order | Label    | Route       | Rationale                     |
| ----- | -------- | ----------- | ----------------------------- |
| 1     | Home     | `/`         | Entry point                   |
| 2     | Projects | `/projects` | Core value — engineering work |
| 3     | Resume   | `/resume`   | Recruiter fast path           |
| 4     | About    | `/about`    | Deeper narrative              |
| 5     | Contact  | `/contact`  | Conversion                    |

### Footer Navigation

Secondary navigation and external links.

| Link        | Type     | MVP    |
| ----------- | -------- | ------ |
| GitHub      | External | ✓      |
| Email       | External | ✓      |
| Resume      | Internal | ✓      |
| Bundo       | Internal | ✓      |
| RSS         | External | Future |
| Source Code | External | Future |

### CTA Placement

- **Navbar:** Contact button (primary CTA)
- **Home:** Download resume + Contact
- **Resume:** Download PDF
- **Project Detail:** GitHub + Live Demo

---

## 4. Content Hierarchy

```
Platform Content (platform/content/)
        │
        ├── site/          → Global copy, SEO defaults
        ├── resume/        → Profile, experience, skills
        └── portfolio/     → Projects, case studies
                │
                └── projects/
                    ├── bundo/
                    ├── chat-application/
                    └── pizza-ordering-platform/
```

Applications consume content through `packages/core`. No page hardcodes content.

---

## 5. URL Strategy

| Pattern           | Example           | Notes                   |
| ----------------- | ----------------- | ----------------------- |
| Top-level         | `/about`          | Lowercase, hyphenated   |
| Project slug      | `/projects/bundo` | Matches `metadata.slug` |
| No trailing slash | `/projects`       | Canonical without slash |
| 404               | Any invalid route | Custom not-found page   |

### Reserved Routes (Future)

| Route          | Feature         | Epic      |
| -------------- | --------------- | --------- |
| `/blog`        | Blog            | Epic 6    |
| `/blog/[slug]` | Blog post       | Epic 6    |
| `/speaking`    | Speaking        | Version 4 |
| `/uses`        | Uses page       | Version 4 |
| `/notes`       | Developer notes | Epic 6    |

These routes are reserved in `packages/config/features.ts` but not implemented.

---

## 6. Cross-Linking Strategy

Pages link to each other to support user journeys.

| From           | To               | Link Context        |
| -------------- | ---------------- | ------------------- |
| Home           | Projects         | "View all projects" |
| Home           | Resume           | "Download resume"   |
| Home           | Featured Project | Bundo case study    |
| Projects       | Project Detail   | Card click          |
| Project Detail | Next Project     | Bottom navigation   |
| Project Detail | Resume           | Sidebar or footer   |
| Resume         | Projects         | Project highlights  |
| About          | Projects         | "See my work"       |
| All pages      | Contact          | Navbar CTA          |

---

## 7. Search & Discovery

MVP has no site search. Users discover content through:

1. Primary navigation
2. Cross-links between pages
3. External search (Google indexing)
4. Direct URLs shared in applications

Search is deferred to Epic 7.

---

## Related Documents

| Document                    | Scope                               |
| --------------------------- | ----------------------------------- |
| `13-navigation.md`          | Navigation behavior and interaction |
| `14-content-strategy.md`    | Content requirements per page       |
| `15-page-specifications.md` | Implementation contract per page    |
