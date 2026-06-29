# Developer OS

A professional developer platform that demonstrates the ability to design, architect, build, deploy, document, and maintain production software.

## What is Developer OS?

Developer OS is the central source of truth for professional identity — not just a portfolio, but a platform that explains *why* projects were built, architecture decisions, tradeoffs, deployment, and lessons learned.

## Repository Structure

```
developer-os/
├── apps/
│   ├── portfolio
│   ├── admin
│   └── resume
├── packages/
│   ├── ui
│   ├── config
│   ├── types
│   ├── utils
│   └── content
├── docs/
├── assets/
├── scripts/
└── .github/
```

## Getting Started

```bash
pnpm install
pnpm dev
```

## Documentation

Product discovery and planning documents live in [`docs/`](./docs/):

| Document | Description |
|----------|-------------|
| [00-project-charter](./docs/00-project-charter.md) | Project charter and governance |
| [01-product-discovery](./docs/01-product-discovery.md) | What we're building and why |
| [02-product-vision](./docs/02-product-vision.md) | North star vision statement |
| [03-user-personas](./docs/03-user-personas.md) | Target audience profiles |
| [04-user-journeys](./docs/04-user-journeys.md) | How users navigate the platform |
| [05-success-metrics](./docs/05-success-metrics.md) | How we measure success |
| [06-roadmap](./docs/06-roadmap.md) | Milestone plan and release schedule |

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| UI | shadcn/ui |
| Content | MDX |
| Deployment | Vercel |
| Monorepo | Turborepo + pnpm |

## Development Methodology

Every phase follows: **Requirements → Design → Review → Approval → Build**

Only then do we move to the next phase.
