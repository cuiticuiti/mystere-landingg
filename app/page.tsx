import About from "@/components/about";
import Parfums from "@/components/parfums";
import { getPerfumes } from "@/app/lib/getPerfumes";
import Image from "next/image";

export default function Home() {
  // Carga dinámica de todos los perfumes disponibles
  const perfumes = getPerfumes();
  return (
    <div className="border-2 border-[#c8b17f] m-4 rounded-lg overflow-hidden">
      <header className="py-6 bg-[#0a0a14] text-center">
        <Image
          src="/logo.png"
          alt="Mystere Fragancias Logo"
          width={400}
          height={400}
          className="mx-auto w-48 h-48 md:w-64 md:h-64"
          priority
        />
      </header>
      <About />
      <Parfums items={perfumes} />
    </div>
  );
}
