import ParticlesBackground from "./ParticlesBackground";
import foto from "../assets/foto-sebastian.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Download } from "lucide-react";

function Hero({ darkMode }) {
  return (
    <section
      id="inicio"
      className={`relative min-h-screen pt-24 flex items-center px-6 overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-br from-sky-100 via-sky-200 to-sky-100 text-black"
      }`}
    >
      <ParticlesBackground />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left animate-fadeInUp">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Fernando</h1>
          <h2 className={`text-2xl md:text-3xl mb-6 font-semibold ${
            darkMode ? "text-sky-400" : "text-sky-600"
          }`}>
            <Typewriter
              words={["Desarrollador Full Stack", "React & PHP Developer", "Construyendo soluciones escalables"]}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
              loop={0}
              cursor
              cursorStyle="|"
            />
      </h2>
          <p className={`mb-8 max-w-lg ${
            darkMode ? "text-gray-400" : "text-gray-700"
          }`}>
            Construyo aplicaciones web modernas enfocadas en rendimiento, escalabilidad y buenas prácticas de arquitectura.
      </p>
          <div className="flex gap-6 justify-center md:justify-start">
            <a
              href="https://linkedin.com/in/TU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-2xl transition duration-300 ${
                darkMode ? "bg-slate-800 hover:bg-sky-500" : "bg-slate-200 hover:bg-sky-300"
              }`}
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://github.com/TU_USUARIO"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-2xl transition duration-300 ${
                darkMode ? "bg-slate-800 hover:bg-sky-500" : "bg-slate-200 hover:bg-sky-300"
              }`}
            >
              <Github size={22} />
            </a>
            <a
              href="/CV-Sebastian-Gomez.pdf"
              download
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition transform hover:scale-105 ${
                darkMode ? "bg-sky-500 hover:bg-sky-600" : "bg-sky-300 hover:bg-sky-400 text-black"
              }`}
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </div>
        <div className="relative flex justify-center animate-fadeIn">
          <div
            className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 animate-pulse"
            style={{ backgroundColor: darkMode ? "#38bdf8" : "#0ea5e9" }}
          ></div>
          <img
            src={foto}
            alt="Sebastián Gómez"
            className="relative w-72 h-72 object-cover rounded-full border-4 shadow-2xl transition duration-500 hover:scale-105"
            style={{ borderColor: darkMode ? "#38bdf8" : "#0ea5e9" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;







sebas