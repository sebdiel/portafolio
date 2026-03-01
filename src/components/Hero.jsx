import { Typewriter } from "react-simple-typewriter";
import { Github, Linkedin, Download } from "lucide-react";

function Hero({ darkMode }) {
  return (
    <section
      id="inicio"
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
          : "bg-gradient-to-br from-sky-100 via-sky-200 to-sky-100 text-black"
      }`}
    >
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Sebastián Gómez
        </h1>

        <h2
          className={`text-2xl md:text-3xl mb-6 font-semibold ${
            darkMode ? "text-sky-400" : "text-sky-600"
          }`}
        >
          <Typewriter
            words={[
              "Desarrollador Full Stack",
              "React & PHP Developer",
              "Construyendo soluciones escalables",
            ]}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
            loop={0}
            cursor
            cursorStyle="|"
          />
        </h2>

        <p className={`mb-8 ${darkMode ? "text-gray-400" : "text-gray-700"}`}>
          Construyo aplicaciones web modernas enfocadas en rendimiento,
          escalabilidad y buenas prácticas de arquitectura.
        </p>
      </div>
    </section>
  );
}

export default Hero;