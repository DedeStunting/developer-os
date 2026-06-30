import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Container } from "./Container";

describe("Container", () => {
  it("renders children", () => {
    render(<Container>Layout content</Container>);
    expect(screen.getByText("Layout content")).toBeInTheDocument();
  });

  it("applies max width class", () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveClass("max-w-[1280px]");
  });
});
