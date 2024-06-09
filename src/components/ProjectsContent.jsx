import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Data from "../components/constants/data.json";
import Stainless from "../assets/Svg/stainlessPipe.svg";
import Proj1 from "../assets/Projects/Proj1.jpg";
import Proj2 from "../assets/Projects/Proj2.jpg";
import Proj3 from "../assets/Projects/Proj3.jpg";
import Proj4 from "../assets/Projects/Proj4.jpg";
import Proj5 from "../assets/Projects/Proj5.jpg";
import Proj6 from "../assets/Projects/Proj6.jpg";
import Proj7 from "../assets/Projects/Proj7.jpg";
import Proj8 from "../assets/Projects/Proj8.jpg";
import Proj9 from "../assets/Projects/Proj9.jpg";
import Proj10 from "../assets/Projects/Proj10.jpg";

const Project = [
  Proj1,
  Proj2,
  Proj3,
  Proj4,
  Proj5,
  Proj6,
  Proj7,
  Proj8,
  Proj9,
  Proj10,
];

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const DRAG_BUFFER = 50;

const ServicePage = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < Project.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-50 flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        SERVICE
      </div>
      <div className="absolute left-5 z-40 h-full w-full border-l-4 border-solid border-adobe-red"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div className="absolute left-6 top-11 h-full w-full bg-adobe-white lg:left-0 lg:top-0">
        <div className="absolute -left-6 top-20 size-full place-content-center">
          <div
            className="h-1/2 w-full opacity-50"
            style={{
              backgroundImage: `url("${Stainless}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      {/* PROJECT TITLE */}
      <div className="text-mobile-title relative top-[10%] z-40 flex w-[117%] flex-col justify-center pl-[25%]">
        PROJECTS
        {/* RED HIGHTLIGHTS */}
        <div className="flex h-[6px] w-[60%] gap-2">
          <div className="h-full w-full basis-full rounded-bl-xl rounded-tr-xl bg-adobe-red"></div>
          <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
          <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
          <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
        </div>
      </div>
      <div className="absolute top-1/2 z-40 h-1/2 w-full">
        <motion.div className="top-1/3 h-1/2 w-full -translate-y-1/2 gap-16 overflow-x-hidden bg-red-500 active:cursor-grabbing">
          <motion.div
            className="relative flex size-full"
            animate={{ translateX: `-${imgIndex * 50}%` }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            style={{
              x: dragX,
            }}
            transition={SPRING_OPTIONS}
            onDragEnd={onDragEnd}
          >
            {Project.map((project, index) => (
              <motion.div
                key={index}
                className="w-[80%] shrink-0 bg-green-500"
                style={{
                  backgroundImage: `url("${project}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                animate={{
                  // translateX: `-${imgIndex * 100}%`,
                  scale: imgIndex === index ? 0.95 : 0.75,
                }}
              ></motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
