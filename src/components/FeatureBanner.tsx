'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function FeatureBanner() {
  const t = useTranslations('features')
  const locale = useLocale()
  return (
    <section className="py-12 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <Link href={`/${locale}/features`} className="block group">
          <div className="relative overflow-hidden rounded-sm bg-white shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="relative aspect-[3/1] md:aspect-[4/1]">
              <Image
                src="/images/banner.jpg"
                alt={`${t('banner.title')} - ${t('banner.heading')}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  // Fallback to gradient background
                  e.currentTarget.style.display = 'none'
                  const parent = e.currentTarget.parentElement
                  if (parent) {
                    parent.classList.add('bg-gradient-to-r', 'from-slate-100', 'via-stone-100', 'to-slate-200')
                  }
                }}
              />
              {/* Fallback gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-stone-100 to-slate-200 opacity-0"></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-slate-900/60"></div>
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-8 w-full">
                  <div className="max-w-3xl">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-white/90 text-slate-800 text-sm font-medium rounded-sm mb-4">
                        {t('banner.title')}
                      </span>
                      <h3 className="text-2xl md:text-4xl font-serif text-white mb-4 leading-tight">
                        {t('banner.heading')}
                      </h3>
                      <p className="text-stone-200 text-lg leading-relaxed mb-6">
                        {t('banner.description')}
                      </p>
                    </div>
                    
                    <div className="flex items-center text-white group-hover:text-stone-200 transition-colors duration-300">
                      <span className="font-medium mr-3">{t('banner.readMore')}</span>
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

        {/* Additional feature highlights */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Link href={`/${locale}/features`} className="group">
            <div className="flex items-center p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-stone-100 rounded-sm flex items-center justify-center mr-4 group-hover:bg-stone-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-slate-800 mb-1">{t('manufacturing.title')}</h4>
                <p className="text-slate-600 text-sm">{t('manufacturing.description')}</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>

          <Link href={`/${locale}/recruit`} className="group">
            <div className="flex items-center p-6 bg-white rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-stone-100 rounded-sm flex items-center justify-center mr-4 group-hover:bg-stone-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-medium text-slate-800 mb-1">{t('recruitment.title')}</h4>
                <p className="text-slate-600 text-sm">{t('recruitment.description')}</p>
              </div>
              <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}