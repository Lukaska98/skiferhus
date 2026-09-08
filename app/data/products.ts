export type Product = {
  slug: string;
  name: string;
  category: "Fasadeskifer";
  collection: "STOUNLINE" | "RIO GRANDE";
  description: string;
  format?: "Long" | "Vertical";
  image?: string;
};

export const products: Product[] = [
  {
    slug: "rio-grande-machiato-long",
    name: "RIO GRANDE Machiato Long",
    category: "Fasadeskifer",
    collection: "RIO GRANDE",
    format: "Long",
    description: "Skifer i Long-format fra RIO GRANDE-kolleksjonen.",
  },
  {
    slug: "rio-grande-americano-long",
    name: "RIO GRANDE Americano Long",
    category: "Fasadeskifer",
    collection: "RIO GRANDE",
    format: "Long",
    description: "Skifer i Long-format fra RIO GRANDE-kolleksjonen.",
  },
  {
    slug: "rio-grande-matcha-vertical",
    name: "RIO GRANDE Matcha Vertical",
    category: "Fasadeskifer",
    collection: "RIO GRANDE",
    format: "Vertical",
    description: "Skifer i Vertical-format fra RIO GRANDE-kolleksjonen.",
  },
  {
    slug: "rio-grande-americano-vertical",
    name: "RIO GRANDE Americano Vertical",
    category: "Fasadeskifer",
    collection: "RIO GRANDE",
    format: "Vertical",
    description: "Skifer i Vertical-format fra RIO GRANDE-kolleksjonen.",
  },
  {
    slug: "stounline-americano",
    name: "STOUNLINE Americano",
    category: "Fasadeskifer",
    collection: "STOUNLINE",
    image: "/images/stounline/americano.png",
    description: "Skifer fra STOUNLINE-kolleksjonen.",
  },
  {
    slug: "stounline-matcha",
    name: "STOUNLINE Matcha",
    category: "Fasadeskifer",
    collection: "STOUNLINE",
    image: "/images/stounline/matcha.png",
    description: "Skifer fra STOUNLINE-kolleksjonen.",
  },
  {
    slug: "stounline-machiato",
    name: "STOUNLINE Machiato",
    category: "Fasadeskifer",
    collection: "STOUNLINE",
    image: "/images/stounline/machiato.jpg",
    description: "Skifer fra STOUNLINE-kolleksjonen.",
  },
];
