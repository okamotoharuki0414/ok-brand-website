'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group gap-3">
            <Image
              src="/images/岡本食品マーク.avif"
              alt={t('header.logoAlt')}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-xl font-black text-gray-800 font-company-name">
                {t('footer.companyName')}
              </div>
              <div className="text-xs text-orange-600 font-light tracking-wider">
                {t('header.est')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link 
                href={`/${locale}/goods`}
                className="text-gray-600 font-medium hover:text-slate-700 transition-colors duration-300 whitespace-nowrap text-sm"
              >
                {t('nav.products')}
              </Link>
              <Link 
                href={`/${locale}/company`}
                className="text-gray-600 font-medium hover:text-slate-700 transition-colors duration-300 whitespace-nowrap text-sm"
              >
                {t('nav.company')}
              </Link>
              <Link 
                href={`/${locale}/news`}
                className="text-gray-600 font-medium hover:text-slate-700 transition-colors duration-300 whitespace-nowrap text-sm"
              >
                {t('nav.news')}
              </Link>
              <Link 
                href={`/${locale}/recruit`}
                className="text-gray-600 font-medium hover:text-slate-700 transition-colors duration-300 whitespace-nowrap text-sm"
              >
                {t('nav.recruit')}
              </Link>
              <Link 
                href={`/${locale}/contact`}
                className="bg-white text-blue-900 border-2 border-blue-900 px-4 py-2 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300 text-xs whitespace-nowrap"
              >
                {t('nav.contact')}
              </Link>
            </nav>
            
            {/* Language Switcher */}
            <div className="pl-3 border-l border-gray-300">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-6 space-y-4">
            <Link
              href={`/${locale}/goods`}
              className="block text-gray-700 hover:text-slate-700 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.products')}
            </Link>
            <Link
              href={`/${locale}/company`}
              className="block text-gray-700 hover:text-slate-700 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.company')}
            </Link>
            <Link
              href={`/${locale}/news`}
              className="block text-gray-700 hover:text-slate-700 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.news')}
            </Link>
            <Link
              href={`/${locale}/recruit`}
              className="block text-gray-700 hover:text-slate-700 font-medium py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.recruit')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="block bg-white text-blue-900 border-2 border-blue-900 text-center mt-4 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

