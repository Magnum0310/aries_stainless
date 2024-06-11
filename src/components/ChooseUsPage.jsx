import { useRef, useEffect, useContext } from "react";
import { useInView, motion } from "framer-motion";
import Data from "../components/constants/data.json";
import ViewContext from "./context/StatusContext";

const ChooseUsPage = () => {
  const { setChooseUs } = useContext(ViewContext);

  const divRef = useRef(null);
  const isInView = useInView(divRef, {
    once: true,
    margin: "-155px 0px",
  });

  useEffect(() => {
    setChooseUs(isInView);
  }, [isInView]);

  const defaultVariant = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duraton: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const borderVariant = {
    initial: {
      opacity: 0,
      width: 0,
    },
    animate: {
      opacity: 1,
      width: "120%",
      transition: { delay: 3, duration: 0.5 },
    },
  };
  const borderVariant2 = {
    initial: {
      opacity: 0,
      width: 0,
    },
    animate: {
      opacity: 1,
      width: "120%",
      transition: { delay: 3.2, duration: 0.5 },
    },
  };
  const borderVariant3 = {
    initial: {
      opacity: 0,
      width: 0,
    },
    animate: {
      opacity: 1,
      width: "120%",
      transition: { delay: 3.4, duration: 0.5 },
    },
  };
  const descriptionVariant = {
    initial: {
      y: 20,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 3.75,
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div
        className="relative h-screen overflow-hidden bg-adobe-white font-shareTech"
        ref={divRef}
      >
        {/* RED BORDER */}
        <div className="absolute -left-[1.1rem] top-8 z-50 flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
          WHY CHOOSE US
        </div>
        <div className="absolute left-5 z-40 h-full w-full border-l-4 border-solid border-adobe-red"></div>
        {/* GRID AREA FOR CONTENT */}
        <div className="relative left-6 grid h-full w-full grid-cols-4 grid-rows-6 items-center justify-center bg-blue-500/0 lg:left-0 lg:top-0 lg:grid-cols-6">
          {/* GRID WRAPPER FOR PAGE CONTENT */}
          <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-3 flex flex-col justify-center bg-opacity-80 pl-[25%] lg:absolute lg:right-0 lg:col-span-5 lg:col-start-1 lg:row-span-4 lg:row-start-2 lg:h-full lg:w-[85%] lg:pl-0">
            {/* PAGE CONTENT */}
            <motion.div
              className="absolute z-20 flex h-[60%] w-3/4 flex-col justify-evenly lg:h-3/4"
              initial="initial"
              animate={isInView && "animate"}
              transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
            >
              {/* FIRST TAG */}

              <div className="text-mobile-title lg:flex lg:items-center">
                <div className="w-fit">
                  <div>
                    {Data.chooseUsPageFirstTag.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        variants={defaultVariant}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    className="h-2 w-[120%] bg-adobe-red"
                    variants={borderVariant}
                  ></motion.div>
                </div>
                <div className="pl-10 font-spaceMono text-lg lg:pl-20 lg:text-2xl">
                  <motion.div variants={descriptionVariant}>
                    {Data.chooseUsPageFirstLine}
                  </motion.div>
                </div>
              </div>
              {/* SECOND TAG */}
              <div className="text-mobile-title lg:flex lg:items-center">
                <div className="w-fit">
                  <div>
                    <div>
                      {Data.chooseUsPageSecondTag.split("").map((char, i) => (
                        <motion.span
                          key={i}
                          className="inline-block"
                          variants={defaultVariant}
                        >
                          {char}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <motion.div
                    className="h-2 w-[120%] bg-adobe-red"
                    variants={borderVariant2}
                  ></motion.div>
                </div>
                <div className="pl-10 font-spaceMono text-lg lg:pl-20 lg:text-2xl">
                  <motion.div variants={descriptionVariant}>
                    {Data.chooseUsPageSecondLine}
                  </motion.div>
                </div>
              </div>
              {/* THIRD TAG */}
              <div className="text-mobile-title lg:flex lg:items-center">
                <div className="w-fit">
                  <div>
                    {" "}
                    {Data.chooseUsPageThirdTag.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="inline-block"
                        variants={defaultVariant}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </div>
                  <motion.div
                    className="h-2 w-[120%] bg-adobe-red"
                    variants={borderVariant3}
                  ></motion.div>
                </div>
                <div className="pl-10 font-spaceMono text-lg lg:pl-20 lg:text-2xl">
                  <motion.div variants={descriptionVariant}>
                    {Data.chooseUsPageThirdLine}
                  </motion.div>
                </div>
              </div>
            </motion.div>
            {/* RED SQUARE */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUsPage;
