import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); // 🔥 THIS LINE IS CRITICAL
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -2
        },

        background: {
          color: "#0A0B1E"
        },

        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              area: 800
            }
          },

          color: {
            value: ["#00D9FF", "#A855F7"]
          },

          shape: {
            type: "circle"
          },

          opacity: {
            value: 0.5
          },

          size: {
            value: { min: 1, max: 4 }
          },

          links: {
            enable: true,
            color: "#00D9FF",
            distance: 150,
            opacity: 0.3,
            width: 1
          },

          move: {
            enable: true,
            speed: 0.7,
            direction: "right",
            straight: false,
            outModes: {
              default: "out"
            }
          }
        },

        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse"
            }
          },
          modes: {
            repulse: {
              distance: 100
            }
          }
        },

        detectRetina: true
      }}
    />
  );
}