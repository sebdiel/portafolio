import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "tsparticles-slim";

function AnimatedBackground() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        background: {
          color: "transparent",
        },
        particles: {
          number: {
            value: 50,
          },
          color: {
            value: "#38bdf8",
          },
          shape: {
            type: "polygon",
            polygon: {
              sides: 6,
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 8,
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
            speed: 1,
          },
        },
      }}
    />
  );
}

export default AnimatedBackground;