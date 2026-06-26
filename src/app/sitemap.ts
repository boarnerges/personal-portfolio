import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://segun-owolabi.vercel.app", lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: "https://segun-owolabi.vercel.app/about", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: "https://segun-owolabi.vercel.app/projects", lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: "https://segun-owolabi.vercel.app/contact", lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: "https://segun-owolabi.vercel.app/privacy", lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
