# Developer OS — Content Strategy

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Overview

Content strategy defines what content belongs on every page and what makes Developer OS different from a typical portfolio. The platform's value is not in listing projects — it is in explaining engineering decisions.

### Content Principles

1. **Every project tells a story** — not just what was built, but why and how
2. **Content lives once** — update in `platform/content/`, propagates everywhere
3. **Depth over breadth** — three strong case studies beat ten shallow project cards
4. **Write for engineers** — assume technical literacy in case studies
5. **Scannable for recruiters** — resume and home must work in 30 seconds

---

## 1. Home

**User question:** Who are you?

| Section | Content | Source |
|---------|---------|--------|
| Hero | Name, title, one-line mission | `resume/profile.ts` + `site/` |
| Mission | 2–3 sentence value proposition | `site/` |
| Featured Project | Bundo summary with CTA | `portfolio/projects/bundo/` |
| Experience | 2–3 most recent roles | `resume/experience.ts` |
| Technologies | Top skills by category | `resume/skills.ts` |
| CTA | Contact + Download Resume | Static |

### Tone

Confident, concise. A recruiter should understand who Chiedu is within 30 seconds.

---

## 2. About

**User question:** Tell me your story.

| Section | Content | Required |
|---------|---------|----------|
| Story | Engineering origin and career narrative | ✓ |
| Engineering Philosophy | Values, approach, what matters | ✓ |
| Current Focus | What you're building and learning now | ✓ |
| Career Timeline | Visual timeline of roles | ✓ |
| Fun Facts | Personal touches (optional) | Optional |

### Tone

Personal but professional. Shows personality without undermining credibility.

---

## 3. Projects (Listing)

**User question:** What do you build?

| Section | Content | Rule |
|---------|---------|------|
| Page intro | Brief description of project philosophy | Static |
| Project grid | All projects as cards | From `portfolio/projects/` |

### Ordering Rules

1. **Featured projects first** — `featured: true` in metadata
2. **Production projects before demos** — real deployed work prioritized
3. **Newest first** within each tier

### MVP Projects

| Project | Type | Featured |
|---------|------|----------|
| Bundo | Production | ✓ |
| Real-Time Chat | Production | — |
| Pizza Ordering Platform | Demo/Learning | — |

---

## 4. Project Detail

**User question:** How do you think?

This is the most important page in the platform. It differentiates Developer OS from every other portfolio.

### Required Sections (MVP)

| Section | Content Type | Source |
|---------|-------------|--------|
| Executive Summary | MDX | `overview.mdx` |
| Business Problem | MDX | `overview.mdx` |
| Technical Problem | MDX | `overview.mdx` |
| Architecture | MDX + diagram | `architecture.mdx` |
| Technology Choices | Structured | `metadata.ts` |
| Challenges | MDX | `overview.mdx` or dedicated |
| Lessons Learned | MDX | `lessons.mdx` |

### Future Sections (Post-MVP)

| Section | Epic |
|---------|------|
| System Design diagram | Epic 4 |
| API Design | Epic 4 |
| Security considerations | Epic 4 |
| Performance analysis | Epic 4 |
| Deployment walkthrough | Epic 4 |
| Screenshots / Gallery | Epic 4 |
| Future Improvements | Epic 4 |

### Bundo — Flagship Case Study

Bundo is the reference implementation. All future project pages follow the Bundo template.

---

## 5. Resume

**User question:** Can you do the job?

| Section | Content | Format |
|---------|---------|--------|
| Header | Name, title, contact, summary | Structured |
| Experience | Work history with bullets | Structured |
| Projects | Key project highlights | Derived from portfolio |
| Education | Degrees and institutions | Structured |
| Skills | Categorized skill lists | Structured |

### Delivery Modes

| Mode | MVP | Future |
|------|-----|--------|
| Interactive (web) | ✓ | ✓ |
| Download PDF | ✓ | ✓ |
| Print stylesheet | ✓ | ✓ |
| ATS-optimized variant | — | Epic 5 |
| Multiple versions | — | Epic 5 |

### ATS Considerations

- Semantic HTML headings
- No columns or complex layout in print view
- Plain text skills (not only badges)
- Standard section order: Experience → Education → Skills

---

## 6. Contact

**User question:** How can I contact you?

| Element | Specification |
|---------|---------------|
| Form fields | Name, Email, Company, Message |
| Tone | Minimal, professional |
| Response | Resend email notification |
| Success state | Clear confirmation message |
| Error state | Inline validation errors |

### Rules

- No unnecessary fields
- Company field optional
- Message minimum 20 characters
- Honeypot for spam prevention
- Rate limited per IP

---

## 7. Content Ownership

| Content Type | Location | Format |
|-------------|----------|--------|
| Structured data | `platform/content/resume/` | TypeScript modules |
| Project metadata | `platform/content/portfolio/projects/*/metadata.ts` | TypeScript modules |
| Long-form narrative | `platform/content/portfolio/projects/*.mdx` | MDX |
| Site copy | `platform/content/site/` | TypeScript modules |
| Blog posts (future) | `platform/content/blog/` | MDX |
| App configuration | `packages/config/` | TypeScript modules |

---

## 8. Content Quality Bar

Before any content ships:

- [ ] Passes Zod schema validation
- [ ] No placeholder text in production
- [ ] Links verified (GitHub, live demo)
- [ ] Spelling and grammar reviewed
- [ ] Technical accuracy verified
- [ ] Lessons Learned section is genuine reflection

---

## Related Documents

| Document | Scope |
|----------|-------|
| `15-page-specifications.md` | Implementation contract per page |
| `12-information-architecture.md` | Site structure |
| `01-product-discovery.md` | MVP scope |
