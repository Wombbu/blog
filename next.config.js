/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    domains: ["localhost", "www.laurinevanpera.fi"],
  },
};

module.exports = nextConfig;
