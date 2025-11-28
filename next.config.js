/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. 让错误信息在生产环境也能显示得更详细（强烈推荐！！！）
  //    这样 Vercel 就不会只给你看那句没用的 “An error occurred in the Server Component render”
  logging: {
    fetches: {
      fullUrl: true,
    },
  },

  // 2. 开启 React Strict Mode（默认就是开的，写出来防止被关掉）
  reactStrictMode: true,

  // 3. 让 Next.js 在生产环境也把未捕获的错误完整打印到 Vercel 日志（关键！！）
  //    加上这一行后，你再去 Vercel Logs 就能看到真实的错误栈了
  onDemandEntries: {
    // 让错误不被隐藏
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 50,
  },

  // 4. （可选但推荐）开启实验性功能，让服务器错误更透明
  experimental: {
    logging: {
      level: "verbose",           // 生产环境也能看到详细日志
    },
    serverComponentsExternalPackages: [], // 如果你用了外部包（如 drizzle-orm）可以在这里加
  },

  // 5. （如果你用了图片、字体等优化）保持默认优化
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // 6. 如果你想彻底关闭静态预渲染（临时快速验证是不是 prerender 问题）
  //    加上这行后所有页面都会强制动态渲染，500 很大概率立刻消失（用于排查）
  // output: "standalone", // 如果你用 docker 可以打开
  // 临时强制动态渲染（调试用，找到问题后再删掉）：
  // dynamic: "force-dynamic", // 只能写在页面里，不能写这里

  // 下面这行是关键中的关键！！！加上后生产环境也能看到真实错误
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
