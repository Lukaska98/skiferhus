import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/products";

export default function TakskiferPage() {
  const filteredProducts = products.filter(
    (p) => p.category === "Takskifer"
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">
        Takskifer
      </h1>
<Link href="/">
      <Image
        src="/logo.svg"
        alt="Skiferhus"
        width={220}
        height={60}
      />
    </Link>
 <Link
      href="/produkter"
      className="inline-flex items-center gap-2 text-zinc-400 hover:text-white"
    >
      ← Til produktoversikt
    </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/produkter/${product.slug}`}
            className="group"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="rounded-xl h-72 w-full object-cover"
            />

            <h2 className="text-xl font-semibold mt-4">
              {product.name}
            </h2>
          </Link>
        ))}
      </div>
    </main>
  );
}