import type { MetadataRoute } from "next";

// TODO: заменить example.com на реальный домен
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://example.com/sitemap.xml",
  };
}
