import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://box-electric.ru/", changeFrequency: "monthly", priority: 1 },
    { url: "https://box-electric.ru/privacy", changeFrequency: "yearly", priority: 0.2 },
  ];
}
