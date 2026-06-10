"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { products } from "../data/products";
export default function ProdukterPage() {
  const [selectedCategory, setSelectedCategory] = useState("Alle");

const filteredProducts =
  selectedCategory === "Alle"
    ? products
    : products.filter(
        (product) => product.category === selectedCategory
      );
  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-16">

  <Link href="/">
    <Image
      src="/logo.svg"
      alt="Skiferhus"
      width={220}
      height={60}
      priority
    />
  </Link>

  <Link
    href="/"
    className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
  >
    ← Til forsiden
  </Link>

</div>

      <h1 className="text-4xl font-bold mb-10">
        Produkter
      </h1>
      <div className="flex flex-wrap gap-3 mb-10">
  {["Alle", "Takskifer", "Fasadeskifer", "Terrasseskifer"].map(
    (category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-4 py-2 rounded-lg border ${
          selectedCategory === category
            ? "bg-white text-black"
            : "border-zinc-700"
        }`}
      >
        {category}
      </button>
    )
  )}
</div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
         <Link
  key={product.slug}
  href={`/produkter/${product.slug}`}
  className="group"
>
  <div className="relative overflow-hidden rounded-xl">

    <Image
      src={product.image}
      alt={product.name}
      width={600}
      height={400}
      className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
    />

    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/25 transition" />

    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h2 className="text-2xl font-semibold text-white">
        {product.name}
      </h2>

      <p className="text-zinc-300 mt-1">
        {product.category}
      </p>
    </div>

  </div>
</Link>
        ))}
      </div>

    </main>
  );
}