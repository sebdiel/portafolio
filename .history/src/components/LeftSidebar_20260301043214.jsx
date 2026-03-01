import { useEffect, useState } from "react";
import { Github, Linkedin, Download } from "lucide-react";
import foto from "../assets/foto-sebastian.jpg";

function LeftSidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const sidebarHeight = 0; // Ajusta si tu sidebar cubre parte de la sección

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["inicio", "sobre", "proyectos", "habilidades"];
      let current = activeSection;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Inicializa activeSection al cargar
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -sidebarHeight;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const links = [
    { name: "Inicio", id: "inicio" },
    { name: "Sobre mí", id: "sobre" },
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

      {/* Links de navegación */}
      <ul className="flex flex-col gap-6 text-gray-400 text-lg mt-8">
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

      {/* Redes sociales y CV en la parte inferior */}
      <div className="flex flex-col items-center gap-4 mt-8">
        <div className="flex gap-4">
          <a
            href="https://linkedin.com/in/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-800 hover:bg-sky-500 transition duration-300"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://github.com/sebdiel"
            target="_blank"git add .
git commit -m "Mejoras en Hero y About"
git push origin main
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-slate-800 hover:bg-sky-500 transition duration-300"
          >
            <Github size={22} />
          </a>

          <a
            href="/CV-Sebastian-Gomez.pdf"
            download
            className="flex items-center gap-2 px-3 py-2 rounded-xl font-semibold bg-sky-500 hover:bg-sky-600 text-white transition transform hover:scale-105"
          >
            <Download size={18} />
            CV
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-gray-500 text-sm text-center mt-6">
        © 2026 Sebastián
      </div>
    </div>
  );
}

export default LeftSidebar;