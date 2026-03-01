import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main); // Necesario para cargar todos los presets
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0, // Fondo detrás de todo
      }}
      options={{
        background: {
          color: { value: "#0A1224" }, // Fondo tipo tu imagen
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 50,
            density: { enable: true, area: 800 },
          },
          color: { value: "#38bdf8" },
          shape: { type: "polygon", sides: 6 }, // Hexágonos
          opacity: { value: 0.3 },
          size: { value: 8, random: { enable: true, minimumValue: 5 } },
          links: {
            enable: true,
            distance: 150,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            grab: { distance: 150, links: { opacity: 0.5 } },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default AnimatedBackground;