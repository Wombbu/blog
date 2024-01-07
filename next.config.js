/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "**localhost" },
      { hostname: "**.laurinevanpera.fi" },
    ],
  },
};

module.exports = nextConfig;
