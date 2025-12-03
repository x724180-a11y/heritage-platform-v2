// app/layout.js —— 终极修复版（Gemini 说的对，必须加这一行导入！）
import './globals.css';  // ←←←← 这一行是 Tailwind 生效的命门！没有它样式全丢

export const metadata = {
  title: '文化遗产可视化平台',
  description: 'AI 驱动的文化遗产查询与创意生成平台',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="antialiased">{children}</body>
    </html>
  );
}
