import { MetadataRoute } from "next";


export default async function sitemap(): Promise<MetadataRoute.Sitemap>{
    return [
        {
          url: `${process.env.BASE_URL}`,
          lastModified: new Date(),
          changeFrequency: 'yearly',
          priority: 1,
        },
        {
          url: `${process.env.BASE_URL}/quick-request`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 1,
        },
        {
          url: `${process.env.BASE_URL}/about-us`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${process.env.BASE_URL}/services`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${process.env.BASE_URL}/contacts`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${process.env.BASE_URL}/career`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
        {
          url: `${process.env.BASE_URL}/blogs`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        },
      ]
}