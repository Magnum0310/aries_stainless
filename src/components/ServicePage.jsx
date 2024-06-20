import { useRef } from "react";
import Data from "../components/constants/data.json";
import Weld02 from "../assets/Images/weld01_grayscale.jpg";
import { motion, useInView } from "framer-motion";

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
  initial: { opacity: 1, x: -1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 2,
    },
  },
};
const highlightVariant1 = {
  initial: { opacity: 1, x: -1000 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 2,
    },
  },
};
const textVariant1 = {
  initial: { opacity: 0, x: 0, y: 3 },
  animate: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const desctVariant = {
  initial: { opacity: 0, x: 5 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const ServicePage = () => {
  const divRef = useRef(null);
  const inView = useInView(divRef, {
    margin: "-200px 0px",
    once: true,
  });

  return (
    <div className="padding-x relative flex h-[50vh] justify-center overflow-hidden bg-adobe-ivory font-shareTech md:h-[75vh] lg:h-[80vh]">
      {/* INNER WHITE BOX WRAPPER*/}
      <div
        className="relative grid h-full w-full max-w-[1440px] grid-cols-4 grid-rows-6 items-center overflow-hidden lg:grid-cols-6"
        ref={divRef}
      >
        {/* TITLE BOX */}
        {/* MAIN TITLE CONTAINER */}
        <div className="absolute right-0 z-40 col-span-4 col-start-1 row-span-4 row-start-2 mr-5 flex h-full flex-col bg-gradient-to-tr from-adobe-red/80 via-adobe-gray to-adobe-white p-1 max-lg:mr-[20%] max-lg:w-[70%] max-xs:mr-10 max-xs:w-[75%] md:left-0 md:top-1/2 md:col-span-3 md:col-start-1 md:h-[85%] md:min-h-fit md:w-[65%] md:-translate-y-1/2 lg:row-span-5 lg:row-start-1 lg:mt-14 lg:w-[85%] lg:overflow-visible">
          {/* BORDER WRAPPER */}
          <motion.div
            className="flex size-full min-h-fit flex-col justify-start bg-adobe-ivory lg:justify-center"
            initial="initial"
            animate={inView ? "animate" : ""}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* PAGE TITLE */}
            <div className="text-service-title flex size-full basis-1/2 flex-col justify-center p-1 xs:p-2 lg:basis-1/4 lg:items-start lg:px-4 lg:py-5">
              <div className="relative h-full w-full max-w-[250px] place-content-center md:max-w-[75%]">
                {/* {Data.servicePageTitle1} */}
                <div className="">
                  {Data.servicePageTitle.map((char, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      variants={textVariant1}
                    >
                      {char}&nbsp;
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
            {/* NEW HIGHLIGTS SETUP */}
            <div className="relative flex basis-[1.5%] gap-1 overflow-hidden lg:w-[175%] lg:gap-2">
              <motion.div
                variants={highlightVariant}
                className="basis-[80%] rounded-tr-xl bg-adobe-red"
              ></motion.div>
              <motion.div
                variants={highlightVariant1}
                className="basis-[5%] bg-adobe-red"
              ></motion.div>
              <motion.div
                variants={highlightVariant1}
                className="basis-[5%] bg-adobe-red"
              ></motion.div>
              <motion.div
                variants={highlightVariant1}
                className="basis-[5%] bg-adobe-red"
              ></motion.div>
              <motion.div
                variants={highlightVariant1}
                className="basis-[25%] bg-transparent"
              ></motion.div>
            </div>
            {/* PAGE DESCRIPTION */}
            <div className="text-service-description flex size-full basis-1/2 flex-col justify-center p-1 font-spaceMono xs:p-2 lg:basis-1/4 lg:px-4 lg:py-5">
              <motion.div
                className="h-fit py-1 md:max-w-[90%] lg:max-w-full"
                variants={desctVariant}
              >
                {Data.servicePageDescription}
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM RED BOX - HIDDEN */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-2 flex w-[117%] flex-col justify-center pl-[25%] lg:absolute lg:bottom-[13%] lg:right-0 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:hidden lg:h-[5%] lg:w-[85%] lg:justify-start lg:pl-0"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-6 ml-auto hidden h-[43%] w-[8%] bg-adobe-red md:w-[5%] lg:absolute lg:right-0 lg:top-6 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:hidden lg:h-[8%] lg:w-[70%]"></div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-6 hidden h-[43%] w-full bg-adobe-red lg:absolute lg:right-0 lg:top-12 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:hidden lg:h-[8%] lg:w-[50%] lg:rounded-bl-xl"></div>
      </div>

      {/* BACKGROUND IMAGE */}
      <div className="absolute right-0 z-10 flex h-full w-3/4 items-center lg:h-full lg:w-1/2">
        {/* PAGE IMAGE BLOCK */}
        <div
          className="h-[80%] w-full lg:mb-0 lg:h-full"
          style={{
            backgroundImage: `url(${Weld02})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ServicePage;
