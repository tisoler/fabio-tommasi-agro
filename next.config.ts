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
    minimumCacheTTL: 2592000, // 30 días en segundos
  },
  async headers() {
    return [
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable', // 30 días
          },
        ],
      },
      // Para SVG específicamente
      {
        // Para archivos SVG estáticos en la carpeta public
        source: '/:all*(svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable',
          },
        ],
      },
      {
        // Para SVG en rutas específicas
        source: '/images/:path*.svg',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
