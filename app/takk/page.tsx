import Link from "next/link";
import Image from "next/image";
import LeadEvent from "@/components/LeadEvent";

export default function TakkPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
<LeadEvent />
      <div className="flex justify-center mb-16">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Skiferhus"
            width={220}
            height={60}
            priority
          />
        </Link>
      </div>

      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Takk for henvendelsen!
        </h1>

        <p className="text-zinc-400 mb-12">
          Vi har mottatt forespørselen din og vil kontakte deg så snart som mulig.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/produkter"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            Se produkter
          </Link>

          <Link
            href="/"
            className="px-6 py-3 border border-zinc-700 rounded-lg"
          >
            Til forsiden
          </Link>
        </div>
      </div>

    </main>
  );
}