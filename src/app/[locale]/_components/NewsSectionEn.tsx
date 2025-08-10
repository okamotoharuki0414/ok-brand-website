'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function NewsSectionEn() {
  const locale = useLocale()

  // Sample news data for English - in real app, this would come from CMS or API
  const newsItems = [
    {
      id: 1,
      title: 'New Product Launch: Domestic Lemon Slices',
      excerpt: 'We are pleased to announce the launch of our new domestic lemon slice product...',
      image: '/images/news1.jpg',
      date: '2024.12.15',
      category: 'Press Release'
    },
    {
      id: 2,
      title: 'Food Safety Management System Certification Acquired',
      excerpt: 'We have obtained ISO 22000 certification, furthering our commitment to quality improvement...',
      image: '/images/news2.jpg',
      date: '2024.12.01',
      category: 'Company News'
    },
    {
      id: 3,
      title: 'Year-End and New Year Business Hours',
      excerpt: 'We would like to inform you of our business schedule during the year-end and New Year period...',
      image: '/images/ニュース.avif',
      date: '2024.11.28',
      category: 'Announcement'
    }
  ]

  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              News & Updates
            </h2>
            <div className="w-16 h-px bg-orange-600 mx-auto" />
            <p className="text-slate-600 leading-relaxed">
              Latest updates from Okamoto Foods
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative aspect-[16/9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-orange-600 text-white text-xs font-medium px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <time className="text-sm text-slate-500">{item.date}</time>
                </div>
                <h3 className="font-medium text-slate-800 mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <Link
                  href={`/${locale}/news/${item.id}`}
                  className="inline-flex items-center text-orange-600 hover:text-orange-700 text-sm font-medium transition-colors duration-300 group"
                >
                  <span>Read More</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center px-8 py-4 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-medium rounded-lg transition-colors duration-300 group"
          >
            <span>View All News</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}