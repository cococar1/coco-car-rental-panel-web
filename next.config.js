/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_EURL_API: process.env.GRAPHQL_EURL_API,
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_API_URL:process.env.NEXT_PUBLIC_API_URL,
    NEXT_AUTH_SECRET:process.env.NEXT_AUTH_SECRET,
  },
};

module.exports = nextConfig;
