import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Stainless from "../assets/Svg/stainlessPipe.svg";
import Carousel from "../components/Carousel";

const defaultVariant = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const highlightVariant = {
  initial: { opacity: 1, x: -2 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const highlightVariant1 = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const textVariant = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const text = "PROJECTS";

const ServicePage = () => {
  const divRef = useRef(null);
  const inView = useInView(divRef, {
    margin: "-100px 0px",
    once: true,
  });
  return (
    <div className="padding-x relative flex h-screen place-content-center overflow-hidden bg-adobe-ivory font-shareTech">
      <div className="flex size-full max-w-[1440px] flex-col items-center overflow-hidden">
        {/* PROJECT TITLE */}
        <motion.div
          className="text-service-title relative top-20 z-40 flex w-full flex-col justify-center pl-[10%] lg:pl-[6%]"
          initial="initial"
          animate={inView ? "animate" : ""}
          transition={{ staggerChildren: 0.02, delayChildren: 0.3 }}
        >
          <span>
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                className="inline-block"
                variants={textVariant}
              >
                {char}
              </motion.span>
            ))}
          </span>
          {}
          {/* RED HIGHTLIGHTS */}
          <div className="flex h-[6px] w-[60%] gap-2 md:h-3 lg:gap-3">
            <motion.div
              variants={highlightVariant}
              className="h-full w-full basis-full rounded-bl-xl rounded-tr-xl bg-adobe-red"
            ></motion.div>
            <motion.div
              variants={highlightVariant1}
              className="h-full w-full basis-[5%] bg-adobe-red lg:basis-[3%]"
            ></motion.div>
            <motion.div
              variants={highlightVariant1}
              className="h-full w-full basis-[5%] bg-adobe-red lg:basis-[3%]"
            ></motion.div>
            <motion.div
              variants={highlightVariant1}
              className="h-full w-full basis-[5%] bg-adobe-red lg:basis-[3%]"
            ></motion.div>
          </div>
        </motion.div>
        <div className="absolute left-5 top-0 z-50 hidden h-full border-l-4 border-solid border-adobe-red"></div>
        {/* BACKGROUND PAGE IMAGE*/}
        <div
          className="absolute left-6 top-11 z-10 h-full w-full lg:left-0 lg:top-0"
          ref={divRef}
        >
          <div className="relative -left-6 top-20 size-full place-content-center lg:left-0">
            <div
              className="h-1/2 w-full opacity-50 lg:h-[100%]"
              style={{
                backgroundImage: `url("${Stainless}")`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
        </div>
        {/* CAROUSEL */}
        <div className="relative top-0 flex size-full flex-col justify-center py-5">
          <div className="relative z-40 h-full w-full">
            <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
