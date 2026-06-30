import type { Meta, StoryObj } from "@storybook/react";

import { Hero } from "@developer-os/ui/composites";

import { heroFixture } from "../fixtures/home";

const meta = {
  title: "Composites/Hero",
  component: Hero,
  parameters: {
    layout: "padded",
  },
  args: {
    content: heroFixture,
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};

export const LongContent: Story = {
  args: {
    content: {
      ...heroFixture,
      headline:
        "Backend Software Engineer building scalable products, developer tools, production systems, and platform infrastructure for high-growth teams.",
      supportingParagraph:
        "I design and ship backend platforms with Spring Boot and Node.js, model data in PostgreSQL, deploy services to the cloud, and bring production discipline to API design, observability, and system design.",
    },
  },
};
