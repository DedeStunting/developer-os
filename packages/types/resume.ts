export interface Profile {
  name: string;
  title: string;
  email: string;
  location: string;
  summary: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export type Experience = ExperienceEntry[];

export interface EducationEntry {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export type Education = EducationEntry[];

export interface Skills {
  languages: string[];
  frameworks: string[];
  tools: string[];
}

export interface Resume {
  profile: Profile;
  experience: Experience;
  education: Education;
  skills: Skills;
}
