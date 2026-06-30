import type { Meta, StoryObj } from "@storybook/react";

import { Timeline } from "@developer-os/ui/composites";

import { experienceFixture } from "../fixtures/home";

const meta = {
  title: "Composites/Timeline",
  component: Timeline,
  parameters: {
    layout: "padded",
  },
  args: {
    entries: experienceFixture,
  },
} satisfies Meta<typeof Timeline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
