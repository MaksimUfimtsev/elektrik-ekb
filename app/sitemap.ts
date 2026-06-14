import type { MetadataRoute } from "next";

// TODO: заменить example.com на реальный домен
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://example.com/", changeFrequency: "monthly", priority: 1 },
    { url: "https://example.com/privacy", changeFrequency: "yearly", priority: 0.2 },
  ];
}
