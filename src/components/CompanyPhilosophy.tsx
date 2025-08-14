'use client'

import { useTranslations } from 'next-intl'

export default function CompanyPhilosophy() {
  const t = useTranslations('company')
  return (
    <section className="py-24 px-4 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              OUR MISSION
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t('philosophy.missionStatement')}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a1.5 1.5 0 011.5 1.5M9 10V6a2 2 0 012-2h2a2 2 0 012 2v4m-6 4h6" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-slate-800">{t('philosophy.smile.title')}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {t('philosophy.smile.description')}
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-slate-800">{t('philosophy.gratitude.title')}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {t('philosophy.gratitude.description')}
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-medium text-slate-800">{t('philosophy.health.title')}</h3>
              <p className="text-slate-600 leading-relaxed font-light">
                {t('philosophy.health.description')}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 md:p-12 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif text-slate-800 mb-8 text-center">{t('managementPolicy.title')}</h3>
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-800 flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    {t('managementPolicy.qualityFirst.title')}
                  </h4>
                  <p className="text-sm leading-relaxed ml-5">
                    {t('managementPolicy.qualityFirst.description')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-800 flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    {t('managementPolicy.innovation.title')}
                  </h4>
                  <p className="text-sm leading-relaxed ml-5">
                    {t('managementPolicy.innovation.description')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-800 flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    {t('managementPolicy.socialContribution.title')}
                  </h4>
                  <p className="text-sm leading-relaxed ml-5">
                    {t('managementPolicy.socialContribution.description')}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-slate-800 flex items-center">
                    <span className="w-2 h-2 bg-slate-400 rounded-full mr-3"></span>
                    {t('managementPolicy.humanDevelopment.title')}
                  </h4>
                  <p className="text-sm leading-relaxed ml-5">
                    {t('managementPolicy.humanDevelopment.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}