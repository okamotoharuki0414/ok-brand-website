'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { normalizeImageUrl } from '@/utils/imageUtils'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'

export default function ProductsHero() {
  const t = useTranslations('products')

  const productImages = [
    {
      src: normalizeImageUrl("/images/みかん商品.avif"),
      alt: "国産みかん商品",
      category: "みかん"
    },
    {
      src: normalizeImageUrl("/images/黄桃ダイス缶.avif"),
      alt: "黄桃ダイス缶",
      category: "黄桃"
    },
    {
      src: normalizeImageUrl("/images/冷凍みかんイメージ_edited.avif"),
      alt: "冷凍みかん",
      category: "冷凍"
    },
    {
      src: normalizeImageUrl("/images/whole_tomato_canned.avif"),
      alt: "トマト缶詰",
      category: "トマト"
    },
    {
      src: normalizeImageUrl("/images/マッシュルーム.avif"),
      alt: "マッシュルーム",
      category: "マッシュルーム"
    }
  ]

  return (
    <section className="relative w-full overflow-hidden mt-20">
      {/* 背景の動的要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-slate-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 -left-16 w-32 h-32 bg-slate-800/15 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-slate-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
        {/* メイン背景画像 */}
        <Image
          src={normalizeImageUrl("/images/みかん商品.avif")}
          alt="岡本食品の商品ラインナップ"
          fill
          className="object-cover scale-110 hover:scale-105 transition-transform duration-[10s] ease-out"
          priority
        />
        
        {/* 多層グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/50 to-slate-900/80"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-800/30 via-transparent to-slate-800/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
        
        {/* 動的なパーティクル要素 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-white/30 rounded-full animate-bounce delay-300"></div>
          <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce delay-700"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute top-3/4 right-1/3 w-2.5 h-2.5 bg-white/25 rounded-full animate-bounce delay-500"></div>
        </div>
        
        {/* メインコンテンツ */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl w-full">
            <div className="space-y-12">
              {/* ヘッダー部分 */}
              <div className="space-y-8">
                <ScrollReveal direction="down" delay={100}>
                  <div className="relative inline-flex items-center space-x-4 mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 via-slate-600/10 to-slate-700/20 rounded-full blur-xl"></div>
                    <div className="relative flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full border border-white/20 shadow-xl">
                      <div className="w-3 h-3 bg-gradient-to-r from-slate-300 to-white rounded-full animate-pulse"></div>
                      <span className="text-slate-200 font-bold text-sm tracking-widest uppercase">Since 1921</span>
                      <div className="w-3 h-3 bg-gradient-to-r from-white to-slate-300 rounded-full animate-pulse delay-500"></div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={300}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700/30 via-slate-600/20 to-slate-700/30 blur-3xl transform scale-110"></div>
                    <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white tracking-tight leading-tight">
                      <span className="relative">
                        {t('title')}
                        <div className="absolute -top-4 -right-6 w-4 h-4 bg-gradient-to-br from-slate-300 to-white rounded-full shadow-lg animate-bounce delay-700"></div>
                      </span>
                    </h1>
                  </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={500}>
                  <div className="flex items-center justify-center space-x-6 my-8">
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                    <div className="w-6 h-6 rotate-45 bg-gradient-to-br from-slate-400 to-white shadow-lg"></div>
                    <div className="w-20 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal direction="up" delay={700}>
                <div className="relative max-w-4xl mx-auto">
                  <p className="text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                    {t('subtitle')}
                  </p>
                  <div className="flex justify-center mt-6">
                    <div className="flex space-x-3">
                      <div className="w-2 h-2 bg-slate-300 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse delay-200"></div>
                      <div className="w-2 h-2 bg-slate-200 rounded-full animate-pulse delay-400"></div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              {/* 商品ギャラリー */}
              <ScrollReveal direction="up" delay={900}>
                <div className="mt-16">
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10">
                      <span className="text-slate-300 text-sm font-medium tracking-wide">{t('productCategories')}</span>
                    </div>
                  </div>

                  {/* デスクトップ表示 */}
                  <StaggerReveal staggerDelay={150} baseDelay={1000} className="hidden md:flex justify-center space-x-4 lg:space-x-6">
                    {productImages.map((image, index) => (
                      <div key={index} className="group relative">
                        <div className="relative w-20 h-20 lg:w-28 lg:h-28 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 hover:border-white/60 transition-all duration-500 hover:scale-110 hover:-translate-y-2 transform">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                            sizes="112px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          {/* カテゴリ名表示 */}
                          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/90 to-transparent p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <span className="text-white text-xs font-medium">{image.category}</span>
                          </div>
                        </div>
                        
                        {/* ホバー時の番号表示 */}
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 shadow-lg">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                    ))}
                  </StaggerReveal>
                  
                  {/* モバイル表示 */}
                  <div className="mt-8 md:hidden flex justify-center space-x-3">
                    {productImages.slice(0, 3).map((image, index) => (
                      <div key={index} className="relative w-16 h-16 rounded-xl overflow-hidden shadow-xl border-2 border-white/20">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* 品質へのこだわりメッセージ */}
              <ScrollReveal direction="up" delay={1200}>
                <div className="mt-16 max-w-2xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
                    <div className="text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mb-4 shadow-xl">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{t('selectedQuality')}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('qualityMessage') }} />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}