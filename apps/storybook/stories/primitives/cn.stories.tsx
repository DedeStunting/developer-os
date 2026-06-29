import type { Meta, StoryObj } from "@storybook/react";

import { cn } from "@developer-os/ui/lib";

const meta = {
  title: "Primitives/cn",
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const MergedClasses: Story = {
  render: () => (
    <div className={cn("rounded-lg bg-zinc-900 px-4 py-2 text-white", "px-6")}>
      cn utility from @developer-os/ui
    </div>
  ),
};
