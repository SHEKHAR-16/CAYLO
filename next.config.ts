import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 💡 Explicitly declare the empty turbopack object so next-intl can securely inject its build aliases
  turbopack: {}, 
};

export default withNextIntl(nextConfig);