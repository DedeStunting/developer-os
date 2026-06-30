import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    environment: "node",
    environmentMatchGlobs: [["**/*.{test,spec}.tsx", "jsdom"]],
    setupFiles: [path.resolve(rootDir, "vitest.setup.ts")],
    include: ["**/*.{test,spec}.{ts,tsx}"],
    exclude: ["node_modules", ".next", "storybook-static", "dist"],
  },
});
