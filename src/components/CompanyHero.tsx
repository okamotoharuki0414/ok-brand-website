'use client'

import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'

export default function CompanyHero() {
  const t = useTranslations('company')
  const locale = useLocale()
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden mt-20">
      <div className="absolute inset-0">
        <Image
          src="/images/みかん農場.avif"
          alt="みかん農場の風景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-white/90 text-sm tracking-[0.3em] font-light uppercase">
                Since 1921
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white leading-tight">
                <span className="block text-2xl md:text-3xl lg:text-4xl font-light mb-4 text-white/90 tracking-[0.2em]">
                  FOOD FOR YOUR SMILE
                </span>
                <span className="font-medium tracking-wide">
                  {locale === 'ja' ? '岡本食品株式会社' : 'Okamoto Foods Co., Ltd.'}
                </span>
              </h1>
              <div className="w-24 h-px bg-white/60 mx-auto mt-8"></div>
            </div>
            
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-light">
              {locale === 'ja' ? (
                <>
                  大正10年の創業以来、一世紀を超えて<br className="hidden sm:block" />
                  安心・安全でおいしい食を提供し続けています。
                </>
              ) : (
                <>
                  Since our founding in 1921, we have been providing<br className="hidden sm:block" />
                  safe, reliable, and delicious food for over a century.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-[0.2em] font-light">SCROLL</span>
          <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}