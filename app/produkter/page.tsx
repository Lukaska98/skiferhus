import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";
import { newProductSeries, stounlineCollections } from "../data/product-series";

export default function ProdukterPage() {
  const stounlineProductCount = products.filter((product) =>
    stounlineCollections.includes(
      product.collection as (typeof stounlineCollections)[number]
    )
  ).length;

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

      <div className="max-w-3xl mb-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
          Produkter
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Produktserier</h1>
        <p className="text-lg text-zinc-400 leading-8">
          Velg en produktserie for å se utvalg og produktinformasjon. Vi
          utvider katalogen fortløpende.
        </p>
      </div>

      <section aria-labelledby="stounline-heading" className="mb-20">
        <h2 id="stounline-heading" className="text-2xl font-semibold mb-7">
          Våre produktserier
        </h2>

        <Link
          href="/produkter/stounline"
          className="group block overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 hover:border-zinc-500 transition"
        >
          <div className="grid md:grid-cols-[minmax(0,1fr)_320px]">
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <p className="text-sm font-semibold tracking-[0.18em] text-zinc-400 uppercase mb-4">
                Naturstein
              </p>
              <h3 className="text-3xl font-bold mb-4">Stounline</h3>
              <p className="text-zinc-400 leading-7 max-w-xl">
                Se hele Stounline-sortimentet samlet på ett sted, inkludert
                STONELINE og RIO GRANDE.
              </p>
              <span className="mt-7 inline-flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                Se {stounlineProductCount} produkter{" "}
                <span aria-hidden="true">→</span>
              </span>
            </div>

            <div className="relative min-h-64 md:min-h-full">
              <Image
                src="/images/stounline/stounline1.png"
                alt="Stounline naturstein"
                fill
                sizes="(max-width: 768px) 100vw, 320px"
                className="object-cover opacity-80 group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </Link>
      </section>

      <section aria-labelledby="new-series-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
          <div>
            <h2 id="new-series-heading" className="text-2xl font-semibold">
              Flere produktserier
            </h2>
            <p className="text-zinc-400 mt-2">
              Utforsk produktseriene og be om veiledning til prosjektet ditt.
            </p>
          </div>
          <p className="text-sm text-zinc-500">{newProductSeries.length} serier</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newProductSeries.map((series) => (
            <Link
              key={series.slug}
              href={`/produkter/serier/${series.slug}`}
              className="group min-h-40 rounded-xl border border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between hover:border-zinc-500 hover:bg-zinc-900 transition"
            >
              <p className="text-sm text-zinc-500">{series.category}</p>
              <div className="flex items-end justify-between gap-4 mt-8">
                <h3 className="text-lg font-semibold leading-6">{series.name}</h3>
                <span
                  aria-hidden="true"
                  className="text-zinc-400 group-hover:translate-x-1 transition"
                >
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
