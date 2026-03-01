import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { Sun, Moon } from "lucide-react";
// Remove the unused import

function App() {
  const [darkMode, setDarkMode] = useState(true); // true = oscuro

  return (
    <div className="relative">
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Secciones */}
      <Hero darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />

      {/* Botón flotante para cambiar tema */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-xl transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white hover:bg-sky-500" : "bg-gray-200 text-black hover:bg-sky-300"
        }`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}

export default App