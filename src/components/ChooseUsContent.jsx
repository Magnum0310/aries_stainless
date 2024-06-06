import { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useInView,
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

  console.log(width);

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start end", "end end"],
  });

  const [xPosition, setXPosition] = useState({ firstBox: 0, box: 0 });

  useEffect(() => {
    if (width >= 1280) {
      setXPosition((prevPos) => ({
        ...prevPos,
        firstBox: (prevPos.firstBox = 0),
        Box: (prevPos.box = -500),
      }));
    } else if (width < 1280) {
      setXPosition((prevPos) => ({
        ...prevPos,
        firstBox: (prevPos.firstBox = -1200),
        Box: (prevPos.box = -1200),
      }));
    }
  }, [width]);

  const sample = [0, 0.5];

  // MOBILE
  const firstBoxMobile = useTransform(
    scrollYProgress,
    [0, 0.4],
    [xPosition.firstBox, 0],
    {
      ease: easeInOut,
    },
  );
  const secondBoxMobile = useTransform(
    scrollYProgress,
    [0.2, 0.6],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );
  const thirdBoxMobile = useTransform(
    scrollYProgress,
    [0.4, 0.8],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );
  const fourthBoxMobile = useTransform(
    scrollYProgress,
    [0.6, 1],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );

  // TABLET
  const firstBoxTablet = useTransform(
    scrollYProgress,
    [0, 0.4],
    [xPosition.firstBox, 0],
    {
      ease: easeInOut,
    },
  );
  const secondBoxTablet = useTransform(
    scrollYProgress,
    [0.25, 0.5],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );
  const thirdBoxTablet = useTransform(
    scrollYProgress,
    [0.45, 0.75],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );
  const fourthBoxTablet = useTransform(
    scrollYProgress,
    [0.7, 0.9],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );

  // Laptop
  const firstBox = useTransform(
    scrollYProgress,
    [0, 0.4],
    [xPosition.firstBox, 0],
    {
      ease: easeInOut,
    },
  );
  const secondBox = useTransform(
    scrollYProgress,
    [0.5, 0.65],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );
  const thirdBox = useTransform(
    scrollYProgress,
    [0.6, 0.75],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );
  const fourthBox = useTransform(
    scrollYProgress,
    [0.7, 0.85],
    [xPosition.box, 0],
    {
      ease: easeInOut,
    },
  );

  const test = useTransform(scrollYProgress, [0.7, 0.75], [0, 1]);

  return (
    <div
      className="relative h-[250vh] justify-center bg-adobe-white font-shareTech lg:flex lg:flex-col xl:flex-row xl:items-center"
      ref={divRef}
    >
      {/* FIRST HALF */}
      <div className="h-1/2 lg:flex lg:h-1/3 xl:sticky xl:top-1/2 xl:z-20 xl:-translate-y-1/2">
        {/* FIRST BOX */}
        <motion.div
          className="z-40 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-r-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start lg:border-t-2 xl:border-t-0"
          style={{
            // translateX: firstBox,
            translateX: width >= 1024 ? firstBoxTablet : firstBoxMobile,
          }}
        >
          <div className="size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
            <div
              className="size-full lg:size-2/5"
              style={{
                backgroundImage: `url("${Data[0].image}")`,
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
          className="z-30 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start lg:border-t-2 xl:border-r-2 xl:border-t-0"
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
                backgroundImage: `url("${Data[1].image}")`,
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
      <div className="h-1/2 lg:flex lg:h-1/3 lg:items-center xl:sticky xl:top-1/2 xl:z-10 xl:-translate-y-1/2">
        {/* THIRD BOX */}
        <motion.div
          className="z-20 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start lg:border-r-2"
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
                backgroundImage: `url("${Data[2].image}")`,
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
          className="z-10 flex h-1/2 w-full flex-col items-center justify-center gap-10 border-b-2 border-solid border-adobe-gray bg-adobe-white px-12 text-center lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-2 lg:place-items-start"
          style={{
            // translateX: fourthBox,
            translateX:
              width <= 1023
                ? fourthBoxMobile
                : width >= 1280
                  ? fourthBox
                  : fourthBoxTablet,

            opacity: test,
          }}
        >
          <div className="size-1/4 lg:row-start-1 lg:flex lg:size-full lg:place-content-center lg:place-items-center">
            <div
              className="size-full lg:size-2/5"
              style={{
                backgroundImage: `url("${Data[3].image}")`,
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
