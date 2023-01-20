import { useCallback } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Images from "./components/Images";
import Videos from "./components/Videos";

const App = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <div>
      <BrowserRouter>
        <main className="md:px-20 lg:px-40 h-screen">
          <Particles
            id="tsparticles"
            className="z-[-1] fixed"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#25354c",
                },
              },
              particles: {
                number: {
                  value: 80,
                  density: {
                    enable: true,
                    area: 800,
                  },
                },
                color: {
                  value: [
                    "#BD10E0",
                    "#B8E986",
                    "#50E3C2",
                    "#FFD300",
                    "#E86363",
                  ],
                },
                shape: {
                  type: "circle",
                  stroke: {
                    width: 0,
                    color: "#b6b2b2",
                  },
                },
                opacity: {
                  value: 0.5211089197812949,
                  random: false,
                  animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1,
                    sync: false,
                  },
                },
                size: {
                  value: 8.017060304327615,
                  random: true,
                  animation: {
                    enable: true,
                    speed: 12.181158184520175,
                    minimumValue: 0.1,
                    sync: false,
                  },
                },
                lineLinked: {
                  enable: false,
                  distance: 150,
                  color: "#c8c8c8",
                  opacity: 0.4,
                  width: 1,
                },
                move: {
                  enable: true,
                  speed: 1,
                  direction: "none",
                  random: false,
                  straight: false,
                  outMode: "bounce",
                  bounce: false,
                  attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                  },
                },
              },
              interactivity: {
                detectOn: "canvas",
                events: {
                  onHover: {
                    enable: true,
                    mode: "connect",
                  },
                  onClick: {
                    enable: false,
                    mode: "push",
                  },
                  resize: true,
                },
                modes: {
                  grab: {
                    distance: 400,
                    lineLinked: {
                      opacity: 1,
                    },
                  },
                  bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                  },
                  connect: {},
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                  push: {
                    particles_nb: 4,
                  },
                  remove: {
                    particles_nb: 2,
                  },
                },
              },
              detectRetina: true,
            }}
          />
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/art" element={<Images />} />
            <Route path="/animations" element={<Videos />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
