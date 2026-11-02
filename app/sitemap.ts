import { MetadataRoute } from 'next';
import { SOLUTIONS_LIST } from '@/components/home/solutions-grid';
import { SEED_CASE_STUDIES } from '@/lib/sanity';
import { TOOLS_DIRECTORY } from '@/lib/tools-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vanthrope.com';

  const coreRoutes = [
    '',
    '/solutions',
    '/agents',
    '/services',
    '/work',
    '/industries',
    '/method',
    '/tools',
    '/security',
    '/proof-ledger',
    '/resources',
    '/fit',
    '/about',
    '/contact',
    '/enterprise',
    '/legal/privacy',
    '/legal/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const solutionRoutes = SOLUTIONS_LIST.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const caseRoutes = SEED_CASE_STUDIES.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const toolRoutes = TOOLS_DIRECTORY.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...solutionRoutes, ...caseRoutes, ...toolRoutes];
}
