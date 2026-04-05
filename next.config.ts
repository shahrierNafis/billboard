import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/billboard",
  assetPrefix: "/billboard/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
