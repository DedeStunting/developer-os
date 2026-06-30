import type { Meta, StoryObj } from "@storybook/react";

import { EngineeringDecisions } from "@developer-os/ui/composites";

import { bundoMetadataFixture } from "../fixtures/projects";

const meta = {
  title: "Composites/EngineeringDecisions",
  component: EngineeringDecisions,
  parameters: { layout: "padded" },
  args: {
    callouts: bundoMetadataFixture.engineeringCallouts ?? [],
  },
} satisfies Meta<typeof EngineeringDecisions>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
