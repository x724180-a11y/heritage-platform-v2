// app/query/page.js
export default function QueryPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">地区遗产查询</h1>
        <p className="text-xl text-gray-600 mb-12">
          上传特定地区名称或地图截图，自动获取该地区所有注册的文化遗产列表及简介。
        </p>
        
        <div className="bg-white rounded-xl shadow-lg p-12">
          <div className="border-4 border-dashed border-blue-300 rounded-xl h-64 flex items-center justify-center">
            <p className="text-2xl text-gray-400">上传区域：上传地图或输入地区名称（开发中…）</p>
          </div>
        </div>

        <p className="mt-12 text-gray-500">功能开发中，敬请期待！</p>
      </div>
    </main>
  );
}
