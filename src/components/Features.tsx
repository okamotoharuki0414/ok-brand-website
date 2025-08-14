'use client'

import Image from 'next/image'
import { normalizeImageUrl } from '@/utils/imageUtils'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'

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
    <section className="py-24 px-4 bg-gradient-to-br from-stone-50 via-orange-50 to-emerald-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-200/30 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* 左側：テキストエリア */}
          <ScrollReveal direction="left" delay={100}>
            <div className="space-y-8">
              {/* 可愛いアイコン追加 */}
              <StaggerReveal direction="left" staggerDelay={100} baseDelay={200} className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center transform rotate-12 shadow-lg">
                  <span className="text-2xl">🍊</span>
                </div>
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center transform -rotate-6 shadow-md">
                  <span className="text-xl">🌱</span>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-yellow-600 rounded-full flex items-center justify-center transform rotate-45 shadow-sm">
                  <span className="text-lg">✨</span>
                </div>
              </StaggerReveal>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                {locale === 'ja' ? '私たちの技術と品質' : 'Our Technology & Quality'}
              </h2>
              <div className="flex space-x-2">
                <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
                <div className="w-4 h-1 bg-emerald-400 rounded-full"></div>
                <div className="w-6 h-1 bg-amber-400 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {locale === 'ja' 
                  ? '100年を超える歴史で培った技術と品質管理で、安心・安全な製品をお届けします'
                  : 'We deliver safe and reliable products through technology and quality management cultivated over a century of history'
                }
              </p>
            </div>
          </ScrollReveal>
          
          {/* 右側：食卓の画像 */}
          <ScrollReveal direction="right" delay={300}>
            <div className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/暖かい食卓.jpg"
                alt="暖かい食卓の風景"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 to-transparent"></div>
            </div>
            {/* 装飾要素 */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <span className="text-2xl">🍽️</span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">❤️</span>
            </div>
          </div>
          </ScrollReveal>
        </div>

        <StaggerReveal staggerDelay={200} baseDelay={500} className="grid lg:grid-cols-2 gap-16 mb-16">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 group hover:-translate-y-3 border-2 border-orange-100 hover:border-orange-200"
            >
              <div className="flex items-start space-x-6">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-2xl overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 to-emerald-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 transition-transform duration-300">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-emerald-400 rounded-full group-hover:w-20 transition-all duration-300"></div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </StaggerReveal>

        <div className="text-center">
          <Link
            href={`/${locale}/company#production`}
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10">{locale === 'ja' ? '技術・品質管理の詳細を見る' : 'Learn More About Our Technology & Quality'}</span>
            <svg className="relative z-10 w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
          </Link>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        :global(.animate-fade-in-left) {
          animation: fadeInLeft 0.8s ease-out;
        }
      `}</style>
    </section>
  )
}