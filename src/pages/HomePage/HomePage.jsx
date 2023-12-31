import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motionTransitions";

export default function HomePage(props) {
  return (
    <>
      <header className="grid place-content-center fixed top-0 right-0 bg-blue-600 w-full h-24">
        <h2>hi</h2>
      </header>

      <main className="flex flex-col items-start">
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
        >
          <h2 className="bg-blue-600/10 text-blue-600">Hi there! I'm Nardis</h2>

          <blockquote className="capitalize text-5xl text-left">
            A{" "}
            <span className="inline-block text-blue-600">
              Frontend Engineer
            </span>
            . I Help Startups <span className="text-blue-600">Launch</span> And
            <span className="text-blue-600"> Grow </span> Their Products
          </blockquote>
          <p className="text-left">
            Frontend web developer with 3 years of experience. I’ve worked in
            ecommerce development, medical disclosure web, online platform for
            services and product oﬀerings, human capital development platform.
          </p>
        </motion.div>
        <Navbar />
      </main>
      <footer>
        <p>contact me</p>
      </footer>
    </>
  );
}
