import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function AnimatedBackground() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      style={{
        position: "fixed",   // 🔥 cambiado a fixed
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,          // 🔥 detrás de todo
        pointerEvents: "none", // 🔥 no bloquea clicks
      }}
      options={{
        fullScreen: { enable: false },
        background: {
          color: "transparent", // 🔥 CLAVE: quitar azul
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: "#38bdf8" },
          shape: {
            type: "polygon",
            polygon: { sides: 6 },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 8,
            random: { enable: true, minimumValue: 5 },
          },
          links: {
            enable: true,
            distance: 130,
            color: "#38bdf8",
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
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
            grab: {
              distance: 150,
              links: { opacity: 0.7 },
            },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default AnimatedBackground;