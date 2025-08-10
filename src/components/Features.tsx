'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function Features() {
  const locale = useLocale()
  const t = useTranslations('features')

  const getFeatures = (locale: string) => [
    {
      id: 1,
      icon: '🌱',
      title: locale === 'ja' ? '国産へのこだわり' : 'Commitment to Domestic Ingredients',
      description: locale === 'ja' 
        ? '愛知県を中心とした厳選された国産原料のみを使用'
        : 'Using only carefully selected domestic ingredients, primarily from Aichi Prefecture',
      image: '/images/農家.avif'
    },
    {
      id: 2,
      icon: '🔬',
      title: locale === 'ja' ? '品質管理' : 'Quality Management',
      description: locale === 'ja'
        ? '徹底した食品安全管理システムで安心・安全をお届け'
        : 'Delivering safety and security through comprehensive food safety management systems',
      image: '/images/品質管理２.avif'
    }
  ]

  const features = getFeatures(locale)

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {locale === 'ja' ? '私たちの技術と品質' : 'Our Technology & Quality'}
            </h2>
            <div className="w-16 h-px bg-orange-600 mx-auto" />
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {locale === 'ja' 
                ? '100年を超える歴史で培った技術と品質管理で、安心・安全な製品をお届けします'
                : 'We deliver safe and reliable products through technology and quality management cultivated over a century of history'
              }
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {features.map((feature, index) => (
            <div key={feature.id} className="group flex items-center space-x-6">
              <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="128px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-lg">{feature.icon}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 space-y-3">
                <h3 className="text-xl font-medium text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/features`}
            className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 group"
          >
            <span>{locale === 'ja' ? '技術・品質管理の詳細を見る' : 'Learn More About Our Technology & Quality'}</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}