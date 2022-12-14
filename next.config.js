/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = {
  ...nextConfig,
  images: {
    domains: [
      'avatars.githubusercontent.com',
      'loremflickr.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'images2.imgbox.com',
      'i.imgur.com',
      'live.staticflickr.com',
    ],
  },
  publicRuntimeConfig: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    FACEBOOK_ID: process.env.FACEBOOK_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    NEXT_PUBLIC_COINAPI_KEY: process.env.NEXT_PUBLIC_COINAPI_KEY,
    COINAPI_KEY: process.env.COINAPI_KEY,
  },
  env: {
    GITHUB_ID: process.env.GITHUB_ID,
    GITHUB_SECRET: process.env.GITHUB_SECRET,
    GOOGLE_ID: process.env.GOOGLE_ID,
    GOOGLE_SECRET: process.env.GOOGLE_SECRET,
    FACEBOOK_ID: process.env.FACEBOOK_ID,
    FACEBOOK_SECRET: process.env.FACEBOOK_SECRET,
    NEXT_PUBLIC_COINAPI_KEY: process.env.NEXT_PUBLIC_COINAPI_KEY,
    COINAPI_KEY: process.env.COINAPI_KEY,
  },
};
