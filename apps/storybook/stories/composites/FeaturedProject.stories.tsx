import type { Meta, StoryObj } from "@storybook/react";

import { FeaturedProject } from "@developer-os/ui/composites";

import { featuredProjectFixture } from "../fixtures/home";

const meta = {
  title: "Composites/FeaturedProject",
  component: FeaturedProject,
  parameters: {
    layout: "padded",
  },
  args: {
    project: featuredProjectFixture,
  },
} satisfies Meta<typeof FeaturedProject>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
