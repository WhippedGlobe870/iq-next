/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'headless.zbinfo.site',
      },
    ],
  },
};

export default nextConfig;
