import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: [
    "@developer-os/ui",
    "@developer-os/core",
    "@developer-os/config",
    "@developer-os/types",
  ],
};

export default nextConfig;
