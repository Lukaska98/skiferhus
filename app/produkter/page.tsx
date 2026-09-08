import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import { productGroups, slateCollections } from "../data/product-series";

export default function ProdukterPage() {
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

      <div className="max-w-3xl mb-16">
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
          Produkter
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Vårt sortiment</h1>
        <p className="text-lg text-zinc-400 leading-8">
          Vi selger utvalgt skifer til fasade og tak. Kontakt oss for pris,
          tilgjengelighet og bestilling.
        </p>
      </div>

      <section aria-labelledby="facade-heading" className="mb-20">
        <div className="flex items-end justify-between gap-4 mb-7">
          <h2 id="facade-heading" className="text-2xl font-semibold">
            Fasadeskifer
          </h2>
          <Link href="/produkter/fasadeskifer" className="text-sm text-zinc-400 hover:text-white">
            Se alle →
          </Link>
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
                  <p className="text-sm font-semibold tracking-[0.18em] text-zinc-300 uppercase mb-3">
                    Fasadeskifer
                  </p>
                  <h2 className="text-3xl font-bold">{group.name}</h2>
                  <p className="mt-3 text-zinc-200">
                    {productCount} produkter <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="roof-heading">
        <div className="flex items-end justify-between gap-4 mb-7">
          <h2 id="roof-heading" className="text-2xl font-semibold">
            Takskifer
          </h2>
          <Link href="/produkter/takskifer" className="text-sm text-zinc-400 hover:text-white">
            Se alle →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {slateCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/produkter/serier/${collection.slug}`}
              className="group min-h-48 rounded-xl border border-zinc-800 bg-zinc-950 p-7 flex flex-col justify-between hover:border-zinc-500 hover:bg-zinc-900 transition"
            >
              <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                CUPA PIZARRAS
              </p>
              <div className="flex items-end justify-between gap-4 mt-10">
                <h3 className="text-2xl font-semibold">{collection.name}</h3>
                <span
                  aria-hidden="true"
                  className="text-zinc-400 group-hover:translate-x-1 transition"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
