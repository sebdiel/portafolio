import React from "react";
import AnimatedBackground from "./AnimatedBackground";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <AnimatedBackground />

      <div style={{ position: "relative", zIndex: 1, color: "white" }}>
        <h1>Mi Portafolio</h1>
        <p>Bienvenido a mi sitio web 🚀</p>
      </div>
    </div>
  );
}

export default App;