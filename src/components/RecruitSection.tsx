'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function RecruitSection() {
  const t = useTranslations('recruit')
  const locale = useLocale()
  
  const jobOpenings = [
    {
      category: t('jobCategories.fullTime'),
      positions: [
        t('positions.manufacturingManager'),
        t('positions.manufacturing'),
        t('positions.qualityControl'),
        t('positions.newGraduate')
      ]
    },
    {
      category: t('jobCategories.partTime'),
      positions: [
        t('positions.manufacturing')
      ]
    }
  ]

  return (
    <section className="py-12 sm:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              JOB OPENINGS
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>

        {/* 求めている人材 */}
        <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-8 md:p-12 shadow-sm border border-slate-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-wide mb-4">
              QUALIFICATIONS
            </h3>
            <p className="text-lg font-medium text-slate-700">
              {t('qualificationMessage')}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-slate-700 leading-relaxed">
              {t('companyDescription.paragraph1')}
            </p>

            <p className="text-slate-700 leading-relaxed">
              {t('companyDescription.paragraph2')}
            </p>

            <p className="text-slate-700 leading-relaxed">
              {t('companyDescription.paragraph3')}
            </p>

            <div className="text-center pt-6">
              <p className="text-xl font-bold text-slate-700">
                {t('companySlogan')}
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {jobOpenings.map((category, index) => (
            <div key={index} className="bg-gradient-to-br from-slate-50 to-stone-50 rounded-lg p-6 sm:p-8 shadow-sm border border-slate-200 w-full">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-800 pb-2 border-b border-slate-300">
                  【{category.category}】
                </h3>
                <ul className="space-y-3">
                  {category.positions.map((position, posIndex) => (
                    <li key={posIndex} className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-slate-400 rounded-full mr-3 flex-shrink-0"></span>
                      {position}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-slate-800">{t('workConditions.title')}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">{t('workConditions.location.label')}</p>
                  <p className="text-slate-600">{t('workConditions.location.address')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">{t('workConditions.workingHours.label')}</p>
                  <p className="text-slate-600">{t('workConditions.workingHours.details')}</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-slate-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-slate-800">{t('workConditions.annualHolidays.label')}</p>
                  <p className="text-slate-600">{t('workConditions.annualHolidays.details')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-slate-800">{t('application.title')}</h3>
            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                {t('application.instructions1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('application.instructions2')}
              </p>
              
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm border border-slate-200 w-full">
                <div className="space-y-3">
                  <h4 className="font-bold text-slate-800 text-sm sm:text-base">{t('application.contactPerson.title')}</h4>
                  <div className="space-y-2">
                    <p className="text-slate-700 text-sm sm:text-base">{t('application.contactPerson.name')}</p>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-slate-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                      <span className="text-slate-600 text-sm sm:text-base">TEL: 052-611-5301</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-col gap-3 w-full">
                <a
                  href="tel:052-611-5301"
                  className="inline-flex items-center justify-center bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors duration-300 w-full text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                  <span className="truncate">{t('application.phoneButton')}</span>
                </a>
                <Link
                  href={`/${locale}/contact`}
                  className="inline-flex items-center justify-center bg-slate-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-700 transition-colors duration-300 w-full text-sm sm:text-base"
                >
                  <svg className="w-4 h-4 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  <span className="truncate">{t('contactForm')}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}