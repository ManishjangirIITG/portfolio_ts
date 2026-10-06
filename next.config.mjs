/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        destination: "https://manishjangir-portfolio.vercel.app",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;