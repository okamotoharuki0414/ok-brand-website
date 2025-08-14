'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'


const galleryItems = [
  {
    id: 1,
    image: '/images/みかん農場.avif',
    title: 'みかん自社栽培',
    caption: 'グループ共同プロジェクト農園として2021年から開始。トーアス㈱と共同でみかんの苗を定植しています。',
    link: '/company#cultivation'
  },
  {
    id: 2,
    image: '/images/工場写真.avif',
    title: '製造工場',
    caption: '最新設備と伝統技術が融合した製造現場',
    link: '/company#production'
  },
  {
    id: 3,
    image: '/images/品質管理２.avif',
    title: '品質管理',
    caption: '徹底した品質管理で安心・安全な商品をお届け',
    link: '/company#quality'
  },
  {
    id: 4,
    image: '/images/みかんレーン.avif',
    title: '製造ライン',
    caption: '効率的な製造ラインで品質と生産性を両立',
    link: '/company#production'
  }
]

export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index)
    if (scrollRef.current) {
      const scrollLeft = index * (scrollRef.current.offsetWidth / 1.2)
      scrollRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              Gallery
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              自然の恵みから工場まで、<br className="hidden sm:block" />
              私たちの想いをお伝えします
            </p>
          </div>
        </div>

        {/* デスクトップ：横並び表示 */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Link
              key={item.id}
              href={item.link}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white space-y-1">
                      <h3 className="text-lg font-medium">{item.title}</h3>
                      <p className="text-sm text-white/90 font-light leading-tight">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* タブレット・モバイル：カルーセル表示 */}
        <div className="lg:hidden">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {galleryItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="flex-none w-80 sm:w-96 group cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="relative overflow-hidden bg-white rounded-lg shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 90vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="text-white space-y-2">
                        <h3 className="text-xl font-medium">{item.title}</h3>
                        <p className="text-sm text-white/90 font-light leading-relaxed">{item.caption}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* インジケーター */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryItems.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-slate-800 w-8' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}