import type { Meta, StoryObj } from "@storybook/react";

import { CallToAction } from "@developer-os/ui/composites";

import { ctaFixture } from "../fixtures/home";

const meta = {
  title: "Composites/CallToAction",
  component: CallToAction,
  parameters: {
    layout: "padded",
  },
  args: {
    content: ctaFixture,
  },
} satisfies Meta<typeof CallToAction>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};

export const LongHeading: Story = {
  args: {
    content: {
      ...ctaFixture,
      heading:
        "Interested in building reliable backend systems together for production teams that care about quality?",
    },
  },
};
