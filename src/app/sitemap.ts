import { MetadataRoute } from "next";
import { SERVICE_LANDINGS } from "@/lib/landings";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invertechpalmas.com.br";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pmoc-palmas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...SERVICE_LANDINGS.map((l) => ({
      url: `${baseUrl}/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
