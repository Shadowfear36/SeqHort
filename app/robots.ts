import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.seqhort.com/sitemap.xml",
    host: "https://www.seqhort.com",
  }
}
