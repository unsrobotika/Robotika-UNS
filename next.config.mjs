/** @type {import('next').NextConfig} */
const nextConfig = {
    // Phase 1: Aggressive Image Optimization
    images: {
        // Auto-convert to AVIF (best) then WebP (fallback)
        formats: ['image/avif', 'image/webp'],

        // Allowed quality values (required for Next.js 16+)
        qualities: [70, 75, 80, 85],

        // Responsive breakpoints for srcset
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

        // Long cache for optimized images (1 year)
        minimumCacheTTL: 60 * 60 * 24 * 365,
    },

    // Production optimizations
    compiler: {
        // Remove console.log in production
        removeConsole: process.env.NODE_ENV === 'production',
    },
};

export default nextConfig;
