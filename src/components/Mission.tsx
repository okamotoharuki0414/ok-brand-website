'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Mission() {
  const t = useTranslations('mission')

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-50 via-stone-50 to-emerald-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-40 h-40 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-52 h-52 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-28 h-28 bg-amber-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ヘッダー */}
        <div className="text-center mb-20">
          <div className="flex justify-center items-center space-x-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
              <span className="text-lg">🏮</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">
              {t('title')}
            </h2>
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-lg">🌱</span>
            </div>
          </div>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
            <div className="w-4 h-1 bg-emerald-400 rounded-full"></div>
            <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
          </div>
          
          {/* 農家さんの画像を可愛く装飾 */}
          <div className="relative w-40 h-40 mx-auto mb-12">
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/農家さん.avif"
                alt="Farmer"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-emerald-400/10"></div>
            </div>
            {/* 装飾要素 */}
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg">🧑‍🌾</span>
            </div>
            <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-sm">🌾</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* OUR MISSION */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border-2 border-orange-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🎯</span>
            </div>
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs tracking-[0.2em] text-orange-600 font-medium uppercase">
                  OUR MISSION
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                  {t('missionSection.title')}
                </h4>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t('missionSection.content')}
              </p>
            </div>
          </div>

          {/* OUR DREAM */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border-2 border-emerald-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">💫</span>
            </div>
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs tracking-[0.2em] text-emerald-600 font-medium uppercase">
                  OUR DREAM
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                  {t('dreamSection.title')}
                </h4>
                <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto"></div>
              </div>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {t('dreamSection.content')}
              </p>
            </div>
          </div>

          {/* OUR FUNDAMENTAL PHILOSOPHY */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border-2 border-amber-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🌟</span>
            </div>
            <div className="text-center space-y-6">
              <div className="space-y-2">
                <h3 className="text-xs tracking-[0.2em] text-amber-600 font-medium uppercase">
                  OUR FUNDAMENTAL PHILOSOPHY
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-gray-800">
                  {t('philosophySection.title')}
                </h4>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto"></div>
                <p className="text-amber-600 text-sm font-medium">
                  {t('philosophySection.subtitle')}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* 笑顔 */}
                <div className="space-y-3 p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl border-2 border-orange-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl">😊</span>
                  </div>
                  <h5 className="text-lg font-bold text-orange-700">
                    {t('philosophySection.mottos.smile.title')}
                  </h5>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    {t.raw('philosophySection.mottos.smile.points').map((point: string, index: number) => (
                      <p key={index}>{point}</p>
                    ))}
                  </div>
                </div>

                {/* 感謝 */}
                <div className="space-y-3 p-6 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl border-2 border-emerald-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl">🙏</span>
                  </div>
                  <h5 className="text-lg font-bold text-emerald-700">
                    {t('philosophySection.mottos.gratitude.title')}
                  </h5>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    {t.raw('philosophySection.mottos.gratitude.points').map((point: string, index: number) => (
                      <p key={index}>{point}</p>
                    ))}
                  </div>
                </div>

                {/* 健康 */}
                <div className="space-y-3 p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl border-2 border-amber-200 hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <span className="text-2xl">💪</span>
                  </div>
                  <h5 className="text-lg font-bold text-amber-700">
                    {t('philosophySection.mottos.health.title')}
                  </h5>
                  <div className="space-y-2 text-xs text-slate-600 leading-relaxed">
                    {t.raw('philosophySection.mottos.health.points').map((point: string, index: number) => (
                      <p key={index}>{point}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OUR POLICY */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-lg border-2 border-stone-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">📋</span>
            </div>
            <div className="text-center space-y-4">
              <div className="space-y-2">
                <h3 className="text-xs tracking-[0.2em] text-slate-500 font-medium uppercase">
                  OUR POLICY
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-slate-800">
                  {t('policySection.title')}
                </h4>
                <div className="w-16 h-1 bg-gradient-to-r from-stone-400 to-stone-600 rounded-full mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
                {t.raw('policySection.policies').map((policy: string, index: number) => (
                  <div key={index} className="bg-stone-50 p-3 rounded-lg">
                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {policy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* OUR SLOGAN */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            {/* 背景画像 - みかん画像５ */}
            <div className="relative h-64 md:h-80">
              <Image
                src="/images/みかん画像５.avif"
                alt="美味しそうなみかんの画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-900/85 via-orange-800/75 to-orange-900/85"></div>
            </div>
            
            {/* テキストオーバーレイ */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white space-y-4 px-4">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <span className="text-lg">🍊</span>
                  </div>
                  <h3 className="text-xs tracking-[0.2em] text-orange-200 font-medium uppercase">
                    OUR SLOGAN
                  </h3>
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-sm">✨</span>
                  </div>
                </div>
                <h4 className="text-xl md:text-2xl font-serif text-white/90">
                  {t('sloganSection.title')}
                </h4>
                <div className="text-2xl md:text-4xl font-bold tracking-wide text-white drop-shadow-lg">
                  FOOD FOR YOUR SMILE
                </div>
                <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto mt-4"></div>
              </div>
            </div>
            
            {/* 装飾的な要素 */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-gradient-to-br from-orange-400/30 to-orange-600/30 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-xl">🌟</span>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-gradient-to-br from-amber-400/30 to-orange-500/30 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <span className="text-lg">😊</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}