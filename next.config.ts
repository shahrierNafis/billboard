/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // Only use the repo name as a prefix in production
  basePath: isProd ? "/billboard" : "",
  assetPrefix: isProd ? "/billboard/" : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
