'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function ProductionLines() {
  const t = useTranslations('production')
  const facilities = [
    {
      name: t('facilities.east'),
      lines: [
        {
          title: t('lines.agricultural.title'),
          content: t('lines.agricultural.content'),
          items: t('lines.agricultural.items'),
          features: t.raw('lines.agricultural.features'),
          image: "/images/農産ライン.avif",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )
        }
      ]
    },
    {
      name: t('facilities.west'),
      lines: [
        {
          title: t('lines.frozen.title'),
          subtitle: t('lines.frozen.subtitle'),
          content: t('lines.frozen.content'),
          items: t('lines.frozen.items'),
          features: t.raw('lines.frozen.features'),
          image: "/images/冷凍ライン.avif",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
          )
        },
        {
          title: t('lines.dryPack.title'),
          subtitle: t('lines.dryPack.subtitle'),
          content: t('lines.dryPack.content'),
          items: t('lines.dryPack.items'),
          features: t.raw('lines.dryPack.features'),
          image: "/images/ドライパックライン.avif",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          )
        }
      ]
    },
    {
      name: t('facilities.north'),
      lines: [
        {
          title: t('lines.cup.title'),
          subtitle: t('lines.cup.subtitle'),
          content: t('lines.cup.content'),
          items: t('lines.cup.items'),
          features: t.raw('lines.cup.features'),
          image: "/images/カップライン.avif",
          icon: (
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
            </svg>
          )
        }
      ]
    }
  ]

  return (
    <section id="production" className="py-24 px-4 bg-white scroll-mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {t('title')}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
          
          <div className="mt-12 relative aspect-[16/9] overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/本社工場.jpg"
              alt="岡本食品の工場外観"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-light">{t('subtitle')}</p>
            </div>
          </div>
        </div>

        {/* 工場別製造ライン */}
        <div className="space-y-12 mb-16">
          {facilities.map((facility, facilityIndex) => (
            <div key={facilityIndex} className="bg-gradient-to-br from-orange-50 to-white rounded-xl p-8 shadow-lg border border-orange-100">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-slate-800 mb-2">{facility.name}</h3>
                <div className="w-16 h-px bg-orange-400"></div>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-6">
                {facility.lines.map((line, lineIndex) => (
                  <div key={lineIndex} className="bg-white rounded-lg overflow-hidden shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                    {/* 製造ライン画像 */}
                    <div className="relative aspect-[5/3] overflow-hidden rounded-t-lg">
                      <Image
                        src={line.image}
                        alt={`${line.title}の製造現場`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 scale-90"
                        sizes="(max-width: 768px) 90vw, 45vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-3 left-3">
                        <div className="w-12 h-12 bg-orange-100/90 rounded-lg flex items-center justify-center text-orange-600 backdrop-blur-sm">
                          {line.icon}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-1">{line.title}</h4>
                        {'subtitle' in line && line.subtitle && (
                          <p className="text-sm text-orange-600 font-medium">{line.subtitle}</p>
                        )}
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-slate-700">{t('lineLabels.contents')}</span>
                          <span className="text-sm text-slate-600 ml-2">{line.content}</span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold text-slate-700">{t('lineLabels.items')}</span>
                          <span className="text-sm text-slate-600 ml-2">{line.items}</span>
                        </div>
                        
                        <div>
                          <span className="text-sm font-semibold text-slate-700 block mb-2">{t('lineLabels.features')}</span>
                          <ul className="space-y-1">
                            {(Array.isArray(line.features) ? line.features : []).map((feature: string, featureIndex: number) => (
                              <li key={featureIndex} className="flex items-start text-sm text-slate-600">
                                <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8 md:p-12 mb-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                {t('schedule.title')}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('schedule.subtitle')}
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="relative w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/製造ラインカレンダー.jpg"
                  alt="年間製造スケジュールカレンダー"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="text-sm text-slate-600">{t('schedule.caption')}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-stone-50 rounded-lg p-8 md:p-12 mb-16">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                {t('videos.title')}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('videos.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">{t('videos.frozen.title')}</h3>
                <p className="mb-4 text-gray-700 text-sm">{t('videos.frozen.description')}</p>
                <div className="aspect-video w-full rounded-lg shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/YPL-zgOA6U4"
                    title="冷凍フルーツ製造ライン"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">{t('videos.tomato.title')}</h3>
                <p className="mb-4 text-gray-700 text-sm">{t('videos.tomato.description')}</p>
                <div className="aspect-video w-full rounded-lg shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/cd5ERvFNbUU"
                    title="トマト缶詰製造ライン"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">{t('videos.mikan.title')}</h3>
                <p className="mb-4 text-gray-700 text-sm">{t('videos.mikan.description')}</p>
                <div className="aspect-video w-full rounded-lg shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/V21rpPQ8Jtw"
                    title="みかん缶詰製造ライン"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>

              <section className="mb-12">
                <h3 className="text-2xl font-bold text-orange-600 mb-4">{t('videos.peach.title')}</h3>
                <p className="mb-4 text-gray-700 text-sm">{t('videos.peach.description')}</p>
                <div className="aspect-video w-full rounded-lg shadow-md">
                  <iframe
                    src="https://www.youtube.com/embed/wgxOc3g93Jo"
                    title="黄桃缶詰製造ライン"
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </section>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-50 to-white rounded-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                {t('quality.title')}
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t('quality.description')}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800">{t('quality.management.title')}</h4>
                  <p className="text-sm text-slate-600">{t('quality.management.description')}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800">{t('quality.efficiency.title')}</h4>
                  <p className="text-sm text-slate-600">{t('quality.efficiency.description')}</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="space-y-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-slate-800">{t('quality.inheritance.title')}</h4>
                  <p className="text-sm text-slate-600">{t('quality.inheritance.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}