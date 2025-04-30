"use client";
import type { FC } from "react";
import { useState } from "react";
import Image from "next/image";

interface Perfume {
  src: string;
  info: string;
}

interface ParfumsProps {
  items: Perfume[];
}

const Parfums: FC<ParfumsProps> = ({ items }) => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#c8b17f] text-center mb-10">
        Nuestro catálogo
      </h2>

      <div className="columns-2 sm:columns-3 lg:columns-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="mb-6 break-inside-avoid">
            <div className="group relative flex items-center justify-center w-full overflow-hidden rounded-xl bg-[#0a0a14] ring-2 ring-[#c8b17f]/30 hover:ring-[#c8b17f] transition-all duration-300">
              <Image
                src={item.src}
                alt={`Perfume ${idx + 1}`}
                width={600}
                height={800}
                className="w-full h-auto object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                onClick={() => setActive(item.info)}
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        ))}
        {/* Modal */}
        {active && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setActive(null)}
          >
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={active}
                alt="Detalle perfume"
                fill
                sizes="90vw"
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Parfums;
