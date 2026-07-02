import type { MetadataRoute } from "next";
import { allRoles } from "./careers/data";

const BASE_URL = "https://www.aegisinterlink.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/solutions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${BASE_URL}/careers`, changeFrequency: "weekly", priority: 0.7 },
  ];

  const jobRoutes: MetadataRoute.Sitemap = allRoles.map((role) => ({
    url: `${BASE_URL}/careers/apply/${role.slug}`,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...jobRoutes];
}
