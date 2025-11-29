// app/query/page.js
'use client';
import { useState } from 'react';

export default function QueryPage() {
  const [image, setImage] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFile = (file) => {
    if (file && file.type.startsWith('image/')) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">地区遗产查询</h1>
        <p className="text-xl text-gray-600 mb-12">
          上传地图截图或地区照片，AI 自动识别并返回文化遗产列表
        </p>

        <div
          className={`relative border-4 border-dashed rounded-3xl p-16 transition-all ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 bg-white'
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={(e) => { e.preventDefault(); setDragActive(false); }}
          onDrop={(e) => {
            e.preventDefault(); setDragActive(false);
            if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
          }}
        >
          <input
            type="file"
            accept="image/*"
            onChange={(e) => e.target.files[0] && handleFile(e.target.files[0])}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          {image ? (
            <img src={image} alt="预览" className="mx-auto max-h-96 rounded-2xl shadow-2xl" />
          ) : (
            <div>
              <div className="text-6xl mb-6">↑</div>
              <p className="text-2xl text-gray-600">拖拽图片到这里 或 点击上传</p>
              <p className="text-gray-400 mt-4">支持 JPG、PNG、WEBP</p>
            </div>
          )}
        </div>

        {image && (
          <button className="mt-10 px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold hover:scale-105 transition mt-10">
            开始智能识别 →
          </button>
        )}
      </div>
    </main>
  );
}
