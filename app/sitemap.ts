import type { MetadataRoute } from "next"
import { CATEGORIES } from "./products/[slug]/data"

export const dynamic = "force-static"

const BASE = "https://www.seqhort.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const productPages = CATEGORIES.map((cat) => ({
    url: `${BASE}/products/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/products`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...productPages,
    { url: `${BASE}/heritage`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/calculators`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/quote`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
  ]
}
