module.exports = nextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  trailingSlash: true,
  basePath: "/Testing-deep",
  assetPrefix: "/Testing-deep",
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
}