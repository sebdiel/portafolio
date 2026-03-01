import { Github, Linkedin, Mail } from "lucide-react";

function LeftSidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center justify-center gap-8 bg-black/80 backdrop-blur-md border-r border-gray-800 z-50 hidden md:flex">
      
      <a
        href="https://github.com/TU_USUARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition transform hover:scale-110"
      >
        <Github size={22} />
      </a>

      <a
        href="https://linkedin.com/in/TU_USUARIO"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition transform hover:scale-110"
      >
        <Linkedin size={22} />
      </a>

      <a
        href="mailto:tuemail@gmail.com"
        className="text-gray-400 hover:text-white transition transform hover:scale-110"
      >
        <Mail size={22} />
      </a>

    </div>
  );
}

export default LeftSidebar;