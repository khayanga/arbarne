export default function sitemap() {
  return [
    {
      url: "https://arbarnegroup.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://arbarnegroup.com/company",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://arbarnegroup.com/careers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
        url: "https://arbarnegroup.com/mission",
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.6,
    },
    {
      url: "https://arbarnegroup.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://arbarnegroup.com/resources",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}