'use client'

import { useTranslations } from 'next-intl'

export default function History() {
  const t = useTranslations('company.history')

  // Get the timeline data as an array
  const timelineData = t.raw('timeline') as Array<{
    year: string
    event: string
    description: string
  }>

  return (
    <section id="history" className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {t('title')}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-slate-200 via-slate-400 to-slate-200"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-col md:space-x-8`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-6 w-4 h-4 bg-slate-500 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"}`}>
                  <div className="bg-white rounded-lg p-6 shadow-md border border-slate-200">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                          {item.year}
                        </span>
                        <h3 className="text-lg font-semibold text-slate-800">
                          {item.event}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-white rounded-lg p-8 shadow-sm border border-slate-200">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-800">
              {t('summaryTitle')}
            </h3>
            <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t('summaryDescription')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}