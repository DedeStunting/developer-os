# Developer OS — User Journeys

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Every page on Developer OS exists because it supports a user journey. If a page does not serve at least one journey below, it should not be built.

---

## Journey 1 — Recruiter

**Persona:** Technical Recruiter  
**Time budget:** 30–60 seconds  
**Goal:** Determine fit and download resume

```
Google Search
      ↓
Landing Page
      ↓
Resume
      ↓
Featured Project
      ↓
Contact
```

### Touchpoints

| Step | Page             | Purpose                                   |
| ---- | ---------------- | ----------------------------------------- |
| 1    | Landing Page     | First impression, clear value proposition |
| 2    | Resume           | Verify experience and skills              |
| 3    | Featured Project | Confirm production work exists            |
| 4    | Contact          | Initiate conversation or download resume  |

### Success Signal

Resume downloaded or contact form submitted within 60 seconds.

---

## Journey 2 — Engineering Manager

**Persona:** Engineering Manager  
**Time budget:** 3–5 minutes  
**Goal:** Evaluate engineering maturity

```
Landing Page
      ↓
Projects
      ↓
Bundo
      ↓
Architecture
      ↓
Lessons Learned
      ↓
GitHub
      ↓
Resume
```

### Touchpoints

| Step | Page            | Purpose                         |
| ---- | --------------- | ------------------------------- |
| 1    | Landing Page    | Orient to platform              |
| 2    | Projects        | Browse completed work           |
| 3    | Bundo           | Deep-dive into flagship project |
| 4    | Architecture    | Assess system design thinking   |
| 5    | Lessons Learned | Evaluate reflection and growth  |
| 6    | GitHub          | Verify code quality             |
| 7    | Resume          | Confirm experience alignment    |

### Success Signal

Case study read-through completed; GitHub repository visited.

---

## Journey 3 — Senior Engineer

**Persona:** Senior Engineer  
**Time budget:** 5–10 minutes  
**Goal:** Assess technical depth and craft

```
Landing Page
      ↓
Projects
      ↓
Case Study
      ↓
Technical Blog
      ↓
GitHub
```

### Touchpoints

| Step | Page           | Purpose                                  |
| ---- | -------------- | ---------------------------------------- |
| 1    | Landing Page   | Discover platform                        |
| 2    | Projects       | Find technically interesting work        |
| 3    | Case Study     | Read architecture and trade-off analysis |
| 4    | Technical Blog | Evaluate writing and thinking (future)   |
| 5    | GitHub         | Review implementation details            |

### Success Signal

Case study completion; return visit for new content.

---

## Journey 4 — Founder / CTO

**Persona:** Founder / CTO  
**Time budget:** 2–5 minutes  
**Goal:** Determine if Chiedu can build independently

```
Landing Page
      ↓
Featured Project
      ↓
About
      ↓
Resume
      ↓
Contact
```

### Touchpoints

| Step | Page             | Purpose                                     |
| ---- | ---------------- | ------------------------------------------- |
| 1    | Landing Page     | First impression                            |
| 2    | Featured Project | Evidence of end-to-end ownership            |
| 3    | About            | Engineering philosophy and product thinking |
| 4    | Resume           | Breadth and depth of experience             |
| 5    | Contact          | Start a conversation                        |

### Success Signal

Contact form submission or direct outreach.

---

## Journey-to-Page Matrix

| Page               | Recruiter | Eng. Manager | Senior Eng. | Founder |
| ------------------ | --------- | ------------ | ----------- | ------- |
| Landing Page       | ✓         | ✓            | ✓           | ✓       |
| Resume             | ✓         | ✓            | —           | ✓       |
| Featured Project   | ✓         | —            | —           | ✓       |
| Projects           | —         | ✓            | ✓           | —       |
| Bundo / Case Study | —         | ✓            | ✓           | —       |
| Architecture       | —         | ✓            | ✓           | —       |
| About              | —         | —            | —           | ✓       |
| Contact            | ✓         | —            | —           | ✓       |
| GitHub (external)  | —         | ✓            | ✓           | —       |
| Blog (future)      | —         | —            | ✓           | —       |

---

## Design Implications

- **Recruiter path must be frictionless** — resume download visible from landing page
- **Engineering Manager path requires depth** — Bundo case study is the centerpiece
- **Senior Engineer path rewards depth** — architecture and lessons learned sections are critical
- **Founder path emphasizes ownership** — featured project and About page carry the narrative
