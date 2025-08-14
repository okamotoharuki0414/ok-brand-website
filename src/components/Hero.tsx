'use client';

import Image from 'next/image';
import { normalizeImageUrl } from '@/utils/imageUtils'
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();
  
  return (
    <section className="relative w-full overflow-hidden mt-20">
      <div className="relative overflow-hidden" style={{ height: '100vh', minHeight: '500px' }}>
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={normalizeImageUrl("/images/みかんフリー.avif")}
            alt="新鮮なみかんと農園の風景"
            fill
            className="object-cover w-full h-full"
            priority
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
              width: '100%',
              height: '100%'
            }}
            unoptimized
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-orange-900/40 to-stone-900/50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6 lg:px-8" style={{ height: '100vh', minHeight: '500px' }}>
          <div className="max-w-4xl">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="text-stone-200 text-sm tracking-widest font-light uppercase animate-fade-in-up" style={{ animationDelay: '0.3s', opacity: 0, animationFillMode: 'forwards' }}>
                  Since 1921
                </div>
                <h1 className="hero-title text-white text-2xl md:text-3xl lg:text-5xl font-bold tracking-wide animate-fade-in-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
                  {t('title')}
                </h1>
                <div className="w-24 h-px bg-stone-300 mx-auto mt-8 animate-fade-in-up" style={{ animationDelay: '0.9s', opacity: 0, animationFillMode: 'forwards' }}></div>
              </div>
              
              <p className="text-base md:text-lg text-stone-100 leading-relaxed max-w-3xl mx-auto font-light animate-fade-in-up" style={{ animationDelay: '1.2s', opacity: 0, animationFillMode: 'forwards' }}>
                {t('subtitle')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 animate-fade-in-up" style={{ animationDelay: '1.5s', opacity: 0, animationFillMode: 'forwards' }}>
                <Link
                  href={`/${locale}/goods`}
                  className="group relative inline-flex items-center bg-gradient-to-r from-emerald-500 via-orange-500 to-red-500 hover:from-emerald-600 hover:via-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">{t('cta')}</span>
                  <svg className="relative z-10 ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
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
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        :global(.animate-fade-in-up) {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
}