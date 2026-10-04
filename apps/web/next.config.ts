import type { NextConfig } from "next";

const API_URL = (process.env.API_URL ?? "http://localhost:3001").replace(/\/+$/, "");

const nextConfig: NextConfig = {
  // Browser calls /api/* on the Next origin; Next proxies to Nest. No CORS needed.
  async rewrites() {
    return [{ source: "/api/:path*", destination: `${API_URL}/api/:path*` }];
  },
};

export default nextConfig;
