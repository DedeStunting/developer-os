import type { Meta, StoryObj } from "@storybook/react";

import { ResumeSkills } from "@developer-os/ui/composites";

import { resumeFixture } from "../fixtures/resume";

const meta = {
  title: "Composites/Resume/Skills",
  component: ResumeSkills,
  parameters: {
    layout: "padded",
  },
  args: {
    groups: resumeFixture.skillGroups,
  },
} satisfies Meta<typeof ResumeSkills>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
