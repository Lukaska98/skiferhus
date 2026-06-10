import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const product = products.find(
    (p) => p.slug === slug
  );

  if (!product) {
    return {
      title: "Produkt ikke funnet | Skiferhus",
    };
  }

  return {
    title: `${product.name} | Skiferhus`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return <h1>Produkt ikke funnet</h1>;
  }

  return (
    
    <main className="max-w-6xl mx-auto px-10 py-16">
        <div className="flex items-center justify-between mb-20">

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
<Image
  src={product.image}
  alt={product.name}
  width={1200}
  height={800}
className="rounded-xl mb-8 w-full h-[450px] object-cover"
/>

      <h1 className="text-4xl font-bold">{product.name}</h1>

      <p className="mt-4">{product.description}</p>

      <p className="mt-2">
        Kategori: {product.category}
      </p>
      <div className="mt-6 space-y-2">
  <p>
    <strong>Farge:</strong> {product.color}
  </p>

  <p>
    <strong>Tykkelse:</strong> {product.thickness}
  </p>

  <p>
    <strong>Bruksområde:</strong> {product.usage}
  </p>
</div>
 <Link
  href={`/kontakt?produkt=${encodeURIComponent(product.name)}`}
  className="inline-flex items-center mt-8 px-8 py-4 bg-white text-black rounded-lg font-semibold"
>
  Få tilbud
</Link>

<h2 className="text-2xl font-bold mt-16 mb-6">
  Relaterte produkter
</h2>

<div className="grid md:grid-cols-3 gap-6">
  {products
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3)
    .map((related) => (
      <Link
        key={related.slug}
        href={`/produkter/${related.slug}`}
        className="border border-zinc-700 rounded-xl overflow-hidden"
      >
        <Image
          src={related.image}
          alt={related.name}
          width={600}
          height={400}
          className="w-full h-40 object-cover"
        />
      

        <div className="p-4">
          <h3 className="font-semibold">
            {related.name}
          </h3>
        </div>
      </Link>
    ))}
</div>
    </main>
  );
}