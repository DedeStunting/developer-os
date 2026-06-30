import type { Meta, StoryObj } from "@storybook/react";

import { Stack } from "@developer-os/ui/layouts";

const meta = {
  title: "Layouts/Stack",
  component: Stack,
  args: {
    gap: 4,
    children: (
      <>
        <div className="border-border bg-background-subtle rounded-lg border p-4">Item one</div>
        <div className="border-border bg-background-subtle rounded-lg border p-4">Item two</div>
        <div className="border-border bg-background-subtle rounded-lg border p-4">Item three</div>
      </>
    ),
  },
} satisfies Meta<typeof Stack>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Tight: Story = {
  args: {
    gap: 2,
  },
};

export const Spacious: Story = {
  args: {
    gap: 12,
  },
};
