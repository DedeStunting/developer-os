import type { TechStackGroup } from "./home";

export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
  github?: string;
  portfolio?: string;
}

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  location?: string;
  start: string;
  end: string | null;
  highlights: string[];
  technologies?: string[];
  links?: ExperienceLink[];
}

export type Experience = ExperienceEntry[];

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export type Education = EducationEntry[];

export interface ResumeProject {
  slug: string;
  title: string;
  summary: string;
  href: string;
  featured: boolean;
}

export interface Resume {
  profile: Profile;
  experience: Experience;
  education: Education;
  skillGroups: TechStackGroup[];
  projects: ResumeProject[];
}

export interface ResumeSeo {
  title: string;
  description: string;
  jobTitle: string;
  organization: string;
  sameAs: string[];
  worksFor?: {
    name: string;
    url?: string;
  };
  knowsAbout: string[];
}
