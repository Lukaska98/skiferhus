import { MetadataRoute } from "next";
import { productGroups, slateCollections } from "./data/product-series";
import { products } from "./data/products";

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
    {
      url: "https://www.skiferhus.no/produkter/fasadeskifer",
      lastModified: new Date(),
    },
    {
      url: "https://www.skiferhus.no/produkter/takskifer",
      lastModified: new Date(),
    },
    ...productGroups.map((group) => ({
      url: `https://www.skiferhus.no/produkter/${group.slug}`,
      lastModified: new Date(),
    })),
    ...products.map((product) => ({
      url: `https://www.skiferhus.no/produkter/${product.slug}`,
      lastModified: new Date(),
    })),
    ...slateCollections.map((collection) => ({
      url: `https://www.skiferhus.no/produkter/serier/${collection.slug}`,
      lastModified: new Date(),
    })),
    {
      url: "https://www.skiferhus.no/kontakt",
      lastModified: new Date(),
    },
  ];
}
