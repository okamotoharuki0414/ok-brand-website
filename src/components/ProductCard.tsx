'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

interface ProductSpecs {
  shape?: string
  package?: string
  solidWeight?: string
  totalWeight?: string
  productSize?: string
  caseSize?: string
  ingredients?: string
  additives?: string
  shelfLife?: string
  origin?: string
  janCode?: string
  itfCode?: string
}

interface ProductCardProps {
  name: string
  description: string
  image: string
  category: string
  specs?: ProductSpecs
}

export default function ProductCard({ name, description, image, category, specs }: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false)
  const locale = useLocale()
  const t = useTranslations('products.specs')
  const getAltText = (name: string, image: string) => {
    if (image.includes('国産レモン輪切り')) return '国産レモン輪切りの冷凍パック'
    if (image.includes('ひんやりみかん')) return 'ひんやりみかんの小パック'
    if (image.includes('パインアップルチビット')) return 'パインアップルチャンク1kgパウチ'
    if (image.includes('【3201】黄桃ダイス')) return '黄桃ダイスのパウチタイプ'
    if (image.includes('【3211】国産黄桃ダイス')) return '国産黄桃ダイス1kgパウチ'
    if (image.includes('diced_tomato_canned')) return 'カットトマトの缶詰'
    if (image.includes('diced_tomato_pouch')) return 'トマトピューレーのパウチタイプ'
    if (image.includes('frozen_orange')) return '冷凍オレンジ果肉'
    if (image.includes('frozen_peach')) return '冷凍された黄桃果肉'
    if (image.includes('mikan1')) return '国産みかん果実 缶詰'
    if (image.includes('mikan2')) return '国産みかん果実 パウチタイプ'
    if (image.includes('mushroom_canned_china')) return '中国産マッシュルーム 缶詰タイプ'
    if (image.includes('mushroom_pouch_china')) return '中国産マッシュルーム パウチタイプ'
    if (image.includes('orange_pulp')) return 'オレンジ果粒・さのう商品'
    if (image.includes('whole_tomato_canned')) return 'ホールトマトの缶詰'
    if (image.includes('みかん１キロパウチ')) return '国産みかん1kgパウチ'
    if (image.includes('中国産みかんかん')) return '中国産みかん 缶詰タイプ'
    if (image.includes('中国産みかんパウチ')) return '中国産みかん パウチタイプ'
    if (image.includes('桃')) return '黄桃の商品写真'
    if (image.includes('日付修正【3707】マッシュルームスライス')) return 'ヨーロッパ産マッシュルーム スライスタイプ'
    if (image.includes('日付修正【3711】国産マッシュルームスライス')) return '国産マッシュルーム スライスタイプ'
    if (image.includes('日付修正【3502】ミックスフルーツ')) return 'ミックスフルーツ 1kgパウチ'
    return name
  }

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-neutral-100">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={getAltText(name, image)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute top-3 left-3">
          <span className="inline-block bg-white/95 text-slate-700 text-xs font-medium px-3 py-1 rounded-full tracking-wide">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-slate-800 group-hover:text-slate-600 transition-colors duration-300 leading-tight min-h-[4rem] flex items-center">
              {name}
            </h3>
            
            <p className="text-slate-600 text-sm leading-relaxed font-light line-clamp-3">
              {description}
            </p>
          </div>

          {specs && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="w-full flex items-center justify-between text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200"
              >
                <span>{t('productDetails')}</span>
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${showDetails ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {showDetails && (
                <div className="mt-3 space-y-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg">
                  {specs.shape && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('shape')}</span>
                      <span className="font-medium">{specs.shape}</span>
                    </div>
                  )}
                  {specs.package && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('package')}</span>
                      <span className="font-medium">{specs.package}</span>
                    </div>
                  )}
                  {specs.solidWeight && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('solidWeight')}</span>
                      <span className="font-medium">{specs.solidWeight}</span>
                    </div>
                  )}
                  {specs.totalWeight && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('totalWeight')}</span>
                      <span className="font-medium">{specs.totalWeight}</span>
                    </div>
                  )}
                  {specs.productSize && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('productSize')}</span>
                      <span className="font-medium">{specs.productSize}</span>
                    </div>
                  )}
                  {specs.caseSize && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('caseSize')}</span>
                      <span className="font-medium">{specs.caseSize}</span>
                    </div>
                  )}
                  {specs.ingredients && (
                    <div className="flex flex-col space-y-1">
                      <span className="text-slate-500 font-medium">{t('ingredients')}</span>
                      <span className="font-medium text-slate-700 leading-tight">{specs.ingredients}</span>
                    </div>
                  )}
                  {specs.additives && (
                    <div className="flex flex-col space-y-1">
                      <span className="text-slate-500 font-medium">{t('additives')}</span>
                      <span className="font-medium text-slate-700 leading-tight">{specs.additives}</span>
                    </div>
                  )}
                  {specs.shelfLife && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('shelfLife')}</span>
                      <span className="font-medium">{specs.shelfLife}</span>
                    </div>
                  )}
                  {specs.origin && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('origin')}</span>
                      <span className="font-medium">{specs.origin}</span>
                    </div>
                  )}
                  {specs.janCode && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('janCode')}</span>
                      <span className="font-medium font-mono text-xs">{specs.janCode}</span>
                    </div>
                  )}
                  {specs.itfCode && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('itfCode')}</span>
                      <span className="font-medium font-mono text-xs">{specs.itfCode}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-end pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium text-sm tracking-wide transition-colors duration-300 group/link"
            >
              {locale === 'ja' ? 'お問い合わせ' : 'Contact'}
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}