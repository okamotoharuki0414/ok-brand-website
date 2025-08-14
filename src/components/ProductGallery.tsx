'use client'

import Image from 'next/image'
import { normalizeImageUrl } from '@/utils/imageUtils'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'

const getProducts = (t: any, locale: string) => [
  {
    id: 1,
    name: t('categories.mikan.title'),
    description: t('categories.mikan.description'),
    image: '/images/みかん商品.avif',
    link: `/${locale}/goods#category-mikan`
  },
  {
    id: 2,
    name: t('categories.peach.title'),
    description: t('categories.peach.description'),
    image: '/images/桃.avif',
    link: `/${locale}/goods#category-peach`
  },
  {
    id: 3,
    name: t('categories.tomato.title'),
    description: t('categories.tomato.description'),
    image: '/images/whole_tomato_canned.avif',
    link: `/${locale}/goods#category-tomato`
  },
  {
    id: 4,
    name: t('categories.mushroom.title'),
    description: t('categories.mushroom.description'),
    image: '/images/マッシュルーム.avif',
    link: `/${locale}/goods#category-mushroom`
  },
  {
    id: 5,
    name: t('categories.frozen.title'),
    description: t('categories.frozen.description'),
    image: '/images/冷凍みかんイメージ_edited.avif',
    link: `/${locale}/goods#category-frozen`
  }
]

export default function ProductGallery() {
  const locale = useLocale()
  const t = useTranslations('products')
  const products = getProducts(t, locale)

  return (
    <section className="pt-20 pb-16 px-4 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="space-y-8">
            {/* サブタイトル */}
            <ScrollReveal direction="down" delay={100}>
              <div className="relative inline-flex items-center space-x-4">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 via-slate-800/5 to-slate-700/10 rounded-full blur-xl"></div>
                <div className="relative flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-300/50 shadow-lg">
                  <div className="w-2 h-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full animate-pulse"></div>
                  <span className="text-slate-800 font-bold text-sm tracking-widest uppercase">Premium Products</span>
                  <div className="w-2 h-2 bg-gradient-to-r from-slate-800 to-slate-700 rounded-full animate-pulse"></div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* メインタイトル */}
            <ScrollReveal direction="up" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-800/20 via-slate-900/10 to-slate-800/20 blur-3xl transform scale-110"></div>
                <div className="relative space-y-2">
                  <div className="flex items-center justify-center space-x-4 mb-4">
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                    <div className="w-4 h-4 rotate-45 bg-gradient-to-br from-slate-700 to-slate-800 shadow-lg"></div>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
                  </div>
                  
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-slate-900 to-slate-800 tracking-tight leading-tight">
                    <span className="relative">
                      OK BRAND
                      <div className="absolute -top-2 -right-4 w-3 h-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-lg animate-bounce"></div>
                    </span>
                  </h2>
                  
                  <div className="relative">
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-wide">
                      {t('mainProducts')}
                    </h3>
                    <div className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-transparent via-slate-600/30 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* 説明文 */}
            <ScrollReveal direction="up" delay={400}>
              <div className="relative max-w-4xl mx-auto">
                <p className="text-xl text-slate-600 leading-relaxed font-light">
                  {t('subtitle')}
                </p>
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-slate-600 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-slate-700 rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-slate-800 rounded-full animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 横スクロールギャラリー */}
        <ScrollReveal direction="up" delay={600}>
          <div className="relative mb-20">
            {/* スクロールインジケーター */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-slate-600">
                <span className="hidden sm:inline">{t('scrollInstruction')}</span>
                <span className="sm:hidden">{t('swipeInstruction')}</span>
              </div>
              <div className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                {products.length} products
              </div>
            </div>

            {/* 横スクロールコンテナ */}
            <div className="overflow-x-auto pb-6 scrollbar-hide">
              <div className="flex space-x-8 px-4 md:px-8">
              {products.map((product, index) => (
                <Link
                  href={product.link}
                  key={product.id}
                  className="group cursor-pointer flex-none w-80 sm:w-96"
                >
                  <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-slate-100">
                    <div className="relative aspect-[5/4] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-1000"
                        sizes="400px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      
                      {/* 装飾的なオーバーレイ要素 */}
                      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                        <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute inset-0 flex items-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100">
                        <div className="text-white space-y-4 w-full">
                          <h3 className="text-2xl font-bold">{product.name}</h3>
                          <p className="text-sm text-white/90 leading-relaxed line-clamp-3">{product.description}</p>
                          <div className="inline-flex items-center text-white font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-colors">
                            {t('learnMore')}
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* 番号バッジ */}
                      <div className="absolute top-6 left-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full flex items-center justify-center text-white font-bold shadow-xl">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>

                      {/* カテゴリタグ */}
                      <div className="absolute bottom-4 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                        <div className="bg-slate-800/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full inline-block">
                          {t('premiumQuality')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 line-clamp-2">{product.name}</h3>
                        <p className="text-slate-600 leading-relaxed text-sm line-clamp-3">{product.description}</p>
                        
                        {/* 特徴的なライン */}
                        <div className="flex items-center justify-between pt-3">
                          <div className="flex items-center space-x-2">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-slate-700 rounded-full"></div>
                              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
                              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
                            </div>
                            <span className="text-xs text-slate-500 font-medium">{t('premiumQuality')}</span>
                          </div>
                          
                          {/* 右矢印 */}
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <svg className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* 最後の装飾カード */}
              <div className="flex-none w-80 sm:w-96">
                <div className="h-full bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center min-h-[400px]">
                  <Link href={`/${locale}/goods`} className="text-center space-y-4 p-8 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-slate-700 group-hover:text-slate-800 transition-colors">{t('viewMoreProducts')}</h4>
                    <p className="text-slate-600 text-sm">{t('completeLineup')}</p>
                    <div className="inline-flex items-center text-slate-600 group-hover:text-slate-800 font-semibold transition-colors">
                      {t('toProductList')}
                      <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={800}>
          <div className="text-center bg-white rounded-3xl shadow-lg p-12 border border-slate-100">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('qualityCommitment')}</h3>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  {t('qualityDescription', {
                    default: '厳選された国産原材料を使用し、厳格な品質管理のもとで製造されています。'
                  })}
                </p>
              </div>
            
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={`/${locale}/goods`}
                  className="inline-flex items-center bg-gradient-to-r from-slate-700 to-slate-800 text-white px-10 py-4 rounded-full font-semibold tracking-wide hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                >
                  {t('viewMore')}
                  <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 font-semibold tracking-wide transition-colors duration-300 border-2 border-slate-200 hover:border-slate-300 px-8 py-4 rounded-full group"
                >
                  {t('contactUs')}
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}