import type { Meta, StoryObj } from "@storybook/react";

import { Container } from "@developer-os/ui/layouts";

const meta = {
  title: "Layouts/Container",
  component: Container,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: (
      <div className="border-border bg-background-subtle text-foreground rounded-lg border p-6">
        Container content
      </div>
    ),
  },
} satisfies Meta<typeof Container>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Narrow: Story = {
  args: {
    size: "narrow",
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};

export const Desktop: Story = {
  parameters: {
    viewport: { defaultViewport: "desktop" },
  },
};
