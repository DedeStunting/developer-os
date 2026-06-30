/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import type { CallToActionContent } from "@developer-os/types";

import { CallToAction } from "./CallToAction";

const content: CallToActionContent = {
  heading: "Interested in working together?",
  primaryAction: { label: "Contact Me", href: "/contact" },
  secondaryAction: { label: "Download Resume", href: "/resume" },
};

describe("CallToAction", () => {
  it("renders configured actions", () => {
    render(<CallToAction content={content} />);

    expect(screen.getByRole("heading", { level: 2, name: content.heading })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: content.primaryAction.label })).toHaveAttribute(
      "href",
      "/contact",
    );
    expect(screen.getByRole("link", { name: content.secondaryAction.label })).toHaveAttribute(
      "href",
      "/resume",
    );
  });
});
