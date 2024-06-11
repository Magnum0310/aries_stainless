import React from "react";
import { motion } from "framer-motion";
import Data from "../constants/data.json";
import Red from "./RedSquare";

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

const AnimateSquare = () => {
  return (
    <div className="grid} absolute top-[110%] h-[100vh] w-full place-items-center overflow-hidden font-shareTech md:top-[110%] lg:h-[120vh]">
      {/* GRID AREA FOR CONTENT */}

      {/* GRID WRAPPER FOR PAGE CONTENT */}
      <div className="absolute left-[35%] z-40 flex size-[120%] flex-col justify-center bg-opacity-80 xs:justify-start md:size-[100%]">
        {/* PAGE CONTENT */}
        <Red />
        {/* RED SQUARE */}
      </div>
    </div>
  );
};

export default AnimateSquare;
