// app/page.js —— 终极无敌·永不 500·美炸版
import Card from '@/components/Card';
import { locales } from '@/data/locales';
const { zh } = locales;

const cards = [
  {
    id: 1,
    name: zh.card1_title,
    description: zh.card1_description,
    href: '/query',
    imgSrc: 'https://images.unsplash.com/photo-1518709268805-8df67eaccef1?w=800&h=600&fit=crop',
    imgAlt: '地区遗产查询',
  },
  {
    id: 2,
    name: zh.card2_title,
    description: zh.card2_description,
    href: '/generate',
    imgSrc: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=600&fit=crop',
    imgAlt: 'AI 创意可视化',
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 渐变背景 */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50" />

      <main className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* 标题 */}
          <div className="text-center mb-20 opacity-0 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              {zh.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {zh.subtitle}
            </p>
          </div>

          {/* 卡片区 */}
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {cards.map((card, i => (
              <div
                key={card.id}
                className="opacity-0 animate-slide-up"
                style={{ animationDelay: `${i * 300}ms`, animationFillMode: 'forwards' }}
              >
                <a href={card.href} className="block group block">
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-3xl bg-white/60 backdrop-blur-xl border border-white/30">
                    <img
                      src={card.imgSrc}
                      alt={card.imgAlt}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
