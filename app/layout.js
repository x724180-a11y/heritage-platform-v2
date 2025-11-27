// app/layout.js
import './globals.css'; // 导入全局样式
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: '文化遗产可视化平台',
  description: '一个结合地理查询和 AI 图像生成的文化遗产平台',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
