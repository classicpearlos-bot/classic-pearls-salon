import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { SEO_PAGES } from '@/data/seoPages';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date();

  const staticRoutes = [
    '',
    '/services',
    '/lookbook',
    '/bridal',
    '/experience',
    '/about',
    '/contact',
    '/book',
    '/privacy-policy',
    '/terms',
    '/cancellation-policy',
    '/refund-policy',
    '/faq',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? ('daily' as const) : ('weekly' as const),
    priority: route === '' ? 1.0 : 0.8,
  }));

  const seoPageRoutes = Object.keys(SEO_PAGES).map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...seoPageRoutes];
}
