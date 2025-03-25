import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
    dynamicIO: true,
    useCache: true,
    reactCompiler: true,
  },
};

export default nextConfig;
