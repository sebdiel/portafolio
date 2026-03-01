function Navbar() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4 text-white">
        
        <h1 className="text-xl font-bold tracking-wide">
          Sebastián.dev
        </h1>

        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          <li className="hover:text-sky-400 transition cursor-pointer">Inicio</li>
          <li className="hover:text-sky-400 transition cursor-pointer">Sobre mí</li>
          <li className="hover:text-sky-400 transition cursor-pointer">Proyectos</li>
          <li className="hover:text-sky-400 transition cursor-pointer">Contacto</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar