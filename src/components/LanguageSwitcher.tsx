'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 現在のパスを保ったままロケールだけ切替
  const switchLanguage = (newLocale: 'ja' | 'en') => {
    // 現在のパスからロケール部分を新しいロケールに置換
    const newPath = pathname.replace(/^\/(ja|en)(?=\/|$)/, `/${newLocale}`);
    return newPath || `/${newLocale}`;
  };

  const currentLanguage = locale === 'ja' ? '🇯🇵 JA' : '🇺🇸 EN';
  const otherLanguage = locale === 'ja' 
    ? { flag: '🇺🇸', code: 'EN', locale: 'en' as const } 
    : { flag: '🇯🇵', code: 'JA', locale: 'ja' as const };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 px-2 py-1 rounded text-xs font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 transition-colors"
        aria-label="言語を選択"
      >
        <span>{currentLanguage}</span>
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-20 bg-white border border-gray-200 rounded-md shadow-lg min-w-[80px]">
            <Link
              href={switchLanguage(otherLanguage.locale)}
              className="w-full px-3 py-2 text-left text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors block"
              onClick={() => setIsOpen(false)}
              aria-label={`Switch to ${otherLanguage.code}`}
            >
              {otherLanguage.flag} {otherLanguage.code}
            </Link>
          </div>
        </>
      )}
    </div>
  );
}