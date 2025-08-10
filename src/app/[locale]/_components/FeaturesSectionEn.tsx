'use client'

import Image from 'next/image'

export default function FeaturesSectionEn() {
  const features = [
    {
      id: 1,
      icon: '🏆',
      title: 'Over 100 Years of Tradition',
      description: 'Since our founding in 1921, we have continued our commitment to unwavering quality and technological innovation.',
      image: '/images/company.jpg'
    },
    {
      id: 2,
      icon: '🌱',
      title: 'Commitment to Domestic Ingredients',
      description: 'We use only carefully selected domestic ingredients, primarily from Aichi Prefecture and surrounding regions.',
      image: '/images/みかん商品.avif'
    },
    {
      id: 3,
      icon: '⚡',
      title: 'Advanced Manufacturing Technology',
      description: 'Combining traditional methods with cutting-edge technology to deliver safe and delicious products.',
      image: '/images/ニュース.avif'
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              Our Strengths
            </h2>
            <div className="w-16 h-px bg-orange-600 mx-auto" />
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              The technology and experience cultivated over many years form the foundation of our high-quality product manufacturing
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={feature.id} className="group">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-2xl">{feature.icon}</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-slate-800 group-hover:text-orange-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 p-8 bg-stone-50 rounded-2xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100+</div>
              <div className="text-sm text-slate-600">Years of History</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">8</div>
              <div className="text-sm text-slate-600">Product Categories</div>
            </div>
            <div className="w-px h-12 bg-slate-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-1">100%</div>
              <div className="text-sm text-slate-600">Domestic Ingredients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}