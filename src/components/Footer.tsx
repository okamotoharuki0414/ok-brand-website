'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <h4 className="text-2xl font-okamoto-brand text-white">{t('companyName')}</h4>
                <div className="text-sm text-orange-400 font-light tracking-wide">EST. 1921</div>
              </div>
              <div className="text-orange-400 text-lg font-medium tracking-wide mb-3">
                {t('tagline')}
              </div>
              <p className="text-gray-300 leading-relaxed font-light max-w-md">
                {t('description')}
              </p>
            </div>
            
            <div className="space-y-2 text-gray-400 text-sm font-light">
              <p>{t('address')}</p>
              <p>{t('phone')} | {t('fax')}</p>
            </div>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h5 className="font-medium text-gray-200 tracking-wide">{t('productsTitle')}</h5>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li><Link href={`/${locale}/goods`} className="hover:text-orange-400 transition-colors duration-300">{t('productsList')}</Link></li>
              <li><Link href={`/${locale}/goods`} className="hover:text-orange-400 transition-colors duration-300">{t('mikanProducts')}</Link></li>
              <li><Link href={`/${locale}/goods`} className="hover:text-orange-400 transition-colors duration-300">{t('peachProducts')}</Link></li>
              <li><Link href={`/${locale}/goods`} className="hover:text-orange-400 transition-colors duration-300">{t('frozenProducts')}</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h5 className="font-medium text-gray-200 tracking-wide">{t('companyTitle')}</h5>
            <ul className="space-y-3 text-gray-400 text-sm font-light">
              <li><Link href={`/${locale}/company`} className="hover:text-orange-400 transition-colors duration-300">{t('companyOverview')}</Link></li>
              <li><Link href={`/${locale}/news`} className="hover:text-orange-400 transition-colors duration-300">{tNav('news')}</Link></li>
              <li><Link href={`/${locale}/recruit`} className="hover:text-orange-400 transition-colors duration-300">{tNav('recruit')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-orange-400 transition-colors duration-300">{tNav('contact')}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm font-light">
            {t('copyright')}
          </p>
          <div className="flex items-center space-x-6">
            <Link 
              href={`/${locale}/privacy`} 
              className="text-gray-400 text-sm font-light hover:text-orange-400 transition-colors duration-300"
            >
              {t('privacyPolicy')}
            </Link>
            <div className="text-gray-500 text-xs tracking-wide">Since 1921</div>
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">OK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}