/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'random.imagecdn.app',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**'
      },
    ],
  },
}

module.exports = nextConfig
