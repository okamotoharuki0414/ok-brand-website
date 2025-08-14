'use client'

import { useTranslations } from 'next-intl'
import { normalizeImageUrl } from '@/utils/imageUtils'

export default function GroupCompanies() {
  const t = useTranslations('company.groupCompanies')

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            {t('subtitle')}
          </p>
          <p className="text-lg text-slate-700">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 岡本食品株式会社 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={normalizeImageUrl("/images/会社外観.avif")}
                alt={t('okamoto.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {t('okamoto.name')}
              </h3>
              <p className="text-slate-600 mb-4">
                {t('okamoto.business')}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {t('okamoto.description')}
              </p>
            </div>
          </div>

          {/* トーアス株式会社 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img 
                src={normalizeImageUrl("/images/トーアス会社外観.avif")}
                alt={t('toasu.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {t('toasu.name')}
              </h3>
              <p className="text-slate-600 mb-4">
                {t('toasu.business')}
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                {t('toasu.description')}
              </p>
              <a 
                href="https://www.toasu.co.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors duration-200"
              >
                <span className="mr-2">{t('toasu.website')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* トーヨーホールディングス */}
        <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-3xl font-bold text-slate-800 mb-6">
            {t('holding.name')}
          </h3>
          <p className="text-lg text-slate-700">
            {t('holding.description')}
          </p>
        </div>
      </div>
    </section>
  )
}