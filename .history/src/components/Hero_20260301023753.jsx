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

      <div className="flex gap-6">
        <button className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold">
          Ver Proyectos
        </button>

        <button className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-xl font-semibold">
          Contacto
        </button>
      </div>

    </section>
  )
}

export default Hero