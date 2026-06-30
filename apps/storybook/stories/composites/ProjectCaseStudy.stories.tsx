import type { Meta, StoryObj } from "@storybook/react";

import { ApiEndpointCard } from "@developer-os/ui/composites";

const meta = {
  title: "Composites/ApiEndpointCard",
  component: ApiEndpointCard,
  parameters: { layout: "padded" },
  args: {
    endpoint: {
      method: "POST" as const,
      path: "/orders",
      description: "Creates an order with validation and role-aware constraints.",
    },
  },
} satisfies Meta<typeof ApiEndpointCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
