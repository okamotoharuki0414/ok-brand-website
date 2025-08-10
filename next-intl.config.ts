import {defineConfig} from 'next-intl';

export default defineConfig({
  locales: ['ja', 'en'],
  defaultLocale: 'ja',
  // 必要なら 'never' | 'as-needed' など
  localePrefix: 'as-needed'
});