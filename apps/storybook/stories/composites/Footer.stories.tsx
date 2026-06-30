import type { Meta, StoryObj } from "@storybook/react";

import { Footer } from "@developer-os/ui/composites";

const meta = {
  title: "Composites/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
