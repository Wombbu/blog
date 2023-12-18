/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  images: {
    domains: ["localhost", "www.laurinevanpera.fi"],
  },
};

module.exports = nextConfig;
