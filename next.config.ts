import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/groetenuitoss',
  compiler: {
    styledComponents: true,
  },
};

export default nextConfig;
