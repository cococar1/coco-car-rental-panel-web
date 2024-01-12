/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_EURL_API: process.env.GRAPHQL_EURL_API,
    API_URL: process.env.API_URL,
  },
};

module.exports = nextConfig;
