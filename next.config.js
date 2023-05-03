/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'afcartpublic.s3.us-east-2.amazonaws.com',
        port: '',
        pathname: '/mediaicons/**',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig
