/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        NODEMAILER_SECRET: `${process.env.AWS_ACCESS_KEY_ID}`,
        NODEMAILER_SECRET_ACCESS_KEY: `${process.env.AWS_SECRET_ACCESS_KEY}`,
    },
}
module.exports = nextConfig
