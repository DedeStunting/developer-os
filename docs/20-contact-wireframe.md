# Contact — Wireframe

**Version:** 1.0.0

**Status:** Draft

**Owner:** Chiedu David

**Last Updated:** 2026-06-29

---

## Goal

Convert interest into a message. Minimize friction.

**User question:** How can I contact you?

**Primary persona:** Technical Recruiter, Founder

---

## Decision

**Keep the form minimal.**

The goal is conversion, not conversation. Four fields. No optional clutter. No calendar widgets. No social links in the form area.

---

## Wireframe

```
┌─────────────────────────────────────────────────────────────────────────────┐
│  [Logo]              Home  Projects  Resume  About  Contact    [Contact →]  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         Get in Touch                                        │
│         Interested in working together? Send me a message.                  │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│              ┌─────────────────────────────────────────┐                    │
│              │                                         │                    │
│              │  Name *                                 │                    │
│              │  ┌───────────────────────────────────┐  │                    │
│              │  │                                   │  │                    │
│              │  └───────────────────────────────────┘  │                    │
│              │                                         │                    │
│              │  Email *                                │                    │
│              │  ┌───────────────────────────────────┐  │                    │
│              │  │                                   │  │                    │
│              │  └───────────────────────────────────┘  │                    │
│              │                                         │                    │
│              │  Company                                │                    │
│              │  ┌───────────────────────────────────┐  │                    │
│              │  │                                   │  │                    │
│              │  └───────────────────────────────────┘  │                    │
│              │                                         │                    │
│              │  Message *                              │                    │
│              │  ┌───────────────────────────────────┐  │                    │
│              │  │                                   │  │                    │
│              │  │                                   │  │                    │
│              │  │                                   │  │                    │
│              │  └───────────────────────────────────┘  │                    │
│              │                                         │                    │
│              │              [Send Message]              │                    │
│              │                                         │                    │
│              └─────────────────────────────────────────┘                    │
│                                                                             │
├─────────────────────────────────────────────────────────────────────────────┤
│  GitHub · Email · Resume · Bundo                          © 2026 Chiedu    │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Success State

```
┌─────────────────────────────────────────┐
│                                         │
│  ✓ Message sent successfully.           │
│                                         │
│  I'll get back to you within 48 hours.  │
│                                         │
└─────────────────────────────────────────┘
```

Form replaced with confirmation. No redirect.

---

## Error State

```
┌─────────────────────────────────────────┐
│  Name *                                 │
│  ┌───────────────────────────────────┐  │
│  │                                   │  │
│  └───────────────────────────────────┘  │
│  ⚠ Name is required                     │  ← inline error
│                                         │
│  ...                                    │
│                                         │
│  ⚠ Something went wrong. Please try     │  ← server error
│    again or email directly.             │
└─────────────────────────────────────────┘
```

---

## Form Fields

| Field   | Required | Validation         |
| ------- | -------- | ------------------ |
| Name    | ✓        | Min 2 characters   |
| Email   | ✓        | Valid email format |
| Company | —        | Optional           |
| Message | ✓        | Min 20 characters  |

### Hidden Fields

| Field    | Purpose                             |
| -------- | ----------------------------------- |
| Honeypot | Spam prevention (hidden from users) |

---

## Layout Specifications

| Property        | Value                       |
| --------------- | --------------------------- |
| Form width      | 480px max                   |
| Form position   | Centered horizontally       |
| Field spacing   | `space-6` (24px)            |
| Label position  | Above input                 |
| Button          | Full width, primary variant |
| Button position | Below message field         |

---

## Interaction Flow

```
User fills form
      ↓
Client validation (Zod)
      ↓
Submit → Server Action
      ↓
Server validation (Zod)
      ↓
Rate limit check
      ↓
Send via Resend
      ↓
Success UI / Error UI
```

---

## Accessibility

- All fields have visible labels (not placeholder-only)
- Required fields marked with `*` and `aria-required`
- Errors linked via `aria-describedby`
- Submit button shows loading state with `aria-busy`
- Success message uses `role="alert"`

---

## Security

| Measure             | Implementation                           |
| ------------------- | ---------------------------------------- |
| Rate limiting       | Per IP, Vercel middleware or Upstash     |
| Honeypot            | Hidden field; bots fill it, humans don't |
| Server validation   | Zod schema on Server Action              |
| No exposed API keys | Resend key in env only                   |

---

## Feature Module

Implementation lives in `apps/web/src/features/contact/`.

| Subfolder     | Responsibility               |
| ------------- | ---------------------------- |
| `components/` | ContactForm                  |
| `actions/`    | Server Action for submission |
| `schemas/`    | Form validation schema       |
| `index.ts`    | Public exports               |

---

## Related Documents

| Document                    | Scope                            |
| --------------------------- | -------------------------------- |
| `15-page-specifications.md` | Contact implementation contract  |
| `07-system-architecture.md` | Server Action rendering strategy |
