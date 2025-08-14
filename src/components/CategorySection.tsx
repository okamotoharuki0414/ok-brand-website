import Image from 'next/image'
import ProductCard from './ProductCard'
import ScrollReveal from './ScrollReveal'
import StaggerReveal from './StaggerReveal'
import { useTranslations } from 'next-intl'

interface ProductSpecs {
  shape?: string
  package?: string
  solidWeight?: string
  totalWeight?: string
  productSize?: string
  caseSize?: string
  ingredients?: string
  additives?: string
  shelfLife?: string
  origin?: string
  janCode?: string
  itfCode?: string
}

interface Product {
  name: string
  description: string
  image: string
  specs?: ProductSpecs
}

interface CategorySectionProps {
  title: string
  description: string
  products: Product[]
  image?: string
}

export default function CategorySection({ title, description, products, image }: CategorySectionProps) {
  const t = useTranslations('products')
  return (
    <section id={`category-${title}`} className="mb-24 scroll-mt-32 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-slate-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 -left-32 w-48 h-48 bg-slate-200 rounded-full blur-2xl opacity-20"></div>
      </div>

      <div className="relative z-10">
        <div className="mb-16">
          <div className="space-y-8">
            {/* カテゴリタイトル */}
            <ScrollReveal direction="left" delay={100}>
              <div className="space-y-6">
                <div className="relative">
                  <div className="flex items-center space-x-6">
                    <div className="relative">
                      <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 tracking-tight leading-tight">
                        {title}
                      </h2>
                      <div className="absolute -top-2 -right-4 w-3 h-3 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full animate-bounce delay-300"></div>
                    </div>
                    
                    {/* 装飾的なパルス要素 */}
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full animate-pulse shadow-lg"></div>
                      <div className="w-3 h-3 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full animate-pulse delay-200 shadow-md"></div>
                      <div className="w-3.5 h-3.5 bg-gradient-to-br from-slate-700 to-slate-800 rounded-full animate-pulse delay-400 shadow-lg"></div>
                    </div>
                  </div>
                  
                  {/* 装飾ライン */}
                  <div className="flex items-center space-x-3 mt-4">
                    <div className="w-16 h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full"></div>
                    <div className="w-10 h-1 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full"></div>
                    <div className="w-20 h-1 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full"></div>
                    <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            
            {/* カテゴリ画像 */}
            {image && (
              <ScrollReveal direction="right" delay={300}>
                <div className="relative group">
                  <div className="relative aspect-[5/2] overflow-hidden rounded-3xl shadow-2xl border border-slate-200">
                    <Image
                      src={image}
                      alt={`${title}の商品画像`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* 画像上のカテゴリバッジ */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg">
                        <span className="text-white font-bold text-sm tracking-wide">{title}</span>
                      </div>
                    </div>
                    
                    {/* 装飾要素 */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            )}
            
            {/* カテゴリ説明文 */}
            <ScrollReveal direction="up" delay={500}>
              <div className="relative">
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-slate-200/50">
                  <p className="text-slate-700 leading-relaxed max-w-4xl text-lg font-light">
                    {description}
                  </p>
                  
                  {/* 装飾的なアクセント */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full shadow-lg"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-slate-500 to-slate-600 rounded-full shadow-md"></div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
        
        {/* 商品グリッド */}
        <ScrollReveal direction="up" delay={700}>
          <div className="mb-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-slate-100/80 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-200/50 shadow-lg">
                <div className="w-2 h-2 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse"></div>
                <span className="text-slate-700 font-semibold text-sm tracking-wide">{t('productLineup')}</span>
                <div className="w-2 h-2 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <StaggerReveal staggerDelay={200} baseDelay={900} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              description={product.description}
              image={product.image}
              category={title}
              specs={product.specs}
            />
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}