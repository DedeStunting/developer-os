export interface Project {
  slug: string;
  title: string;
  summary: string;
  technologies: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured: boolean;
}
