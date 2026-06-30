import type { Meta, StoryObj } from "@storybook/react";

import { Navbar } from "@developer-os/ui/composites";

const meta = {
  title: "Composites/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ProjectsActive: Story = {
  args: {
    activePath: "/projects/bundo",
  },
};

export const Scrolled: Story = {
  render: (args) => (
    <div className="bg-background min-h-[200vh]">
      <Navbar {...args} />
      <div className="text-foreground-secondary p-8">Scroll to see solid navbar state.</div>
    </div>
  ),
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
