import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products } from "../../data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Produkt ikke funnet" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter(
    (item) => item.collection === product.collection && item.slug !== product.slug
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
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
          href={`/produkter/${product.collection === "STOUNLINE" ? "stounline" : "rio-grande"}`}
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          ← Til kolleksjon
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            width={1200}
            height={800}
            className="rounded-2xl w-full h-[420px] object-cover"
          />
        ) : (
          <div className="min-h-[420px] rounded-2xl border border-zinc-800 bg-zinc-950 p-8 flex flex-col justify-between">
            <p className="text-sm font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              {product.collection}
            </p>
            <p className="text-2xl font-semibold text-zinc-300">{product.format}</p>
          </div>
        )}

        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            {product.collection}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
          <p className="mt-6 text-lg text-zinc-400 leading-8">{product.description}</p>

          {product.format && (
            <p className="mt-6 text-zinc-300">
              <strong>Format:</strong> {product.format}
            </p>
          )}

          <Link
            href={`/kontakt?produkt=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center mt-9 px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
          >
            Be om pris
          </Link>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold mb-7">Flere i kolleksjonen</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                href={`/produkter/${related.slug}`}
                className="group rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden hover:border-zinc-500 transition"
              >
                {related.image ? (
                  <Image
                    src={related.image}
                    alt={related.name}
                    width={600}
                    height={400}
                    className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
                  />
                ) : (
                  <div className="h-40 p-5 flex items-end bg-zinc-900">
                    <p className="text-sm font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                      {related.format}
                    </p>
                  </div>
                )}
                <div className="p-5">
                  <h3 className="font-semibold">{related.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
