import { animations, motion } from "framer-motion";
import { fadeIn } from "../../utils/motionTransitions";

export default function Avatar(props) {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="bottom-0 right-0 hidden md:inline-flex md:absolute"
      >
        <img
          className="overflow-clip"
          src="src/assets/avatar.png"
          alt="avatar"
          height={600}
          width={600}
        />
      </motion.div>
    </>
  );
}