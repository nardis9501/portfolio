import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionTransitions";
import { Link } from "react-router-dom";
import { socialNetworks } from "./dataHeader";
export default function Header(props) {
  return (
    <>
      <div className="absolute z-20 inline-block w-full p-4  left-0 top-5 md:top-10">
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
        >
          <div className="conteiner justify-between mx-auto md:flex">
            <Link to={"/"} className="font-semibold">
              <h1 className="my-3 text-4xl text-white md:text-left">
                Nardis
                <span className="text-secondary">Dev</span>
              </h1>
            </Link>
            <div className="flex items-center justify-center gap-4">
              {socialNetworks.map(({ logo, src }) => (
                <Link
                  key={src}
                  to={src}
                  target="_blank"
                  className="transition-all duration-300 hover:text-secondary"
                >
                  {logo}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
