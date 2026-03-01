import { 
    FaReact, 
    FaJs, 
    FaPhp, 
    FaPython, 
    FaGitAlt 
} from "react-icons/fa"

import { 
    SiMysql, 
    SiMongodb 
} from "react-icons/si"

function Skills({ darkMode = false }) {
  return (
        <section 
            id="habilidades" 
            className={`py-55 px-6 transition-colors duration-500 ${
                darkMode ? "bg-slate-900 text-white" : "bg-sky-100 text-black"
            }`}
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className={`text-4xl font-bold mb-16 ${darkMode ? "text-sky-400" : "text-sky-600"}`}>
                    Tecnologías
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <FaReact size={50} className="text-sky-400" />
                        <p>React</p>
        </div>

                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <FaJs size={50} className="text-yellow-400" />
                        <p>JavaScript</p>
        </div>

                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <FaPhp size={50} className="text-indigo-400" />
                        <p>PHP</p>
        </div>

        <div>
          <h3>Herramientas</h3>
          <p>Git, XAMPP, VS Code, Packet Tracer</p>
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#0f172a",
    color: "white",
    textAlign: "center"
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#38bdf8"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
    maxWidth: "900px",
    margin: "0 auto"
  }
}

export default Skills