// app/page.tsx  （或者 page.js）
import Card from '@/components/Card'

export const revalidate = 60

export default async function Home() {
  let projects: any[] = []

  try {
    const res = await fetch('https://你的接口地址替换这里', {
      next: { revalidate: 60 },
    })
    if (res.ok) {
      projects = await res.json()
    }
  } catch (error) {
    console.error('数据加载失败:', error)
  }

  return (
    <main className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-10 text-center">遗产平台</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((item: any) => (
            <Card key={item.id} {...item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            暂无数据或加载失败
          </p>
        )}
      </div>
    </main>
  )
}
