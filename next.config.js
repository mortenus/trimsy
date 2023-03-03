/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'trimsy.org',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
    ],
  },
};

module.exports = nextConfig;
