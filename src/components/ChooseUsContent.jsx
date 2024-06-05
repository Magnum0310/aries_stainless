import { useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Tool from "../assets/Svg/ChooseUsIcon/colorTools.svg";
import Customer from "../assets/Svg/ChooseUsIcon/colorReview.svg";
import Shield from "../assets/Svg/ChooseUsIcon/colorShield.svg";
import List from "../assets/Svg/ChooseUsIcon/colorList.svg";
import Data from "../components/constants/chooseUsPage.json";

const ChooseUsContent = () => {
  const divRef = useRef(null);
  const divRef1 = useRef(null);
  //   const isInView = useInView(divRef, {
  //     margin: "0px 100px -50px 0px",
  //   });

  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start center", "end center"],
  });

  const contentVariant = {
    initial: { opacity: 1, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };

  const test = useTransform(scrollYProgress, [0, 0.25], [-1000, 0]);
  const test1 = useTransform(scrollYProgress, [0.25, 0.5], [-1000, 0]);
  const test2 = useTransform(scrollYProgress, [0.5, 0.75], [-1000, 0]);
  const test3 = useTransform(scrollYProgress, [0.75, 1], [-1000, 0]);

  return (
    <div
      className="relative h-[200vh] overflow-hidden bg-adobe-white font-shareTech"
      ref={divRef}
    >
      {/* {Data.map((service) => (
        <motion.div
          key={service.id}
          className="h-1/4 w-full border-b-4 border-solid border-black"
          variants={contentVariant}
          initial="initial"
          animate="animate"
        >
          <div>{service.title}</div>
          <div>{service.description}</div>
          <div
            className="h-1/4 w-full bg-red-500"
            style={{
              backgroundImage: `url("${service.image}")`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </motion.div>
      ))} */}
      <motion.div
        className="h-1/4 bg-orange-500"
        style={{
          translateX: test,
        }}
      >
        TEST
      </motion.div>
      <motion.div
        className="h-1/4 bg-red-500"
        style={{
          translateX: test1,
        }}
      >
        TEST
      </motion.div>
      <motion.div
        className="h-1/4 bg-green-500"
        style={{
          translateX: test2,
        }}
      >
        TEST
      </motion.div>
      <motion.div
        className="h-1/4 bg-blue-500"
        style={{
          translateX: test3,
        }}
      >
        TEST
      </motion.div>
    </div>
  );
};

export default ChooseUsContent;
