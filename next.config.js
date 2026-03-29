/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'placeholder.co'],
    formats: ['image/avif', 'image/webp'],
  },
};

export default nextConfig;
