import type { Meta, StoryObj } from "@storybook/react";

import { ResumeHeader } from "@developer-os/ui/composites";

import { resumeFixture } from "../fixtures/resume";

const meta = {
  title: "Composites/Resume/Header",
  component: ResumeHeader,
  parameters: {
    layout: "padded",
  },
  args: {
    profile: resumeFixture.profile,
  },
} satisfies Meta<typeof ResumeHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
