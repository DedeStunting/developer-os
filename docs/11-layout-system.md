# Developer OS — Layout System

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

This document defines the anatomical structure of every page. Each section maps to a layout component and content source. If a section does not appear here, it should not be built without updating this document.

### Global Elements

Present on every page:

```
Navbar
    ↓
[Page Content]
    ↓
Footer
```

- **Navbar:** Sticky, contains logo, primary nav, CTA
- **Footer:** Links, social, copyright
- **Container:** All page content wrapped in `Container` (max 1280px)

---

## Home

**Route:** `/`  
**Rendering:** Static  
**Primary persona:** Recruiter, Founder

```
Navbar
    ↓
Hero
    ↓
Featured Project
    ↓
Experience
    ↓
Skills
    ↓
CTA
    ↓
Footer
```

### Section Details

| Section | Component | Content Source |
|---------|-----------|----------------|
| Hero | `Section` + custom | `platform/content/site/` |
| Featured Project | `CaseStudyHero` (compact) | `platform/content/portfolio/projects/bundo/` |
| Experience | `Timeline` | `platform/content/resume/experience.ts` |
| Skills | `SkillGroup` grid | `platform/content/resume/skills.ts` |
| CTA | `Section` + `Button` | Static copy + link to contact |

### Layout Notes

- Hero: full viewport height on desktop, auto on mobile
- Featured Project: single prominent card, not a grid
- Experience: show 2–3 most recent entries with link to resume
- Skills: badge grid, categorized
- CTA: centered, single primary button

---

## About

**Route:** `/about`  
**Rendering:** Static  
**Primary persona:** Founder, Engineering Manager

```
Navbar
    ↓
Hero
    ↓
Background
    ↓
Journey
    ↓
Philosophy
    ↓
Technologies
    ↓
Current Focus
    ↓
Footer
```

### Section Details

| Section | Content |
|---------|---------|
| Hero | Name, title, photo |
| Background | Engineering origin story |
| Journey | Career progression narrative |
| Philosophy | Engineering values and approach |
| Technologies | Current stack and tools |
| Current Focus | What you're building and learning now |

### Layout Notes

- Prose-focused: `container-narrow` (768px) for readability
- Long-form content — typography does the work

---

## Projects (Listing)

**Route:** `/projects`  
**Rendering:** Static  
**Primary persona:** Engineering Manager, Senior Engineer

```
Navbar
    ↓
Hero
    ↓
Filters
    ↓
Project Grid
    ↓
Footer
```

### Section Details

| Section | Component | Content Source |
|---------|-----------|----------------|
| Hero | `Section` | Static page title and description |
| Filters | Badge row (future) | Technology tags — deferred post-MVP |
| Project Grid | `Grid` + `ProjectCard` | `platform/content/portfolio/projects/` |

### Layout Notes

- Grid: 1 col (mobile) → 2 col (tablet) → 3 col (desktop)
- Filters: deferred for MVP — show all projects
- Cards: equal height, consistent metadata

---

## Project Details

**Route:** `/projects/[slug]`  
**Rendering:** Static  
**Primary persona:** Engineering Manager, Senior Engineer

```
Navbar
    ↓
Case Study Hero
    ↓
Overview
    ↓
Architecture
    ↓
Tech Stack
    ↓
Challenges
    ↓
Lessons Learned
    ↓
Gallery
    ↓
Next Project
    ↓
Footer
```

### Section Details

| Section | Content Source |
|---------|----------------|
| Case Study Hero | `metadata.ts` |
| Overview | `overview.mdx` |
| Architecture | `architecture.mdx` |
| Tech Stack | `metadata.ts` → technologies |
| Challenges | `overview.mdx` or dedicated MDX (future) |
| Lessons Learned | `lessons.mdx` |
| Gallery | `screenshots.ts` (future) |
| Next Project | Derived from project list |

### Layout Notes

- Prose sections: `container-narrow` for MDX content
- Tech stack: badge row below hero
- Gallery: image grid, lazy-loaded
- Next Project: navigation card at bottom

---

## Resume

**Route:** `/resume`  
**Rendering:** Static  
**Primary persona:** Recruiter

```
Navbar
    ↓
Resume Header
    ↓
Experience
    ↓
Projects
    ↓
Education
    ↓
Skills
    ↓
Download CTA
    ↓
Footer
```

### Section Details

| Section | Component | Content Source |
|---------|-----------|----------------|
| Resume Header | `ResumeHeader` | `platform/content/resume/profile.ts` |
| Experience | `ResumeSection` + `ExperienceItem` | `platform/content/resume/experience.ts` |
| Projects | `ResumeSection` + project list | `platform/content/portfolio/projects/` |
| Education | `ResumeSection` | `platform/content/resume/education.ts` |
| Skills | `ResumeSection` + `SkillGroup` | `platform/content/resume/skills.ts` |
| Download CTA | `Button` (primary) | PDF generation (future) |

### Layout Notes

- Single column, print-friendly
- Download button: sticky or prominent at top and bottom
- ATS-friendly structure: semantic headings, no complex layout

---

## Contact

**Route:** `/contact`  
**Rendering:** Static page + Server Action  
**Primary persona:** Recruiter, Founder

```
Navbar
    ↓
Hero
    ↓
Contact Form
    ↓
Footer
```

### Section Details

| Section | Component | Fields |
|---------|-----------|--------|
| Hero | `Section` | Page title, brief intro |
| Contact Form | Form components | Name, Email, Company, Message |

### Layout Notes

- Form: `container-narrow`, centered
- Single column form layout
- Success/error states inline below form
- No sidebar — form is the focus

---

## 404

**Route:** `/not-found`  
**Rendering:** Static

```
Navbar
    ↓
Error Content
    ↓
Footer
```

- Message: clear, helpful
- CTA: link back to home and projects

---

## Responsive Behavior Summary

| Page | Mobile | Tablet | Desktop |
|------|--------|--------|---------|
| Home | Stacked sections | Stacked | Hero side-by-side |
| Projects | 1-col grid | 2-col grid | 3-col grid |
| Project Details | Stacked | Stacked | Hero side-by-side |
| Resume | Single column | Single column | Single column |
| Contact | Full-width form | Centered form | Centered form |

---

## Spacing Between Sections

All pages use consistent vertical rhythm:

| Context | Token |
|---------|-------|
| Between page sections | `space-24` (96px) |
| Between subsections | `space-16` (64px) |
| Between related items | `space-8` (32px) |
| Hero top padding | `space-32` (128px) |

---

## Related Documents

| Document | Scope |
|----------|-------|
| `08-design-system.md` | Design philosophy and principles |
| `09-design-tokens.md` | Token values for spacing and layout |
| `10-component-library.md` | Component specifications |
| `09-routing-architecture.md` | URL structure (future) |
