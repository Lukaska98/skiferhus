export type NaturalStoneGroup = {
  slug: string;
  name: string;
  collection: string;
  description: string;
  image: string;
};

export const stounlineGroup: NaturalStoneGroup = {
  slug: "stounline",
  name: "Stounline",
  collection: "STONELINE",
  description: "Et utvalg av naturstein med et moderne og tidløst uttrykk.",
  image: "/images/stounline/stounline1.png",
};

export const rioGrandeGroup: NaturalStoneGroup = {
  slug: "rio-grande",
  name: "RIO GRANDE",
  collection: "RIO GRANDE",
  description: "En egen natursteingruppe med varme farger og levende struktur.",
 image: "/images/rio-grande/rio-grande.jpg",
};

export const naturalStoneGroups = [stounlineGroup, rioGrandeGroup];

export const newProductSeries = [
  {
    slug: "natursteinsfliser",
    name: "Natursteinsfliser",
    category: "Fasade",
  },
  {
    slug: "skiferfliser",
    name: "Skiferfliser",
    category: "Fasade",
  },
  {
    slug: "steinplater",
    name: "Steinplater",
    category: "Fasade",
  },
  {
    slug: "laminam-storformatfliser",
    name: "LAMINAM storformatfliser",
    category: "Fasade og interiør",
  },
  {
    slug: "infinity-storformatfliser",
    name: "INFINITY storformatfliser",
    category: "Fasade og interiør",
  },
  {
    slug: "fibersementplater",
    name: "Fibersementplater",
    category: "Fasade",
  },
  {
    slug: "stounwood-wpc-fasadekledning",
    name: "STOUNWOOD • WPC-fasadekledning",
    category: "Fasade",
  },
  {
    slug: "slate-lite-fleksibel-stein",
    name: "SLATE LITE fleksibel stein",
    category: "Fasade og interiør",
  },
  {
    slug: "stounwood-terrace-solid",
    name: 'STOUNWOOD TERRACE "Solid" terrasser',
    category: "Uteområde",
  },
  {
    slug: "klinker",
    name: "Klinker",
    category: "Fasade",
  },
  {
    slug: "aluminiumslameller",
    name: "Aluminiumslameller",
    category: "Fasade",
  },
  {
    slug: "mood-collection-stein",
    name: "MOOD COLLECTION (stein)",
    category: "Fasade og interiør",
  },
  {
    slug: "klinkerstein",
    name: "Klinkerstein",
    category: "Fasade",
  },
  {
    slug: "cupaclad-fasadesystem",
    name: "CUPACLAD fasadesystem",
    category: "Fasade",
  },
] as const;
