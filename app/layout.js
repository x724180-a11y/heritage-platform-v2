// app/layout.js —— 必须这样写！
import './globals.css';  // ← 这一行是 Tailwind 生效的关键！

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
