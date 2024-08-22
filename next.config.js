/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "www.financialtechtools.ca",
        pathname: "/wp-content/uploads/2021/09/Videre-300x100.png",
      },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};

module.exports = nextConfig;
