'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

const getNewsItems = (locale: string) => [
  {
    id: 1,
    slug: 'jfs-b',
    title: locale === 'ja' 
      ? 'JFS-B規格の適合認証を取得しました'
      : 'Obtained JFS-B Standard Compliance Certification',
    excerpt: locale === 'ja'
      ? '岡本食品株式会社では、２０２４年３月に一般財団法人食品マネジメント協会（JFSM）が運営する食品安全規格「JFS-B規格」の適合証明を取得いたしました。'
      : 'Okamoto Foods Co., Ltd. obtained JFS-B Standard compliance certification operated by the Japan Food Safety Management Association (JFSM) in March 2024.',
    date: locale === 'ja' ? '2024年5月28日' : 'May 28, 2024',
    category: locale === 'ja' ? '品質管理' : 'Quality Management',
    image: '/images/ニュース.avif'
  }
]

export default function NewsSection() {
  const locale = useLocale()
  const t = useTranslations('news')
  const newsItems = getNewsItems(locale)

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-slate-700 tracking-wide leading-tight">
              {t('title')}
            </h2>
            <div className="w-12 h-px bg-slate-400 mx-auto"></div>
            <p className="text-base text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {newsItems.map((item) => (
            <article key={item.id} className="group">
              <Link href={`/${locale}/news/${item.slug}`}>
                <div className="bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-200">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt="JFS-B規格の取得証明書"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/95 text-slate-700 text-xs font-medium px-3 py-1 tracking-wide">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="space-y-3">
                      <time className="text-sm text-slate-500 font-light tracking-wide">
                        {item.date}
                      </time>
                      
                      <h3 className="text-base lg:text-lg font-medium text-slate-800 leading-tight group-hover:text-slate-600 transition-colors duration-300 line-clamp-2 hyphens-auto break-words">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed font-light line-clamp-3 hyphens-auto">
                        {item.excerpt}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-slate-500 group-hover:text-slate-700 transition-colors duration-300 pt-2">
                      <span className="text-sm font-medium tracking-wide mr-2">{t('readMore')}</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/news`}
            className="inline-flex items-center bg-white text-slate-700 border-2 border-slate-300 px-8 py-4 font-medium tracking-wide hover:bg-slate-50 transition-colors duration-300 group"
          >
            {t('viewMore')}
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}