/** @type {import('next').NextConfig} */
const nextConfig = {
  // 这三行是目前唯一能让生产环境看到真实错误栈的有效配置
  reactStrictMode: true,

  // 关键：生产环境也生成 source map，这样 Vercel 日志里就能看到真实文件名和行号
  productionBrowserSourceMaps: true,

  // （可选）如果你用了远程图片，放开这几行防止图片 403
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
