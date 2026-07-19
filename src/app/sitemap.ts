import type { MetadataRoute } from "next";
import { profile } from "@/data/portfolio";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: profile.siteUrl, lastModified: new Date(), priority: 1 },
    ...projects.map((p) => ({
      url: `${profile.siteUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      priority: 0.7,
    })),
  ];
}
