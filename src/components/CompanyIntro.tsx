'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'

export default function CompanyIntro() {
  const locale = useLocale()
  const t = useTranslations('company')

  return (
    <section className="pt-0 pb-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {t('heading')}
            </h2>
            <div className="w-16 h-px bg-orange-600 mx-auto" />
            <p className="text-slate-600 leading-relaxed">
              {locale === 'ja' ? '100年を超える伝統と革新' : 'Over 100 years of tradition and innovation'}
            </p>
          </div>
          
          <p className="text-slate-700 leading-relaxed text-lg">
            {t('body')}
          </p>

          <div className="grid grid-cols-3 gap-4 text-center my-8">
            <div className="bg-stone-50 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-1">1921</div>
              <div className="text-sm text-slate-600">{locale === 'ja' ? '創業年' : 'Founded'}</div>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-1">100+</div>
              <div className="text-sm text-slate-600">{locale === 'ja' ? '年の歴史' : 'Years of History'}</div>
            </div>
            <div className="bg-stone-50 p-4 rounded-lg shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-1">8</div>
              <div className="text-sm text-slate-600">{locale === 'ja' ? '商品カテゴリ' : 'Product Categories'}</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${locale}/company`}
              className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors duration-300 group"
            >
              <span>{t('viewMore')}</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-6 py-3 border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white font-medium rounded-lg transition-colors duration-300"
            >
              {locale === 'ja' ? 'お問い合わせ' : 'Contact Us'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}