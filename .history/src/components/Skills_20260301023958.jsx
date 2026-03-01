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

      <div style={styles.grid}>
        <div>
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div>
          <h3>Backend</h3>
          <p>PHP, Python</p>
        </div>

        <div>
          <h3>Bases de Datos</h3>
          <p>MySQL, MongoDB</p>
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