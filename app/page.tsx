// app/page.tsx   
import Card from '@/components/Card';

export const revalidate = 60; // 可选：60 秒缓存

export default async function Home() {
  let projects: any[] = [];

  // 防止任何情况下 fetch 炸掉
  try {
    const res = await fetch('https://你的数据接口地址', {
      cache: 'force-cache',
      next: { revalidate: 60 },
    });

    if (res?.ok) {
      const data = await res.json();
      // 再保险一次，防止返回 null/undefined/字符串
      projects = Array.isArray(data) ? data : [];
    }
  } catch (e) {
    console.error('首页数据加载失败', e);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">遗产平台</h1>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <Card key={item.id || Math.random()} {...item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-xl">
            暂无项目数据
          </div>
        )}
      </div>
    </main>
  );
}
