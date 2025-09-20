/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: `${process.env.SUPABASE_URL.slice(8)}`,
        port: "",
        pathname: "/storage/v1/object/public/**",
        search: "",
      },
    ],
  },
 // output: "export",
};

export default nextConfig;
