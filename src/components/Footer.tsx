'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'

// SSR/CSR整合性を保つための定数定義
const COMPANY_INFO = {
  ja: {
    phone: '052-611-5301',
    phoneHref: 'tel:+81-52-611-5301',
    fax: '052-613-2607',
    faxHref: 'tel:+81-52-613-2607'
  },
  en: {
    phone: '+81-52-611-5301',
    phoneHref: 'tel:+81-52-611-5301',
    fax: '+81-52-613-2607',
    faxHref: 'tel:+81-52-613-2607'
  }
} as const

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  
  // SSR/CSR整合性を保つためのlocale安全化
  const safeLocale = (locale === 'en' ? 'en' : 'ja') as 'ja' | 'en'
  const companyInfo = COMPANY_INFO[safeLocale]
  
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <h4 className="text-xl lg:text-2xl font-okamoto-brand text-white leading-tight break-words">{t('companyName')}</h4>
                <div className="text-sm text-stone-400 font-light tracking-wide">EST. 1921</div>
              </div>
              <div className="text-stone-300 text-base lg:text-lg font-medium tracking-wide mb-3">
                {t('tagline')}
              </div>
              <p className="text-slate-300 leading-relaxed font-light max-w-md hyphens-auto">
                {t('description')}
              </p>
            </div>
            
            <div className="space-y-2 text-gray-400 text-sm font-light">
              <p>{t('address')}</p>
              <div className="contact-info-wrapper">
                <a 
                  href={companyInfo.phoneHref}
                  aria-label={`TEL: ${companyInfo.phone}`}
                  className="tel-link"
                >
                  {companyInfo.phone}
                </a>
                {' | '}
                <a 
                  href={companyInfo.faxHref}
                  aria-label={`FAX: ${companyInfo.fax}`}
                  className="fax-link"
                >
                  {companyInfo.fax}
                </a>
              </div>
            </div>
            
            <style jsx>{`
              .tel-link::before {
                content: 'TEL: ';
              }
              .fax-link::before {
                content: 'FAX: ';
              }
              .tel-link, .fax-link {
                color: inherit;
                text-decoration: none;
              }
              .tel-link:hover, .fax-link:hover {
                color: #d6d3d1;
                text-decoration: underline;
              }
            `}</style>
          </div>
          
          {/* Products */}
          <div className="space-y-4">
            <h5 className="font-medium text-gray-200 tracking-wide">{t('productsTitle')}</h5>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li><Link href={`/${locale}/goods`} className="hover:text-stone-300 transition-colors duration-300">{t('productsList')}</Link></li>
              <li><Link href={`/${locale}/goods#mikan`} className="hover:text-stone-300 transition-colors duration-300">{t('mikanProducts')}</Link></li>
              <li><Link href={`/${locale}/goods#peach`} className="hover:text-stone-300 transition-colors duration-300">{t('peachProducts')}</Link></li>
              <li><Link href={`/${locale}/goods#tomato`} className="hover:text-stone-300 transition-colors duration-300">{t('tomatoProducts')}</Link></li>
              <li><Link href={`/${locale}/goods#mushroom`} className="hover:text-stone-300 transition-colors duration-300">{t('mushroomProducts')}</Link></li>
              <li><Link href={`/${locale}/goods#frozen`} className="hover:text-stone-300 transition-colors duration-300">{t('frozenProducts')}</Link></li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="space-y-4">
            <h5 className="font-medium text-slate-200 tracking-wide">{t('companyTitle')}</h5>
            <ul className="space-y-3 text-slate-400 text-sm font-light">
              <li><Link href={`/${locale}/company`} className="hover:text-stone-300 transition-colors duration-300">{t('companyOverview')}</Link></li>
              <li><Link href={`/${locale}/news`} className="hover:text-stone-300 transition-colors duration-300">{tNav('news')}</Link></li>
              <li><Link href={`/${locale}/recruit`} className="hover:text-stone-300 transition-colors duration-300">{tNav('recruit')}</Link></li>
              <li><Link href={`/${locale}/contact`} className="hover:text-stone-300 transition-colors duration-300">{tNav('contact')}</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm font-light">
            {t('copyright')}
          </p>
          <div className="flex items-center space-x-6">
            <Link 
              href={`/${locale}/privacy`} 
              className="text-slate-400 text-sm font-light hover:text-stone-300 transition-colors duration-300"
            >
              {t('privacyPolicy')}
            </Link>
            <div className="text-slate-500 text-xs tracking-wide">Since 1921</div>
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center">
              <span className="text-xs font-bold text-white">OK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}