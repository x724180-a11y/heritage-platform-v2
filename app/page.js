// app/page.tsx
import Card from '@/components/Card'

// 加上默认值，防止 undefined
export const revalidate = 60 // 可选：每 60 秒重新获取一次

export default async function Home() {
  let projects = []

  try {
    const res = await fetch('https://你的数据接口地址', {
      next: { revalidate: 60 }, // 或者 cache: 'no-store' 如果要实时
    })

    if (res.ok) {
      projects = await res.json()
    } else {
      console.error('Fetch failed:', res.status)
    }
  } catch (error) {
    console.error('Fetch error:', error)
  }

  // 关键：永远保证 projects 是数组
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">遗产平台</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((item: any) => (
            <Card key={item.id} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            暂无数据或加载失败
          </p>
        )}
      </div>
    </main>
  )
}
