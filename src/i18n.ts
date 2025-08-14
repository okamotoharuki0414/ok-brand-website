import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async ({locale}) => {
  // Provide fallback locale if undefined
  const validLocale = locale || 'ja';
  
  // Debug logging
  console.log('[i18n.ts] Loading locale:', validLocale);
  
  try {
    const messages = (await import(`../messages/${validLocale}.json`)).default;
    console.log('[i18n.ts] Messages loaded successfully for:', validLocale);
    console.log('[i18n.ts] Sample message (company.heading):', messages?.company?.heading);
    
    return {
      locale: validLocale,
      messages
    };
  } catch (error) {
    console.error('[i18n.ts] Error loading messages for locale:', validLocale, error);
    // Fallback to Japanese messages
    const fallbackMessages = (await import(`../messages/ja.json`)).default;
    return {
      locale: validLocale,
      messages: fallbackMessages
    };
  }
});