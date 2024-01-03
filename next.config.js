/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    GRAPHQL_EURL_API: process.env.GRAPHQL_EURL_API,
  },
};

module.exports = nextConfig;
