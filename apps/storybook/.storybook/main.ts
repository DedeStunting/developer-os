import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import path from "node:path";

const config: StorybookConfig = {
  stories: ["../stories/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-essentials", "@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@developer-os/ui": path.resolve(__dirname, "../../../packages/ui"),
          "@developer-os/config": path.resolve(__dirname, "../../../packages/config"),
          "next/link": path.resolve(__dirname, "../mocks/next-link.tsx"),
          "next/navigation": path.resolve(__dirname, "../mocks/next-navigation.ts"),
        },
      },
    });
  },
};

export default config;
