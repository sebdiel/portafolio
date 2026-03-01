function Hero() {
  return (
    <section className="min-h-screen pt-24 bg-slate-950 text-white flex flex-col justify-center items-center text-center px-6">
      
      <h1 className="text-5xl md:text-6xl font-bold mb-4">
        Sebastián Gómez
      </h1>

      <h2 className="text-2xl md:text-3xl text-sky-400 mb-6">
        Desarrollador Full Stack
      </h2>

      <p className="max-w-2xl text-gray-400 mb-8">
        Construyo aplicaciones web modernas enfocadas en rendimiento,
        escalabilidad y buenas prácticas de arquitectura.
        Especializado en backend y bases de datos.
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