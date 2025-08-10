'use client'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function Mission() {
  const locale = useLocale()
  const t = useTranslations('company')

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              OUR MISSION
            </h2>
            <div className="w-16 h-px bg-orange-600 mx-auto" />
            <p className="text-slate-600 leading-relaxed">
              {locale === 'ja' ? '私たちの理念と使命' : 'Our Philosophy and Mission'}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl p-8 md:p-12 shadow-lg border border-orange-100">
          <div className="text-center space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif text-slate-800 tracking-wide">
                {locale === 'ja' ? '理念・方針' : 'Philosophy & Policy'}
              </h3>
              <div className="max-w-3xl mx-auto space-y-4">
                {locale === 'ja' ? (
                  <>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                      全ての人に安心・安全でおいしい食を提供し、
                    </p>
                    <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                      健康で幸せな社会づくりに貢献します
                    </p>
                  </>
                ) : (
                  <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium">
                    {t('mission')}
                  </p>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <p className="text-slate-600 leading-relaxed">
                {locale === 'ja' 
                  ? '100年を超える歴史の中で培われた技術と信頼により、国産原料を活用した高品質な製品づくりに取り組んでいます。'
                  : 'Through technology and trust cultivated over a century of history, we are committed to creating high-quality products using domestic ingredients.'
                }
              </p>
            </div>

            <Link
              href={`/${locale}/company`}
              className="inline-flex items-center px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 group"
            >
              <span>{locale === 'ja' ? '企業理念の詳細を見る' : 'Learn More About Our Philosophy'}</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}