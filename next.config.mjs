const prefix = process.env.NODE_ENV === 'production' ? 'https://keepgo-studio.github.io/example-ios-chat-next/' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  distDir: "docs",
  basePath: "/example-ios-chat-next",
  assetPrefix: prefix
};

export default nextConfig;
