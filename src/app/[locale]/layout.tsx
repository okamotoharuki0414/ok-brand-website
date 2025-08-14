import '../globals.css';
import '../../styles/english-typography.css';
import type { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavigationProgress from '@/components/NavigationProgress';
import PageTransition from '@/components/PageTransition';

const SUPPORTED = ['ja', 'en'] as const;

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!SUPPORTED.includes(locale as typeof SUPPORTED[number])) notFound();
  const messages = await getMessages({ locale });

  return (
    <div lang={locale} className={locale === 'en' ? 'font-inter' : ''}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <NavigationProgress />
        <Header />
        <PageTransition>
          {children}
        </PageTransition>
        <Footer />
      </NextIntlClientProvider>
    </div>
  );
}

export function generateStaticParams() {
  return [{ locale: 'ja' }, { locale: 'en' }];
}