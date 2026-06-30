import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@developer-os/ui",
    "@developer-os/core",
    "@developer-os/content",
    "@developer-os/config",
    "@developer-os/types",
    "@developer-os/platform",
  ],
};

export default nextConfig;
