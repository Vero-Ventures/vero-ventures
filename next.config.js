/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
    ],
  },
};

module.exports = nextConfig;
