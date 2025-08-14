import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ja','en'],
  defaultLocale: 'ja'
});

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.png$|.*\\.jpg$|.*\\.avif$).*)'
  ]
};