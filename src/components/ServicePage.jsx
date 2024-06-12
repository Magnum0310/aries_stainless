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
  initial: { opacity: 0, x: -100 },
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
const textVariant1 = {
  initial: { opacity: 0, x: -10 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
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
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-50 flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        SERVICE
      </div>
      <div className="absolute left-5 z-40 h-full w-full border-l-4 border-solid border-adobe-red"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div
        className="absolute left-6 top-11 grid h-full w-full grid-cols-4 grid-rows-6 bg-adobe-white lg:left-0 lg:top-0 lg:grid-cols-6"
        ref={divRef}
      >
        {/* PAGE IMAGE WRAPPER */}
        <div className="z-30 col-span-4 col-start-2 row-span-6 row-start-1 flex items-center lg:absolute lg:col-start-4 lg:h-full lg:w-full">
          {/* PAGE IMAGE BLOCK */}
          <div
            className="mb-5 h-[80%] w-full lg:mb-0 lg:h-full"
            style={{
              backgroundImage: `url(${Weld02})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/* TITLE BOX */}
        {/* MAIN TITLE CONTAINER */}
        <div className="absolute right-0 z-40 col-span-3 col-start-1 row-span-4 row-start-2 mr-5 h-full overflow-hidden bg-gradient-to-tr from-adobe-red/80 via-adobe-gray to-adobe-white p-1 max-lg:mr-[20%] max-lg:w-[70%] max-xs:mr-10 max-xs:w-[75%] lg:row-span-5 lg:row-start-1 lg:mt-14 lg:w-[85%]">
          {/* BORDER WRAPPER */}
          <motion.div
            className="bg-adobe-ivory flex size-full flex-col justify-start"
            initial="initial"
            animate={inView ? "animate" : ""}
            transition={{ staggerChildren: 0.1 }}
          >
            {/* PAGE TITLE */}
            <div className="text-service-title flex size-full basis-1/2 flex-col justify-center pl-5 pr-5">
              <div className="relative max-w-[250px] xs:max-w-[75%]">
                {/* {Data.servicePageTitle1} */}
                {Data.servicePageTitle.map((char, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    variants={defaultVariant}
                  >
                    {char}&nbsp;
                  </motion.span>
                ))}
              </div>
            </div>
            {/* NEW HIGHLIGTS SETUP */}
            <div className="relative flex basis-[1.5%] gap-1 lg:w-[175%] lg:gap-2">
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
            <div className="text-service-description flex size-full basis-1/2 flex-col justify-center pl-5 pr-5">
              <motion.div
                className="h-fit py-2 xs:max-w-[75%] lg:max-w-full"
                variants={textVariant1}
              >
                {Data.servicePageDescription}
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="z-30 col-start-4 row-span-2 row-start-2 hidden h-full w-1/2 bg-adobe-white bg-opacity-0 xs:w-1/4 lg:absolute lg:top-[44%] lg:col-span-2 lg:col-start-4 lg:h-[37%] lg:w-full lg:rounded-tr-3xl"></div>
        {/* BOTTOM RED BOX */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-2 flex w-[117%] flex-col justify-center pl-[25%] lg:absolute lg:bottom-[13%] lg:right-0 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:hidden lg:h-[5%] lg:w-[85%] lg:justify-start lg:pl-0"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-6 ml-auto h-[43%] w-[8%] bg-adobe-red md:w-[5%] lg:absolute lg:right-0 lg:top-6 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:hidden lg:h-[8%] lg:w-[70%]"></div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-6 h-[43%] w-full bg-adobe-red lg:absolute lg:right-0 lg:top-12 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:hidden lg:h-[8%] lg:w-[50%] lg:rounded-bl-xl"></div>
      </div>
    </div>
  );
};

export default ServicePage;
