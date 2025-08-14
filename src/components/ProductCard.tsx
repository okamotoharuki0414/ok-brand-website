'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'

interface ProductSpecs {
  shape?: string
  package?: string
  solidWeight?: string
  totalWeight?: string
  contentVolume?: string
  productSize?: string
  productDimensions?: string
  caseSize?: string
  caseDimensions?: string
  ingredients?: string
  additives?: string
  shelfLife?: string
  origin?: string
  finalProcessing?: string
  itemCode?: string
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
  const tAlt = useTranslations('products.altTexts')
  const tCommon = useTranslations('common')
  const getAltText = (name: string, image: string) => {
    if (image.includes('国産レモン輪切り')) return tAlt('domesticLemonSliced')
    if (image.includes('ひんやりみかん')) return tAlt('chillMikan')
    if (image.includes('パインアップルチビット')) return tAlt('pineappleTidbits')
    if (image.includes('【3201】黄桃ダイス')) return tAlt('peachDiced')
    if (image.includes('【3211】国産黄桃ダイス')) return tAlt('domesticPeachDiced')
    if (image.includes('diced_tomato_canned')) return tAlt('dicedTomatoCanned')
    if (image.includes('diced_tomato_pouch')) return tAlt('tomatoPureePouch')
    if (image.includes('frozen_orange')) return tAlt('frozenOrange')
    if (image.includes('frozen_peach')) return tAlt('frozenPeach')
    if (image.includes('mikan1')) return tAlt('mikan1')
    if (image.includes('mikan2')) return tAlt('mikan2')
    if (image.includes('mushroom_canned_china')) return tAlt('mushroomCannedChina')
    if (image.includes('mushroom_pouch_china')) return tAlt('mushroomPouchChina')
    if (image.includes('orange_pulp')) return tAlt('orangePulp')
    if (image.includes('whole_tomato_canned')) return tAlt('wholeTomatoCanned')
    if (image.includes('みかん１キロパウチ')) return tAlt('mikan1kgPouch')
    if (image.includes('中国産みかんかん')) return tAlt('chineseMikanCan')
    if (image.includes('中国産みかんパウチ')) return tAlt('chineseMikanPouch')
    if (image.includes('桃')) return tAlt('peachGeneral')
    if (image.includes('日付修正【3707】マッシュルームスライス')) return tAlt('mushroomSliceEuropean')
    if (image.includes('日付修正【3711】国産マッシュルームスライス')) return tAlt('mushroomSliceDomestic')
    if (image.includes('日付修正【3502】ミックスフルーツ')) return tAlt('mixedFruit')
    return name
  }

  return (
    <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border-2 border-slate-200 hover:border-slate-300 hover:-translate-y-3 hover:rotate-1">
      {/* 背景の装飾グロー */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 via-white to-slate-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl blur-xl"></div>
      
      {/* メインカード */}
      <div className="relative z-10">
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={image}
          alt={getAltText(name, image)}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="absolute top-4 left-4">
          <div className="bg-slate-700/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full tracking-wide shadow-xl border border-white/20">
            {category}
          </div>
        </div>
        
        {/* 装飾要素 */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
          <div className="w-8 h-8 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>
        
        {/* 右下の装飾 */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-300">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-slate-300 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-slate-500 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <h3 className="text-lg lg:text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 leading-tight min-h-[4.5rem] sm:min-h-[5rem] flex items-start pt-1 hyphens-auto break-words">
                {name}
              </h3>
              {/* タイトル下の装飾線 */}
              <div className="absolute -bottom-1 left-0 w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-slate-600 to-slate-700 transition-all duration-500"></div>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 hyphens-auto group-hover:text-slate-700 transition-colors duration-300">
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
                  {specs.contentVolume && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('contentVolume')}</span>
                      <span className="font-medium">{specs.contentVolume}</span>
                    </div>
                  )}
                  {specs.productSize && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('productSize')}</span>
                      <span className="font-medium">{specs.productSize}</span>
                    </div>
                  )}
                  {specs.productDimensions && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('productDimensions')}</span>
                      <span className="font-medium">{specs.productDimensions}</span>
                    </div>
                  )}
                  {specs.caseSize && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('caseSize')}</span>
                      <span className="font-medium">{specs.caseSize}</span>
                    </div>
                  )}
                  {specs.caseDimensions && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('caseDimensions')}</span>
                      <span className="font-medium">{specs.caseDimensions}</span>
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
                  {specs.finalProcessing && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('finalProcessing')}</span>
                      <span className="font-medium">{specs.finalProcessing}</span>
                    </div>
                  )}
                  {specs.itemCode && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">{t('itemCode')}</span>
                      <span className="font-medium font-mono text-xs">{specs.itemCode}</span>
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
              href={`/${locale}/contact`}
              className="inline-flex items-center text-slate-600 hover:text-slate-800 font-medium text-sm tracking-wide transition-colors duration-300 group/link whitespace-nowrap"
            >
              {tCommon('contact')}
              <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}