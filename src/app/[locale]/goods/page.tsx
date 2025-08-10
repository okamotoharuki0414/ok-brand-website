'use client'

import ProductsHero from '@/components/ProductsHero'
import CategorySection from '@/components/CategorySection'
import CategoryNavigation from '@/components/CategoryNavigation'
import { useTranslations } from 'next-intl'

export default function GoodsPage() {
  const t = useTranslations('products')

  // 商品カテゴリデータ
  const categories = [
    {
      title: t('categories.mikan.title'),
      description: t('categories.mikan.description'),
      image: "/images/みかん商品.avif",
      products: [
        {
          name: t('categories.mikan.products.domesticCan.name'),
          description: t('categories.mikan.products.domesticCan.description'),
          image: "/images/国産みかん.avif",
          specs: {
            shape: t('categories.mikan.products.domesticCan.specs.shape'),
            package: t('categories.mikan.products.domesticCan.specs.package'),
            solidWeight: t('categories.mikan.products.domesticCan.specs.solidWeight'),
            totalWeight: t('categories.mikan.products.domesticCan.specs.totalWeight'),
            productDimensions: t('categories.mikan.products.domesticCan.specs.productDimensions'),
            caseDimensions: t('categories.mikan.products.domesticCan.specs.caseDimensions'),
            ingredients: t('categories.mikan.products.domesticCan.specs.ingredients'),
            additives: t('categories.mikan.products.domesticCan.specs.additives'),
            shelfLife: t('categories.mikan.products.domesticCan.specs.shelfLife'),
            origin: t('categories.mikan.products.domesticCan.specs.origin'),
            finalProcessing: t('categories.mikan.products.domesticCan.specs.finalProcessing'),
            janCode: t('categories.mikan.products.domesticCan.specs.janCode'),
            itfCode: t('categories.mikan.products.domesticCan.specs.itfCode')
          }
        },
        {
          name: t('categories.mikan.products.pouche1kg.name'),
          description: t('categories.mikan.products.pouche1kg.description'),
          image: "/images/中国産みかんパウチ.avif",
          specs: {
            shape: t('categories.mikan.products.pouche1kg.specs.shape'),
            package: t('categories.mikan.products.pouche1kg.specs.package'),
            solidWeight: t('categories.mikan.products.pouche1kg.specs.solidWeight'),
            shelfLife: t('categories.mikan.products.pouche1kg.specs.shelfLife'),
            origin: t('categories.mikan.products.pouche1kg.specs.origin')
          }
        },
        {
          name: t('categories.mikan.products.domesticPouch1kg.name'),
          description: t('categories.mikan.products.domesticPouch1kg.description'),
          image: "/images/みかん１キロパウチ.avif",
          specs: {
            shape: t('categories.mikan.products.domesticPouch1kg.specs.shape'),
            package: t('categories.mikan.products.domesticPouch1kg.specs.package'),
            solidWeight: t('categories.mikan.products.domesticPouch1kg.specs.solidWeight'),
            shelfLife: t('categories.mikan.products.domesticPouch1kg.specs.shelfLife'),
            origin: t('categories.mikan.products.domesticPouch1kg.specs.origin'),
            itemCode: t('categories.mikan.products.domesticPouch1kg.specs.itemCode')
          }
        },
        {
          name: t('categories.mikan.products.chineseCan.name'),
          description: t('categories.mikan.products.chineseCan.description'),
          image: "/images/中国産みかんかん.avif",
          specs: {
            shape: t('categories.mikan.products.chineseCan.specs.shape'),
            package: t('categories.mikan.products.chineseCan.specs.package'),
            solidWeight: t('categories.mikan.products.chineseCan.specs.solidWeight'),
            totalWeight: t('categories.mikan.products.chineseCan.specs.totalWeight'),
            shelfLife: t('categories.mikan.products.chineseCan.specs.shelfLife'),
            origin: t('categories.mikan.products.chineseCan.specs.origin')
          }
        }
      ]
    },
    {
      title: t('categories.peach.title'),
      description: t('categories.peach.description'),
      image: "/images/黄桃ダイス缶.avif",
      products: [
        {
          name: t('categories.peach.products.domesticCanDiced.name'),
          description: t('categories.peach.products.domesticCanDiced.description'),
          image: "/images/黄桃ダイス缶.avif",
          specs: {
            shape: "ダイス",
            package: "1号缶",
            solidWeight: "1700g",
            totalWeight: "3000g",
            shelfLife: "3年",
            origin: "国産"
          }
        },
        {
          name: t('categories.peach.products.domesticPouch1kg.name'),
          description: t('categories.peach.products.domesticPouch1kg.description'),
          image: "/images/【3211】国産黄桃ダイス1㎏.avif",
          specs: {
            shape: "ダイス",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "国産",
            itemCode: "3211"
          }
        },
        {
          name: t('categories.peach.products.greekPouch1kg.name'),
          description: t('categories.peach.products.greekPouch1kg.description'),
          image: "/images/【3201】黄桃ダイス1㎏.avif",
          specs: {
            shape: "ダイス",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "ギリシャ産",
            itemCode: "3201"
          }
        }
      ]
    },
    {
      title: t('categories.tomato.title'),
      description: t('categories.tomato.description'),
      image: "/images/トマトイメージ.avif",
      products: [
        {
          name: t('categories.tomato.products.domesticWhole.name'),
          description: t('categories.tomato.products.domesticWhole.description'),
          image: "/images/whole_tomato_canned.avif",
          specs: {
            shape: "ホール",
            package: "1号缶",
            solidWeight: "2300g",
            totalWeight: "3000g",
            shelfLife: "3年",
            origin: "国産"
          }
        },
        {
          name: t('categories.tomato.products.domesticDiced.name'),
          description: t('categories.tomato.products.domesticDiced.description'),
          image: "/images/diced_tomato_canned.avif",
          specs: {
            shape: "ダイス",
            package: "1号缶",
            solidWeight: "2300g",
            totalWeight: "3000g",
            shelfLife: "3年",
            origin: "国産"
          }
        },
        {
          name: t('categories.tomato.products.domesticPouch3kg.name'),
          description: t('categories.tomato.products.domesticPouch3kg.description'),
          image: "/images/diced_tomato_pouch.avif",
          specs: {
            shape: "ダイス",
            package: "3kgパウチ",
            solidWeight: "3kg",
            shelfLife: "2年",
            origin: "国産"
          }
        }
      ]
    },
    {
      title: t('categories.mushroom.title'),
      description: t('categories.mushroom.description'),
      image: "/images/マッシュルーム.avif",
      products: [
        {
          name: t('categories.mushroom.products.domesticSlicedPouch.name'),
          description: t('categories.mushroom.products.domesticSlicedPouch.description'),
          image: "/images/日付修正【3711】国産マッシュルームスライス1㎏.avif",
          specs: {
            shape: "スライス",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "国産",
            itemCode: "3711"
          }
        },
        {
          name: t('categories.mushroom.products.chineseSlicedCan.name'),
          description: t('categories.mushroom.products.chineseSlicedCan.description'),
          image: "/images/mushroom_canned_china.avif",
          specs: {
            shape: "スライス",
            package: "1号缶",
            solidWeight: "1700g",
            totalWeight: "3000g",
            shelfLife: "3年",
            origin: "中国産"
          }
        },
        {
          name: t('categories.mushroom.products.europeanSlicedPouch.name'),
          description: t('categories.mushroom.products.europeanSlicedPouch.description'),
          image: "/images/日付修正【3707】マッシュルームスライス(ヨーロッパ原料)1㎏.avif",
          specs: {
            shape: "スライス",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "オランダ産",
            itemCode: "3707"
          }
        },
        {
          name: t('categories.mushroom.products.chineseSlicedPouch.name'),
          description: t('categories.mushroom.products.chineseSlicedPouch.description'),
          image: "/images/mushroom_pouch_china.avif",
          specs: {
            shape: "スライス",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "中国産"
          }
        }
      ]
    },
    {
      title: t('categories.pineapple.title'),
      description: t('categories.pineapple.description'),
      image: "/images/【3104】パインアップルチビット1㎏.avif",
      products: [
        {
          name: t('categories.pineapple.products.tidbitsPouch1kg.name'),
          description: t('categories.pineapple.products.tidbitsPouch1kg.description'),
          image: "/images/【3104】パインアップルチビット1㎏.avif",
          specs: {
            shape: "チビット",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "タイ産",
            itemCode: "3104"
          }
        }
      ]
    },
    {
      title: t('categories.mixedFruits.title'),
      description: t('categories.mixedFruits.description'),
      image: "/images/日付修正【3502】ミックスフルーツ1㎏.avif",
      products: [
        {
          name: t('categories.mixedFruits.products.mixedPouch1kg.name'),
          description: t('categories.mixedFruits.products.mixedPouch1kg.description'),
          image: "/images/日付修正【3502】ミックスフルーツ1㎏.avif",
          specs: {
            shape: "ミックス",
            package: "1kgパウチ",
            solidWeight: "1kg",
            shelfLife: "2年",
            origin: "タイ産・ギリシャ産・国産",
            itemCode: "3502"
          }
        }
      ]
    },
    {
      title: t('categories.mikanPulp.title'),
      description: t('categories.mikanPulp.description'),
      image: "/images/orange_pulp.avif",
      products: [
        {
          name: t('categories.mikanPulp.products.domesticPulpCan.name'),
          description: t('categories.mikanPulp.products.domesticPulpCan.description'),
          image: "/images/orange_pulp.avif",
          specs: {
            shape: "さのう",
            package: "5号缶",
            solidWeight: "4kg",
            totalWeight: "5kg",
            shelfLife: "3年",
            origin: "国産"
          }
        }
      ]
    },
    {
      title: t('categories.frozen.title'),
      description: t('categories.frozen.description'),
      image: "/images/冷凍みかんイメージ_edited.avif",
      products: [
        {
          name: t('categories.frozen.products.frozenMikan1kg.name'),
          description: t('categories.frozen.products.frozenMikan1kg.description'),
          image: "/images/冷凍みかんイメージ_edited.avif",
          specs: {
            shape: "粒",
            package: "冷凍1kg",
            productSize: "1kg",
            shelfLife: "2年(-18℃以下)",
            origin: "国産"
          }
        },
        {
          name: t('categories.frozen.products.chillMikan110g.name'),
          description: t('categories.frozen.products.chillMikan110g.description'),
          image: "/images/【2017】ひんやりみかん110ｇ.avif",
          specs: {
            shape: "粒",
            package: "冷凍110g",
            productSize: "110g",
            shelfLife: "2年(-18℃以下)",
            origin: "国産",
            itemCode: "2017"
          }
        },
        {
          name: t('categories.frozen.products.frozenPeach1kg.name'),
          description: t('categories.frozen.products.frozenPeach1kg.description'),
          image: "/images/frozen_peach.avif",
          specs: {
            shape: "ダイス",
            package: "冷凍1kg",
            productSize: "1kg",
            shelfLife: "2年(-18℃以下)",
            origin: "国産"
          }
        }
      ]
    }
  ]

  return (
    <div>
      <ProductsHero />
      
      <div className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <CategoryNavigation categories={categories.map(cat => cat.title)} />
          
          {categories.map((category, index) => (
            <CategorySection
              key={index}
              title={category.title}
              description={category.description}
              products={category.products}
              image={category.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}