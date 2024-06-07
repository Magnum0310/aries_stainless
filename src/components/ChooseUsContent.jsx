import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  easeInOut,
  easeOut,
} from "framer-motion";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import Tool from "../assets/Svg/ChooseUsIcon/colorTools.svg";
import Customer from "../assets/Svg/ChooseUsIcon/colorReview.svg";
import Shield from "../assets/Svg/ChooseUsIcon/colorShield.svg";
import List from "../assets/Svg/ChooseUsIcon/colorList.svg";
import Data from "../components/constants/chooseUsPage.json";

const ChooseUsContent = () => {
  const divRef = useRef(null);
  const { width } = useWindowDimensions();

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end end"],
  });

  // MOBILE
  const firstBoxMobile = useTransform(scrollYProgress, [0, 0.4], [-1200, 0], {
    ease: easeInOut,
  });
  const secondBoxMobile = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [-1200, 0],
    {
      ease: easeInOut,
    },
  );
  const thirdBoxMobile = useTransform(scrollYProgress, [0.4, 0.8], [-1200, 0], {
    ease: easeInOut,
  });
  const fourthBoxMobile = useTransform(scrollYProgress, [0.6, 1], [-1200, 0], {
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
      ease: easeInOut,
    },
  );
  const thirdBoxTablet = useTransform(
    scrollYProgress,
    [0.45, 0.75],
    [-1200, 0],
    {
      ease: easeInOut,
    },
  );
  const fourthBoxTablet = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    [-1200, 0],
    {
      ease: easeInOut,
    },
  );

  // Laptop
  const firstBox = useTransform(scrollYProgress, [0, 0.4], [0, 0], {
    ease: easeInOut,
  });
  const secondBox = useTransform(scrollYProgress, [0.5, 0.65], [-500, 0], {
    ease: easeInOut,
  });
  const thirdBox = useTransform(scrollYProgress, [0.6, 0.75], [-1200, 0], {
    ease: easeInOut,
  });
  const fourthBox = useTransform(scrollYProgress, [0.7, 0.85], [-500, 0], {
    ease: easeInOut,
  });

  const opacityThirdBox = useTransform(
    scrollYProgress,
    [0.6, 0.7, 0.75],
    [0, 1, 1],
  );
  const opacityFourthBox = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);

  return (
    <div
      className="relative h-[200vh] justify-center bg-adobe-red font-shareTech lg:flex lg:flex-col xl:flex-row xl:items-center"
      ref={divRef}
    >
      {/* FIRST HALF */}
      <div className="h-1/2 lg:flex lg:h-[35%] xl:sticky xl:top-1/2 xl:z-20 xl:-translate-y-1/2">
        {/* FIRST BOX */}
        <motion.div
          className="z-40 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start lg:border-r-2 lg:border-t-2 xl:border-b-0 xl:border-t-0"
          style={{
            translateX:
              width <= 1023
                ? firstBoxMobile
                : width >= 1280
                  ? firstBox
                  : firstBoxTablet,
          }}
        >
          <div className="size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
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
          <div className="flex max-w-[500px] flex-col gap-10 lg:relative lg:bottom-10 lg:row-start-2">
            <div className="text-mobile-chooseUs-title h-[3rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black">
              {Data[0].title}
            </div>
            <div className="text-mobile-chooseUs-description font-spaceMono">
              {Data[0].description}
            </div>
          </div>
        </motion.div>
        {/* SECOND BOX */}
        <motion.div
          className="z-30 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start lg:border-t-2 xl:border-b-0 xl:border-r-2 xl:border-t-0"
          style={{
            translateX:
              width <= 1023
                ? secondBoxMobile
                : width >= 1280
                  ? secondBox
                  : secondBoxTablet,
          }}
        >
          <div className="size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
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
          <div className="flex max-w-[500px] flex-col gap-10 lg:relative lg:bottom-10 lg:row-start-2">
            <div className="text-mobile-chooseUs-title h-[3rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black">
              {Data[1].title}
            </div>
            <div className="text-mobile-chooseUs-description font-spaceMono">
              {Data[1].description}
            </div>
          </div>
        </motion.div>
      </div>
      {/* SECOND HALF */}
      <div className="h-1/2 lg:flex lg:h-[35%] lg:items-center xl:sticky xl:top-1/2 xl:z-10 xl:-translate-y-1/2">
        {/* THIRD BOX */}
        <motion.div
          className="z-20 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start lg:border-r-2 xl:border-b-0"
          style={{
            // translateX: thirdBox,
            translateX:
              width <= 1023
                ? thirdBoxMobile
                : width >= 1280
                  ? thirdBox
                  : thirdBoxTablet,
          }}
        >
          <div className="size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
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
          <div className="flex max-w-[500px] flex-col gap-10 lg:relative lg:bottom-10 lg:row-start-2">
            <div className="text-mobile-chooseUs-title h-[3rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black">
              {Data[2].title}
            </div>
            <div className="text-mobile-chooseUs-description font-spaceMono">
              {Data[2].description}
            </div>
          </div>
        </motion.div>
        {/* FOURTH BOX */}
        <motion.div
          className="z-10 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start xl:border-b-0"
          style={{
            // translateX: fourthBox,
            translateX:
              width <= 1023
                ? fourthBoxMobile
                : width >= 1280
                  ? fourthBox
                  : fourthBoxTablet,
            opacity: width <= 1280 ? 1 : opacityFourthBox,
          }}
        >
          <div className="size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
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
          <div className="flex max-w-[500px] flex-col gap-10 lg:relative lg:bottom-10 lg:row-start-2">
            <div className="text-mobile-chooseUs-title h-[3rem] place-content-center rounded-bl-xl rounded-tr-xl border-2 border-solid border-black">
              {Data[3].title}
            </div>
            <div className="text-mobile-chooseUs-description font-spaceMono">
              {Data[3].description}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChooseUsContent;
