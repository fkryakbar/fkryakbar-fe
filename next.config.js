const { withContentlayer } = require("next-contentlayer");
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fkryakbar-counter.ninepmx.my.id",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);
