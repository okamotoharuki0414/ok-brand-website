'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'

export default function CompanyIntro() {
  const locale = useLocale()
  const t = useTranslations('company')

  // Debug: ログでロケールと翻訳を確認
  console.log('CompanyIntro - Current locale:', locale)
  console.log('CompanyIntro - t(heading):', t('heading'))
  console.log('CompanyIntro - t(tradition):', t('tradition'))

  return (
    <section className="pt-0 pb-20 px-4 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <ScrollReveal direction="up" delay={100}>
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif text-slate-700 tracking-wide">
                {t('heading')}
              </h2>
              <div className="w-12 h-px bg-slate-400 mx-auto" />
              <p className="text-slate-600 leading-relaxed">
                {t('tradition')}
              </p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <p className="text-slate-700 leading-relaxed text-lg">
              {t('body')}
            </p>
          </ScrollReveal>

          <StaggerReveal staggerDelay={150} baseDelay={400} className="grid grid-cols-3 gap-4 text-center my-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold text-slate-700 mb-1">1921</div>
              <div className="text-sm text-slate-600">{t('founded')}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold text-slate-700 mb-1">100+</div>
              <div className="text-sm text-slate-600">{t('yearsHistory')}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-stone-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-2xl font-bold text-slate-700 mb-1">8</div>
              <div className="text-sm text-slate-600">{t('productCategories')}</div>
            </div>
          </StaggerReveal>

          <ScrollReveal direction="up" delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${locale}/company`}
                className="inline-flex items-center px-6 py-3 bg-slate-600 hover:bg-slate-700 text-white font-medium rounded-lg transition-colors duration-300 group"
              >
                <span>{t('viewMore')}</span>
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 font-medium rounded-lg transition-colors duration-300"
              >
                {t('contactUs')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}