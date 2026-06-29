# Storybook

Component development environment for Developer OS design system.

## Purpose

- Build components in isolation
- Document component APIs and variants
- Test states visually (default, hover, focus, disabled, loading)
- Catch visual regressions before they reach production

## Structure

```
apps/storybook/
├── .storybook/       # Storybook configuration
├── stories/
│   ├── primitives/   # Button, Badge, Input, Link
│   ├── composites/   # Navbar, ProjectCard, Footer
│   └── layouts/      # Container, Section, Grid
└── package.json
```

## Framework

Storybook uses **React + Vite** to load components from `@developer-os/ui` in isolation. This avoids webpack conflicts with Next.js 15 in the monorepo while keeping the same React 19 component surface area as `apps/web`.

## Usage

Stories consume components from `@developer-os/ui`. Business logic stays in `packages/core`.

## Phase 3

Full Storybook setup begins in Vertical Slice 1 (Foundation).
