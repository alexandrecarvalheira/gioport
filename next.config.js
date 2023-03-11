/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["gio-port.fly.dev"],
  },
};

module.exports = nextConfig;
