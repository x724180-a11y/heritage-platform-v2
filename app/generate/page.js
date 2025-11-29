// app/generate/page.js
'use client';
import { useState } from 'react';

export default function GeneratePage() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState('');

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 to-pink-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-8 text-gray-800">AI 创意可视化</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          上传参考图 + 输入描述，让 AI 生成专属文化遗产艺术形象
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 左边：上传区 */}
          <div
            className="border-4 border-dashed border-purple-300 rounded-3xl p-12 text-center bg-white/70 backdrop-blur"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
            }}
          >
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
              className="hidden"
              id="upload"
            />
            {image ? (
              <img src={image} alt="参考图" className="mx-auto max-h-80 rounded-2xl shadow-xl" />
            ) : (
              <label htmlFor="upload" className="cursor-pointer">
                <div className="text-6xl mb-6">Upload Image</div>
                <p className="text-2xl text-gray-600">点击或拖拽上传参考图片</p>
              </label>
            )}
          </div>

          {/* 右边：输入描述 + 生成按钮 */}
          <div className="space-y-8">
            <textarea
              placeholder="描述你想要的效果… 例如：故宫的赛博朋克风格夜景，霓虹灯+飞车"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full h-48 p-6 rounded-2xl border-2 border-gray-200 focus:border-purple-500 outline-none text-lg resize-none"
            />
            <button className="w-full py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold rounded-2xl hover:scale-105 transition shadow-xl">
              {image ? '立即生成 AI 作品 →' : '请先上传参考图'}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
