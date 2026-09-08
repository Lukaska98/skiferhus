import Image from "next/image";
import Link from "next/link";
import { products } from "@/app/data/products";
import type { ProductGroup } from "@/app/data/product-series";

type ProductGroupPageProps = {
  group: ProductGroup;
};

export default function ProductGroupPage({ group }: ProductGroupPageProps) {
  const groupProducts = products.filter(
    (product) => product.collection === group.collection
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
          href="/produkter/fasadeskifer"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          ← Til fasadeskifer
        </Link>
      </div>

      <div className="max-w-3xl mb-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
          Fasadeskifer
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">{group.name}</h1>
        <p className="text-lg text-zinc-400 leading-8">{group.description}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {groupProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/produkter/${product.slug}`}
            className="group"
          >
            {product.image ? (
              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h2 className="text-2xl font-semibold text-white">
                    {product.name}
                  </h2>
                </div>
              </div>
            ) : (
              <div className="min-h-72 rounded-xl border border-zinc-800 bg-zinc-950 p-7 flex flex-col justify-between group-hover:border-zinc-500 group-hover:bg-zinc-900 transition">
                <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                  {product.collection}
                </p>
                <div>
                  <h2 className="text-2xl font-semibold leading-8">{product.name}</h2>
                  {product.format && (
                    <p className="mt-3 text-zinc-400">Format: {product.format}</p>
                  )}
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </main>
  );
}
