import { profile } from "./profile";
import { skillGroups } from "./skills";

const knowsAbout = skillGroups.flatMap((group) => group.items);

export const resumeSeo = {
  title: `${profile.name} — Resume`,
  description: profile.summary,
  jobTitle: profile.title,
  organization: "Bundo Tech Inc.",
  sameAs: [profile.github],
  worksFor: {
    name: "Bundo Tech Inc.",
  },
  knowsAbout,
} as const;
