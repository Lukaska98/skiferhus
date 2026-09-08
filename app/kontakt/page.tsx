import Image from "next/image";
import Link from "next/link";

export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ produkt?: string }>;
}) {
  const { produkt = "" } = await searchParams;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
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
        <Link href="/produkter" className="text-zinc-400 hover:text-white">
          ← Til produkter
        </Link>
      </div>

      <h1 className="text-4xl font-bold mb-4">Be om pris</h1>
      <p className="text-zinc-400 leading-7 mb-10">
        Send oss produktet du er interessert i, så svarer vi med pris og
        tilgjengelighet.
      </p>

      <form
        action="https://formsubmit.co/post@skiferhus.no"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_next" value="https://www.skiferhus.no/takk" />
        <input type="hidden" name="_subject" value="Prisforespørsel fra Skiferhus" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />

        <input
          type="text"
          name="name"
          placeholder="Navn"
          required
          className="w-full border border-zinc-700 rounded-lg p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="E-post"
          required
          className="w-full border border-zinc-700 rounded-lg p-3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Telefon"
          className="w-full border border-zinc-700 rounded-lg p-3"
        />

        {produkt && (
          <>
            <input type="hidden" name="produkt" value={produkt} />
            <div className="border border-zinc-700 rounded-lg p-3">
              <span className="text-zinc-400">Produkt:</span>
              <div className="font-medium">{produkt}</div>
            </div>
          </>
        )}

        <textarea
          name="message"
          placeholder="Melding"
          rows={6}
          required
          className="w-full border border-zinc-700 rounded-lg p-3"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-zinc-200 transition"
        >
          Send prisforespørsel
        </button>
      </form>
    </main>
  );
}
