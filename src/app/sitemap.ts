import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/siteUrl'

const normalizedSiteUrl = getSiteUrl().replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: normalizedSiteUrl,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
  ]
}

