'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function DomesticCommitment() {
  const t = useTranslations('domesticCommitment')

  return (
    <section id="domestic-commitment" className="py-20 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 scroll-mt-32 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-36 h-36 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-44 h-44 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with mikan image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                <span className="text-xl">🍊</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                {t('title')}
              </h2>
            </div>
            <div className="flex justify-center lg:justify-start space-x-2 mb-6">
              <div className="w-8 h-1 bg-orange-400 rounded-full"></div>
              <div className="w-4 h-1 bg-amber-400 rounded-full"></div>
              <div className="w-12 h-1 bg-emerald-400 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
          
          {/* みかん画像 */}
          <div className="relative">
            <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/images/みかん画像４.avif"
                alt="新鮮なみかんの画像"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/10 to-transparent"></div>
            </div>
            {/* 装飾要素 */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <span className="text-xl">🌱</span>
            </div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-xl animate-bounce">
              <span className="text-2xl">🍊</span>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border-2 border-orange-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">💭</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('philosophy.title')}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 mb-6 text-center text-lg leading-relaxed">
              {t('philosophy.description')}
            </p>
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              {t('philosophy.content')}
            </p>
          </div>
        </div>

        {/* Procurement Capability */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border-2 border-emerald-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🚛</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              {t('procurement.title')}
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-700 mb-6 text-center text-lg leading-relaxed">
              {t('procurement.description')}
            </p>
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              {t('procurement.content')}
            </p>
          </div>
        </div>

        {/* Own Cultivation */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 md:p-12 border border-orange-100">
            <div className="text-center mb-10">
              <span className="inline-block bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {t('ownCultivation.badge')}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                {t('ownCultivation.title')}
              </h3>
              <p className="text-gray-600 text-lg">
                {t('ownCultivation.subtitle')}
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-gray-700 text-center leading-relaxed">
                {t('ownCultivation.description')}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-800 font-medium">{t('ownCultivation.details.location')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-800 font-medium">{t('ownCultivation.details.area')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-800 font-medium">{t('ownCultivation.details.harvestStart')}</p>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <p className="text-gray-800 font-medium">{t('ownCultivation.details.annualHarvest')}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-sm">
                <h4 className="text-xl font-bold text-gray-900 mb-6 text-center">{t('ownCultivation.purposes.title')}</h4>
                <div className="space-y-4">
                  {t.raw('ownCultivation.purposes.items').map((item: string, index: number) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <p className="text-gray-700 text-lg leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Season Pack */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border-2 border-amber-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">📦</span>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t('seasonPack.title')}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('seasonPack.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-24 h-24 bg-red-50 rounded-xl mx-auto mb-4 flex items-center justify-center border border-red-100">
                  <Image
                    src="/images/トマトイメージ.avif"
                    alt="トマト加工"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-gray-800 font-semibold">{t('processing.tomato')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-yellow-50 rounded-xl mx-auto mb-4 flex items-center justify-center border border-yellow-100">
                  <Image
                    src="/images/黄桃ダイス缶.avif"
                    alt="黄桃加工"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-gray-800 font-semibold">{t('processing.peach')}</p>
              </div>
              <div className="text-center">
                <div className="w-24 h-24 bg-orange-50 rounded-xl mx-auto mb-4 flex items-center justify-center border border-orange-100">
                  <Image
                    src="/images/国産みかん.avif"
                    alt="みかん加工"
                    width={48}
                    height={48}
                    className="rounded-lg"
                  />
                </div>
                <p className="text-gray-800 font-semibold">{t('processing.mikan')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Processing Capability */}
        <div className="mb-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-lg border-2 border-orange-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-2xl">🏭</span>
            </div>
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {t('processingCapability.title')}
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {t('processingCapability.description')}
              </p>
            </div>

            <div className="overflow-x-auto">
              <div className="inline-block min-w-full">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gray-900 text-white">
                      <th className="px-6 py-4 text-left font-semibold">
                        {t('processingCapability.table.headers.line')}
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        {t('processingCapability.table.headers.dailyCapacity')}
                      </th>
                      <th className="px-6 py-4 text-center font-semibold">
                        {t('processingCapability.table.headers.seasonTotal')}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {t.raw('processingCapability.table.rows').map((row: any, index: number) => (
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-orange-50 transition-colors`}>
                        <td className="px-6 py-4 text-gray-900 font-medium">{row.line}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-semibold">{row.dailyCapacity}</td>
                        <td className="px-6 py-4 text-center text-gray-700 font-semibold">{row.seasonTotal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Food Safety & Quality Management */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Food Safety */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-blue-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg">🛡️</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{t('foodSafety.title')}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-1"></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{t('foodSafety.description')}</p>
              <p className="text-gray-600 leading-relaxed">{t('foodSafety.content')}</p>
            </div>
          </div>

          {/* Quality Management */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 border-green-100 relative overflow-hidden">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-lg">✅</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{t('qualityManagement.title')}</h3>
                  <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-1"></div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{t('qualityManagement.description')}</p>
              <div className="space-y-3">
                <p className="text-gray-600 leading-relaxed text-sm">{t('qualityManagement.process')}</p>
                <p className="text-gray-600 leading-relaxed text-sm">{t('qualityManagement.testing')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}