import { profile } from "./profile";
import { skillGroups } from "./skills";
import { social } from "../site/social";

const knowsAbout = skillGroups.flatMap((group) => group.items);

export const resumeSeo = {
  title: `${profile.name} — Resume`,
  description: profile.summary,
  jobTitle: profile.title,
  organization: "Bundo Tech Inc.",
  sameAs: [profile.github, social.twitter],
  worksFor: {
    name: "Bundo Tech Inc.",
  },
  knowsAbout,
} as const;
