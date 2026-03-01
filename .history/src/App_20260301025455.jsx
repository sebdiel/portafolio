import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import LeftSidebar from "./components/LeftSidebar";
import { Sun, Moon } from "lucide-react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Sidebar fijo */}
      <LeftSidebar />

      {/* Contenido principal desplazado */}
      <main className="pl-56">
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Skills darkMode={darkMode} />
      </main>

      {/* Botón Dark Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`fixed bottom-6 right-6 p-3 rounded-full shadow-xl transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 text-white hover:bg-gray-600"
            : "bg-gray-200 text-black hover:bg-gray-400"
        }`}
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}

export default App;