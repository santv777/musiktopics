import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://musiktopics.com";

  return [
    {
      url: baseUrl,
      lastModified: "2026-08-08",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/confidence-while-fear-is-present`,
      lastModified: "2026-08-08",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/topics-june`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/latest-news`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/atlanta-topics`,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: "2026-08-08",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-08-08",
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}