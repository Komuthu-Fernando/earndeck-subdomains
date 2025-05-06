/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['via.placeholder.com'],
    },
    async rewrites() {
      return [
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'draft.earndeckshipping.com' }],
          destination: '/draft/:path*',
        },
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'container.earndeckshipping.com' }],
          destination: '/container/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;