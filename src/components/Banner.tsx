'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function Banner() {
  const t = useTranslations('features.banner')
  return (
    <section className="py-16 px-4 bg-neutral-100">
      <div className="max-w-7xl mx-auto">
        <Link href="/company" className="block group">
          <div className="relative overflow-hidden bg-white shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="relative aspect-[3/1] md:aspect-[4/1]">
              <Image
                src="/images/banner.jpg"
                alt={t('altText')}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/70"></div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-3xl space-y-6">
                    <div className="space-y-4">
                      <div className="inline-block bg-white/90 text-slate-800 px-4 py-2 text-sm font-medium tracking-wide">
                        {t('title').toUpperCase()}
                      </div>
                      <h3 className="text-3xl md:text-5xl font-serif text-white leading-tight tracking-wide">
                        {t('heading')}
                      </h3>
                      <p className="text-white/90 text-lg leading-relaxed font-light max-w-2xl">
                        {t('description')}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-white group-hover:text-white/90 transition-colors duration-300">
                      <span className="font-medium tracking-wide mr-3">{t('readMore')}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}