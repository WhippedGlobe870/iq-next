/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['headless.zbinfo.site'],
  },
  distDir: '.next',
}

export default nextConfig