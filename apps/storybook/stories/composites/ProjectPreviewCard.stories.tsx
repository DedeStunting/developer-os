import type { Meta, StoryObj } from "@storybook/react";

import { ProjectPreviewCard } from "@developer-os/ui/composites";

import { projectPreviewFixture } from "../fixtures/home";

const meta = {
  title: "Composites/ProjectPreviewCard",
  component: ProjectPreviewCard,
  parameters: {
    layout: "padded",
  },
  args: {
    project: projectPreviewFixture,
  },
} satisfies Meta<typeof ProjectPreviewCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithLiveUrl: Story = {
  args: {
    project: {
      ...projectPreviewFixture,
      liveUrl: "https://example.com",
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: { defaultViewport: "mobile" },
  },
};
