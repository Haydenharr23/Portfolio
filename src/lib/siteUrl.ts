/**
 * Safe site URL for metadata, robots, and sitemap.
 * Avoids `new URL('')` / invalid env crashing the app at module load.
 */
export function getSiteUrl(): string {
  const fallback = 'http://localhost:3000'
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (!raw) return fallback
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`)
    return `${u.protocol}//${u.host}`
  } catch {
    return fallback
  }
}

export function getMetadataBase(): URL {
  return new URL(getSiteUrl())
}
