import type { NextConfig } from "next";

const projectSlugs = ["bundo", "pizza-ordering-platform", "real-time-chat"] as const;

const nextConfig: NextConfig = {
  transpilePackages: [
    "@developer-os/ui",
    "@developer-os/core",
    "@developer-os/content",
    "@developer-os/config",
    "@developer-os/types",
    "@developer-os/platform",
  ],
  async redirects() {
    return [
      {
        source: "/resume",
        destination: "/#resume",
        permanent: false,
      },
      {
        source: "/projects",
        destination: "/#projects",
        permanent: false,
      },
      ...projectSlugs.map((slug) => ({
        source: `/projects/${slug}`,
        destination: "/#projects",
        permanent: false,
      })),
    ];
  },
};

export default nextConfig;
