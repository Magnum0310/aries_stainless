import { useContext } from "react";
import ViewContext from "./context/StatusContext";
import Data from "../components/constants/data.json";
import Weld01 from "../assets/Images/weld02_grayscale.jpg";
import AnimateCurveLine from "./animations/AnimateCurveLine";
import { motion } from "framer-motion";
import Shiny from "../assets/Svg/ShapeSvg/shinyOverlay.svg";

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
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};
const defaultVariantTagline = {
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

const defaultVariant1X = {
  initial: { x: 150 },
  animate: {
    x: 0,
    transition: {
      duration: 1,
      type: "tween",
      ease: "anticipate",
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
const imageVariantY = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
};

const fillerVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
  },
};

const ariesVariant = {
  initial: { y: -200 },
  animate: {
    y: 0,
  },
};
const ariesVariant1 = {
  initial: { y: -200 },
  animate: {
    y: 0,
    transition: { type: "tween", ease: "anticipate", duration: 1 },
  },
};

const servicesVariant = {
  initial: { y: 200 },
  animate: {
    y: 0,
  },
};
const servicesVariant1 = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: { type: "tween", ease: "anticipate", duration: 1 },
  },
};

const servicesVariant2 = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const tagLineVariant = {
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

const scaleYVariant = {
  initial: { scaleY: 0 },
  animate: { scaleY: 1 },
};

const HeroPage = () => {
  const { width } = useContext(ViewContext);

  return (
    <>
      <div className="padding-x relative flex h-[95vh] flex-col items-center font-shareTech">
        {/* INNER WHITE BOX WRAPPER*/}
        <div className="relative z-[60] flex size-full max-w-[1440px] flex-col items-center justify-center">
          <div className="absolute grid size-full grid-cols-6 grid-rows-6 lg:left-0 lg:top-0 lg:grid-cols-6">
            {/* NEW TITLE BOX */}
            <div className="col-span-6 col-start-1 row-span-4 row-start-2 flex place-content-center place-items-center bg-opacity-20 font-bebas md:col-start-2 lg:absolute lg:right-0 lg:col-start-1 lg:h-full lg:w-[90%] xl:w-[85%]">
              <div className="flex size-full flex-col items-center justify-center md:items-start">
                {/* ARIES STAINLESS */}
                <motion.div className="h-full w-full min-w-fit max-w-fit basis-[20%] overflow-hidden px-2 py-2 md:max-w-fit md:px-0 lg:basis-[30%]">
                  <motion.div
                    className="h-full w-full overflow-hidden bg-adobe-red p-3"
                    initial="initial"
                    animate="animate"
                    variants={ariesVariant}
                    transition={{
                      // duration: 0.5,
                      type: "tween",
                      ease: "anticipate",
                      duration: 1.5,
                      delayChildren: 0.75,
                    }}
                  >
                    <motion.div
                      className="text-hero-padding size-full bg-black"
                      variants={ariesVariant1}
                    >
                      <motion.div className="text-hero z-5 relative flex size-full place-content-center place-items-center overflow-hidden bg-adobe-red p-px text-adobe-ivory md:place-content-start">
                        <motion.div className="" variants={defaultVariant1}>
                          {Data.heroPageAries}&nbsp;
                        </motion.div>

                        <motion.div variants={defaultVariant1}>
                          {Data.heroPageStainless}&nbsp;
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
                <motion.div
                  className="flex h-full w-fit basis-[5%] place-content-center place-items-center text-xl text-adobe-ivory md:w-fit md:place-content-start md:px-4 md:text-2xl md:text-black lg:text-5xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.5,
                    duration: 0.5,
                    type: "tween",
                    ease: "anticipate",
                  }}
                >
                  AND
                </motion.div>
                {/* INSTALLATION SERVICES */}
                <div className="size-full min-w-fit max-w-[400px] basis-[20%] overflow-hidden px-8 py-2 md:max-w-fit md:px-0 lg:basis-[30%]">
                  <motion.div
                    className="h-full w-full overflow-hidden bg-adobe-ivory p-3"
                    initial="initial"
                    animate="animate"
                    variants={servicesVariant}
                    transition={{
                      // duration: 0.5,
                      type: "tween",
                      ease: "anticipate",
                      duration: 1.5,
                      delayChildren: 0.75,
                    }}
                  >
                    <motion.div
                      className="text-hero-padding flex size-full flex-col bg-adobe-gray"
                      variants={servicesVariant1}
                    >
                      <div className="text-hero flex size-full place-content-center place-items-center bg-adobe-ivory md:flex md:place-content-start">
                        <motion.div
                          className="h-fit"
                          variants={servicesVariant2}
                        >
                          {Data.heroPageSubtitleFirst}&nbsp;
                        </motion.div>
                        <motion.div
                          className="h-fit"
                          variants={servicesVariant2}
                        >
                          {Data.heroPageSubtitleSecond}
                        </motion.div>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
                {/* PRECISION QUAILITY RELIABILITY */}
                <motion.div className="text-hero-tagline relative col-span-5 col-start-1 row-start-4 flex h-1/2 w-[35%] basis-[10%] place-content-center place-items-start font-spaceMono md:w-[33%] md:basis-[20%] md:flex-col md:items-end md:overflow-hidden md:text-black lg:left-10 lg:w-[37.5%] xl:w-[34%]">
                  <motion.div className="md:relative md:flex md:h-full md:w-[fit] md:flex-col md:justify-center lg:w-[38%] xl:w-[34%]">
                    <motion.div
                      className="flex overflow-hidden bg-adobe-ivory px-5 md:h-fit md:flex-col md:items-end md:justify-center md:gap-0 md:bg-adobe-ivory/0 md:px-1"
                      initial="initial"
                      animate="animate"
                      style={{ originY: 1 }}
                      variants={scaleYVariant}
                      transition={{
                        delay: 1.5,
                        duration: 0.5,
                        type: "tween",
                        ease: "anticipate",
                        staggerChildren: 0.1,
                        delayChildren: 1.8,
                      }}
                    >
                      {/* PRECISION,QUALITY,RELIABILITY */}
                      {/* FIRST TAGLNIE */}
                      <motion.div
                        className="md:bg-adobe-ivory md:px-2"
                        variants={
                          width >= 768 ? defaultVariant1X : tagLineVariant
                        }
                      >
                        {Data.heroPageTaglinefirst}
                      </motion.div>
                      &nbsp;
                      {/* SECOND TAGLNIE */}
                      <motion.div
                        className="md:bg-adobe-ivory md:px-2"
                        variants={
                          width >= 768 ? defaultVariant1X : tagLineVariant
                        }
                      >
                        {Data.heroPageTaglineSecond}
                      </motion.div>
                      &nbsp;
                      {/* THIRD TAGLNIE */}
                      <motion.div
                        className="md:bg-adobe-ivory md:px-2"
                        variants={
                          width >= 768 ? defaultVariant1X : tagLineVariant
                        }
                      >
                        {Data.heroPageTaglineThird}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>

            {/* HIDDEN */}
            <div className="z-30 col-start-4 row-span-2 row-start-3 hidden h-full w-1/2 bg-adobe-ivory bg-opacity-80 xs:w-1/4 lg:absolute lg:top-[44%] lg:col-span-2 lg:col-start-4 lg:h-[37%] lg:w-full lg:rounded-tr-3xl"></div>
            {/* TAGLINE BOX */}
            <div className="z-40 col-start-4 row-span-1 row-start-5 hidden h-8 w-1/2 rounded-br-xl bg-adobe-red xs:w-1/4 sm:w-1/4"></div>
          </div>
        </div>
        {/* IMAGE WRAPPER */}
        <motion.div
          className="absolute z-20 flex h-full w-3/4 items-center max-md:justify-center md:right-0 md:w-[55%] lg:h-full"
          initial="initial"
          animate="animate"
          variants={width >= 768 ? imageVariant : imageVariantY}
        >
          {/* PAGE IMAGE BLOCK */}
          <div
            className="relative w-full rounded-bl-3xl rounded-tr-3xl max-md:h-3/4 max-md:w-3/4 md:h-3/4 md:w-[90%] lg:left-10 lg:h-3/4 lg:w-3/4"
            style={{
              backgroundImage: `url(${Weld01})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </motion.div>
        <div className="absolute z-10 h-full w-full">
          <AnimateCurveLine />
        </div>
        <motion.div
          className="absolute left-0 top-10 size-full"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "linear", duration: 1 }}
          style={{
            backgroundImage: `url("${Shiny}")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></motion.div>
      </div>
    </>
  );
};

export default HeroPage;
