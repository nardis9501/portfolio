import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionTransitions";
import image from "../../assets/avatar.png";
import placeholder from "../../assets/avatar-min-dark.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <LazyLoadImage
          className="overflow-clip"
          src={image}
          height={600}
          width={600}
          alt="avatar"
          //effect="blur"
          placeholderSrc={placeholder}
        />
      </motion.div>
    </>
  );
}
