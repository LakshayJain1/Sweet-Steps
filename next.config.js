/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'placeholder.co'],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/products/:slug',
        destination: '/gallery',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
