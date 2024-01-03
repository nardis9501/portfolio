import Avatar from "../../components/Avatar/Avatar";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Transition from "../../components/Transition/Transition";
import { motion } from "framer-motion";
import { motionTransitionsAbout } from "../../utils/motionTransitions";
import { dataAboutSkills, dataCounter } from "./dataAbout";
import CountUp from "react-countup";
import { useState } from "react";
import {
  RiArrowDownLine,
  RiArrowDownSFill,
  RiArrowDropLeftFill,
  RiArrowDropLeftLine,
  RiArrowLeftSFill,
  RiArrowLeftSLine,
  RiArrowUpLine,
  RiArrowUpSFill,
} from "react-icons/ri";

export default function AboutPage(props) {
  const [index, setIndex] = useState(0);
  return (
    <>
      <Transition />
      <Header />
      <Navbar />
      <div className="overflow-y-auto overflow-x-hidden md:overflow-hidden pb-64 items-center  px-5 md:px-0 mx-auto min-h-screen align-middle mt-36 md:mt-0 md:flex md:max-w-2xl lg:max-w-4xl md:pb-0">
        <Avatar />

        <motion.div
          initial={motionTransitionsAbout.initial}
          animate={motionTransitionsAbout.animate}
          transition={motionTransitionsAbout.transition}
        >
          <h1 className="mb-6 text-left text-2xl md:text-4xl">
            Design should be used to
            <br />
            <span className="text-secondary">communicate clearly.</span>
          </h1>

          <p className="text-left md:pr-10">
            Frontend web developer with 3 years of experience. I’ve worked in
            ecommerce development,
            <br /> medical disclosure web, online platform for services and
            product oﬀerings, human capital development platform.
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
                    <p className="text-left">{text}</p>
                  </div>
                </div>
              )
            )}
          </div>

          <div className="flex flex-col mt-10 mb-3 md:flex-row justify-evenly md:mt-28 md:mb-5">
            {dataAboutSkills.map((dataText, itemIndex) => {
              const { id, text } = dataText;
              return (
                <div
                  key={id}
                  className={`${
                    index === id
                      ? "text-secondary duration-300 transition-all border-secondary"
                      : "border-white"
                  } cursor-pointer bg-black/20 backdrop-blur-md md:text-lg relative px-2 md:px-7 border-2 rounded-xl flex justify-between items-center my-3`}
                  onClick={() => setIndex(itemIndex)}
                >
                  <p className="mr-4 text-base md:text-lg ">{text}</p>
                  {index === id ? <RiArrowDownSFill /> : <RiArrowLeftSFill />}
                </div>
              );
            })}
          </div>
          <div className="max-w-4xl p-4 mx-auto bg-secondary/40 rounded-xl">
            {dataAboutSkills[index].skills.map((items, index) => (
              <div
                key={index}
                className="flex justify-center max-w-md gap-4 mx-auto"
              >
                <span>{items.title} </span> - <span>{items.date}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
