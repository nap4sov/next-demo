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
  // env: {
  //   GITHUB_ID: 'e148646cdc99180a50cf',
  //   GITHUB_SECRET: 'bff44d84d74d5d6b4ffe230a01edd8d7255c70e7',
  //   GOOGLE_ID: '69iea4vjeek6kf1jh35b2562p9nd05h7.apps.googleusercontent.com',
  //   GOOGLE_SECRET: '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',
  // },
};
