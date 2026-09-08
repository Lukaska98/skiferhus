import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { productGroups } from "../../data/product-series";

export default function FasadeskiferPage() {
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
          href="/produkter"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          ← Til produktoversikt
        </Link>
      </div>

      <div className="max-w-3xl mb-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
          Produkter
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Fasadeskifer</h1>
        <p className="text-lg text-zinc-400 leading-8">
          Velg en kolleksjon for å se produktene vi fører.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {productGroups.map((group) => {
          const productCount = products.filter(
            (product) => product.collection === group.collection
          ).length;

          return (
            <Link
              key={group.slug}
              href={`/produkter/${group.slug}`}
              className="group relative min-h-80 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950"
            >
              {group.image && (
                <Image
                  src={group.image}
                  alt={group.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 group-hover:scale-105 transition duration-500"
                />
              )}
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition" />
              <div className="absolute inset-x-0 bottom-0 p-8">
                <h2 className="text-3xl font-bold">{group.name}</h2>
                <p className="mt-3 text-zinc-200">
                  {productCount} produkter <span aria-hidden="true">→</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
