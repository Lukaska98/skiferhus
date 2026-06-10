import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-8">Siden finnes ikke.</p>

      <Link
        href="/"
        className="bg-white text-black px-6 py-3 rounded-lg"
      >
        Til forsiden
      </Link>
    </div>
  );
}