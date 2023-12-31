import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionTransitions";
import image from "../../assets/nardis.jpg";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import placeholder from "../../assets/nardis-min.jpg";
export default function Introduction(props) {
  return (
    <>
      <div className="bg-[#131424]/15 dark:bg-[#131424]/60 w-full absolute top-0 left-0 h-full z-10">
        <div className="w-full h-full bg-gradient-to-r from-[#131424]/10 via-black/10 to-black/5">
          <div className="container grid items-center h-full px-5 md:pr-28 lg:pr-0 mx-auto md:grid-cols-2 text-left">
            <motion.div
              className="hidden w-auto h-auto mx-auto md:block"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
            >
              <LazyLoadImage
                className="rounded-lg"
                src={image}
                height={300}
                width={228}
                alt="avatar"
                //effect="blur"
                placeholderSrc={placeholder}
              />
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.5)}
              initial="hidden"
              animate="show"
              exit={"hidden"}
            >
              <h1 className="mb-5 text-2xl md:text-4xl leading-tight md:mb-10 ">
                Design is not just what it looks and feels like.
                <br />
                <span className="text-secondary">Design is how it works.</span>
              </h1>
              <p className="max-w-sm  mb-10 text-sm sm:max-w-mx md:max-w-xs lg:max-w-96 xl:max-w-md  md:mx-0 md:mb-16 md:text-xl">
                If you can think about it, you can program it.
              </p>

              <div className="flex flex-col items-center gap-3 md:gap-10 md:flex-row ">
                <Link
                  to={"/projects"}
                  className="px-6 py-3 my-2 border-2 cursor-pointer transition-all w-fit rounded-xl hover:shadow-xl hover:shadow-white/85"
                >
                  Projects
                </Link>
                <Link
                  to={"/contact"}
                  className="px-6 py-3 my-2 border-2 cursor-pointer transition-all w-fit rounded-xl text-secondary border-secondary hover:shadow-xl hover:shadow-secondary"
                >
                  Contact me
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
