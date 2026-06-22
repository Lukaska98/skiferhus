import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { newProductSeries } from "../../../data/product-series";

type SeriesPageProps = {
  params: Promise<{ slug: string }>;
};

function getSeries(slug: string) {
  return newProductSeries.find((series) => series.slug === slug);
}

export function generateStaticParams() {
  return newProductSeries.map((series) => ({ slug: series.slug }));
}

export async function generateMetadata({
  params,
}: SeriesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const series = getSeries(slug);

  return {
    title: series ? series.name : "Produktserie",
    description: series
      ? `${series.name} fra Skiferhus.`
      : "Produktserie fra Skiferhus.",
  };
}

export default async function ProductSeriesPage({ params }: SeriesPageProps) {
  const { slug } = await params;
  const series = getSeries(slug);

  if (!series) {
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
          href="/produkter"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
        >
          ← Til produktoversikt
        </Link>
      </div>

      <section className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 md:p-12">
        <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-5">
          {series.category}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{series.name}</h1>
        <p className="max-w-2xl text-lg leading-8 text-zinc-400">
          Vi oppdaterer denne produktsiden med produktinformasjon,
          spesifikasjoner og referansebilder. Ta kontakt for veiledning om
          løsningen som passer prosjektet ditt.
        </p>

        <Link
          href={`/kontakt?produkt=${encodeURIComponent(series.name)}`}
          className="inline-flex items-center mt-9 px-7 py-4 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition"
        >
          Be om tilbud
        </Link>
      </section>
    </main>
  );
}
