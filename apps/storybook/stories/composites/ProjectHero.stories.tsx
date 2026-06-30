import type { Meta, StoryObj } from "@storybook/react";

import { ProjectHero } from "@developer-os/ui/composites";

import { bundoMetadataFixture } from "../fixtures/projects";

const meta = {
  title: "Composites/ProjectHero",
  component: ProjectHero,
  parameters: { layout: "padded" },
  args: { metadata: bundoMetadataFixture },
} satisfies Meta<typeof ProjectHero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: { viewport: { defaultViewport: "mobile" } },
};
