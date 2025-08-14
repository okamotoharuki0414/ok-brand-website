'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function HeroSectionJa() {
  const t = useTranslations('hero')
  const locale = useLocale()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/images/hero.jpg"
        >
          <source src="/images/食卓.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-slate-900/40 to-slate-900/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="max-w-4xl space-y-8">
          <div className="space-y-6">
            <div className="text-orange-200 text-sm tracking-widest font-light uppercase">
              Since 1921
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-wide">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6">
            {/* メインCTAボタン */}
            <Link
              href={`/${locale}/goods`}
              className="relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white font-bold text-lg rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-slate-800/25 group overflow-hidden"
            >
              {/* グロー効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10"></div>
              
              {/* アイコン装飾 */}
              <div className="absolute left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
              
              <span className="relative z-10 tracking-wide">{t('cta')}</span>
              
              {/* 矢印アイコン */}
              <div className="relative z-10 ml-3 flex items-center">
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              
              {/* 内側の光る効果 */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 skew-x-12"></div>
            </Link>

            {/* セカンダリボタン */}
            <Link
              href={`/${locale}/contact`}
              className="relative inline-flex items-center justify-center px-8 py-5 backdrop-blur-md bg-white/10 border-2 border-white/20 text-white font-semibold rounded-2xl transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:shadow-lg group"
            >
              <span className="mr-2">お問い合わせ</span>
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-medium tracking-widest">{t('scrollDown')}</span>
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}