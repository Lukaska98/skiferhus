import Link from "next/link";
import Image from "next/image";
export const metadata = {
  title: "Skiferfasader",
  description:
    "Eksklusive fasadeløsninger i skifer og naturstein for boliger og næringsbygg.",
};
export default function FasaderPage() {
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
          Fasader
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="relative h-[400px]">
            <Image
              src="/images/fasader1.jpg"
              alt="fasader "
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/fasader2.jpg"
              alt="fasader"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/fasader3.jpg"
              alt="fasader"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
              className="object-cover rounded-xl"
            />
          </div>

          <div className="relative h-[400px]">
            <Image
              src="/images/fasader4.jpg"
              alt="fasader"
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