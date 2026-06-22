import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { naturalStoneGroups, newProductSeries } from "../../data/product-series";

const facadeSeries = newProductSeries.filter(
  (series) => series.category !== "Uteområde"
);

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
        <h1 className="text-4xl md:text-5xl font-bold mb-5">
          Fasadeprodukter
        </h1>
        <p className="text-lg text-zinc-400 leading-8">
          Velg en produktgruppe for å se utvalg og produktinformasjon.
        </p>
      </div>

      <section aria-labelledby="naturstein-heading" className="mb-20">
        <h2 id="naturstein-heading" className="text-2xl font-semibold mb-7">
          Natursteingrupper
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {naturalStoneGroups.map((group) => {
            const productCount = products.filter(
              (product) => product.collection === group.collection
            ).length;

            return (
              <Link
                key={group.slug}
                href={`/produkter/${group.slug}`}
                className="group relative min-h-80 overflow-hidden rounded-2xl border border-zinc-800"
              >
                <Image
                  src={group.image}
                  alt={group.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-60 group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-sm font-semibold tracking-[0.18em] text-zinc-300 uppercase mb-3">
                    Naturstein
                  </p>
                  <h3 className="text-3xl font-bold">{group.name}</h3>
                  <p className="mt-3 text-zinc-200">
                    {productCount} produkter <span aria-hidden="true">→</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="facade-series-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-7">
          <div>
            <h2 id="facade-series-heading" className="text-2xl font-semibold">
              Fasadeplater og kledning
            </h2>
            <p className="text-zinc-400 mt-2">
              Utforsk flere materialer og fasadeløsninger.
            </p>
          </div>
          <p className="text-sm text-zinc-500">{facadeSeries.length} produktserier</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {facadeSeries.map((series) => (
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
