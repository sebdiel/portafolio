import { useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import { Sun, Moon } from "lucide-react";
// Remove the unused import

function App() {
  return (
    <div className="bg-slate-950">
      <Hero />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App