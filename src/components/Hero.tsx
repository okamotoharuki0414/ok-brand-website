'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  
  return (
    <section className="relative w-full overflow-hidden mt-20">
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/みかんフリー.avif"
          alt="新鮮なみかんと農園の風景"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center h-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-orange-200 text-sm tracking-widest font-light uppercase">
                  Since 1921
                </div>
                <h1 className="hero-title text-white text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide">
                  {t('title')}
                </h1>
                <div className="w-24 h-px bg-orange-300 mx-auto mt-8"></div>
              </div>
              
              <p className="text-base md:text-lg text-orange-200 leading-relaxed max-w-3xl mx-auto font-light">
                {t('subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link
                  href={`/${locale}/goods`}
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                >
                  {t('cta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce z-20">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-xs tracking-widest font-light">{t('scrollDown')}</span>
          <svg className="w-4 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}