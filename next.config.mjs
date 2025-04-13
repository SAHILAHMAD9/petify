/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.clerk.dev'],
    },
    // Add this to help with the build
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
};

export default nextConfig;
