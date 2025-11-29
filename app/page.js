// app/page.js
import Card from '@/components/Card';
import { locales } from '@/data/locales';

const { zh } = locales;

const cards = [
  {
    id: 1,
    name: zh.card1_title,
    description: zh.card1_description,
    href: '/query',
    imgSrc: 'https://images.unsplash.com/photo-1518709268805-8df67eaccef1?w=600&h=400&fit=crop',
    imgAlt: '地区遗产查询',
  },
  {
    id: 2,
    name: zh.card2_title,
    description: zh.card2_description,
    href: '/generate',
    imgSrc: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=600&h=400&fit=crop',
    imgAlt: 'AI 创意可视化',
  },
];

export default function Home() {
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

        <footer className="mt-24 text-gray-500 text-sm">
          {zh.footer}
        </footer>
      </div>
    </main>
  );
}
