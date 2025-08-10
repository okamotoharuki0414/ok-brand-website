import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 【重要】App Router + next-intl では以下の旧i18n設定は使わない
  // i18n: {
  //   locales: ['ja', 'en'],
  //   defaultLocale: 'ja', 
  //   localeDetection: true
  // }
  
  experimental: {
    optimizeServerReact: false,
  },
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);