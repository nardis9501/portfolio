import { useCallback } from "react";

import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { optionsParticles } from "./particleOptions";
import { loadSlim } from "tsparticles-slim";
export default function Cover(props) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (conteiner) => {
    await console.log(conteiner);
  }, []);
  return (
    <>
      <div className="">
        <Particles
          className="absolute  translate-z-0"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={optionsParticles}
        />
      </div>
    </>
  );
}
