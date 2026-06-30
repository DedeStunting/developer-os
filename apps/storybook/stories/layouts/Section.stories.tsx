import type { Meta, StoryObj } from "@storybook/react";

import { Container, Section } from "@developer-os/ui/layouts";

const meta = {
  title: "Layouts/Section",
  component: Section,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    children: (
      <Container>
        <div className="border-border bg-background-subtle text-foreground rounded-lg border p-6">
          Section content
        </div>
      </Container>
    ),
  },
} satisfies Meta<typeof Section>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Compact: Story = {
  args: {
    spacing: "compact",
  },
};

export const Loose: Story = {
  args: {
    spacing: "loose",
  },
};
