import type { Meta, StoryObj } from "@storybook/react";

import { ResumeExperience } from "@developer-os/ui/composites";

import { resumeFixture } from "../fixtures/resume";

const meta = {
  title: "Composites/Resume/Experience",
  component: ResumeExperience,
  parameters: {
    layout: "padded",
  },
  args: {
    entries: resumeFixture.experience,
  },
} satisfies Meta<typeof ResumeExperience>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
