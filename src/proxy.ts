import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'no'],
  
  // Used when no locale matches
  defaultLocale: 'en'
});

export const config = {
  // Match all pathnames except for internal Next.js runs, api routes, and static assets
  matcher: ['/((?!api|_next|.*\\..*).*)']
};