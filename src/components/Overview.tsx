'use client'

import { useTranslations } from 'next-intl'

export default function Overview() {
  const t = useTranslations('company.overview')
  return (
    <section id="overview" className="py-24 px-4 bg-gradient-to-br from-orange-50 via-amber-50 to-emerald-50 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-16 right-16 w-36 h-36 bg-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 left-16 w-44 h-44 bg-emerald-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/2 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl"></div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-blue-200/15 rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 right-32 w-28 h-28 bg-purple-200/15 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* ヘッダーセクション */}
        <div className="text-center mb-20">
          <div className="space-y-6">
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
                {t('title')}
              </h2>
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-xl">📊</span>
              </div>
            </div>
            <div className="flex justify-center space-x-3 mb-8">
              <div className="w-12 h-1 bg-orange-400 rounded-full"></div>
              <div className="w-6 h-1 bg-emerald-400 rounded-full"></div>
              <div className="w-16 h-1 bg-amber-400 rounded-full"></div>
              <div className="w-4 h-1 bg-blue-400 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* 統計情報カード */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-orange-200 relative overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">📅</span>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-orange-300/20 to-red-300/20 rounded-full blur-xl"></div>
            <div className="text-5xl md:text-6xl font-bold text-orange-800 mb-4">100+</div>
            <div className="text-lg text-gray-700 font-medium">{t('stats.yearsHistory')}</div>
          </div>
          
          <div className="text-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-emerald-200 relative overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">👥</span>
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-300/20 to-emerald-400/20 rounded-full blur-xl"></div>
            <div className="text-5xl md:text-6xl font-bold text-emerald-800 mb-4">約100</div>
            <div className="text-lg text-gray-700 font-medium">{t('stats.employeeCount')}</div>
          </div>
        </div>

        {/* 会社情報カードセクション */}
        <div className="space-y-8">
          {/* 基本情報グループ */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-orange-100 overflow-hidden relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🏭</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">企業基本情報</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-6 border border-orange-200">
                    <div className="text-sm text-orange-700 font-semibold mb-2">{t('labels.companyName')}</div>
                    <div className="text-lg text-gray-800 font-medium">{t('values.companyName')}</div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <div className="text-sm text-blue-700 font-semibold mb-2">{t('labels.established')}</div>
                    <div className="text-lg text-gray-800 font-medium">{t('values.established')}</div>
                  </div>
                  <div className="bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-xl p-6 border border-emerald-200">
                    <div className="text-sm text-emerald-700 font-semibold mb-2">{t('labels.capital')}</div>
                    <div className="text-lg text-gray-800 font-medium">{t('values.capital')}</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                    <div className="text-sm text-purple-700 font-semibold mb-2">{t('labels.representative')}</div>
                    <div className="text-lg text-gray-800 font-medium">{t('values.representative')}</div>
                  </div>
                  <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
                    <div className="text-sm text-amber-700 font-semibold mb-2">{t('labels.employees')}</div>
                    <div className="text-lg text-gray-800 font-medium">{t('values.employees')}</div>
                  </div>
                  <div className="bg-gradient-to-r from-rose-50 to-rose-100 rounded-xl p-6 border border-rose-200">
                    <div className="text-sm text-rose-700 font-semibold mb-2">{t('labels.business')}</div>
                    <div className="text-lg text-gray-800 font-medium leading-relaxed">{t('values.business')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 所在地・連絡先 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-blue-100 overflow-hidden relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">📍</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">所在地・連絡先</h3>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                <div className="text-sm text-blue-700 font-semibold mb-4">{t('labels.address')}</div>
                <div className="text-lg text-gray-800 leading-relaxed">
                  {t('values.address').split('\n').map((line, index) => (
                    <span key={index} className="block mb-1">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 取扱品目 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-emerald-100 overflow-hidden relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🥫</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('labels.products')}</h3>
              <div className="bg-gradient-to-r from-emerald-50 to-green-50 rounded-xl p-8 border border-emerald-200">
                <div className="text-lg text-gray-800 leading-relaxed">
                  {t('values.products').split('\n').map((line, index) => (
                    <div key={index} className="flex items-center mb-3 last:mb-0">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 関連会社 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-purple-100 overflow-hidden relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🤝</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('labels.relatedCompanies')}</h3>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
                <div className="text-lg text-gray-800 leading-relaxed">
                  {t('values.relatedCompanies').split('\n').map((line, index) => (
                    <span key={index} className="block mb-2 last:mb-0">
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 取引銀行 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-amber-100 overflow-hidden relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🏦</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('labels.banks')}</h3>
              <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-8 border border-amber-200">
                <div className="text-lg text-gray-800 leading-relaxed">
                  {t('values.banks').split('\n').map((line, index) => (
                    <div key={index} className="flex items-center mb-3 last:mb-0">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 主な販売先 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border-2 border-rose-100 overflow-hidden relative">
            <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-rose-400 to-rose-600 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xl">🛒</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{t('labels.mainCustomers')}</h3>
              <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-8 border border-rose-200">
                <div className="grid md:grid-cols-2 gap-4">
                  {t('values.mainCustomers').split('\n').map((line, index) => (
                    <div key={index} className="flex items-center mb-3 last:mb-0">
                      <div className="w-2 h-2 bg-rose-500 rounded-full mr-4 flex-shrink-0"></div>
                      <span className="text-lg text-gray-800">{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}