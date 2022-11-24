const { hostname } = require("os");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["assets.suncel.io", "next-suncel-736qmh16o-fhub-1.vercel.app"],
  },
};

module.exports = nextConfig;
