import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { slateCollections } from "../../../data/product-series";

type SeriesPageProps = {
  params: Promise<{ slug: string }>;
};

function getCollection(slug: string) {
  return slateCollections.find((collection) => collection.slug === slug);
}

export function generateStaticParams() {
  return slateCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({
  params,
}: SeriesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);

  return {
    title: collection ? collection.name : "Kolleksjon",
    description: collection
      ? `${collection.name} takskifer fra Skiferhus.`
      : "Takskifer fra Skiferhus.",
  };
}

export default async function SlateCollectionPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const collection = getCollection(slug);

  if (!collection) {
    notFound();
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
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
          href="/produkter/takskifer"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          ← Til takskifer
        </Link>
      </div>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-5">
          CUPA PIZARRAS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{collection.name}</h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          {collection.description} Kontakt oss for pris, tilgjengelighet og
          bestilling.
        </p>

        <Link
          href={`/kontakt?produkt=${encodeURIComponent(collection.name)}`}
          className="inline-flex items-center mt-9 px-7 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
        >
          Be om pris
        </Link>
      </section>
    </main>
  );
}
