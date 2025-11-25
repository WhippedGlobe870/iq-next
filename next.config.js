/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'headless.zbinfo.site',
      },
    ],
  },
}

module.exports = nextConfig