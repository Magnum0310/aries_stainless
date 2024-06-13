import Data from "../components/constants/data.json";
import Weld01 from "../assets/Images/weld02_grayscale.jpg";
import AnimateCurveLine from "./animations/AnimateCurveLine";
import { motion } from "framer-motion";

const backgroundVariant = {
  initial: {
    x: -5,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};
const highLigthVariant = {
  initial: {
    x: -10,
    y: -10,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      type: "tween",
      ease: "anticipate",
      duration: 2.5,
    },
  },
};
const highLigthVariant2 = {
  initial: {
    width: "0%",
    opacity: 0,
  },
  animate: {
    width: "100%",
    opacity: 1,
    transition: {
      delay: 1,
      type: "tween",
      ease: "anticipate",
      duration: 3.5,
    },
  },
};

const highLigthVariantTop = {
  initial: {
    width: "0%",
    opacity: 0,
  },
  animate: {
    width: "90%",
    opacity: 1,
    transition: {
      delay: 0.7,
      type: "tween",
      ease: "anticipate",
      duration: 3.5,
    },
  },
};
const highLigthVariantMiddle = {
  initial: {
    width: "0%",
    opacity: 0,
  },
  animate: {
    width: "80%",
    opacity: 1,
    transition: {
      delay: 0.9,
      type: "tween",
      ease: "anticipate",
      duration: 3.5,
    },
  },
};
const highLigthVariantBottom = {
  initial: {
    width: "0%",
    opacity: 0,
  },
  animate: {
    width: "70%",
    opacity: 1,
    transition: {
      delay: 1.1,
      type: "tween",
      ease: "anticipate",
      duration: 3.5,
    },
  },
};

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
const defaultVariant1 = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};
const defaultVariant2 = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const imageVariant = {
  initial: { x: 10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const imageVariant1 = {
  initial: { x: 10, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const HeroPage = () => {
  return (
    <>
      <div className="relative left-0 right-0 top-0 h-screen overflow-hidden font-shareTech">
        {/* RED BORDER */}
        <div className="relative left-5 top-5 z-[60] h-full w-full border-l-4 border-t-4 border-solid border-adobe-red"></div>

        {/* INNER WHITE BOX WRAPPER*/}
        <div className="absolute left-6 top-11 z-50 grid h-full w-full grid-cols-6 grid-rows-6 lg:left-0 lg:top-0 lg:grid-cols-6">
          <div className="absolute hidden h-full w-full lg:left-6 lg:top-6">
            <AnimateCurveLine />
          </div>
          {/* PAGE IMAGE WRAPPER */}
          <motion.div
            className="col-span-5 col-start-2 row-span-6 row-start-1 flex items-center lg:absolute lg:col-start-4 lg:h-full lg:w-full"
            initial="initial"
            animate="animate"
            variants={imageVariant}
          >
            {/* PAGE IMAGE BLOCK */}
            <div
              className="relative z-40 mb-5 h-[80%] w-full lg:mb-0 lg:h-full"
              style={{
                backgroundImage: `url(${Weld01})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
          </motion.div>

          {/*TOP RED BOX - HIDDEN*/}
          <motion.div
            className="absolute bottom-0 right-0 z-20 col-span-2 col-start-2 row-span-1 row-start-1 hidden h-[55%] w-[102%] bg-adobe-red lg:hidden"
            animate="animate"
            initial="initial"
            variants={highLigthVariant}
          ></motion.div>
          <motion.div
            className="absolute right-0 top-0 z-20 col-span-2 col-start-2 row-span-1 row-start-2 hidden h-[55%] w-[102%] bg-adobe-red lg:hidden"
            animate="animate"
            initial="initial"
            variants={highLigthVariant}
          ></motion.div>
          {/* TITLE BOX */}
          <motion.div
            className="absolute z-50 col-span-4 col-start-1 row-span-2 row-start-3 flex h-[120%] w-[95%] flex-col justify-center bg-adobe-ivory bg-opacity-80 pl-[25%] max-lg:rounded-br-xl max-xs:w-full md:-top-0 lg:absolute lg:right-0 lg:top-10 lg:col-span-4 lg:col-start-1 lg:row-span-4 lg:row-start-2 lg:h-[100%] lg:w-[75%] lg:gap-5 lg:bg-transparent lg:pl-0"
            initial="initial"
            animate="animate"
            variants={backgroundVariant}
            transition={{
              duration: 0.5,
              staggerChildren: 0.2,
              delayChildren: 0.5,
            }}
          >
            {/* ARIES STAINLESS */}
            <motion.div className="text-mobile-title flex basis-1/2 flex-col max-lg:justify-center max-lg:pl-5 max-md:flex-col md:basis-1/2 md:items-start md:gap-0 lg:w-3/4 lg:basis-1/2 lg:flex-col lg:items-start lg:justify-end">
              <motion.div variants={defaultVariant}>
                {Data.heroPageAries}
              </motion.div>
              <div className="flex items-center">
                <motion.div variants={defaultVariant}>
                  {Data.heroPageStainless}
                </motion.div>
                <motion.span
                  className="relative left-5 text-5xl max-lg:hidden"
                  variants={defaultVariant}
                >
                  and
                </motion.span>
              </div>
            </motion.div>
            <motion.div
              className="max-lg:pl-5 max-lg:text-2xl lg:hidden"
              variants={defaultVariant}
            >
              and
            </motion.div>
            {/* INSTALLATION SERVICES */}
            <div className="text-mobile-title flex basis-1/2 flex-col justify-center max-lg:w-[100%] max-lg:pl-5 lg:flex lg:basis-1/4 lg:gap-0">
              <motion.div className="h-fit" variants={defaultVariant}>
                {Data.heroPageSubtitleFirst}
              </motion.div>
              <motion.div className="h-fit" variants={defaultVariant}>
                {Data.heroPageSubtitleSecond}
              </motion.div>
            </div>
            {/* RED TAGLINE */}
            <div className="bg relative z-40 h-8 w-full">
              <motion.div
                className="text-mobile-tagline bottom-0 right-0 col-span-4 col-start-1 row-start-5 flex h-full items-center justify-center rounded-br-xl bg-adobe-red py-1 font-spaceMono text-adobe-white opacity-0 max-lg:absolute max-lg:w-[130%] max-xs:w-full lg:left-0 lg:w-full lg:rounded-tl-xl lg:pl-0"
                initial="initial"
                animate="animate"
                transition={{ duration: 2 }}
                variants={backgroundVariant}
              >
                <motion.div className="text-mobile-tagline z-40 col-span-4 col-start-1 row-start-5 flex h-fit w-fit items-center justify-start font-spaceMono text-adobe-white lg:right-0 lg:h-full lg:w-[85%] lg:pl-0">
                  <motion.div
                    className="flex"
                    animate="animate"
                    initial="initial"
                    transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
                  >
                    {Data.heroPageTaglinefirst.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="block"
                        variants={defaultVariant1}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex"
                    animate="animate"
                    initial="initial"
                    transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
                  >
                    {Data.heroPageTaglineSecond.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="block"
                        variants={defaultVariant2}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.div
                    className="flex"
                    animate="animate"
                    initial="initial"
                    transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
                  >
                    {Data.heroPageTaglineThird.split("").map((char, i) => (
                      <motion.span
                        key={i}
                        className="block"
                        variants={defaultVariant1}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
            <motion.div
              className="relative z-30 flex h-full w-[66.5%] flex-col items-end gap-2 max-lg:hidden"
              initial="initial"
              animate="animate"
              transiton={{ staggerChildren: 0.5 }}
            >
              {/* TOP HIGHLIGHT ABOVE MD-SCREENS */}
              <motion.div
                variants={highLigthVariantTop}
                className="relative right-0 w-[90%] basis-[8px] bg-adobe-red lg:rounded-tl-xl"
              ></motion.div>
              {/* MAIN HIGHLIGHT UNDER MD-SCREENS */}
              <motion.div
                variants={highLigthVariantMiddle}
                className="relative right-0 w-[80%] basis-[8px] bg-adobe-red"
              ></motion.div>
              {/* BOTTOM HIGHLIGHT ABOVE MD-SCREENS */}
              <motion.div
                variants={highLigthVariantBottom}
                className="relative right-0 w-[70%] basis-[8px] bg-adobe-red"
              ></motion.div>
            </motion.div>
          </motion.div>

          {/* HIDDEN */}
          <div className="z-30 col-start-4 row-span-2 row-start-3 hidden h-full w-1/2 bg-adobe-ivory bg-opacity-80 xs:w-1/4 lg:absolute lg:top-[44%] lg:col-span-2 lg:col-start-4 lg:h-[37%] lg:w-full lg:rounded-tr-3xl"></div>
          {/* TAGLINE BOX */}
          <div className="z-40 col-start-4 row-span-1 row-start-5 hidden h-8 w-1/2 rounded-br-xl bg-adobe-red xs:w-1/4 sm:w-1/4"></div>
          {/* <motion.div
            className="text-mobile-tagline z-40 col-span-4 col-start-1 row-start-5 flex h-8 w-[95%] basis-1/2 items-center justify-start rounded-br-xl bg-adobe-red pl-[35%] font-spaceMono text-adobe-white max-xs:w-full lg:absolute lg:bottom-[1.15rem] lg:right-0 lg:col-span-4 lg:col-start-1 lg:row-span-1 lg:row-start-4 lg:h-1/4 lg:w-[81%] lg:rounded-tl-xl lg:pl-0"
            initial="initial"
            animate="animate"
            transition={{ duration: 0.5 }}
            variants={backgroundVariant}
          >
            <motion.div className="text-mobile-tagline absolute z-40 col-span-4 col-start-1 row-start-5 flex h-8 w-fit items-center justify-start font-spaceMono text-adobe-white lg:absolute lg:right-0 lg:col-span-5 lg:col-start-1 lg:row-span-3 lg:row-start-2 lg:h-full lg:w-[85%] lg:pl-0">
              <motion.div
                className="flex"
                animate="animate"
                initial="initial"
                transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
              >
                {Data.heroPageTaglinefirst.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    variants={defaultVariant1}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="flex"
                animate="animate"
                initial="initial"
                transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
              >
                {Data.heroPageTaglineSecond.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    variants={defaultVariant2}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="flex"
                animate="animate"
                initial="initial"
                transition={{ staggerChildren: 0.15, delayChildren: 0.1 }}
              >
                {Data.heroPageTaglineThird.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    className="block"
                    variants={defaultVariant1}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div> */}
          {/* BOTTOM RED BOX */}
        </div>
      </div>
    </>
  );
};

export default HeroPage;
