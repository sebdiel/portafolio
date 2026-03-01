import { useEffect, useState } from "react";
import foto from "../assets/foto-sebastian.jpg";

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
      className={`fixed left-0 top-0 h-screen w-56 flex flex-col justify-between items-center px-6 py-10 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1224] shadow-2xl border-r border-[#1C2541]"
          : "bg-[#0A1224]/95 backdrop-blur-md border-r border-[#1C2541]"
      }`}
    >
      {/* Perfil */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={foto}
          alt="Sebastián Gómez"
          className="w-40 h-28 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition duration-500 hover:scale-105"
        />

        <h1 className="text-xl font-bold text-cyan-400 text-center">
          Sebastián
        </h1>

        <p className="text-gray-400 text-sm text-center">
          Full Stack Developer
        </p>
      </div>

      {/* Links */}
      <ul className="flex flex-col gap-6 text-gray-400 text-lg">
        <li>
          <a
            href="#inicio"
            className="hover:text-white hover:translate-x-1 transition-all duration-300"
          >
            Inicio
          </a>
        </li>
        <li>
          <a
            href="#sobre"
            className="hover:text-white hover:translate-x-1 transition-all duration-300"
          >
            Sobre mí
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            className="hover:text-white hover:translate-x-1 transition-all duration-300"
          >
            Proyectos
          </a>
        </li>
      </ul>

      {/* Footer */}
      <div className="text-gray-500 text-sm text-center">
        © 2026 Sebastián
      </div>
    </div>
  );
}

export default LeftSidebar;