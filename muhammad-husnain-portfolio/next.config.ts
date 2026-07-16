import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  turbopack: {
    root: __dirname,
  },


  images: {

    formats: [
      "image/avif",
      "image/webp"
    ],

    deviceSizes: [
      640,
      750,
      1080,
      1200,
      1920
    ],

  },


  reactStrictMode: true,


  poweredByHeader: false,


};

export default nextConfig;