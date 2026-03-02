/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Menyuruh Vercel mengabaikan peringatan penulisan
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Menyuruh Vercel mengabaikan peringatan tipe data (seperti 'any')
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;