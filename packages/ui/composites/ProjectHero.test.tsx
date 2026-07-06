/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ProjectMetadata } from "@developer-os/types";

import { ProjectHero } from "./ProjectHero";

const metadata: ProjectMetadata = {
  slug: "bundo",
  title: "Bundo",
  summary: "Production marketplace platform.",
  technologies: ["Node.js", "PostgreSQL"],
  featured: true,
  order: 1,
  caseStudyHref: "/projects/bundo",
  imageAlt: "Bundo preview",
  liveUrl: "https://bundo.example.com",
  repositoryAccess: "private",
  duration: "2024 — Present",
  role: "Backend Software Engineer",
};

describe("ProjectHero", () => {
  it("renders project metadata", () => {
    render(<ProjectHero metadata={metadata} />);

    expect(screen.getByRole("heading", { level: 1, name: metadata.title })).toBeInTheDocument();
    expect(screen.getByText(metadata.summary)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Live" })).toHaveAttribute("href", metadata.liveUrl);
  });
});
