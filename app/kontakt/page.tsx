import Link from "next/link";
import Image from "next/image";
export default async function KontaktPage({
  searchParams,
}: {
  searchParams: Promise<{ produkt?: string }>;
}) {
  const { produkt = "" } = await searchParams;

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
     
      <h1 className="text-4xl font-bold mb-8">
        Kontakt oss
      </h1>


      <form
        action="https://formsubmit.co/post@skiferhus.no"
        method="POST"
        className="space-y-4"
      >
        <input
          type="hidden"
          name="_next"
          value="https://skiferhus.no/takk"
        />

        <input
          type="hidden"
          name="_subject"
          value="Ny forespørsel fra Skiferhus"
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

    

        <textarea
          name="message"
          placeholder="Melding"
          rows={6}
          required
          className="w-full border border-zinc-700 rounded-lg p-3"
        />

        <button
          type="submit"
          className="px-6 py-3 bg-white text-black rounded-lg font-medium"
        >
          Send forespørsel
        </button>
      </form>
    </main>
  );
}