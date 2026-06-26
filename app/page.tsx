import Image from "next/image";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Link from "next/link";



export default function Home() {
  return (
    <main className="bg-black text-white">

      {/* HEADER */}

      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <Link href="/">
  <Image
    src="/logo.svg"
    alt="Skiferhus"
    width={220}
    height={60}
    className="h-12 w-auto"
  />
</Link>

<nav className="hidden md:flex gap-8 text-sm uppercase">
  <a href="#hjem">Hjem</a>
  <a href="#tjenester">Tjenester</a>

  <Link href="/produkter">
    Produkter
  </Link>

  <a href="#galleri">
    Inspirasjon
  </a>

  <a href="#kontakt">
    Kontakt
  </a>
</nav>

        </div>
      </header>

      {/* HERO */}

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

<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-200/90">
  Skifer for generasjoner
</h1>

<p className="text-lg md:text-xl text-gray-400 mb-6">
  Takskifer, fasadeskifer og naturstein levert med fokus på kvalitet og håndverk.
</p>

          <p className="text-gray-400 text-base mb-12 tracking-wide">
            Tak • Fasader • Uteområder • Naturstein
          </p>

          <div className="flex justify-center gap-4">

<a
  href="#kontakt"
  className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
>
  Få tilbud
  </a>
<Link
  href="/produkter"
  className="border border-white px-8 py-4 rounded-lg"
>
  Se produkter
</Link>

          </div>

        </div>

      </section>

      {/* OM OSS */}
<section className="max-w-6xl mx-auto px-6 py-10">

  <div className="grid md:grid-cols-3 gap-8">

    <div className="border rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-3">
  ✓ Fokus på kvalitet
</h3>
      <p className="text-zinc-400">
        Vi bruker materialer og løsninger som varer i generasjoner.
      </p>
    </div>

    <div className="border rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-3">
  🤝 Personlig oppfølging
</h3>
      <p className="text-zinc-400">
        Tett dialog og oppfølging gjennom hele prosjektet.
      </p>
    </div>

    <div className="border  rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-3">
  🚚 Levering i hele Norge
</h3>
      <p className="text-zinc-400">
        Vi leverer og monterer skiferløsninger over hele landet.
      </p>
    </div>

  </div>

</section>


 {/* TJENESTER */}

<section
  id="tjenester"
  className="max-w-7xl mx-auto px-6 py-24"
>
  <h2 className="text-4xl font-bold text-center mb-12">
    Våre tjenester
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Takskifer */}
    <div className="border border-zinc-800 rounded-xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

      <div className="relative h-60">
        <Image
          src="/images/tak1.jpg"
          alt="Takskifer"
          fill
          sizes="33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-bold mb-4">
          Takskifer
        </h3>

        <p className="text-zinc-400">
          Eksklusive og holdbare takløsninger for nye og eksisterende bygg.
        </p>
      </div>

    </div>

    {/* Fasadeskifer */}
    <div className="border border-zinc-800 rounded-xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

      <div className="relative h-60">
        <Image
          src="/images/fasader4.jpg"
          alt="Fasadeskifer"
          fill
          sizes="33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-bold mb-4">
          Fasadeskifer
        </h3>

        <p className="text-zinc-400">
          Moderne og tidløse fasadeløsninger i naturstein.
        </p>
      </div>

    </div>

    {/* Uteområder */}
    <div className="border border-zinc-800 rounded-xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

      <div className="relative h-60">
        <Image
          src="/images/uteomrader1.jpg"
          alt="Uteområder"
          fill
          sizes="33vw"
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-bold mb-4">
          Uteområder
        </h3>

        <p className="text-zinc-400">
          Terrasser, trapper, hagemurer og utearealer i naturstein.
        </p>
      </div>

    </div>

  </div>
</section>

{/* PROSJEKTER */}

<section
  id="galleri"
  className="max-w-7xl mx-auto px-6 py-18"
>
  <div className="text-center mb-14">
    <h2 className="text-4xl font-bold mb-4">
      Utvalgte prosjekter
    </h2>

    <p className="text-zinc-400 max-w-2xl mx-auto">
      Eksempler på skiferprosjekter innen tak, fasader og uteområder.
    </p>
  </div>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/images/tak1.jpg"
        alt="Takskifer"
        fill
        sizes="33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold">Takskifer</h3>
      </div>
    </div>

    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/images/fasader1.jpg"
        alt="Fasadeskifer"
        fill
        sizes="33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold">Fasadeskifer</h3>
      </div>
    </div>

    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/images/uteomrader1.jpg"
        alt="Uteområder"
        fill
        sizes="33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold">Uteområder</h3>
      </div>
    </div>

    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/images/tak2.jpg"
        alt="Takprosjekt"
        fill
        sizes="33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold">Takprosjekt</h3>
      </div>
    </div>

    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/images/fasader2.jpg"
        alt="Naturstein"
        fill
        sizes="33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold">Naturstein</h3>
      </div>
    </div>

    <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl">
      <Image
        src="/images/fasader3.jpg"
        alt="Skiferfasade"
        fill
        sizes="33vw"
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/45 transition duration-500" />
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold">Skiferfasade</h3>
      </div>
    </div>

  </div>
</section>

   {/* KONTAKT */}

<section
  id="kontakt"
  className="bg-zinc-950 py-24"
>
  <div className="max-w-2xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-8">
      Kontakt oss
    </h2>

    <p className="mb-6 text-gray-400">
      Levering og montering i hele Norge
    </p>

    <div className="flex justify-center gap-10 text-zinc-400 mb-10">

      <div>
        <p className="font-semibold text-white">
          E-post
        </p>
   <a href="mailto:post@skiferhus.no">
  post@skiferhus.no
</a>
      </div>

      <div>
        <p className="font-semibold text-white">
          Telefon
        </p>
   <a href="tel:+4794084593">
  +47 940 84 593
</a>
      </div>

    </div>

<form
  action="https://formsubmit.co/post@skiferhus.no"
  method="POST"
  className="space-y-4"
>
  <input
    type="hidden"
    name="_subject"
    value="Nauja užklausa iš Skiferhus"
  />
<input
  type="hidden"
  name="_template"
  value="table"
/>
  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_next"
    value="https://skiferhus.no/takk"
  />

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
    placeholder="Melding"
    required
    className="w-full p-4 rounded bg-zinc-900 border border-zinc-700"
  />

  <button
    type="submit"
    className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
  >
    Send forespørsel
  </button>
</form>

  </div>
</section>

      {/* FOOTER */}

      <footer className="border-t border-zinc-800 py-12">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">
              SKIFERHUS
            </h3>
<p className="text-zinc-400 leading-7">
  Vi leverer eksklusive løsninger i skifer og naturstein til private, bedrifter og entreprenører over hele Norge.
</p>
          </div>

    <div>
  <h3 className="font-semibold mb-5 text-white">
    Tjenester
  </h3>

  <ul className="space-y-3 text-zinc-400">

    <li>
      <Link href="/produkter/takskifer" className="hover:text-white transition">
        Takskifer
      </Link>
    </li>

    <li>
      <Link href="/produkter/fasadeskifer" className="hover:text-white transition">
        Fasadeskifer
      </Link>
    </li>

    <li>
      <Link href="/produkter/uteomrader" className="hover:text-white transition">
        Uteområder
      </Link>
    </li>

  </ul>
</div>

<div>
  <h3 className="font-semibold mb-5 text-white">
    Kontakt
  </h3>

  <div className="space-y-4 text-zinc-400">

    <a
      href="mailto:post@skiferhus.no"
      className="flex items-center gap-3 hover:text-white transition"
    >
      <span>✉</span>
      <span>post@skiferhus.no</span>
    </a>

    <a
      href="tel:+4794084593"
      className="flex items-center gap-3 hover:text-white transition"
    >
      <span>☎</span>
      <span>+47 940 84 593</span>
    </a>

    <div className="flex items-center gap-3">
      <span>📍</span>
      <span>Hele Norge</span>
    </div>

  </div>
</div>

        </div>
<div className="mt-10 text-center text-zinc-500 text-sm">
  <p className="text-center text-sm text-zinc-500 mt-12">
  © {new Date().getFullYear()} Skiferhus. Alle rettigheter reservert.
</p>
</div>
      </footer>

    </main>
  );
}