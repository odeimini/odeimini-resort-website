import { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.baseUrl;
  const routes = [
    "",
    "/cabins",
    "/property",
    "/gallery",
    "/faq",
    "/contact",
    "/investors",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
