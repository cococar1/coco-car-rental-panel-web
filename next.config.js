/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cocorental.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    // GRAPHQL_URL_API: process.env.GRAPHQL_EURL_API,
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET,
  },
};

module.exports = nextConfig;
