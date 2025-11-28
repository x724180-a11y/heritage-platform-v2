import { locales } from '../data/locales';
import Card from '../components/Card';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Home({ searchParams }) {
  // 1. 获取当前语言（使用 URL 参数）
  const currentLang = searchParams.lang === 'en' ? 'en' : 'zh';
  
  // 2. 避免同步解析：直接使用 locales[currentLang].data 进行循环
  
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
        
        {/* 标题和切换器区域 */}
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {locales[currentLang].title}
          </h2>
          <LanguageSwitcher currentLang={currentLang} />
        </div>

        {/* 卡片列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* 修正后的循环：直接使用 locales[currentLang].data */}
          {locales[currentLang].data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
