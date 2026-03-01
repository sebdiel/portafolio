function Projects({ darkMode }) {
  return (
        <section
            id="proyectos"
            className={`py-40 px-6 transition-colors duration-400 ${
                darkMode ? "bg-slate-950 text-white" : "bg-sky-200 text-black"
            }`}
        >
      <div className="max-w-6xl mx-auto">
                <h2 className={`text-4xl font-bold text-center mb-25 ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
          Proyectos Destacados
        </h2>

                {/* Grid de proyectos con margen a la izquierda */}
                <div className="grid md:grid-cols-3 gap-20 ml-4 md:ml-12">

          <div className="bg-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 transition duration-300">
                        <h3 className="text-xl font-semibold mb-4">Sistema CRUD de Estudiantes</h3>
            <p className="text-gray-400 mb-6">
              Aplicación web desarrollada con PHP y MySQL para la gestión
              completa de estudiantes con operaciones CRUD.
            </p>
            <p className="text-sm text-sky-400 mb-6">
              PHP · MySQL · XAMPP
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 transition px-4 py-2 rounded-lg text-sm font-semibold">
              Ver Código
            </button>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Base de Datos tipo TikTok
            </h3>
            <p className="text-gray-400 mb-6">
              Diseño e implementación de modelo relacional para usuarios,
              videos y comentarios con integración en Python.
            </p>
            <p className="text-sm text-sky-400 mb-6">
              MySQL · Python
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 transition px-4 py-2 rounded-lg text-sm font-semibold">
              Ver Código
            </button>
          </div>

          <div className="bg-slate-800 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/20 transition duration-300">
            <h3 className="text-xl font-semibold mb-4">
              Simulación Red LAN/WAN
            </h3>
            <p className="text-gray-400 mb-6">
              Diseño de topología empresarial en Packet Tracer con configuración
              de routers y switches.
            </p>
            <p className="text-sm text-sky-400 mb-6">
              Cisco Packet Tracer
            </p>
            <button className="bg-sky-500 hover:bg-sky-600 transition px-4 py-2 rounded-lg text-sm font-semibold">
              Ver Detalles
            </button>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Projects