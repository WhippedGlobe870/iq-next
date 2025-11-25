/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    domains: ['headless.zbinfo.site'],
  },
  // Добавь эту настройку
  distDir: '.next',
  // Укажи путь к app директории
  experimental: {
    appDir: true,
  },
  // Если используешь кастомные пути
  webpack: (config) => {
    return config
  }
}

module.exports = nextConfig