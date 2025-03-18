import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  images: {
    domains: ['cdn-icons-png.freepik.com',"img.freepik.com", "files.oaiusercontent.com","food.sasakonnect.net","i.bb.co", "ke.jumia.is","s.alicdn.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
