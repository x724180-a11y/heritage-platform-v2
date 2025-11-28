// app/page.tsx  —— 正确的、永不 500 的最终版
import Card from '@/components/Card';
import { locales } from '@/data/locales';

const { zh } = locales;

export default function Home() {
  const cards = [
    {
      id: 1,
      name: zh.card1_title,
      description: zh.card1_description,
      href: '/query',               // 你后面可以建这个页面
      imgSrc: '/placeholder1.jpg',  // 你可以放两张占位图，或者留空
      imgAlt: '地区遗产查询',
    },
    {
      id: 2,
      name: zh.card2_title,
      description: zh.card2_description,
      href: '/generate',            // 你后面可以建这个页面
      imgSrc: '/placeholder2.jpg',
      imgAlt: 'AI 创意可视化',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          {zh.title}
        </h1>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          {zh.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {cards.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        <footer className="mt-24 text-gray-500">
          {zh.footer}
        </footer>
      </div>
    </main>
  );
}
