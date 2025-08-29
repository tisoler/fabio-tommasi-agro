import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tisolercdn.nyc3.cdn.digitaloceanspaces.com",
        port: "",
      },
    ],
    formats: ['image/avif', 'image/webp'], // AVIF first as it's more efficient
    minimumCacheTTL: 86400, // Cache optimized images for 1 day
  },
};

export default nextConfig;
