// app/page.js
import { locales } from '@/data/locales';
import Card from '@/components/Card';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { Globe, Wand2 } from 'lucide-react';

// 获取当前语言环境
const getMessages = (searchParams) => {
  const lang = searchParams.lang === 'en' ? 'en' : 'zh'; // 默认中文
  return { messages: locales[lang], lang };
};

export default function HomePage({ searchParams }) {
  const { messages, lang } = getMessages(searchParams);

  return (
    <div className="min-h-screen bg-secondary-gray">
      {/* 头部导航和语言切换 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-extrabold text-primary-blue">
            {messages.title}
          </h1>
          <LanguageSwitcher currentLang={lang} />
        </div>
      </header>

      {/* 主内容区域 */}
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {messages.title}
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            {messages.subtitle}
          </p>
        </section>

        {/* 卡片式功能展示 - 核心 */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card 
            title={messages.card1_title}
            description={messages.card1_description}
            buttonText={messages.card1_button}
            icon={Globe}
            onClick={() => alert(messages.card1_title + ' 待开发')}
          />
          <Card 
            title={messages.card2_title}
            description={messages.card2_description}
            buttonText={messages.card2_button}
            icon={Wand2}
            onClick={() => alert(messages.card2_title + ' 待开发')}
          />
        </section>
      </main>

      {/* 底部 */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
          {messages.footer}
        </div>
      </footer>
    </div>
  );
}