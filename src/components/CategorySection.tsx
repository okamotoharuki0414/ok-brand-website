import Image from 'next/image'
import ProductCard from './ProductCard'

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
  return (
    <section id={`category-${title}`} className="mb-20 scroll-mt-32">
      <div className="mb-12">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-slate-800 tracking-wide">
              {title}
            </h2>
            <div className="w-16 h-px bg-slate-400"></div>
          </div>
          
          {image && (
            <div className="relative aspect-[5/2] overflow-hidden rounded-lg mb-6">
              <Image
                src={image}
                alt="黄桃の写真"
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <p className="text-slate-600 leading-relaxed font-light max-w-4xl text-lg">
            {description}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  )
}