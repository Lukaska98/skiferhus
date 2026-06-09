import Link from "next/link";

export default function TakkPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">
          Takk for henvendelsen!
        </h1>

        <p className="text-zinc-400 mb-8">
          Vi tar kontakt så snart som mulig.
        </p>

        <Link
          href="/"
          className="bg-white text-black px-6 py-3 rounded-lg"
        >
          Til forsiden
        </Link>
      </div>
    </section>
  );
}