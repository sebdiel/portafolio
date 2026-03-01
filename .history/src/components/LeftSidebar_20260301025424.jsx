import { useEffect, useState } from "react";

function LeftSidebar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-56 flex flex-col justify-between px-6 py-10 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-2xl border-r border-gray-800"
          : "bg-black/70 backdrop-blur-md border-r border-gray-800"
      }`}
    >
      {/* 🔝 Nombre arriba */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Sebastián
        </h1>
      </div>

      {/* 📌 Links centrados */}
      <ul className="flex flex-col gap-6 text-gray-400 text-lg">
        <li>
          <a href="#inicio" className="hover:text-white transition">
            Inicio
          </a>
        </li>
        <li>
          <a href="#sobre" className="hover:text-white transition">
            Sobre mí
          </a>
        </li>
        <li>
          <a href="#proyectos" className="hover:text-white transition">
            Proyectos
          </a>
        </li>
      </ul>

      {/* 🔽 Parte inferior */}
      <div className="text-gray-500 text-sm">
        © 2026
      </div>
    </div>
  );
}

export default LeftSidebar;