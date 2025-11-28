// components/Card.jsx
import Image from 'next/image';

export default function Card({ id, name, description, imageSrc, imageAlt, href }) {
  return (
    <div key={id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        
        {/* Next.js Image Component 必须使用 width 和 height 属性 */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600} // 为图片设置固定的宽度，避免 Layout Shift
          height={400} // 为图片设置固定的高度
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />

      </div>
      <h3 className="mt-4 text-sm text-gray-700">
        <a href={href}>
          <span className="absolute inset-0 z-10" />
          {name}
        </a>
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{description}</p>
    </div>
  );
}
