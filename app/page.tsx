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
  />
</Link>

          <nav className="hidden md:flex gap-8 text-sm uppercase">
            <a href="#hjem">Hjem</a>            
            <a href="#tjenester">Tjenester</a>          
            <a href="#kontakt">Kontakt</a>
          </nav>

        </div>
      </header>

      {/* HERO */}

      <section
        id="hjem"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >

        <Image
          src="/images/terrace.jpg"
          alt="Skifer"
          fill
          priority
          className="object-cover opacity-50"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center max-w-4xl px-6">

          <h1 className="text-7xl md:text-8xl font-bold mb-8">
            SKIFERHUS
          </h1>

          <p className="text-2xl mb-6">
  Eksklusive skifer- og natursteinsløsninger for hele Norge
</p>

          <p className="text-gray-300 text-lg mb-10">
            Tak • Fasader • Uteområder • Naturstein
          </p>

          <div className="flex justify-center gap-4">

            <a
              href="#galleri"
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold"
            >
              Se galleriet
            </a>

            <a
              href="#kontakt"
              className="border border-white px-8 py-4 rounded-lg"
            >
              Kontakt oss
            </a>

          </div>

        </div>

      </section>

      {/* OM OSS */}
<section className="max-w-6xl mx-auto px-6 py-10">

  <div className="grid md:grid-cols-3 gap-8">

    <div className="border border-zinc-800 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-3">
  ✓ Fokus på kvalitet
</h3>
      <p className="text-zinc-400">
        Vi bruker materialer og løsninger som varer i generasjoner.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-3">
  🤝 Personlig oppfølging
</h3>
      <p className="text-zinc-400">
        Tett dialog og oppfølging gjennom hele prosjektet.
      </p>
    </div>

    <div className="border border-zinc-800 rounded-xl p-8 text-center">
      <h3 className="text-3xl font-bold mb-3">
  🚚 Levering i hele Norge
</h3>
      <p className="text-zinc-400">
        Vi leverer og monterer skiferløsninger over hele landet.
      </p>
    </div>

  </div>

</section>

      <section className="max-w-4xl mx-auto px-6 py-45 text-center">

        <h2 className="text-4xl font-bold mb-8">
          Tradisjon møter moderne håndverk
        </h2>

        <p className="text-zinc-400 text-xl leading-8">
          Vi leverer eksklusive løsninger innen skifertak,
          natursteinsfasader og uteområder over hele Norge.
          Med fokus på kvalitet, detaljer og holdbarhet skaper
          vi prosjekter som varer i generasjoner.
        </p>

      </section>

      {/* TJENESTER */}

      <section
        id="tjenester"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12 text-center">
          Våre tjenester
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border border-zinc-800 p-8 rounded-xl hover:border-white hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl font-bold mb-4">Skifertak</h3>
            <p>Eksklusive og holdbare takløsninger.</p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-xl hover:border-white hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl font-bold mb-4">Skiferfasader</h3>
            <p>Moderne og tidløse fasadeløsninger.</p>
          </div>

          <div className="border border-zinc-800 p-8 rounded-xl hover:border-white hover:-translate-y-2 transition duration-300">
            <h3 className="text-3xl font-bold mb-4">Uteområder</h3>
            <p>Terrasser, trapper og naturstein i hage.</p>
          </div>

        </div>

      </section>

      {/* GALLERI */}

      <section
        id="galleri"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <h2 className="text-4xl font-bold mb-12 text-center">
          Galleri
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

         <Link href="/galleri/skifertak">
  <div className="relative h-[420px] overflow-hidden rounded-xl group cursor-pointer">

    <Image
      src="/images/roof.jpg"
      alt="Skifertak"
      fill
      className="object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h3 className="text-3xl font-bold">
        Skifertak
      </h3>
    </div>

  </div>
</Link>
<Link href="/galleri/fasader">
  <div className="relative h-[420px] overflow-hidden rounded-xl group">

    <Image
      src="/images/facade.jpg"
      alt="Fasader"
      fill
      className="object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h3 className="text-3xl font-bold">
        Fasader
      </h3>
    </div>

  </div>
</Link>
<Link href="/galleri/uteomrader">
  <div className="relative h-[420px] overflow-hidden rounded-xl group">

    <Image
      src="/images/terrace.jpg"
      alt="Uteområder"
      fill
      className="object-cover group-hover:scale-110 transition duration-700"
    />

    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
      <h3 className="text-3xl font-bold">
        Uteområder
      </h3>
    </div>

  </div>
</Link>
          
        </div>
      </section>

{/* HVORFOR VELGE OSS */}

<section className="py-24 bg-zinc-950">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h2 className="text-4xl font-bold mb-8">
      Hvorfor velge Skiferhus?
    </h2>

    <p className="text-zinc-400 max-w-3xl mx-auto mb-16">
      Vi kombinerer tradisjonelt håndverk med moderne løsninger for å skape
      varige resultater i skifer og naturstein.
    </p>

    <div className="grid md:grid-cols-3 gap-10">

      <div className="border border-zinc-800 rounded-xl p-8">
  <h3 className="text-2xl font-semibold mb-4">
    Fagkunnskap
  </h3>

  <p className="text-zinc-400">
    Solid kompetanse innen skifer og naturstein.
  </p>
</div>
      <div className="border border-zinc-800 rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          Kvalitet
        </h3>

        <p className="text-zinc-400">
          Materialer og utførelse som er bygget
          for å vare i generasjoner.
        </p>
      </div>

      <div className="border border-zinc-800 rounded-xl p-8">
        <h3 className="text-2xl font-semibold mb-4">
          Hele Norge
        </h3>

        <p className="text-zinc-400">
          Levering og montering for kunder
          over hele landet.
        </p>
      </div>

    </div>

  </div>

</section>
   {/* KONTAKT */}

<section
  id="kontakt"
  className="bg-zinc-950 py-24"
>
  <div className="max-w-4xl mx-auto px-6 text-center">

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
  action="https://formsubmit.co/el/muzuku"
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
            <p className="text-gray-400">
              Eksklusive skifer- og natursteinsløsninger for hele Norge.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Tjenester
            </h3>

            <ul className="space-y-2 text-gray-400">
<li>Skifertak</li>
<li>Skiferfasader</li>
<li>Uteområder</li>
            </ul>
          </div>

<div>
  <h3 className="font-semibold mb-4">
    Kontakt
  </h3>

  <div className="space-y-3 text-gray-400">

    <p>

      <a href="mailto:post@skiferhus.no">
       ✉ post@skiferhus.no
</a>
    </p>

    <p>
      <a href="tel:+4794084593">
        ☎ +47 940 84 593
</a>

    </p>

    <p>
      📍 Norge
    </p>

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