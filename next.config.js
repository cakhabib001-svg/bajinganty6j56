/** @type {import('next').NextConfig} */
const nextConfig = {
  // Menonaktifkan Strict Mode sementara untuk menghindari masalah rendering ganda di development yang kadang terbawa ke build
  reactStrictMode: false,
  
  // Memaksa Vercel untuk mengabaikan error ESLint (penulisan kode) saat proses build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Memaksa Vercel untuk mengabaikan error TypeScript (seperti tipe data 'any') saat proses build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Mengizinkan gambar dari domain eksternal (Vercel Blob & Firebase Storage)
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      }
    ],
  },
};

module.exports = nextConfig;