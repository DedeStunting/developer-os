/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { HeroContent } from "@developer-os/types";

import { Hero } from "./Hero";

const hero: HeroContent = {
  name: "Chiedu David",
  title: "Software Engineer",
  headline: "Building production systems.",
  supportingParagraph: "Focused on backend delivery.",
  primaryCta: { label: "View Projects", href: "/projects" },
  secondaryCta: { label: "Download Resume", href: "/resume" },
  githubUrl: "https://github.com/example",
};

describe("Hero", () => {
  it("renders supplied content", () => {
    render(<Hero content={hero} />);

    expect(screen.getByRole("heading", { level: 1, name: hero.name })).toBeInTheDocument();
    expect(screen.getByText(hero.supportingParagraph)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: hero.primaryCta.label })).toHaveAttribute(
      "href",
      "/projects",
    );
  });
});
