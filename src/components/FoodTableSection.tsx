'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function FoodTableSection() {
  const t = useTranslations('foodTable')
  const locale = useLocale()
  
  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/みかん農場.avif"
          alt="みかん農場の風景"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-800 leading-tight tracking-wide">
                {t('title1')}<br className="hidden sm:block" />
                {t('title2')}
              </h2>
              <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            </div>
            
            <div className="space-y-6 text-slate-700 leading-relaxed font-light">
              <p className="text-lg">
                {t('subtitle1')}<br className="hidden sm:block" />
                {t('subtitle2')}
              </p>
              
              <p>
                {t('description1')}<br className="hidden sm:block" />
                {t('description2')}
              </p>
            </div>

            <div className="pt-8">
              <Link
                href={`/${locale}/company`}
                className="inline-flex items-center bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 font-medium rounded-lg transition-colors duration-300 group"
              >
                {t('cta')}
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}