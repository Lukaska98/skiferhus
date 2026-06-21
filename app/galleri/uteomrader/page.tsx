import Link from "next/link";
import Image from "next/image";

export default function uteomraderPage() {
  return (
    
    
    <section className="min-h-screen bg-black text-white py-24">
      <div className="max-w-6xl mx-auto px-6">

        <Link
          href="/#galleri"
          className="inline-block mb-8 text-zinc-400 hover:text-white"
        >
          ← Tilbake til galleri
        </Link>

        <h1 className="text-5xl font-bold mb-12">
          Uteområder
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="relative h-[400px]">
            <Image
              src="/images/uteomrader1.jpg"
              alt="Uteområder"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/uteomrader2.jpg"
              alt="Uteområder"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/uteomrader3.jpg"
              alt="Uteområder"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/uteomrader4.jpg"
              alt="Uteområder  "
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

        </div>

      </div>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur">
  <div className="max-w-7xl mx-auto px-6 py-5">

    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Skiferhus"
        width={220}
        height={60}
      />
    </Link>

  </div>
</header>
    </section>
  );
}