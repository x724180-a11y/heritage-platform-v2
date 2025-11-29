// app/generate/page.js
export default function GeneratePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">AI 创意可视化</h1>
        <p className="text-xl text-gray-600 mb-12">
          上传参考图或输入详细描述，让 AI 生成您理想中的文化遗产新形象（如三维重建、概念设计等）。
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-12">
          <div className="border-4 border-dashed border-purple-300 rounded-xl h-64 flex items-center justify-center">
            <p className="text-2xl text-gray-400">上传图片或输入描述（开发中…）</p>
          </div>
        </div>

        <p className="mt-12 text-gray-500">功能开发中，敬请期待！</p>
      </div>
    </main>
  );
}
