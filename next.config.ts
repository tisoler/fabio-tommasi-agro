import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    domains: ["tisolercdn.nyc3.cdn.digitaloceanspaces.com",
    ],
    formats: ['image/avif', 'image/webp'], // AVIF first as it's more efficient
    minimumCacheTTL: 2592000, // 30 días en segundos
  },
  reactStrictMode: true,
};

export default nextConfig;
