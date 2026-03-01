import AnimatedBackground from "./components/AnimatedBackground";
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-[#0A1224] to-[#050816] text-white">
      
      <AnimatedBackground />
      <LeftSidebar />

      <div className="ml-[300px] relative z-10 p-10">
        <section id="inicio" className="min-h-screen">
          <h1 className="text-5xl font-bold">Sebastián Gómez</h1>
        </section>

        <section id="sobre" className="min-h-screen">
          <h2 className="text-3xl">Sobre mí</h2>
        </section>

        <section id="proyectos" className="min-h-screen">
          <h2 className="text-3xl">Proyectos</h2>
        </section>

        <section id="habilidades" className="min-h-screen">
          <h2 className="text-3xl">Tecnologías</h2>
        </section>
      </div>

    </div>
  );
}

export default App;