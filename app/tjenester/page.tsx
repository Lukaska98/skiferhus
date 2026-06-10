import Link from "next/link";
import Image from "next/image";

export default function TjenesterPage() {
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
          href="/"
          className="text-zinc-400 hover:text-white"
        >
          ← Til forsiden
        </Link>
      </div>

      <h1 className="text-5xl font-bold mb-12">
        Tjenester
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Takskifer
          </h2>

          <p className="text-zinc-400">
            Levering og montering av naturskifer til nye tak og rehabiliteringsprosjekter.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Fasadeskifer
          </h2>

          <p className="text-zinc-400">
            Moderne og tradisjonelle fasadeløsninger i naturstein.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Terrasseskifer
          </h2>

          <p className="text-zinc-400">
            Skreddersydde løsninger for terrasser, uteområder og hageprosjekter.
          </p>
        </div>

        <div className="border border-zinc-800 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Restaurering
          </h2>

          <p className="text-zinc-400">
            Reparasjon, utskifting og restaurering av eksisterende skiferarbeid.
          </p>
        </div>

      </div>

      <div className="mt-16">
        <Link
          href="/kontakt"
          className="inline-flex px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          Få tilbud
        </Link>
      </div>

    </main>
  );
}