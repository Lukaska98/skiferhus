import { newProductSeries } from "./data/product-series";

export default function sitemap() {
  return [
    { url: "https://skiferhus.no" },

    { url: "https://skiferhus.no/produkter" },
    { url: "https://skiferhus.no/produkter/stounline" },
    ...newProductSeries.map((series) => ({
      url: `https://skiferhus.no/produkter/serier/${series.slug}`,
    })),
    { url: "https://skiferhus.no/tjenester" },
    { url: "https://skiferhus.no/kontakt" },

    { url: "https://skiferhus.no/galleri/skifertak" },
    { url: "https://skiferhus.no/galleri/fasader" },
    { url: "https://skiferhus.no/galleri/uteomrader" },
  ];
}
