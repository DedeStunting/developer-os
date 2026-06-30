/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { ProjectPreview } from "@developer-os/types";

import { ProjectPreviewCard } from "./ProjectPreviewCard";

const baseProject: ProjectPreview = {
  slug: "sample",
  title: "Sample Project",
  summary: "A concise project summary.",
  technologies: ["TypeScript"],
  featured: false,
  href: "/projects/sample",
};

describe("ProjectPreviewCard", () => {
  it("renders core project content", () => {
    render(<ProjectPreviewCard project={baseProject} />);

    expect(screen.getByRole("heading", { level: 3, name: baseProject.title })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Project" })).toHaveAttribute(
      "href",
      "/projects/sample",
    );
  });

  it("handles missing optional live url", () => {
    render(<ProjectPreviewCard project={baseProject} />);

    expect(screen.queryByRole("link", { name: /live demo/i })).not.toBeInTheDocument();
  });

  it("renders live demo when live url is provided", () => {
    render(
      <ProjectPreviewCard
        project={{
          ...baseProject,
          liveUrl: "https://example.com",
        }}
      />,
    );

    expect(screen.getByRole("link", { name: /live demo/i })).toHaveAttribute(
      "href",
      "https://example.com",
    );
  });
});
