import Image from 'next/image'
import { normalizeImageUrl } from '@/utils/imageUtils'
import { useTranslations } from 'next-intl'

export default function Greeting() {
  const t = useTranslations('company.greeting')
  return (
    <section id="greeting" className="py-24 px-4 bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {t('title')}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <p>
                {t('content1')}
              </p>
              
              <p>
                {t('content2')}
              </p>
              
              <p>
                {t('content3')}
              </p>
              
              <p className="font-medium text-slate-800">
                {t('content4')}
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <div className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8 md:p-12">
              <div className="space-y-6">
                <div className="relative w-32 h-32 mx-auto">
                  <Image
                    src={normalizeImageUrl("/images/社長写真.avif")}
                    alt={`${t('president')} ${t('name')}`}
                    fill
                    className="object-cover rounded-full shadow-lg"
                    sizes="128px"
                  />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl md:text-2xl font-medium text-slate-800">
                    {t('president')}
                  </h3>
                  <p className="text-2xl md:text-3xl font-serif text-slate-800 tracking-wide">
                    {t('name')}
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