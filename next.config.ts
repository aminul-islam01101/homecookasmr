import redirects from "@/lib/redirects";
import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
