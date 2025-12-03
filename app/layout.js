// app/layout.js
import './globals.css';
import LanguageSwitcher from '@/components/LanguageSwitcher'; // ← 加上这行

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="antialiased">
        <LanguageSwitcher />  {/* ← 加上这行 */}
        {children}
      </body>
    </html>
  );
}
