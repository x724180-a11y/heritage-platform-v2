// components/LanguageSwitcher.jsx —— 终极多语言切换器（直接覆盖！）
'use client';

import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // 判断当前是中文还是英文路径
  const isEnglish = pathname.startsWith('/en');
  const currentLang = isEnglish ? 'en' : 'zh';

  const toggleLanguage = () => {
    if (isEnglish) {
      // 从英文切回中文：去掉 /en 前缀
      router.push(pathname.replace(/^\/en/, '') || '/');
    } else {
      // 从中文切到英文：加上 /en 前缀
      router.push('/en' + (pathname === '/' ? '' : pathname));
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-white/90 backdrop-blur-lg rounded-full shadow-lg hover:shadow-2xl transition-all hover:scale-110 font-bold text-lg border border-gray-200"
      aria-label="Switch language"
    >
      {isEnglish ? (
        <>
          <span className="text-xl">🇺🇸</span> EN
        </>
      ) : (
        <>
          <span className="text-xl">🇨🇳</span> 中
        </>
      )}
    </button>
  );
}
