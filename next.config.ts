import type { NextConfig } from "next";
import path from "path";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isProd ? "/sterling-crest-site" : "",
  assetPrefix: isProd ? "/sterling-crest-site/" : "",
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
