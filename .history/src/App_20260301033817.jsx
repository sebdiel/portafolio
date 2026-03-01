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
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      options={{
        fullScreen: { enable: false },
        background: {
          color: { value: "#050816" },
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 60,
            density: { enable: true, area: 800 },
          },
          color: { value: ["#00ffff", "#38bdf8"] },
          shape: {
            type: "polygon",
            polygon: { sides: 6 },
          },
          opacity: {
            value: 0.4,
          },
          size: {
            value: 10,
            random: { enable: true, minimumValue: 5 },
          },
          links: {
            enable: true,
            distance: 120,
            color: "#00ffff",
            opacity: 0.6,
            width: 1.2,
            shadow: {
              enable: true,
              color: "#00ffff",
              blur: 5,
            },
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 150,
              links: {
                opacity: 0.8,
              },
            },
            push: {
              quantity: 4,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default AnimatedBackground;