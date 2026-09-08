export type ProductGroup = {
  slug: string;
  name: string;
  collection: "STOUNLINE" | "RIO GRANDE";
  description: string;
  image?: string;
};

export const productGroups: ProductGroup[] = [
  {
    slug: "stounline",
    name: "STOUNLINE",
    collection: "STOUNLINE",
    description: "Utvalgt skifer for fasade.",
    image: "/images/stounline/stounline1.png",
  },
  {
    slug: "rio-grande",
    name: "RIO GRANDE",
    collection: "RIO GRANDE",
    description: "Utvalgt skifer i Long- og Vertical-format.",
  },
];

export type SlateCollection = {
  slug: string;
  name: string;
  description: string;
};

export const slateCollections: SlateCollection[] = [
  {
    slug: "rhomb",
    name: "RHOMB",
    description: "Skiferkolleksjon fra CUPA PIZARRAS.",
  },
  {
    slug: "rectangulo",
    name: "RECTANGULO",
    description: "Skiferkolleksjon fra CUPA PIZARRAS.",
  },
  {
    slug: "cupa-pizarras",
    name: "CUPA PIZARRAS",
    description: "Skiferkolleksjoner for tak.",
  },
];
