# Resume — Wireframe

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Goal

Prove job readiness with a scannable, downloadable resume.

**User question:** Can you do the job?

**Primary persona:** Technical Recruiter

---

## Decision

**The online resume and downloadable PDF use the same data source.**

`platform/content/resume/` is the single source of truth. Web view and PDF are two render targets — never duplicate content.

---

## Wireframe — Web View

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]              Home  Projects  Resume  About  Contact    [Contact →]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    [Download PDF]    [Print]                                │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         Chiedu David                                        │
│                    Software Engineer                                        │
│              email@example.com · Location · github.com/chiedu               │
│                                                                             │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Software engineer with experience building production                      │
│  full-stack applications. Focused on backend systems,                       │
│  API design, and cloud deployment.                                          │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  EXPERIENCE                                                                 │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Software Engineer                                    2024 — Present        │
│  Company Name · Location                                                    │
│  • Built and deployed production API serving X users                        │
│  • Designed database schema for Y feature                                   │
│  • Reduced deployment time by Z%                                            │
│                                                                             │
│  Software Engineer                                    2022 — 2024           │
│  Company Name · Location                                                    │
│  • Key achievement one                                                      │
│  • Key achievement two                                                      │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  PROJECTS                                                                   │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Bundo — Full-stack production application                                  │
│  Real-Time Chat — WebSocket messaging platform                              │
│  Pizza Ordering Platform — Spring Boot REST API                             │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  EDUCATION                                                                  │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Degree in Field                                      Graduation Year       │
│  Institution Name                                                           │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  SKILLS                                                                     │
│  ─────────────────────────────────────────────────────────────────────────  │
│                                                                             │
│  Languages:    TypeScript, Java, Python, SQL                                │
│  Frameworks:   React, Node.js, Spring Boot, Next.js                         │
│  Tools:        Docker, AWS, PostgreSQL, Git                                 │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  GitHub · Email · Resume · Bundo                          © 2026 Chiedu    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Wireframe — Print / PDF View

Same content. Simplified chrome:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         Chiedu David                                        │
│                    Software Engineer                                        │
│              email · location · github                                      │
│  ─────────────────────────────────────────────────────────────────────────  │
│  Summary paragraph...                                                       │
│                                                                             │
│  EXPERIENCE                                                                 │
│  Role · Company · Dates                                                     │
│  • Bullet points                                                            │
│                                                                             │
│  PROJECTS                                                                   │
│  Project — Description                                                      │
│                                                                             │
│  EDUCATION                                                                  │
│  Degree · Institution · Year                                                │
│                                                                             │
│  SKILLS                                                                     │
│  Languages: ...                                                             │
│  Frameworks: ...                                                            │
│  Tools: ...                                                                 │
└─────────────────────────────────────────────────────────────────────────────┘
```

No navbar. No footer. No buttons. Single column. Black and white friendly.

---

## Section Specifications

| Section | Source | Web | PDF |
|---------|--------|-----|-----|
| Header | `profile.ts` | ✓ | ✓ |
| Summary | `profile.ts` → summary | ✓ | ✓ |
| Experience | `experience.ts` | ✓ | ✓ |
| Projects | Derived from portfolio metadata | ✓ | ✓ |
| Education | `education.ts` | ✓ | ✓ |
| Skills | `skills.ts` | ✓ | ✓ |

---

## Action Bar

Fixed below navbar on web view:

| Action | Behavior | MVP |
|--------|----------|-----|
| Download PDF | Generate and download PDF | Epic 5 |
| Print | Browser print with print stylesheet | ✓ |

---

## ATS Considerations

- Semantic HTML: `h1` for name, `h2` for sections
- Plain text skills list (not badges only)
- Standard section order
- No tables for layout
- No images in PDF variant
- Contact info as plain text links

---

## Content Width

| View | Width |
|------|-------|
| Web | `container-narrow` (768px) centered |
| PDF | Full page width, 1-inch margins |

---

## Data Flow

```
platform/content/resume/
        │
        ▼
packages/core (formatting, validation)
        │
        ├──► apps/web (interactive view)
        │
        └──► apps/resume (PDF generation — Epic 5)
```

---

## Feature Module

Implementation lives in `apps/web/src/features/resume/`.

---

## Related Documents

| Document | Scope |
|----------|-------|
| `14-content-strategy.md` | Resume content requirements |
| `15-page-specifications.md` | Resume implementation contract |
