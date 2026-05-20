import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d2xsxph8kpxj0f.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "manzur.co.il",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
