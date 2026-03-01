function Contact() {
  return (
    <section id="contacto" className="bg-slate-950 text-white py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-8">
          Contacto
        </h2>

        <p className="text-gray-400 mb-10">
          Estoy disponible para oportunidades como desarrollador junior
          o prácticas profesionales.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="mailto:tuemail@gmail.com"
            className="bg-sky-500 hover:bg-sky-600 transition px-6 py-3 rounded-xl font-semibold"
          >
            Enviar Email
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            className="border border-white hover:bg-white hover:text-black transition px-6 py-3 rounded-xl font-semibold"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact