# Developer OS — Page Specifications

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

This document is the implementation contract for every MVP page. Each specification defines purpose, audience, components, SEO, accessibility, performance, and future improvements. No page is built without a spec.

---

## Home

### Purpose

Introduce Chiedu within 30 seconds. Answer: *Who are you?*

### Audience

| Persona | Priority |
|---------|----------|
| Technical Recruiter | Primary |
| Founder / CTO | Secondary |

### Components

| Component | Package | Type |
|-----------|---------|------|
| Navbar | `composites/Navbar` | Server |
| Hero | `composites/Hero` | Server |
| Featured Project | `composites/ProjectCard` (featured) | Server |
| Experience Preview | `composites/Timeline` (truncated) | Server |
| Skills Preview | `composites/SkillGroup` | Server |
| CTA | `primitives/Button` | Server |
| Footer | `composites/Footer` | Server |

### Layout

`Navbar → Hero → Featured Project → Experience → Skills → CTA → Footer`

### SEO

| Field | Value |
|-------|-------|
| Title | `Chiedu David — Software Engineer` |
| Description | One-line mission from profile |
| OpenGraph | Title, description, og:image |
| Canonical | `/` |

### Accessibility

- Landmark regions: `header`, `main`, `footer`
- Hero heading is `h1` (only one per page)
- All interactive elements keyboard accessible
- Color contrast ≥ 4.5:1

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static (SSG) |
| Components | Server Components |
| Images | Next.js `Image`, WebP, lazy below fold |
| JS budget | < 50KB for this page |

### Future Improvements

- GitHub activity feed
- Recent articles preview
- Testimonials section

---

## About

### Purpose

Tell the engineering story. Answer: *Tell me your story.*

### Audience

| Persona | Priority |
|---------|----------|
| Founder / CTO | Primary |
| Engineering Manager | Secondary |

### Components

| Component | Package |
|-----------|---------|
| Navbar | `composites/Navbar` |
| Hero | `composites/Hero` |
| Story Section | `layouts/Section` + prose |
| Philosophy Section | `layouts/Section` + prose |
| Current Focus | `layouts/Section` + prose |
| Career Timeline | `composites/Timeline` |
| Footer | `composites/Footer` |

### SEO

| Field | Value |
|-------|-------|
| Title | `About — Chiedu David` |
| Description | Engineering background and philosophy |
| Canonical | `/about` |

### Accessibility

- Prose content uses semantic headings (`h2`, `h3`)
- Timeline is navigable by keyboard
- `container-narrow` for readable line length

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static |
| Components | Server Components |
| Images | Optimized, single hero image if used |

### Future Improvements

- Fun facts section
- Speaking engagements preview

---

## Projects (Listing)

### Purpose

Display completed work. Answer: *What do you build?*

### Audience

| Persona | Priority |
|---------|----------|
| Engineering Manager | Primary |
| Senior Engineer | Primary |

### Components

| Component | Package |
|-----------|---------|
| Navbar | `composites/Navbar` |
| Page Hero | `layouts/Section` |
| Project Grid | `layouts/Grid` + `composites/ProjectCard` |
| Footer | `composites/Footer` |

### SEO

| Field | Value |
|-------|-------|
| Title | `Projects — Chiedu David` |
| Description | Portfolio of production software projects |
| Canonical | `/projects` |

### Accessibility

- Project cards are focusable links
- Grid reflows to single column on mobile
- Each card has descriptive link text (not "click here")

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static |
| Components | Server Components |
| Images | Project thumbnails optimized, lazy loaded |

### Future Improvements

- Technology filter badges
- Search within projects

---

## Project Detail

### Purpose

Demonstrate engineering thinking. Answer: *How do you think?*

### Audience

| Persona | Priority |
|---------|----------|
| Engineering Manager | Primary |
| Senior Engineer | Primary |

### Routes

| Route | Project |
|-------|---------|
| `/projects/bundo` | Bundo |
| `/projects/chat-application` | Real-Time Chat |
| `/projects/pizza-ordering-platform` | Pizza Ordering Platform |

### Components

| Component | Package |
|-----------|---------|
| Navbar | `composites/Navbar` |
| Breadcrumb | `composites/Breadcrumb` |
| Case Study Hero | `composites/CaseStudyHero` |
| MDX Content | `layouts/Section` + MDX renderer |
| Tech Stack | `primitives/Badge` row |
| Next Project | `composites/ProjectCard` |
| Footer | `composites/Footer` |

### SEO

| Field | Value |
|-------|-------|
| Title | `{project.title} — Chiedu David` |
| Description | `project.summary` |
| OpenGraph | Project-specific og:image |
| Canonical | `/projects/{slug}` |

### Accessibility

- MDX headings create logical outline
- Code blocks have copy button with `aria-label`
- Architecture diagrams have alt text
- Breadcrumb uses `nav` landmark with `aria-label`

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static (per slug) |
| Components | Server Components (MDX rendered server-side) |
| Images | Gallery images lazy loaded |

### Future Improvements

- Architecture diagram component
- API design section
- Performance metrics section
- Screenshot gallery

---

## Resume

### Purpose

Prove job readiness. Answer: *Can you do the job?*

### Audience

| Persona | Priority |
|---------|----------|
| Technical Recruiter | Primary |

### Components

| Component | Package |
|-----------|---------|
| Navbar | `composites/Navbar` |
| Resume Header | `composites/ResumeHeader` |
| Experience | `composites/ResumeSection` + `ExperienceItem` |
| Projects | `composites/ResumeSection` + list |
| Education | `composites/ResumeSection` |
| Skills | `composites/SkillGroup` |
| Download CTA | `primitives/Button` |
| Footer | `composites/Footer` |

### SEO

| Field | Value |
|-------|-------|
| Title | `Resume — Chiedu David` |
| Description | Professional resume and experience |
| Canonical | `/resume` |
| Robots | `index, follow` |

### Accessibility

- Semantic heading hierarchy
- Print-friendly layout
- Download button clearly labeled

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static |
| Components | Server Components |
| PDF | Generated at build time or on-demand (Epic 5) |

### Future Improvements

- PDF download
- ATS-optimized variant
- Multiple resume versions
- Print stylesheet

---

## Contact

### Purpose

Enable recruiter outreach. Answer: *How can I contact you?*

### Audience

| Persona | Priority |
|---------|----------|
| Technical Recruiter | Primary |
| Founder / CTO | Secondary |

### Components

| Component | Package | Type |
|-----------|---------|------|
| Navbar | `composites/Navbar` | Server |
| Page Hero | `layouts/Section` | Server |
| Contact Form | `composites/ContactForm` | Client |
| Input | `primitives/Input` | Client |
| Textarea | `primitives/Textarea` | Client |
| Submit Button | `primitives/Button` | Client |
| Footer | `composites/Footer` | Server |

### SEO

| Field | Value |
|-------|-------|
| Title | `Contact — Chiedu David` |
| Description | Get in touch for opportunities |
| Canonical | `/contact` |
| Robots | `index, follow` |

### Accessibility

- All form fields have associated labels
- Error messages linked via `aria-describedby`
- Submit button disabled during loading
- Success/error announced via `role="alert"`

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static page + Server Action |
| Components | Form is Client Component; rest Server |
| JS budget | Form interactivity only |

### Future Improvements

- Calendar booking integration
- Response time expectation copy

---

## 404

### Purpose

Recover lost users gracefully.

### Audience

All personas.

### Components

| Component | Package |
|-----------|---------|
| Navbar | `composites/Navbar` |
| Error Content | `layouts/Section` |
| Footer | `composites/Footer` |

### Content

- Clear "Page not found" message
- Links to Home and Projects
- No stack traces or technical errors exposed

### SEO

| Field | Value |
|-------|-------|
| Robots | `noindex` |
| Status | HTTP 404 |

### Accessibility

- Error message announced to screen readers
- Recovery links keyboard accessible

### Performance

| Strategy | Detail |
|----------|--------|
| Rendering | Static |

---

## Implementation Order (Phase 3 — Vertical Slices)

| Slice | Pages | Epic |
|-------|-------|------|
| 1. Foundation | Next.js setup, packages, tooling | Epic 3 |
| 2. Navigation | Navbar, Footer, layout shell | Epic 3 |
| 3. Home | Complete landing page | Epic 3 |
| 4. Projects | Grid + detail pages | Epic 4 |
| 5. Resume | Interactive + PDF | Epic 5 |
| 6. Contact | Form + Resend | Epic 3 |
| 7. Polish | SEO, a11y, performance, tests | Epic 3 |

Each slice ships a complete, production-ready feature — not isolated components.

---

## Related Documents

| Document | Scope |
|----------|-------|
| `12-information-architecture.md` | Site map |
| `14-content-strategy.md` | Content requirements |
| `11-layout-system.md` | Section anatomy |
| `13-navigation.md` | Navigation behavior |
