/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This might require additional configuration for ESLint itself
        dirs: ['pages', 'components', 'app'], // Adjust paths to your components
    },
};

export default nextConfig;