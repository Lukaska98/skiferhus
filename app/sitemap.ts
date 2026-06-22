import { MetadataRoute } from "next";
import { naturalStoneGroups, newProductSeries } from "./data/product-series";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.skiferhus.no",
      lastModified: new Date(),
    },

    {
      url: "https://www.skiferhus.no/produkter",
      lastModified: new Date(),
    },

    ...naturalStoneGroups.map((group) => ({
      url: `https://www.skiferhus.no/produkter/${group.slug}`,
      lastModified: new Date(),
    })),

    ...newProductSeries.map((series) => ({
      url: `https://www.skiferhus.no/produkter/serier/${series.slug}`,
      lastModified: new Date(),
    })),

    {
      url: "https://www.skiferhus.no/tjenester",
      lastModified: new Date(),
    },

    {
      url: "https://www.skiferhus.no/kontakt",
      lastModified: new Date(),
    },

    {
      url: "https://www.skiferhus.no/galleri/skifertak",
      lastModified: new Date(),
    },

    {
      url: "https://www.skiferhus.no/galleri/fasader",
      lastModified: new Date(),
    },

    {
      url: "https://www.skiferhus.no/galleri/uteomrader",
      lastModified: new Date(),
    },
  ];
}