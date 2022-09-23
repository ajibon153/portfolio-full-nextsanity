/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
        SANITY_TOKEN: process.env.SANITY_TOKEN,
    },
    // sassOptions: {
    //     includePaths: [path.join(__dirname, 'styles')],
    // },
};

module.exports = nextConfig;
