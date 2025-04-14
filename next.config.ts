import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bxk21.vercel.app",
        // port: "",
        // pathname: "/image/upload/**",
        // search: "",
      },
    ],
  }
};

export default nextConfig;
