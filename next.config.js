/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'loremflickr.com',
        port: '0',
      },
    ],
    domains: ['avatars.githubusercontent.com'],
  },
};
