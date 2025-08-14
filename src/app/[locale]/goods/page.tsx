'use client'

import ProductsHero from '@/components/ProductsHero'
import CategorySection from '@/components/CategorySection'
import CategoryNavigation from '@/components/CategoryNavigation'
import ScrollReveal from '@/components/ScrollReveal'
import StaggerReveal from '@/components/StaggerReveal'
import { useTranslations, useLocale } from 'next-intl'
import { normalizeImageUrl } from '@/utils/imageUtils'

export default function GoodsPage() {
  const locale = useLocale()
  const t = useTranslations('products')
  const tSpecs = useTranslations('specs')

  // Product category data
  const categories = [
    {
      title: t('categories.mikan.title'),
      description: t('categories.mikan.description'),
      image: normalizeImageUrl("/images/みかん画像２.avif"),
      products: [
        {
          name: t('categories.mikan.products.domesticCan.name'),
          description: t('categories.mikan.products.domesticCan.description'),
          image: normalizeImageUrl("/images/国産みかん.avif"),
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
          image: normalizeImageUrl("/images/中国産みかんパウチ.avif"),
          specs: {
            shape: t('categories.mikan.products.pouche1kg.specs.shape'),
            package: t('categories.mikan.products.pouche1kg.specs.package'),
            solidWeight: t('categories.mikan.products.pouche1kg.specs.solidWeight'),
            totalWeight: t('categories.mikan.products.pouche1kg.specs.totalWeight'),
            productDimensions: t('categories.mikan.products.pouche1kg.specs.productDimensions'),
            caseDimensions: t('categories.mikan.products.pouche1kg.specs.caseDimensions'),
            ingredients: t('categories.mikan.products.pouche1kg.specs.ingredients'),
            additives: t('categories.mikan.products.pouche1kg.specs.additives'),
            shelfLife: t('categories.mikan.products.pouche1kg.specs.shelfLife'),
            origin: t('categories.mikan.products.pouche1kg.specs.origin'),
            finalProcessing: t('categories.mikan.products.pouche1kg.specs.finalProcessing'),
            janCode: t('categories.mikan.products.pouche1kg.specs.janCode'),
            itfCode: t('categories.mikan.products.pouche1kg.specs.itfCode')
          }
        },
        {
          name: t('categories.mikan.products.domesticPouch1kg.name'),
          description: t('categories.mikan.products.domesticPouch1kg.description'),
          image: normalizeImageUrl("/images/みかん１キロパウチ.avif"),
          specs: {
            shape: t('categories.mikan.products.domesticPouch1kg.specs.shape'),
            package: t('categories.mikan.products.domesticPouch1kg.specs.package'),
            solidWeight: t('categories.mikan.products.domesticPouch1kg.specs.solidWeight'),
            totalWeight: t('categories.mikan.products.domesticPouch1kg.specs.totalWeight'),
            productDimensions: t('categories.mikan.products.domesticPouch1kg.specs.productDimensions'),
            caseDimensions: t('categories.mikan.products.domesticPouch1kg.specs.caseDimensions'),
            ingredients: t('categories.mikan.products.domesticPouch1kg.specs.ingredients'),
            additives: t('categories.mikan.products.domesticPouch1kg.specs.additives'),
            shelfLife: t('categories.mikan.products.domesticPouch1kg.specs.shelfLife'),
            origin: t('categories.mikan.products.domesticPouch1kg.specs.origin'),
            finalProcessing: t('categories.mikan.products.domesticPouch1kg.specs.finalProcessing'),
            itemCode: t('categories.mikan.products.domesticPouch1kg.specs.itemCode'),
            janCode: t('categories.mikan.products.domesticPouch1kg.specs.janCode'),
            itfCode: t('categories.mikan.products.domesticPouch1kg.specs.itfCode')
          }
        },
        {
          name: t('categories.mikan.products.chineseCan.name'),
          description: t('categories.mikan.products.chineseCan.description'),
          image: normalizeImageUrl("/images/中国産みかんかん.avif"),
          specs: {
            shape: t('categories.mikan.products.chineseCan.specs.shape'),
            package: t('categories.mikan.products.chineseCan.specs.package'),
            solidWeight: t('categories.mikan.products.chineseCan.specs.solidWeight'),
            totalWeight: t('categories.mikan.products.chineseCan.specs.totalWeight'),
            productDimensions: t('categories.mikan.products.chineseCan.specs.productDimensions'),
            caseDimensions: t('categories.mikan.products.chineseCan.specs.caseDimensions'),
            ingredients: t('categories.mikan.products.chineseCan.specs.ingredients'),
            additives: t('categories.mikan.products.chineseCan.specs.additives'),
            shelfLife: t('categories.mikan.products.chineseCan.specs.shelfLife'),
            origin: t('categories.mikan.products.chineseCan.specs.origin'),
            finalProcessing: t('categories.mikan.products.chineseCan.specs.finalProcessing'),
            janCode: t('categories.mikan.products.chineseCan.specs.janCode'),
            itfCode: t('categories.mikan.products.chineseCan.specs.itfCode')
          }
        }
      ]
    },
    {
      title: t('categories.peach.title'),
      description: t('categories.peach.description'),
      image: normalizeImageUrl("/images/黄桃ダイス缶.avif"),
      products: [
        {
          name: t('categories.peach.products.domesticCanDiced.name'),
          description: t('categories.peach.products.domesticCanDiced.description'),
          image: normalizeImageUrl("/images/黄桃ダイス缶.avif"),
          specs: {
            shape: t('categories.peach.products.domesticCanDiced.specs.shape'),
            package: t('categories.peach.products.domesticCanDiced.specs.package'),
            solidWeight: t('categories.peach.products.domesticCanDiced.specs.solidWeight'),
            totalWeight: t('categories.peach.products.domesticCanDiced.specs.totalWeight'),
            productDimensions: t('categories.peach.products.domesticCanDiced.specs.productDimensions'),
            caseDimensions: t('categories.peach.products.domesticCanDiced.specs.caseDimensions'),
            ingredients: t('categories.peach.products.domesticCanDiced.specs.ingredients'),
            additives: t('categories.peach.products.domesticCanDiced.specs.additives'),
            shelfLife: t('categories.peach.products.domesticCanDiced.specs.shelfLife'),
            origin: t('categories.peach.products.domesticCanDiced.specs.origin'),
            finalProcessing: t('categories.peach.products.domesticCanDiced.specs.finalProcessing'),
            janCode: t('categories.peach.products.domesticCanDiced.specs.janCode'),
            itfCode: t('categories.peach.products.domesticCanDiced.specs.itfCode')
          }
        },
        {
          name: t('categories.peach.products.domesticPouch1kg.name'),
          description: t('categories.peach.products.domesticPouch1kg.description'),
          image: normalizeImageUrl("/images/【3211】国産黄桃ダイス1㎏.avif"),
          specs: {
            shape: t('categories.peach.products.domesticPouch1kg.specs.shape'),
            package: t('categories.peach.products.domesticPouch1kg.specs.package'),
            solidWeight: t('categories.peach.products.domesticPouch1kg.specs.solidWeight'),
            totalWeight: t('categories.peach.products.domesticPouch1kg.specs.totalWeight'),
            productDimensions: t('categories.peach.products.domesticPouch1kg.specs.productDimensions'),
            caseDimensions: t('categories.peach.products.domesticPouch1kg.specs.caseDimensions'),
            ingredients: t('categories.peach.products.domesticPouch1kg.specs.ingredients'),
            additives: t('categories.peach.products.domesticPouch1kg.specs.additives'),
            shelfLife: t('categories.peach.products.domesticPouch1kg.specs.shelfLife'),
            origin: t('categories.peach.products.domesticPouch1kg.specs.origin'),
            finalProcessing: t('categories.peach.products.domesticPouch1kg.specs.finalProcessing')
          }
        },
        {
          name: t('categories.peach.products.greekPouch1kg.name'),
          description: t('categories.peach.products.greekPouch1kg.description'),
          image: normalizeImageUrl("/images/【3201】黄桃ダイス1㎏.avif"),
          specs: {
            shape: t('categories.peach.products.greekPouch1kg.specs.shape'),
            package: t('categories.peach.products.greekPouch1kg.specs.package'),
            solidWeight: t('categories.peach.products.greekPouch1kg.specs.solidWeight'),
            totalWeight: t('categories.peach.products.greekPouch1kg.specs.totalWeight'),
            productDimensions: t('categories.peach.products.greekPouch1kg.specs.productDimensions'),
            caseDimensions: t('categories.peach.products.greekPouch1kg.specs.caseDimensions'),
            ingredients: t('categories.peach.products.greekPouch1kg.specs.ingredients'),
            additives: t('categories.peach.products.greekPouch1kg.specs.additives'),
            shelfLife: t('categories.peach.products.greekPouch1kg.specs.shelfLife'),
            origin: t('categories.peach.products.greekPouch1kg.specs.origin'),
            finalProcessing: t('categories.peach.products.greekPouch1kg.specs.finalProcessing')
          }
        }
      ]
    },
    {
      title: t('categories.tomato.title'),
      description: t('categories.tomato.description'),
      image: normalizeImageUrl("/images/トマトイメージ.avif"),
      products: [
        {
          name: t('categories.tomato.products.domesticWhole.name'),
          description: t('categories.tomato.products.domesticWhole.description'),
          image: normalizeImageUrl("/images/whole_tomato_canned.avif"),
          specs: {
            shape: t('categories.tomato.products.domesticWhole.specs.shape'),
            package: t('categories.tomato.products.domesticWhole.specs.package'),
            solidWeight: t('categories.tomato.products.domesticWhole.specs.solidWeight'),
            totalWeight: t('categories.tomato.products.domesticWhole.specs.totalWeight'),
            productDimensions: t('categories.tomato.products.domesticWhole.specs.productDimensions'),
            caseDimensions: t('categories.tomato.products.domesticWhole.specs.caseDimensions'),
            ingredients: t('categories.tomato.products.domesticWhole.specs.ingredients'),
            additives: t('categories.tomato.products.domesticWhole.specs.additives'),
            shelfLife: t('categories.tomato.products.domesticWhole.specs.shelfLife'),
            origin: t('categories.tomato.products.domesticWhole.specs.origin'),
            finalProcessing: t('categories.tomato.products.domesticWhole.specs.finalProcessing'),
            janCode: t('categories.tomato.products.domesticWhole.specs.janCode'),
            itfCode: t('categories.tomato.products.domesticWhole.specs.itfCode')
          }
        },
        {
          name: t('categories.tomato.products.domesticDiced.name'),
          description: t('categories.tomato.products.domesticDiced.description'),
          image: normalizeImageUrl("/images/diced_tomato_canned.avif"),
          specs: {
            shape: t('categories.tomato.products.domesticDiced.specs.shape'),
            package: t('categories.tomato.products.domesticDiced.specs.package'),
            solidWeight: t('categories.tomato.products.domesticDiced.specs.solidWeight'),
            totalWeight: t('categories.tomato.products.domesticDiced.specs.totalWeight'),
            productDimensions: t('categories.tomato.products.domesticDiced.specs.productDimensions'),
            caseDimensions: t('categories.tomato.products.domesticDiced.specs.caseDimensions'),
            ingredients: t('categories.tomato.products.domesticDiced.specs.ingredients'),
            additives: t('categories.tomato.products.domesticDiced.specs.additives'),
            shelfLife: t('categories.tomato.products.domesticDiced.specs.shelfLife'),
            origin: t('categories.tomato.products.domesticDiced.specs.origin'),
            finalProcessing: t('categories.tomato.products.domesticDiced.specs.finalProcessing'),
            janCode: t('categories.tomato.products.domesticDiced.specs.janCode'),
            itfCode: t('categories.tomato.products.domesticDiced.specs.itfCode')
          }
        },
        {
          name: t('categories.tomato.products.domesticPouch3kg.name'),
          description: t('categories.tomato.products.domesticPouch3kg.description'),
          image: normalizeImageUrl("/images/diced_tomato_pouch.avif"),
          specs: {
            shape: t('categories.tomato.products.domesticPouch3kg.specs.shape'),
            package: t('categories.tomato.products.domesticPouch3kg.specs.package'),
            contentVolume: t('categories.tomato.products.domesticPouch3kg.specs.contentVolume'),
            productDimensions: t('categories.tomato.products.domesticPouch3kg.specs.productDimensions'),
            caseDimensions: t('categories.tomato.products.domesticPouch3kg.specs.caseDimensions'),
            ingredients: t('categories.tomato.products.domesticPouch3kg.specs.ingredients'),
            additives: t('categories.tomato.products.domesticPouch3kg.specs.additives'),
            shelfLife: t('categories.tomato.products.domesticPouch3kg.specs.shelfLife'),
            origin: t('categories.tomato.products.domesticPouch3kg.specs.origin'),
            finalProcessing: t('categories.tomato.products.domesticPouch3kg.specs.finalProcessing'),
            janCode: t('categories.tomato.products.domesticPouch3kg.specs.janCode'),
            itfCode: t('categories.tomato.products.domesticPouch3kg.specs.itfCode')
          }
        }
      ]
    },
    {
      title: t('categories.mushroom.title'),
      description: t('categories.mushroom.description'),
      image: normalizeImageUrl("/images/マッシュルーム.avif"),
      products: [
        {
          name: t('categories.mushroom.products.domesticSlicedPouch.name'),
          description: t('categories.mushroom.products.domesticSlicedPouch.description'),
          image: normalizeImageUrl("/images/日付修正【3711】国産マッシュルームスライス1㎏.avif"),
          specs: {
            shape: t('categories.mushroom.products.domesticSlicedPouch.specs.shape'),
            package: t('categories.mushroom.products.domesticSlicedPouch.specs.package'),
            solidWeight: t('categories.mushroom.products.domesticSlicedPouch.specs.solidWeight'),
            totalWeight: t('categories.mushroom.products.domesticSlicedPouch.specs.totalWeight'),
            productDimensions: t('categories.mushroom.products.domesticSlicedPouch.specs.productDimensions'),
            caseDimensions: t('categories.mushroom.products.domesticSlicedPouch.specs.caseDimensions'),
            ingredients: t('categories.mushroom.products.domesticSlicedPouch.specs.ingredients'),
            additives: t('categories.mushroom.products.domesticSlicedPouch.specs.additives'),
            shelfLife: t('categories.mushroom.products.domesticSlicedPouch.specs.shelfLife'),
            origin: t('categories.mushroom.products.domesticSlicedPouch.specs.origin'),
            finalProcessing: t('categories.mushroom.products.domesticSlicedPouch.specs.finalProcessing'),
            itemCode: t('categories.mushroom.products.domesticSlicedPouch.specs.itemCode'),
            janCode: t('categories.mushroom.products.domesticSlicedPouch.specs.janCode'),
            itfCode: t('categories.mushroom.products.domesticSlicedPouch.specs.itfCode')
          }
        },
        {
          name: t('categories.mushroom.products.chineseSlicedCan.name'),
          description: t('categories.mushroom.products.chineseSlicedCan.description'),
          image: normalizeImageUrl("/images/mushroom_canned_china.avif"),
          specs: {
            shape: t('categories.mushroom.products.chineseSlicedCan.specs.shape'),
            package: t('categories.mushroom.products.chineseSlicedCan.specs.package'),
            solidWeight: t('categories.mushroom.products.chineseSlicedCan.specs.solidWeight'),
            totalWeight: t('categories.mushroom.products.chineseSlicedCan.specs.totalWeight'),
            productDimensions: t('categories.mushroom.products.chineseSlicedCan.specs.productDimensions'),
            caseDimensions: t('categories.mushroom.products.chineseSlicedCan.specs.caseDimensions'),
            ingredients: t('categories.mushroom.products.chineseSlicedCan.specs.ingredients'),
            additives: t('categories.mushroom.products.chineseSlicedCan.specs.additives'),
            shelfLife: t('categories.mushroom.products.chineseSlicedCan.specs.shelfLife'),
            origin: t('categories.mushroom.products.chineseSlicedCan.specs.origin'),
            finalProcessing: t('categories.mushroom.products.chineseSlicedCan.specs.finalProcessing'),
            janCode: t('categories.mushroom.products.chineseSlicedCan.specs.janCode'),
            itfCode: t('categories.mushroom.products.chineseSlicedCan.specs.itfCode')
          }
        },
        {
          name: t('categories.mushroom.products.europeanSlicedPouch.name'),
          description: t('categories.mushroom.products.europeanSlicedPouch.description'),
          image: normalizeImageUrl("/images/日付修正【3707】マッシュルームスライス(ヨーロッパ原料)1㎏.avif"),
          specs: {
            shape: t('categories.mushroom.products.europeanSlicedPouch.specs.shape'),
            package: t('categories.mushroom.products.europeanSlicedPouch.specs.package'),
            solidWeight: t('categories.mushroom.products.europeanSlicedPouch.specs.solidWeight'),
            totalWeight: t('categories.mushroom.products.europeanSlicedPouch.specs.totalWeight'),
            productDimensions: t('categories.mushroom.products.europeanSlicedPouch.specs.productDimensions'),
            caseDimensions: t('categories.mushroom.products.europeanSlicedPouch.specs.caseDimensions'),
            ingredients: t('categories.mushroom.products.europeanSlicedPouch.specs.ingredients'),
            additives: t('categories.mushroom.products.europeanSlicedPouch.specs.additives'),
            shelfLife: t('categories.mushroom.products.europeanSlicedPouch.specs.shelfLife'),
            origin: t('categories.mushroom.products.europeanSlicedPouch.specs.origin'),
            finalProcessing: t('categories.mushroom.products.europeanSlicedPouch.specs.finalProcessing'),
            itemCode: t('categories.mushroom.products.europeanSlicedPouch.specs.itemCode'),
            janCode: t('categories.mushroom.products.europeanSlicedPouch.specs.janCode'),
            itfCode: t('categories.mushroom.products.europeanSlicedPouch.specs.itfCode')
          }
        },
        {
          name: t('categories.mushroom.products.chineseSlicedPouch.name'),
          description: t('categories.mushroom.products.chineseSlicedPouch.description'),
          image: normalizeImageUrl("/images/mushroom_pouch_china.avif"),
          specs: {
            shape: t('categories.mushroom.products.chineseSlicedPouch.specs.shape'),
            package: t('categories.mushroom.products.chineseSlicedPouch.specs.package'),
            solidWeight: t('categories.mushroom.products.chineseSlicedPouch.specs.solidWeight'),
            totalWeight: t('categories.mushroom.products.chineseSlicedPouch.specs.totalWeight'),
            productDimensions: t('categories.mushroom.products.chineseSlicedPouch.specs.productDimensions'),
            caseDimensions: t('categories.mushroom.products.chineseSlicedPouch.specs.caseDimensions'),
            ingredients: t('categories.mushroom.products.chineseSlicedPouch.specs.ingredients'),
            additives: t('categories.mushroom.products.chineseSlicedPouch.specs.additives'),
            shelfLife: t('categories.mushroom.products.chineseSlicedPouch.specs.shelfLife'),
            origin: t('categories.mushroom.products.chineseSlicedPouch.specs.origin'),
            finalProcessing: t('categories.mushroom.products.chineseSlicedPouch.specs.finalProcessing'),
            janCode: t('categories.mushroom.products.chineseSlicedPouch.specs.janCode'),
            itfCode: t('categories.mushroom.products.chineseSlicedPouch.specs.itfCode')
          }
        }
      ]
    },
    {
      title: t('categories.pineapple.title'),
      description: t('categories.pineapple.description'),
      image: normalizeImageUrl("/images/【3104】パインアップルチビット1㎏.avif"),
      products: [
        {
          name: t('categories.pineapple.products.tidbitsPouch1kg.name'),
          description: t('categories.pineapple.products.tidbitsPouch1kg.description'),
          image: normalizeImageUrl("/images/【3104】パインアップルチビット1㎏.avif"),
          specs: {
            shape: t('categories.pineapple.products.tidbitsPouch1kg.specs.shape'),
            package: t('categories.pineapple.products.tidbitsPouch1kg.specs.package'),
            solidWeight: t('categories.pineapple.products.tidbitsPouch1kg.specs.solidWeight'),
            totalWeight: t('categories.pineapple.products.tidbitsPouch1kg.specs.totalWeight'),
            productDimensions: t('categories.pineapple.products.tidbitsPouch1kg.specs.productDimensions'),
            caseDimensions: t('categories.pineapple.products.tidbitsPouch1kg.specs.caseDimensions'),
            ingredients: t('categories.pineapple.products.tidbitsPouch1kg.specs.ingredients'),
            additives: t('categories.pineapple.products.tidbitsPouch1kg.specs.additives'),
            shelfLife: t('categories.pineapple.products.tidbitsPouch1kg.specs.shelfLife'),
            origin: t('categories.pineapple.products.tidbitsPouch1kg.specs.origin'),
            finalProcessing: t('categories.pineapple.products.tidbitsPouch1kg.specs.finalProcessing'),
            itemCode: t('categories.pineapple.products.tidbitsPouch1kg.specs.itemCode'),
            janCode: t('categories.pineapple.products.tidbitsPouch1kg.specs.janCode'),
            itfCode: t('categories.pineapple.products.tidbitsPouch1kg.specs.itfCode')
          }
        }
      ]
    },
    {
      title: t('categories.mixedFruits.title'),
      description: t('categories.mixedFruits.description'),
      image: normalizeImageUrl("/images/日付修正【3502】ミックスフルーツ1㎏.avif"),
      products: [
        {
          name: t('categories.mixedFruits.products.mixedPouch1kg.name'),
          description: t('categories.mixedFruits.products.mixedPouch1kg.description'),
          image: normalizeImageUrl("/images/日付修正【3502】ミックスフルーツ1㎏.avif"),
          specs: {
            shape: t('categories.mixedFruits.products.mixedPouch1kg.specs.shape'),
            package: t('categories.mixedFruits.products.mixedPouch1kg.specs.package'),
            solidWeight: t('categories.mixedFruits.products.mixedPouch1kg.specs.solidWeight'),
            totalWeight: t('categories.mixedFruits.products.mixedPouch1kg.specs.totalWeight'),
            productDimensions: t('categories.mixedFruits.products.mixedPouch1kg.specs.productDimensions'),
            caseDimensions: t('categories.mixedFruits.products.mixedPouch1kg.specs.caseDimensions'),
            ingredients: t('categories.mixedFruits.products.mixedPouch1kg.specs.ingredients'),
            additives: t('categories.mixedFruits.products.mixedPouch1kg.specs.additives'),
            shelfLife: t('categories.mixedFruits.products.mixedPouch1kg.specs.shelfLife'),
            origin: t('categories.mixedFruits.products.mixedPouch1kg.specs.origin'),
            finalProcessing: t('categories.mixedFruits.products.mixedPouch1kg.specs.finalProcessing'),
            itemCode: t('categories.mixedFruits.products.mixedPouch1kg.specs.itemCode'),
            janCode: t('categories.mixedFruits.products.mixedPouch1kg.specs.janCode'),
            itfCode: t('categories.mixedFruits.products.mixedPouch1kg.specs.itfCode')
          }
        }
      ]
    },
    {
      title: t('categories.mikanPulp.title'),
      description: t('categories.mikanPulp.description'),
      image: normalizeImageUrl("/images/orange_pulp.avif"),
      products: [
        {
          name: t('categories.mikanPulp.products.domesticPulpCan.name'),
          description: t('categories.mikanPulp.products.domesticPulpCan.description'),
          image: normalizeImageUrl("/images/orange_pulp.avif"),
          specs: {
            shape: t('categories.mikanPulp.products.domesticPulpCan.specs.shape'),
            package: t('categories.mikanPulp.products.domesticPulpCan.specs.package'),
            solidWeight: t('categories.mikanPulp.products.domesticPulpCan.specs.solidWeight'),
            totalWeight: t('categories.mikanPulp.products.domesticPulpCan.specs.totalWeight'),
            productDimensions: t('categories.mikanPulp.products.domesticPulpCan.specs.productDimensions'),
            caseDimensions: t('categories.mikanPulp.products.domesticPulpCan.specs.caseDimensions'),
            ingredients: t('categories.mikanPulp.products.domesticPulpCan.specs.ingredients'),
            additives: t('categories.mikanPulp.products.domesticPulpCan.specs.additives'),
            shelfLife: t('categories.mikanPulp.products.domesticPulpCan.specs.shelfLife'),
            origin: t('categories.mikanPulp.products.domesticPulpCan.specs.origin'),
            finalProcessing: t('categories.mikanPulp.products.domesticPulpCan.specs.finalProcessing'),
            janCode: t('categories.mikanPulp.products.domesticPulpCan.specs.janCode'),
            itfCode: t('categories.mikanPulp.products.domesticPulpCan.specs.itfCode')
          }
        }
      ]
    },
    {
      title: t('categories.frozen.title'),
      description: t('categories.frozen.description'),
      image: normalizeImageUrl("/images/冷凍みかんイメージ_edited.avif"),
      products: [
        {
          name: t('categories.frozen.products.frozenMikan1kg.name'),
          description: t('categories.frozen.products.frozenMikan1kg.description'),
          image: normalizeImageUrl("/images/冷凍みかんイメージ_edited.avif"),
          specs: {
            shape: t('categories.frozen.products.frozenMikan1kg.specs.shape'),
            package: t('categories.frozen.products.frozenMikan1kg.specs.package'),
            contentVolume: t('categories.frozen.products.frozenMikan1kg.specs.contentVolume'),
            productDimensions: t('categories.frozen.products.frozenMikan1kg.specs.productDimensions'),
            caseDimensions: t('categories.frozen.products.frozenMikan1kg.specs.caseDimensions'),
            ingredients: t('categories.frozen.products.frozenMikan1kg.specs.ingredients'),
            additives: t('categories.frozen.products.frozenMikan1kg.specs.additives'),
            shelfLife: t('categories.frozen.products.frozenMikan1kg.specs.shelfLife'),
            origin: t('categories.frozen.products.frozenMikan1kg.specs.origin'),
            finalProcessing: t('categories.frozen.products.frozenMikan1kg.specs.finalProcessing'),
            janCode: t('categories.frozen.products.frozenMikan1kg.specs.janCode'),
            itfCode: t('categories.frozen.products.frozenMikan1kg.specs.itfCode')
          }
        },
        {
          name: t('categories.frozen.products.chillMikan110g.name'),
          description: t('categories.frozen.products.chillMikan110g.description'),
          image: normalizeImageUrl("/images/【2017】ひんやりみかん110ｇ.avif"),
          specs: {
            shape: t('categories.frozen.products.chillMikan110g.specs.shape'),
            package: t('categories.frozen.products.chillMikan110g.specs.package'),
            contentVolume: t('categories.frozen.products.chillMikan110g.specs.contentVolume'),
            productDimensions: t('categories.frozen.products.chillMikan110g.specs.productDimensions'),
            caseDimensions: t('categories.frozen.products.chillMikan110g.specs.caseDimensions'),
            ingredients: t('categories.frozen.products.chillMikan110g.specs.ingredients'),
            additives: t('categories.frozen.products.chillMikan110g.specs.additives'),
            shelfLife: t('categories.frozen.products.chillMikan110g.specs.shelfLife'),
            origin: t('categories.frozen.products.chillMikan110g.specs.origin'),
            finalProcessing: t('categories.frozen.products.chillMikan110g.specs.finalProcessing'),
            itemCode: t('categories.frozen.products.chillMikan110g.specs.itemCode'),
            janCode: t('categories.frozen.products.chillMikan110g.specs.janCode'),
            itfCode: t('categories.frozen.products.chillMikan110g.specs.itfCode')
          }
        },
        {
          name: t('categories.frozen.products.frozenPeach1kg.name'),
          description: t('categories.frozen.products.frozenPeach1kg.description'),
          image: normalizeImageUrl("/images/frozen_peach.avif"),
          specs: {
            shape: t('categories.frozen.products.frozenPeach1kg.specs.shape'),
            package: t('categories.frozen.products.frozenPeach1kg.specs.package'),
            contentVolume: t('categories.frozen.products.frozenPeach1kg.specs.contentVolume'),
            productDimensions: t('categories.frozen.products.frozenPeach1kg.specs.productDimensions'),
            caseDimensions: t('categories.frozen.products.frozenPeach1kg.specs.caseDimensions'),
            ingredients: t('categories.frozen.products.frozenPeach1kg.specs.ingredients'),
            additives: t('categories.frozen.products.frozenPeach1kg.specs.additives'),
            shelfLife: t('categories.frozen.products.frozenPeach1kg.specs.shelfLife'),
            origin: t('categories.frozen.products.frozenPeach1kg.specs.origin'),
            finalProcessing: t('categories.frozen.products.frozenPeach1kg.specs.finalProcessing'),
            janCode: t('categories.frozen.products.frozenPeach1kg.specs.janCode'),
            itfCode: t('categories.frozen.products.frozenPeach1kg.specs.itfCode')
          }
        },
        {
          name: t('categories.frozen.products.frozenLemon700g.name'),
          description: t('categories.frozen.products.frozenLemon700g.description'),
          image: normalizeImageUrl("/images/【2015】OK冷凍フルーツ国産レモン輪切り700ｇ_edited.avif"),
          specs: {
            shape: t('categories.frozen.products.frozenLemon700g.specs.shape'),
            package: t('categories.frozen.products.frozenLemon700g.specs.package'),
            contentVolume: t('categories.frozen.products.frozenLemon700g.specs.contentVolume'),
            productDimensions: t('categories.frozen.products.frozenLemon700g.specs.productDimensions'),
            caseDimensions: t('categories.frozen.products.frozenLemon700g.specs.caseDimensions'),
            ingredients: t('categories.frozen.products.frozenLemon700g.specs.ingredients'),
            additives: t('categories.frozen.products.frozenLemon700g.specs.additives'),
            shelfLife: t('categories.frozen.products.frozenLemon700g.specs.shelfLife'),
            origin: t('categories.frozen.products.frozenLemon700g.specs.origin'),
            finalProcessing: t('categories.frozen.products.frozenLemon700g.specs.finalProcessing'),
            janCode: t('categories.frozen.products.frozenLemon700g.specs.janCode'),
            itfCode: t('categories.frozen.products.frozenLemon700g.specs.itfCode')
          }
        }
      ]
    }
  ]

  return (
    <div className="relative overflow-hidden">
      {/* 背景の動的装飾 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-slate-100/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-10 w-80 h-80 bg-slate-200/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        <div className="absolute top-2/3 right-1/3 w-64 h-64 bg-slate-150/25 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <ProductsHero />
      
      <div className="relative py-24 px-4 bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto relative z-10">
          <CategoryNavigation categories={categories.map(cat => cat.title)} />
          
          <ScrollReveal direction="up" delay={100}>
            <div className="mt-16 mb-12 text-center">
              <div className="inline-flex items-center space-x-4 bg-white/80 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg border border-slate-200/50">
                <div className="w-3 h-3 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full animate-pulse"></div>
                <h2 className="text-2xl font-bold text-slate-800 tracking-wide">{t('productCategories')}</h2>
                <div className="w-3 h-3 bg-gradient-to-r from-slate-500 to-slate-600 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="mt-6 max-w-3xl mx-auto">
                <p className="text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: t('qualityHistoryDescription') }} />
              </div>
            </div>
          </ScrollReveal>
          
          <StaggerReveal staggerDelay={300} baseDelay={200} className="space-y-32">
            {categories.map((category, index) => {
            // カテゴリごとのIDを設定
            const categoryTitleLower = category.title.toLowerCase();
            let categoryId = '';
            if (categoryTitleLower.includes('mandarin') || categoryTitleLower.includes('みかん')) {
              categoryId = 'mikan';
            } else if (categoryTitleLower.includes('peach') || categoryTitleLower.includes('黄桃')) {
              categoryId = 'peach';
            } else if (categoryTitleLower.includes('frozen') || categoryTitleLower.includes('冷凍')) {
              categoryId = 'frozen';
            } else if (categoryTitleLower.includes('tomato') || categoryTitleLower.includes('トマト')) {
              categoryId = 'tomato';
            } else if (categoryTitleLower.includes('mushroom') || categoryTitleLower.includes('マッシュルーム')) {
              categoryId = 'mushroom';
            } else if (categoryTitleLower.includes('pineapple') || categoryTitleLower.includes('パインアップル')) {
              categoryId = 'pineapple';
            } else if (categoryTitleLower.includes('mixed') || categoryTitleLower.includes('ミックス')) {
              categoryId = 'mixed';
            } else if (categoryTitleLower.includes('pulp') || categoryTitleLower.includes('パルプ')) {
              categoryId = 'pulp';
            }

            return (
              <div key={index} id={categoryId}>
                <CategorySection
                  title={category.title}
                  description={category.description}
                  products={category.products}
                  image={category.image}
                />
              </div>
            );
          })}
          </StaggerReveal>

          {/* 最終セクション - お問い合わせCTA */}
          <ScrollReveal direction="up" delay={100}>
            <div className="mt-32 text-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100/50 via-white/80 to-slate-100/50 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 border border-slate-200/50 shadow-2xl">
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full mb-6 shadow-xl">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-slate-800">{t('productInquiries')}</h3>
                      <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: t('inquiryDescription') }} />
                    </div>
                    
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                      <a
                        href={`/${locale}/contact`}
                        className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-slate-700 to-slate-800 text-white px-10 py-4 rounded-xl font-semibold tracking-wide hover:from-slate-800 hover:to-slate-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                      >
                        {t('contactForm')}
                        <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </a>
                      
                      <a
                        href="tel:052-611-5301"
                        className="w-full sm:w-auto inline-flex items-center justify-center text-slate-600 hover:text-slate-800 font-semibold tracking-wide transition-colors duration-300 border-2 border-slate-200 hover:border-slate-300 px-8 py-4 rounded-xl group"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        052-611-5301
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  )
}