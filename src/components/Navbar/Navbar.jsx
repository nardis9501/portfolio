import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionTransitions";

export default function Navbar(props) {
  return (
    <>
      <motion.div
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
      >
        <div>hola</div>
      </motion.div>
    </>
  );
}
