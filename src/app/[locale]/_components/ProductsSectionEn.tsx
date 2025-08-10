'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function ProductsSectionEn() {
  const locale = useLocale()

  const categories = [
    {
      key: 'mikan',
      title: 'Mandarin Oranges',
      description: 'Premium canned mandarin oranges made from carefully selected domestic fruit',
      image: '/images/みかん商品.avif',
    },
    {
      key: 'peach',
      title: 'Yellow Peaches',
      description: 'Sweet and juicy yellow peaches preserved at peak ripeness',
      image: '/images/桃.avif',
    },
    {
      key: 'tomato',
      title: 'Tomato Products',
      description: 'Fresh tomato products processed with advanced technology',
      image: '/images/トマトイメージ.avif',
    },
    {
      key: 'mushroom',
      title: 'Mushrooms',
      description: 'High-quality mushrooms carefully selected and processed',
      image: '/images/マッシュルーム.avif',
    },
    {
      key: 'frozen',
      title: 'Frozen Fruits',
      description: 'Year-round availability of fresh, frozen fruit products',
      image: '/images/冷凍みかんイメージ_edited.avif',
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              Our Products
            </h2>
            <div className="w-16 h-px bg-orange-600 mx-auto" />
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Safe, reliable foods centered on Japanese produce with over 100 years of expertise
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.key} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-medium text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/goods`}
            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 group"
          >
            <span>View All Products</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}