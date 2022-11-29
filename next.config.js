/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    env: {
        AWS_ACCESS_KEY_ID: `NODEMAILER_SECRET`,
        AWS_SECRET_ACCESS_KEY: `NODEMAILER_SECRET_ACCESS_KEY`,
    },
}
module.exports = nextConfig
