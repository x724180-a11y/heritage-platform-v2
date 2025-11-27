// components/LanguageSwitcher.tsx
'use client';

import { useRouter, usePathname } from 'next/navigation';
import { locales } from '@/data/locales';
import type { Locale } from '@/data/locales';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  // 从 pathname 里安全取出当前语言，例如 "/en/about" → "en"，"/" → null
  const currentLocale = pathname.split('/')[1];
  const isValidLocale = locales.includes(currentLocale as Locale);
  const activeLocale = isValidLocale ? currentLocale : 'zh';

  const changeLanguage = (newLocale: Locale) => {
    const segments = pathname.split('/');
    
    if (isValidLocale) {
      // 已有语言段，直接替换
      segments[1] = newLocale;
    } else {
      // 当前是根路径或没有语言段，插入新语言
      segments.splice(1, 0, newLocale);
    }

    router.push(segments.join('/'));
  };

  return (
    <div className="flex items-center gap-3 p-2">
      <button
        onClick={() => changeLanguage('zh')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
          activeLocale === 'zh'
            ? 'bg-primary-blue text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
          activeLocale === 'en'
            ? 'bg-primary-blue text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  );
}
