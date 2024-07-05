const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  output: "export",
  basePath: "/example-ios-chat-next",
  assetPrefix: isProd ? 'https://keepgo-studio.github.io/example-ios-chat-next' : undefined
};

export default nextConfig;
