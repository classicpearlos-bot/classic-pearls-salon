import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const routes = [
    '',
    '/services',
    '/experience',
    '/lookbook',
    '/artisans',
    '/bridal',
    '/about',
    '/contact',
    '/book',
    '/privacy-policy',
    '/terms',
    '/cancellation-policy',
    '/refund-policy',
    '/faq',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' || route === '/services' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/book' || route === '/services' ? 0.9 : 0.7,
  }));
}
