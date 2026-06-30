import type {
  CallToActionContent,
  ExperienceEntry,
  FeaturedProjectShowcase,
  HeroContent,
  ProjectPreview,
  TechStackGroup,
  TrustMetric,
} from "@developer-os/types";

export const heroFixture: HeroContent = {
  name: "Chiedu David",
  title: "Backend Software Engineer",
  headline:
    "Backend Software Engineer building scalable products, developer tools, and production systems.",
  supportingParagraph:
    "I design and ship backend platforms with Spring Boot and Node.js, model data in PostgreSQL, and deploy cloud-native services.",
  primaryCta: { label: "View Projects", href: "/projects" },
  secondaryCta: { label: "Download Resume", href: "/resume" },
  githubUrl: "https://github.com/chiedudavid",
};

export const trustMetricsFixture: TrustMetric[] = [
  { label: "Production Systems Shipped", value: "3+" },
  { label: "Years Building Software", value: "3+" },
];

export const featuredProjectFixture: FeaturedProjectShowcase = {
  slug: "bundo",
  title: "Bundo",
  summary: "Production-grade platform for managing workflows and customer operations.",
  technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  featured: true,
  liveUrl: "https://bundo.example.com",
  architectureSummary: "Service-oriented backend with REST APIs and relational data modeling.",
  challengesSolved: ["Designed scalable API boundaries", "Implemented reliable persistence"],
  caseStudyHref: "/projects/bundo",
};

export const experienceFixture: ExperienceEntry[] = [
  {
    company: "Bundo Tech Inc.",
    role: "Backend Software Engineer",
    startDate: "2024-03",
    endDate: null,
    description: "Designed and shipped production APIs and deployment pipelines.",
  },
];

export const techStackFixture: TechStackGroup[] = [
  { category: "Backend", items: ["Java", "Spring Boot", "Node.js"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB"] },
];

export const projectPreviewFixture: ProjectPreview = {
  slug: "real-time-chat",
  title: "Real-Time Chat Application",
  summary: "Messaging application with live updates and persistent history.",
  technologies: ["Node.js", "Socket.IO", "React"],
  featured: false,
  href: "/projects/real-time-chat",
};

export const ctaFixture: CallToActionContent = {
  heading: "Interested in building reliable backend systems together?",
  primaryAction: { label: "Contact Me", href: "/contact" },
  secondaryAction: { label: "Download Resume", href: "/resume" },
};
