/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: false,
    domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig;
