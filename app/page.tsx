import Image from "next/image";
import Link from "next/link";

const stounlineProducts = [
  {
    name: "STOUNLINE Americano",
    slug: "stounline-americano",
    image: "/images/stounline/americano.png",
  },
  {
    name: "STOUNLINE Matcha",
    slug: "stounline-matcha",
    image: "/images/stounline/matcha.png",
  },
  {
    name: "STOUNLINE Machiato",
    slug: "stounline-machiato",
    image: "/images/stounline/machiato.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/">
            <Image
              src="/logo.svg"
              alt="Skiferhus"
              width={220}
              height={60}
              className="h-12 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#hjem">Hjem</a>
            <Link href="/produkter">Produkter</Link>
            <a href="#inspirasjon">Inspirasjon</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section
        id="hjem"
        className="relative h-[85vh] flex items-center justify-center overflow-hidden"
      >
        <Image
          src="/images/hero-slate.png"
          alt="Skifer"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 text-center max-w-4xl px-6 -mt-16 md:-mt-24">
          <p className="text-sm font-semibold tracking-[0.24em] text-white/70 uppercase mb-5">
            Skiferhus
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6">
            Utvalgt skifer til tak og fasade
          </h1>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl mx-auto">
            Vi selger et nøye utvalgt sortiment fra STOUNLINE, RIO GRANDE og
            CUPA PIZARRAS.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <Link
              href="/produkter"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-zinc-200 transition"
            >
              Se produkter
            </Link>
            <a
              href="#kontakt"
              className="border border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition"
            >
              Be om pris
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border border-zinc-800 rounded-xl p-7">
            <h2 className="text-xl font-semibold mb-3">Utvalgt sortiment</h2>
            <p className="text-zinc-400 leading-7">
              Skifer fra nøye utvalgte kolleksjoner.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-xl p-7">
            <h2 className="text-xl font-semibold mb-3">Kun produktsalg</h2>
            <p className="text-zinc-400 leading-7">
              Vi selger skifer til tak og fasade.
            </p>
          </div>
          <div className="border border-zinc-800 rounded-xl p-7">
            <h2 className="text-xl font-semibold mb-3">Pris på forespørsel</h2>
            <p className="text-zinc-400 leading-7">
              Kontakt oss for pris og tilgjengelighet.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] text-zinc-400 uppercase mb-4">
            Produkter
          </p>
          <h2 className="text-4xl font-bold mb-4">Kolleksjoner vi fører</h2>
          <p className="text-zinc-400 text-lg leading-8">
            Se hele sortimentet og velg produktet du ønsker pris på.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/produkter/stounline"
            className="group relative min-h-96 overflow-hidden rounded-2xl border border-zinc-800"
          >
            <Image
              src="/images/stounline/stounline1.png"
              alt="STOUNLINE"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-65 group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="text-sm font-semibold tracking-[0.18em] text-zinc-300 uppercase mb-3">
                Fasadeskifer
              </p>
              <h3 className="text-3xl font-bold">STOUNLINE</h3>
              <p className="mt-3 text-zinc-200">3 produkter →</p>
            </div>
          </Link>

          <Link
            href="/produkter/rio-grande"
            className="group min-h-96 rounded-2xl border border-zinc-800 bg-zinc-950 p-7 flex flex-col justify-end hover:border-zinc-500 hover:bg-zinc-900 transition"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase mb-3">
              Fasadeskifer
            </p>
            <h3 className="text-3xl font-bold">RIO GRANDE</h3>
            <p className="mt-3 text-zinc-400 leading-7">
              Machiato Long, Americano Long, Matcha Vertical og Americano Vertical.
            </p>
            <p className="mt-6 text-zinc-200">4 produkter →</p>
          </Link>

          <Link
            href="/produkter/takskifer"
            className="group min-h-96 rounded-2xl border border-zinc-800 bg-zinc-950 p-7 flex flex-col justify-end hover:border-zinc-500 hover:bg-zinc-900 transition"
          >
            <p className="text-sm font-semibold tracking-[0.18em] text-zinc-500 uppercase mb-3">
              Takskifer
            </p>
            <h3 className="text-3xl font-bold">CUPA PIZARRAS</h3>
            <p className="mt-3 text-zinc-400 leading-7">
              RHOMB, RECTANGULO og CUPA PIZARRAS-kolleksjonene.
            </p>
            <p className="mt-6 text-zinc-200">Se kolleksjoner →</p>
          </Link>
        </div>
      </section>

      <section id="inspirasjon" className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">STOUNLINE</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Tre produkter fra STOUNLINE-kolleksjonen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stounlineProducts.map((product) => (
            <Link
              key={product.name}
              href={`/produkter/${product.slug}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold">{product.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="kontakt" className="bg-zinc-950 py-24">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-5">Be om pris</h2>
          <p className="mb-8 text-zinc-400 leading-7">
            Send oss produktet du er interessert i, så svarer vi med pris og
            tilgjengelighet.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 text-zinc-300 mb-10">
            <a href="mailto:post@skiferhus.no" className="hover:text-white">
              post@skiferhus.no
            </a>
            <a href="tel:+4794084593" className="hover:text-white">
              +47 940 84 593
            </a>
          </div>

          <form
            action="https://formsubmit.co/post@skiferhus.no"
            method="POST"
            className="space-y-4"
          >
            <input type="hidden" name="_subject" value="Prisforespørsel fra Skiferhus" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://www.skiferhus.no/takk" />

            <input
              type="text"
              name="name"
              placeholder="Navn"
              required
              className="w-full p-4 rounded bg-zinc-900 border border-zinc-700"
            />
            <input
              type="email"
              name="email"
              placeholder="E-post"
              required
              className="w-full p-4 rounded bg-zinc-900 border border-zinc-700"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Produkt og melding"
              required
              className="w-full p-4 rounded bg-zinc-900 border border-zinc-700"
            />
            <button
              type="submit"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-zinc-200 transition"
            >
              Send prisforespørsel
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-zinc-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">SKIFERHUS</h2>
            <p className="text-zinc-400 leading-7">
              Utvalgt skifer til tak og fasade.
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Produkter</h2>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <Link href="/produkter/stounline" className="hover:text-white transition">
                  STOUNLINE
                </Link>
              </li>
              <li>
                <Link href="/produkter/rio-grande" className="hover:text-white transition">
                  RIO GRANDE
                </Link>
              </li>
              <li>
                <Link href="/produkter/takskifer" className="hover:text-white transition">
                  CUPA PIZARRAS
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold mb-4">Kontakt</h2>
            <div className="space-y-2 text-zinc-400">
              <a href="mailto:post@skiferhus.no" className="block hover:text-white transition">
                post@skiferhus.no
              </a>
              <a href="tel:+4794084593" className="block hover:text-white transition">
                +47 940 84 593
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-zinc-500 mt-12">
          © {new Date().getFullYear()} Skiferhus. Alle rettigheter reservert.
        </p>
      </footer>
    </main>
  );
}
