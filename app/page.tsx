// app/page.tsx  —— 最终永不 500 版
import Card from '@/components/Card';

export const revalidate = 60;

export default async function Home() {
  let projects: any[] = [];

  try {
    // ←←←← 把这里改成你真实的数据接口！！！
    const res = await fetch('https://your-real-api.com/projects', {
      next: { revalidate: 60 }, // 60 秒缓存
    });

    if (res.ok) {
      const data = await res.json();
      projects = Array.isArray(data) ? data : [];
    } else {
      console.error('接口返回非 200:', res.status);
    }
  } catch (e) {
    console.error('请求完全失败:', e);
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-800">
          遗产平台
        </h1>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((item) => (
              <Card
                key={item.id}
                id={item.id}
                name={item.name || item.title}
                description={item.description || '暂无描述'}
                imgSrc={item.imgSrc || item.image || '/placeholder.jpg'}
                imgAlt={item.imgAlt || item.name || '项目图片'}
                href={item.href || `/project/${item.id}`}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 text-xl text-gray-500">
            暂无项目数据（检查接口是否正确）
          </div>
        )}
      </div>
    </main>
  );
}
