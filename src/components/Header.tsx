'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import { normalizeImageUrl } from '@/utils/imageUtils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('nav');
  const tHeader = useTranslations('header');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center group gap-3">
            <Image
              src={normalizeImageUrl("/images/岡本食品マーク.avif")}
              alt={tHeader('logoAlt')}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div className="flex flex-col">
              <div className="text-xl font-black text-gray-800 font-company-name">
                {tFooter('companyName')}
              </div>
              <div className="text-xs text-slate-500 font-light tracking-wider">
                {tHeader('est')}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
            <nav className="flex items-center space-x-3 xl:space-x-5">
              <Link 
                href={`/${locale}/goods`}
                className="text-gray-700 font-medium hover:text-orange-600 transition-colors duration-200 whitespace-nowrap text-sm xl:text-base px-3 py-2 relative group"
              >
                {t('products')}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href={`/${locale}/company`}
                className="text-gray-700 font-medium hover:text-orange-600 transition-colors duration-200 whitespace-nowrap text-sm xl:text-base px-3 py-2 relative group"
              >
                {t('company')}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href={`/${locale}/news`}
                className="text-gray-700 font-medium hover:text-orange-600 transition-colors duration-200 whitespace-nowrap text-sm xl:text-base px-3 py-2 relative group"
              >
                {t('news')}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href={`/${locale}/recruit`}
                className="text-gray-700 font-medium hover:text-orange-600 transition-colors duration-200 whitespace-nowrap text-sm xl:text-base px-3 py-2 relative group"
              >
                {t('recruit')}
                <span className="absolute inset-x-0 bottom-0 h-0.5 bg-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link 
                href={`/${locale}/contact`}
                className="group relative inline-flex items-center bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 xl:px-5 py-2.5 rounded-lg font-medium hover:from-orange-700 hover:to-red-600 transition-all duration-200 text-xs xl:text-sm whitespace-nowrap shadow-lg hover:shadow-xl transform hover:scale-105 overflow-hidden"
              >
                {t('contact')}
              </Link>
            </nav>
            
            {/* Language Switcher */}
            <div className="pl-3 border-l border-gray-300">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile Language Switcher and Menu */}
          <div className="lg:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-gray-700 hover:text-orange-600 transition-all duration-200 bg-white/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg border border-gray-200"
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
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200 shadow-2xl animate-slide-down">
          <div className="px-4 py-6 space-y-4">
            <Link
              href={`/${locale}/goods`}
              className="block text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium py-3 px-3 rounded-lg transition-all duration-200 animate-fade-in-item"
              style={{ animationDelay: '0.1s', opacity: 0, animationFillMode: 'forwards' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('products')}
            </Link>
            <Link
              href={`/${locale}/company`}
              className="block text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium py-3 px-3 rounded-lg transition-all duration-200 animate-fade-in-item"
              style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('company')}
            </Link>
            <Link
              href={`/${locale}/news`}
              className="block text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium py-3 px-3 rounded-lg transition-all duration-200 animate-fade-in-item"
              style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('news')}
            </Link>
            <Link
              href={`/${locale}/recruit`}
              className="block text-gray-700 hover:text-orange-600 hover:bg-orange-50 font-medium py-3 px-3 rounded-lg transition-all duration-200 animate-fade-in-item"
              style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('recruit')}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="block bg-gradient-to-r from-orange-500 to-red-500 text-white text-center mt-4 px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-fade-in-item"
              style={{ animationDelay: '0.5s', opacity: 0, animationFillMode: 'forwards' }}
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      )}
      
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInItem {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        :global(.animate-slide-down) {
          animation: slideDown 0.3s ease-out;
        }
        
        :global(.animate-fade-in-item) {
          animation: fadeInItem 0.4s ease-out;
        }
      `}</style>
    </header>
  );
}

