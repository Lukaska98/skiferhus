import Image from "next/image";
import Link from "next/link";
import { products } from "../../data/products";
import { stounlineCollections } from "../../data/product-series";

export default function StounlinePage() {
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
          Produktserie
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Stounline</h1>
        <p className="text-lg text-zinc-400 leading-8">
          Utforsk vårt utvalg av Stounline-produkter. Nye produkter kan enkelt
          legges til i denne serien etter hvert som sortimentet vokser.
        </p>
      </div>

      <div className="space-y-16">
        {stounlineCollections.map((collection) => {
          const collectionProducts = products.filter(
            (product) => product.collection === collection
          );

          return (
            <section key={collection}>
              <div className="flex items-baseline justify-between gap-4 mb-7">
                <h2 className="text-2xl font-semibold">{collection}</h2>
                <p className="text-sm text-zinc-500">
                  {collectionProducts.length} produkter
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {collectionProducts.map((product) => (
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
                      <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-semibold text-white">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
