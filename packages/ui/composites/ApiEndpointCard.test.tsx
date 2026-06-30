/** @vitest-environment jsdom */
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { ApiEndpointCard } from "./ApiEndpointCard";

describe("ApiEndpointCard", () => {
  it("renders method, path, and description", () => {
    render(
      <ApiEndpointCard
        endpoint={{
          method: "POST",
          path: "/orders",
          description: "Creates an order with validation.",
        }}
      />,
    );

    expect(screen.getByText("POST")).toBeInTheDocument();
    expect(screen.getByText("/orders")).toBeInTheDocument();
    expect(screen.getByText("Creates an order with validation.")).toBeInTheDocument();
  });
});
