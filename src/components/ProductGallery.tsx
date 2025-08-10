'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'


const getProducts = (locale: string) => [
  {
    id: 1,
    name: locale === 'ja' ? 'みかん' : 'Mikan (Mandarin)',
    description: locale === 'ja' 
      ? '収穫されたばかりの新鮮なみかんを、旬のうちに皮や種、スジを取り除いて一粒ずつ食べやすく加工し、あっさりした甘さのシラップに漬込みました。果肉の風味を引き出したおいしさをお楽しみ頂けます。'
      : 'Fresh mandarins are carefully processed by removing peels, seeds, and membranes, then preserved in light syrup. Enjoy the natural fruit flavor in every piece.',
    image: '/images/みかん商品.avif',
    link: '/goods#category-みかん'
  },
  {
    id: 2,
    name: locale === 'ja' ? '黄桃' : 'Yellow Peach',
    description: locale === 'ja'
      ? '国内で収穫した黄桃やギリシャ産の黄桃を、種や皮を取り除き使いやすいダイス状にカットしました。あっさりとした甘さのシラップ漬けで、果肉本来のおいしさをお楽しみいただけます。'
      : 'Domestic and Greek yellow peaches are carefully processed, removing seeds and peels, then diced for convenience. Preserved in light syrup to maintain the natural sweetness.',
    image: '/images/桃.avif',
    link: '/goods#category-黄桃'
  },
  {
    id: 3,
    name: locale === 'ja' ? 'トマト' : 'Tomato',
    description: locale === 'ja'
      ? '国内で収穫したトマトを旬の時期に芯を取り除き皮をむいて、トマトを搾汁したジュースに漬け込みました。製造工程で水分を加えておらず、国産トマトのフレッシュな風味を閉じ込めました。ダイスカットの他、国産トマトでは希少なホールタイプも製造しています。'
      : 'Domestic tomatoes are processed at peak season, removing cores and peels, then preserved in pure tomato juice without added water. Available in diced cuts and rare whole types.',
    image: '/images/whole_tomato_canned.avif',
    link: '/goods#category-トマト'
  },
  {
    id: 4,
    name: locale === 'ja' ? 'マッシュルーム' : 'Mushroom',
    description: locale === 'ja'
      ? '歯切れがよく、風味豊かなマッシュルームを薄くスライスしました。収穫後すぐに加工する国産の他、世界の主要な産地であるヨーロッパ産、中国産もございます。※冷凍大容量タイプ（ホール・スライス）も取扱っております。'
      : 'Crisp and flavorful mushrooms are thinly sliced and processed immediately after harvest. Available from domestic, European, and Chinese sources.',
    image: '/images/マッシュルーム.avif',
    link: '/goods#category-マッシュルーム'
  },
  {
    id: 5,
    name: locale === 'ja' ? '冷凍フルーツ' : 'Frozen Fruits',
    description: locale === 'ja'
      ? '「国産フルーツ」「皮無し」「シラップ漬け」の冷凍フルーツです。生果調達（産地直送）・生果の一次処理から最終製品まで一貫して行なっています。国産フルーツの皮を除去し、シラップ漬けしたフルーツを一粒ずつ冷凍しています。'
      : 'Premium frozen fruits featuring domestic ingredients, peeled and preserved in syrup. We handle the entire process from fresh fruit procurement to final products.',
    image: '/images/冷凍みかんイメージ_edited.avif',
    link: '/goods#category-冷凍フルーツ'
  }
]

export default function ProductGallery() {
  const locale = useLocale()
  const t = useTranslations('products')
  const products = getProducts(locale)

  return (
    <section className="pt-24 pb-8 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 tracking-wide">
              {locale === 'ja' ? 'Products' : 'Products'}
            </h2>
            <div className="w-16 h-px bg-slate-400 mx-auto"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light leading-relaxed">
              {locale === 'ja' ? (
                <>
                  良い製品は良い原料からしかつくることはできません<br className="hidden sm:block" />
                  安心・美味しさ・笑顔を詰めてお届けします
                </>
              ) : (
                <>
                  Good products can only be made from good ingredients<br className="hidden sm:block" />
                  We deliver safety, deliciousness, and smiles
                </>
              )}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Link
              href={product.link}
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute inset-0 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="text-white space-y-2">
                      <h3 className="text-xl font-medium">{product.name}</h3>
                      <p className="text-sm text-white/90 font-light">{product.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 lg:hidden">
                  <h3 className="text-lg font-medium text-slate-800 mb-2">{product.name}</h3>
                  <p className="text-sm text-slate-600 font-light">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <div className="space-y-6">
            <p className="text-slate-600 font-light max-w-xl mx-auto">
              {locale === 'ja' 
                ? 'すべての商品は国産原料にこだわり、厳格な品質管理のもとで製造しています。'
                : 'All products are manufactured with carefully selected domestic ingredients under strict quality control.'
              }
            </p>
            <Link
              href="/goods"
              className="inline-flex items-center bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 font-medium tracking-wide hover:bg-blue-50 transition-colors duration-300 group"
            >
              {locale === 'ja' ? '商品一覧を見る' : 'View All Products'}
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}