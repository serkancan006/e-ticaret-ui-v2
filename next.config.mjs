import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
    jsconfigPaths: true // enables it for both jsconfig.json and tsconfig.json
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL,
  },
  images: {
    domains: ['tailwindui.com'],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve('./node_modules/apexcharts-clevision'), // path modülünü kullanmak için import edin
    };

    return config;
  },
};



export default nextConfig;
