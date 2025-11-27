// components/LanguageSwitcher.jsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales } from '@/data/locales'; // 假设语言包在 data 文件夹

export default function LanguageSwitcher({ currentLang }) {
  const router = useRouter();
  const pathname = usePathname();
  
  // 简化的语言切换逻辑：通过 URL Query Parameter 切换
  const switchLanguage = (lang) => {
    const newPath = `${pathname}?lang=${lang}`;
    router.push(newPath);
  };

  return (
    <div className="flex space-x-2 p-2">
      <button
        onClick={() => switchLanguage('zh')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          currentLang === 'zh' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          currentLang === 'en' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  );
}