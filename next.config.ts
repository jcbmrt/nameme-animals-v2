import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/animals',
  assetPrefix: '/animals',
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
