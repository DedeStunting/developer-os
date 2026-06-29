import type { Meta, StoryObj } from "@storybook/react";

import { colors } from "@developer-os/ui/styles";

const meta = {
  title: "Design System/Colors",
  parameters: {
    layout: "padded",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const swatches = Object.entries(colors).map(([name, value]) => ({ name, value }));

function ColorPalette() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {swatches.map(({ name, value }) => (
        <div key={name} className="overflow-hidden rounded-lg border border-zinc-200">
          <div className="h-16" style={{ backgroundColor: value }} />
          <div className="p-3">
            <p className="text-sm font-medium text-zinc-900">{name}</p>
            <p className="text-xs text-zinc-500">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export const Palette: Story = {
  render: () => <ColorPalette />,
};
