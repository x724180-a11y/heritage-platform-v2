// components/LanguageSwitcher.jsx
'use client';

// 导入必要的钩子和数据
import { usePathname, useRouter } from 'next/navigation';
import { locales } from '../data/locales'; 

export default function LanguageSwitcher({ currentLang }) {
  // 必须在函数内部调用
  const router = useRouter();
  const pathname = usePathname();
  
  // 简化的语言切换逻辑：通过 URL Query Parameter 切换
  const switchLanguage = (lang) => {
    // 构建新的路径，添加或修改 URL 参数 lang
    const newPath = `${pathname}?lang=${lang}`;
    router.push(newPath);
  };

  return (
    <div className="flex space-x-2 p-2">
      {/* 按钮 1：中文 */}
      <button
        onClick={() => switchLanguage('zh')}
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          currentLang === 'zh' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        中文
      </button>

      {/* 按钮 2：英文 */}
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
