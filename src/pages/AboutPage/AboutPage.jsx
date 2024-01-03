import Avatar from "../../components/Avatar/Avatar";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Transition from "../../components/Transition/Transition";
import { motion } from "framer-motion";
import { motionTransitionsAbout } from "../../utils/motionTransitions";
import { dataCounter } from "./dataAbout";
import CountUp from "react-countup";

export default function AboutPage(props) {
  return (
    <>
      <Transition />
      <Header />
      <Navbar />
      <div className="items-center  px-5 md:px-10 mx-auto min-h-screen align-middle mt-36 md:mt-0 md:flex md:max-w-2xl lg:max-w-4xl md:pb-0">
        <Avatar />

        <motion.div
          initial={motionTransitionsAbout.initial}
          animate={motionTransitionsAbout.animate}
          transition={motionTransitionsAbout.transition}
        >
          <h1 className="mb-6 text-left md:text-4xl">
            Design should be used to
            <br />
            <span className="text-secondary">communicate clearly.</span>
          </h1>

          <p className="text-left">
            Frontend web developer with 3 years of experience. I’ve worked in
            ecommerce development, medical disclosure web, online platform for
            services and product oﬀerings, human capital development platform.
          </p>

          <div className="grid justify-between grid-cols-2 gap-3 my-8 md:grid-cols-4 md:gap-6">
            {dataCounter.map(
              ({ id, endCounter, text, lineRight, lineRightMobile }) => (
                <div key={id} className={`${lineRight && "ltr"}`}>
                  <div
                    className={`${
                      lineRight &&
                      "px-4 border-2 border-transparent md:border-e-gray-100"
                    } ${lineRightMobile && "border-e-gray-100"}`}
                  >
                    {" "}
                    <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">
                      +<CountUp end={endCounter} start={0} duration={5} />
                    </p>
                    <p>{text}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}
