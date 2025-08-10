'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function ProductsHero() {
  const t = useTranslations('products')

  return (
    <section className="relative w-full overflow-hidden mt-20">
      <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/みかん商品.avif"
          alt="岡本食品の商品ラインナップ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-orange-200 text-sm tracking-widest font-light uppercase">
                  Since 1921
                </div>
                <h1 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
                  {t('title')}
                </h1>
                <div className="w-24 h-px bg-orange-300 mx-auto mt-8"></div>
              </div>
              
              <p className="text-base md:text-lg text-orange-200 leading-relaxed max-w-3xl mx-auto font-light">
                {t('subtitle')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}