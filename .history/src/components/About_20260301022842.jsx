function About() {
  return (
    <section id="sobre" className="bg-slate-900 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-10">
          Sobre mí
        </h2>

        <p className="text-gray-400 leading-relaxed text-lg">
          Soy estudiante de Ingeniería de Sistemas con enfoque en desarrollo
          Full Stack y especial interés en backend y arquitectura de software.
          He desarrollado sistemas CRUD con PHP y MySQL, trabajado con bases
          de datos MongoDB y diseñado simulaciones de redes empresariales.
        </p>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-sky-400">3+</h3>
            <p className="text-gray-400 mt-2">Proyectos desarrollados</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-sky-400">2+</h3>
            <p className="text-gray-400 mt-2">Años aprendiendo desarrollo</p>
          </div>

          <div className="bg-slate-800 p-6 rounded-2xl">
            <h3 className="text-3xl font-bold text-sky-400">100%</h3>
            <p className="text-gray-400 mt-2">Compromiso profesional</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default About