"use client ";
export default function About() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-6">
      <h1 className="text-3xl md:text-4xl font-semibold text-[#c8b17f]">
        Bienvenid@ a Mystere Fragancias✦
      </h1>

      <p className="text-lg md:text-xl text-[#c8b17f] max-w-2xl">
        Somos amantes de la perfumería árabe, donde cada aroma cuenta una
        historia
      </p>

      <p className="text-lg md:text-xl text-[#c8b17f] max-w-2xl">
        Si estás buscando una fragancia especial, escríbenos sin compromiso: te
        ayudamos a encontrar la indicada y te cotizamos al instante
      </p>

      <p className="text-lg md:text-xl text-[#c8b17f] max-w-2xl">
        Descubre el arte de perfumar con estilo.
      </p>

      <div className="flex flex-row justify-center gap-4 pt-6">
        <a
          href="https://wa.me/2615161952" /* Reemplaza con tu número */
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-[#c8b17f] hover:bg-[#b39e64] text-[#0a0a14] font-semibold rounded-lg transition"
        >
          WhatsApp
        </a>
        <a
          href="https://www.instagram.com/mystere.fragancias/" /* Reemplaza con tu @usuario */
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-[#c8b17f] hover:bg-[#b39e64] text-[#0a0a14] font-semibold rounded-lg transition"
        >
          Instagram
        </a>
      </div>
    </section>
  );
}
