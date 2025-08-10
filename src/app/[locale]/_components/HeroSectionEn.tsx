'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function HeroSectionEn() {
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white leading-tight tracking-wide">
              Unlock the Power of Fruit
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl font-light">
              Founded in 1921. With over a century of expertise, we deliver safe, reliable foods made with carefully selected domestic ingredients.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${locale}/goods`}
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 group"
            >
              <span>View Products</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center space-y-2 text-white/80">
          <span className="text-sm font-medium tracking-widest">SCROLL DOWN</span>
          <div className="w-px h-12 bg-white/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}