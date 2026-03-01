import { useEffect, useState } from "react";
import foto from "../assets/foto-sebastian.jpg";

function LeftSidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const sidebarHeight = 0; // Ajusta si tu sidebar tiene padding que cubre la sección

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = ["inicio", "about", "proyectos", "habilidades"];
      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para scroll suave con ajuste por sidebar fijo
  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -sidebarHeight; // Desplazamiento si es necesario
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveSection(id);
    }
  };

  const links = [
    { name: "Inicio", id: "inicio" },
    { name: "Sobre mí", id: "about" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Tecnologías", id: "habilidades" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-screen w-75 flex flex-col justify-between items-center px-6 py-10 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0A1224] shadow-2xl border-r border-[#1C2541]"
          : "bg-[#0A1224]/95 backdrop-blur-md border-r border-[#1C2541]"
      }`}
    >
      {/* Perfil */}
      <div className="relative flex flex-col items-center gap-4">
        <div
          className="absolute w-60 h-60 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ backgroundColor: "#38bdf8" }}
        ></div>

        <img
          src={foto}
          alt="Sebastián Gómez"
          className="relative w-60 h-60 object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_25px_rgba(56,189,248,0.4)] transition duration-500 hover:scale-105"
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
        {links.map((link) => (
          <li key={link.id}>
            <button
              onClick={() => handleClick(link.id)}
              className={`w-full text-left px-2 py-1 rounded-lg transition-all duration-300 ${
                activeSection === link.id
                  ? "bg-sky-500 text-white font-semibold"
                  : "hover:text-white hover:translate-x-1"
              }`}
            >
              {link.name}
            </button>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="text-gray-500 text-sm text-center">
        © 2026 Sebastián
      </div>
    </div>
  );
}

export default LeftSidebar;