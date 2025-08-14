'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function CompanyGreeting() {
  const t = useTranslations('company.greeting')
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {t('title')}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-2">
                {t('president')}
              </h3>
              <p className="text-2xl md:text-3xl font-serif text-slate-800 tracking-wide">
                {t('name')}
              </p>
            </div>

            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                {t('content1')}
              </p>
              
              <p>
                {t('content2')}
              </p>
              
              <p className="font-medium">
                {t('content3')}
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-72 h-72">
              <Image
                src="/images/社長写真.avif"
                alt={`${t('president')} ${t('name')}`}
                fill
                className="object-contain rounded-full shadow-lg"
                style={{ backgroundColor: '#cac8bb' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}