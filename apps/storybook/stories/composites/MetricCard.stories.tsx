import type { Meta, StoryObj } from "@storybook/react";

import { MetricGrid } from "@developer-os/ui/composites";

import { trustMetricsFixture } from "../fixtures/home";

const meta = {
  title: "Composites/MetricCard",
  component: MetricGrid,
  parameters: {
    layout: "padded",
  },
  args: {
    metrics: trustMetricsFixture,
  },
} satisfies Meta<typeof MetricGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
