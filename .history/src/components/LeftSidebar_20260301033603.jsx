import { useEffect, useState } from "react";
import { Github, Linkedin, Download } from "lucide-react";
import foto from "../assets/foto-sebastian.jpg";

function LeftSidebar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["inicio", "sobre", "proyectos", "habilidades"];
      let current = "inicio";

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

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = [
    { name: "Inicio", id: "inicio" },
    { name: "Sobre mí", id: "sobre" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Tecnologías", id: "habilidades" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-[300px] flex flex-col justify-between items-center px-6 py-10 z-50 bg-[#0A1224] border-r border-[#1C2541]">
      
      {/* Perfil */}
      <div className="flex flex-col items-center gap-4">
        <img
          src={foto}
          alt="Sebastián Gómez"
          className="w-40 h-40 object-cover rounded-full border-4 border-cyan-400 shadow-lg"
        />

        <h1 className="text-xl font-bold text-cyan-400 text-center">
          Sebastián
        </h1>

        <p className="text-gray-400 text-sm text-center">
          Full Stack Developer
        </p>
      </div>

      {/* Links */}
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

      {/* Redes */}
      <div className="flex gap-4">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-800 hover:bg-sky-500 transition"
        >
          <Linkedin size={22} />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl bg-slate-800 hover:bg-sky-500 transition"
        >
          <Github size={22} />
        </a>

        <a
          href="/CV-Sebastian-Gomez.pdf"
          download
          className="flex items-center gap-2 px-3 py-2 rounded-xl font-semibold bg-sky-500 hover:bg-sky-600 text-white transition"
        >
          <Download size={18} />
          CV
        </a>
      </div>

      <div className="text-gray-500 text-sm text-center mt-6">
        © 2026 Sebastián
      </div>
    </div>
  );
}

export default LeftSidebar;