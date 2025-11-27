// components/LanguageSwitcher.jsx
'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { locales } from '../data/locales';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname() || '/';
  const searchParams = useSearchParams();

  // 从 pathname 自动推断当前语言（例如 "/en/about" -> "en"；"/about" -> null）
  const segments = pathname.split('/');
  const detected = segments[1];
  const isValidLocale = locales.includes(detected);
  const activeLocale = isValidLocale ? detected : 'zh';

  const changeLanguage = (newLocale) => {
    // 保留路径中除语言段外的其余部分
    const restSegments = segments.slice(isValidLocale ? 2 : 1).filter(Boolean);
    const restPath = restSegments.length ? `/${restSegments.join('/')}` : '';
    const newPath = `/${newLocale}${restPath}`;

    // 保留现有的 query 参数
    const qs = searchParams ? searchParams.toString() : '';
    const newUrl = qs ? `${newPath}?${qs}` : newPath;

    router.push(newUrl);
  };

  return (
    <div className="flex space-x-2 p-2" role="group" aria-label="Language switcher">
      <button
        type="button"
        onClick={() => changeLanguage('zh')}
        aria-pressed={activeLocale === 'zh'}
        aria-label="切换到中文"
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          activeLocale === 'zh' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        中文
      </button>

      <button
        type="button"
        onClick={() => changeLanguage('en')}
        aria-pressed={activeLocale === 'en'}
        aria-label="Switch to English"
        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
          activeLocale === 'en' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        English
      </button>
    </div>
  );
}