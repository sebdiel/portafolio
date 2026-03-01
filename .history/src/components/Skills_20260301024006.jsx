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

                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <FaPython size={50} className="text-blue-400" />
                        <p>Python</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <SiMysql size={50} className="text-blue-500" />
                        <p>MySQL</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <SiMongodb size={50} className="text-green-500" />
                        <p>MongoDB</p>
                    </div>

                    <div className="flex flex-col items-center gap-3 hover:-translate-y-2 transition duration-300">
                        <FaGitAlt size={50} className="text-orange-500" />
                        <p>Git</p>
                    </div>
        </div>
      </div>
    </section>
  )
}

export default Skills