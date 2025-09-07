/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [
      'r2.flowith.net',
      'customer-assets.emergentagent.com'
    ]
  },
  experimental: {
    optimizeCss: true
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  distDir: 'out'
}

module.exports = nextConfig