'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function CompanySectionEn() {
  const locale = useLocale()

  const values = [
    {
      key: 'quality',
      icon: '🏆',
      title: 'Quality First',
      description: 'We deliver safe food through strict quality control and a focus on domestically sourced ingredients.'
    },
    {
      key: 'trust',
      icon: '🤝',
      title: 'Trust',
      description: 'Long-term partnerships with growers ensure the highest-quality ingredients.'
    },
    {
      key: 'sustainability',
      icon: '🌱',
      title: 'Sustainability',
      description: 'We operate responsibly with care for the environment and future generations.'
    }
  ]

  return (
    <section className="py-24 px-4 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
                About Okamoto Foods
              </h2>
              <div className="w-16 h-px bg-orange-600" />
              <p className="text-slate-600 leading-relaxed">
                Over 100 years of tradition and innovation
              </p>
            </div>
            
            <p className="text-slate-700 leading-relaxed text-lg">
              Since our founding in 1921, we have continued to craft foods with a commitment to Japanese ingredients and rigorous quality control, bringing safety and great taste to your table.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-medium text-slate-800">Our Mission & Values</h3>
              <div className="grid gap-4">
                {values.map((value) => (
                  <div key={value.key} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <span className="text-2xl">{value.icon}</span>
                    <div className="space-y-1">
                      <h4 className="font-medium text-slate-800">{value.title}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href={`/${locale}/company`}
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-300 group"
            >
              <span>Learn More About Us</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/company.jpg"
                alt="Okamoto Foods history and philosophy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-100 rounded-full opacity-20" />
            <div className="absolute -top-8 -left-8 w-20 h-20 bg-orange-200 rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}