import type { Meta, StoryObj } from "@storybook/react";

import { TechStackGrid } from "@developer-os/ui/composites";

import { techStackFixture } from "../fixtures/home";

const meta = {
  title: "Composites/TechStackGrid",
  component: TechStackGrid,
  parameters: {
    layout: "padded",
  },
  args: {
    groups: techStackFixture,
  },
} satisfies Meta<typeof TechStackGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
