import { useRef, useEffect, useContext } from "react";
import {
  motion,
  useScroll,
  useTransform,
  easeInOut,
  useInView,
} from "framer-motion";
import ViewContext from "./context/StatusContext";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import Tool from "../assets/Svg/ChooseUsIcon/colorTools.svg";
import Customer from "../assets/Svg/ChooseUsIcon/colorReview.svg";
import Shield from "../assets/Svg/ChooseUsIcon/colorShield.svg";
import List from "../assets/Svg/ChooseUsIcon/colorList.svg";
import Data from "../components/constants/chooseUsPage.json";
import Lines from "./animations/AnimateLine";
import Lines2 from "./animations/AnimateLine2";
import Lines3 from "./animations/AnimateLine3";
import Lines4 from "./animations/AnimateLine4";

const ChooseUsContent = () => {
  const divRef = useRef(null);
  const firstCard = useRef(null);
  const secondCard = useRef(null);
  const thirdCard = useRef(null);
  const forurthCard = useRef(null);
  // const { width } = useWindowDimensions();
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end end"],
  });

  const { setFirstCard, setSecondCard, setThirdCard, setFourthCard, width } =
    useContext(ViewContext);

  const marginWindowOne =
    width >= 1280
      ? ["-50px -800px -50px -100px"]
      : width <= 1023
        ? ["0px 0px 0px 0px"]
        : ["-50px -800px -50px -100px"];
  const marginWindowTwo =
    width >= 1280
      ? ["-50px -500px -50px -400px"]
      : width <= 1023
        ? ["0px 0px 0px 0px"]
        : ["-50px -100px -50px -800px"];

  const marginWindowThree =
    width >= 1280
      ? ["-50px -100px -50px -800px"]
      : width <= 1023
        ? ["0px 0px 0px 0px"]
        : ["-50px -800px -50px -100px"];

  const marginWindowFour =
    width >= 1280
      ? ["-50px -100px -50px -900px"]
      : width <= 1023
        ? ["0px 0px 0px 0px"]
        : ["-50px -100px -50px -800px"];

  // LARGE SCREENS
  const viewFirstCard = useInView(firstCard, {
    margin: marginWindowOne,
  });
  const viewSecondCard = useInView(secondCard, {
    margin: marginWindowTwo,
  });
  const viewThirdCard = useInView(thirdCard, {
    margin: marginWindowThree,
  });
  const viewFourthCard = useInView(forurthCard, {
    margin: marginWindowFour,
  });

  useEffect(() => {
    if (viewFirstCard) {
      setFirstCard(viewFirstCard);
    }
    if (viewSecondCard) {
      setSecondCard(viewSecondCard);
    }
    if (viewThirdCard) {
      setThirdCard(viewThirdCard);
    }
    if (viewFourthCard) {
      setFourthCard(viewFourthCard);
    }
  }, [viewFirstCard, viewSecondCard, viewThirdCard, viewFourthCard]);

  // MOBILE
  const firstBoxMobile = useTransform(scrollYProgress, [0, 0.4], [-1200, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });
  const secondBoxMobile = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [-1200, 0],
    {
      type: "tween",
      duration: 0.5,
      ease: easeInOut,
    },
  );
  const thirdBoxMobile = useTransform(scrollYProgress, [0.4, 0.8], [-1200, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });
  const fourthBoxMobile = useTransform(scrollYProgress, [0.6, 1], [-1200, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });

  // TABLET
  const firstBoxTablet = useTransform(scrollYProgress, [0, 0.4], [-1200, 0], {
    ease: easeInOut,
  });
  const secondBoxTablet = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [-1200, 0],
    {
      type: "tween",
      duration: 0.5,
      ease: easeInOut,
    },
  );
  const thirdBoxTablet = useTransform(
    scrollYProgress,
    [0.45, 0.75],
    [-1200, 0],
    {
      type: "tween",
      duration: 0.5,
      ease: easeInOut,
    },
  );
  const fourthBoxTablet = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    [-1200, 0],
    {
      type: "tween",
      duration: 0.5,
      ease: easeInOut,
    },
  );
  // Laptop
  const firstBox = useTransform(scrollYProgress, [0, 0.4], [0, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });
  const secondBox = useTransform(scrollYProgress, [0.5, 0.65], [-600, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });
  const thirdBox = useTransform(scrollYProgress, [0.6, 0.75], [-1200, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });
  const fourthBox = useTransform(scrollYProgress, [0.7, 0.85], [-1600, 0], {
    type: "tween",
    duration: 0.5,
    ease: easeInOut,
  });

  return (
    <div
      className="relative z-10 h-[200vh] justify-center bg-adobe-ivory font-shareTech max-md:h-[200dvh] lg:flex lg:flex-col xl:flex-row xl:items-center"
      ref={divRef}
    >
      {/* FIRST HALF */}
      <div className="absolute left-5 z-50 h-full border-l-4 border-solid border-adobe-red"></div>
      <div className="h-1/2 lg:flex lg:h-[35%] xl:sticky xl:top-1/2 xl:z-20 xl:-translate-y-1/2">
        {/* FIRST BOX */}
        <motion.div
          className="relative z-40 flex h-1/2 w-full flex-col overflow-hidden bg-gradient-to-tr from-adobe-gray to-adobe-white p-1 lg:h-full"
          ref={firstCard}
          style={{
            translateX:
              width <= 1023
                ? firstBoxMobile
                : width >= 1280
                  ? firstBox
                  : firstBoxTablet,
          }}
        >
          <motion.div className="z-40 flex h-full flex-col items-center justify-center gap-5 bg-adobe-ivory px-12 text-center max-lg:from-adobe-gray/40 lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start">
            <div className="z-20 size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
              <div
                className="size-full lg:size-2/5"
                style={{
                  backgroundImage: `url("${Tool}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="z-20 flex max-w-[500px] flex-col gap-5 lg:relative lg:bottom-10 lg:row-start-2">
              <div className="text-mobile-chooseUs-title h-[4rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black max-xl:h-[3rem]">
                {Data[0].title}
              </div>
              <div className="text-mobile-chooseUs-description font-spaceMono">
                {Data[0].description}
              </div>
            </div>
            <Lines />
          </motion.div>
        </motion.div>
        {/* SECOND BOX */}
        <motion.div
          className="relative z-20 flex h-1/2 w-full flex-col overflow-hidden bg-gradient-to-tr from-adobe-gray to-adobe-white p-1 lg:h-full"
          ref={secondCard}
          style={{
            translateX:
              width <= 1023
                ? secondBoxMobile
                : width >= 1280
                  ? secondBox
                  : secondBoxTablet,
          }}
        >
          <motion.div className="z-40 flex h-full flex-col items-center justify-center gap-5 bg-adobe-ivory px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start">
            <div className="z-30 size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
              <div
                className="size-full lg:size-2/5"
                style={{
                  backgroundImage: `url("${Customer}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="z-20 flex max-w-[500px] flex-col gap-5 lg:relative lg:bottom-10 lg:row-start-2">
              <div className="text-mobile-chooseUs-title h-[4rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black max-xl:h-[3rem]">
                {Data[1].title}
              </div>
              <div className="text-mobile-chooseUs-description font-spaceMono">
                {Data[1].description}
              </div>
            </div>
            <Lines2 />
          </motion.div>
        </motion.div>
      </div>
      {/* SECOND HALF */}
      <div className="h-1/2 lg:flex lg:h-[35%] lg:items-center xl:sticky xl:top-1/2 xl:z-10 xl:-translate-y-1/2">
        {/* THIRD BOX */}
        <motion.div
          className="relative z-20 flex h-1/2 w-full flex-col overflow-hidden bg-gradient-to-tr from-adobe-gray to-adobe-white p-1 lg:h-full"
          ref={thirdCard}
          style={{
            translateX:
              width <= 1023
                ? thirdBoxMobile
                : width >= 1280
                  ? thirdBox
                  : thirdBoxTablet,
          }}
        >
          <motion.div className="relative z-20 flex h-full w-full flex-col items-center justify-center gap-5 bg-adobe-ivory px-12 text-center max-lg:from-adobe-gray/40 lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start">
            <div className="z-20 size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
              <div
                className="size-full lg:size-2/5"
                style={{
                  backgroundImage: `url("${Shield}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="z-20 flex max-w-[500px] flex-col gap-5 lg:relative lg:bottom-10 lg:row-start-2">
              <div className="text-mobile-chooseUs-title h-[4rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black max-xl:h-[3rem]">
                {Data[2].title}
              </div>
              <div className="text-mobile-chooseUs-description font-spaceMono">
                {Data[2].description}
              </div>
            </div>
            <Lines3 />
          </motion.div>
        </motion.div>
        {/* FOURTH BOX */}
        <motion.div
          className="relative z-10 flex h-1/2 w-full flex-col overflow-hidden bg-gradient-to-tr from-adobe-gray to-adobe-white p-1 lg:h-full"
          ref={forurthCard}
          style={{
            translateX:
              width <= 1023
                ? fourthBoxMobile
                : width >= 1280
                  ? fourthBox
                  : fourthBoxTablet,
          }}
        >
          <motion.div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 overflow-hidden bg-adobe-ivory px-12 text-center max-lg:from-adobe-gray/40 lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start">
            <div className="z-20 size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
              <div
                className="size-full lg:size-2/5"
                style={{
                  backgroundImage: `url("${List}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className="z-20 flex max-w-[500px] flex-col gap-5 lg:relative lg:bottom-10 lg:row-start-2">
              <div className="text-mobile-chooseUs-title h-[4rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black max-xl:h-[3rem]">
                {Data[3].title}
              </div>
              <div className="text-mobile-chooseUs-description font-spaceMono">
                {Data[3].description}
              </div>
            </div>
            <Lines4 />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseUsContent;
