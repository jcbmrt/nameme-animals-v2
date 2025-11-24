import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/animal',
  assetPrefix: '/animal',
  output: 'standalone',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
