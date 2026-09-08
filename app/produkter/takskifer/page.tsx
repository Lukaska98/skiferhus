import Image from "next/image";
import Link from "next/link";
import { slateCollections } from "../../data/product-series";

export default function TakskiferPage() {
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
          CUPA PIZARRAS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Takskifer</h1>
        <p className="text-lg text-zinc-400 leading-8">
          Vi fører RHOMB, RECTANGULO og CUPA PIZARRAS-kolleksjonene.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {slateCollections.map((collection) => (
          <Link
            key={collection.slug}
            href={`/produkter/serier/${collection.slug}`}
            className="group min-h-56 rounded-xl border border-zinc-800 bg-zinc-950 p-7 flex flex-col justify-between hover:border-zinc-500 hover:bg-zinc-900 transition"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase">
              Takskifer
            </p>
            <div>
              <h2 className="text-2xl font-semibold">{collection.name}</h2>
              <p className="mt-3 text-zinc-400 leading-7">{collection.description}</p>
            </div>
            <span className="mt-8 text-zinc-300 group-hover:translate-x-1 transition">
              Se kolleksjon →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
