import React, { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
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
const Carousel = () => {
  const images = [
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

  const [FlowDirection, setFlowDirection] = useState(true);
  const [CenterId, setCenterId] = useState(0);
  const [LeftId, setLeftId] = useState(images.length - 1);
  const [RightId, setRightId] = useState(1);
  const [farRightId, setFarRightId] = useState(2);
  const [farLeftId, setFarLeftId] = useState(8);

  const nextBtn = () => {
    if (LeftId === images.length - 1) {
      setLeftId(0);
    } else {
      setLeftId(LeftId + 1);
    }
    if (CenterId === images.length - 1) {
      setCenterId(0);
    } else {
      setCenterId(CenterId + 1);
    }
    if (RightId === images.length - 1) {
      setRightId(0);
    } else {
      setRightId(RightId + 1);
    }
    if (farRightId === images.length - 1) {
      setFarRightId(0);
    } else {
      setFarRightId(farRightId + 1);
    }
    if (farLeftId === images.length - 1) {
      setFarLeftId(0);
    } else {
      setFarLeftId(farLeftId + 1);
    }
    setFlowDirection(true);
  };
  const prevBtn = () => {
    setFlowDirection(false);
    if (LeftId === 0) {
      setLeftId(images.length - 1);
    } else {
      setLeftId(LeftId - 1);
    }
    if (CenterId === 0) {
      setCenterId(images.length - 1);
    } else {
      setCenterId(CenterId - 1);
    }
    if (RightId === 0) {
      setRightId(images.length - 1);
    } else {
      setRightId(RightId - 1);
    }
    if (farRightId === 0) {
      setFarRightId(images.length - 1);
    } else {
      setFarRightId(farRightId - 1);
    }
    if (farLeftId === 0) {
      setFarLeftId(images.length - 1);
    } else {
      setFarLeftId(farLeftId - 1);
    }
  };

  const variants = {
    borderCenter: {
      x: "0rem",
      opacity: 1,
      scale: 1.1,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage:
        "background-image: linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(12deg 12% 52%) 21%,hsl(11deg 24% 53%) 30%,hsl(11deg 35% 53%) 39%,hsl(11deg 46% 54%) 46%,hsl(10deg 57% 54%) 54%,hsl(9deg 67% 54%) 61%,hsl(8deg 77% 54%) 69%,hsl(6deg 86% 54%) 79%,hsl(2deg 95% 53%) 100%)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },

    borderLeft: {
      x: "-10rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage:
        "background-image: linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(12deg 12% 52%) 21%,hsl(11deg 24% 53%) 30%,hsl(11deg 35% 53%) 39%,hsl(11deg 46% 54%) 46%,hsl(10deg 57% 54%) 54%,hsl(9deg 67% 54%) 61%,hsl(8deg 77% 54%) 69%,hsl(6deg 86% 54%) 79%,hsl(2deg 95% 53%) 100%)",
      zIndex: "4",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },

    borderFarLeft: {
      x: "-14rem",
      opacity: 1,
      filter: "brightness(20%)",
      scale: 1,
      backgroundImage:
        "background-image: linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(12deg 12% 52%) 21%,hsl(11deg 24% 53%) 30%,hsl(11deg 35% 53%) 39%,hsl(11deg 46% 54%) 46%,hsl(10deg 57% 54%) 54%,hsl(9deg 67% 54%) 61%,hsl(8deg 77% 54%) 69%,hsl(6deg 86% 54%) 79%,hsl(2deg 95% 53%) 100%)",
      zIndex: "2",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    borderRight: {
      backgroundImage:
        "background-image: linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(12deg 12% 52%) 21%,hsl(11deg 24% 53%) 30%,hsl(11deg 35% 53%) 39%,hsl(11deg 46% 54%) 46%,hsl(10deg 57% 54%) 54%,hsl(9deg 67% 54%) 61%,hsl(8deg 77% 54%) 69%,hsl(6deg 86% 54%) 79%,hsl(2deg 95% 53%) 100%)",
      x: "10rem",
      opacity: 1,
      filter: "brightness(50%)",
      scale: 1,
      boxShadow: "unset",
      zIndex: "3",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    borderFarRight: {
      backgroundImage:
        "background-image: linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(12deg 12% 52%) 21%,hsl(11deg 24% 53%) 30%,hsl(11deg 35% 53%) 39%,hsl(11deg 46% 54%) 46%,hsl(10deg 57% 54%) 54%,hsl(9deg 67% 54%) 61%,hsl(8deg 77% 54%) 69%,hsl(6deg 86% 54%) 79%,hsl(2deg 95% 53%) 100%)",
      x: "14rem",
      opacity: 1,
      filter: "brightness(20%)",
      scale: 1,
      boxShadow: "unset",
      zIndex: "2",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    rightHidden: {
      x: "8rem",
      scale: 0,
      opacity: 0,
    },
    farRightHidden: {
      x: "10rem",
      scale: 1,
      opacity: 1,
    },
    farLeftHidden: {
      x: "-10rem",
      scale: 1,
      opacity: 1,
    },
    leftHidden: {
      x: "-8rem",
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <motion.div className="relative grid h-full w-full place-content-center overflow-hidden">
      {/* CAROUSEL */}
      <motion.div className="relative flex h-[75vh] w-[90vw] place-items-center justify-center md:w-[75vw] lg:h-[65vh]">
        <AnimatePresence initial={false}>
          {/* FAR LEFT IMAGE */}

          <motion.div
            className="absolute size-1/2 rounded-bl-xl rounded-tr-xl bg-cover bg-center bg-no-repeat lg:h-[70%] lg:w-1/2"
            variants={variants}
            key={farLeftId}
            initial={FlowDirection ? "leftHidden" : "farLeftHidden"}
            animate="borderFarLeft"
            exit={"farLeftHidden"}
          >
            <motion.div
              className="card-content relativeflex items-center justify-center overflow-hidden text-xs"
              style={{
                backgroundImage: `url(${images[farLeftId]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>

          {/* NEAR LEFT IMAGE */}

          <motion.div
            className="absolute size-[55%] rounded-tr-xl bg-cover bg-center bg-no-repeat lg:h-[75%] lg:w-1/2"
            variants={variants}
            key={LeftId}
            initial={FlowDirection ? "center" : "leftHidden"}
            animate="borderLeft"
            exit={"leftHidden"}
          >
            <motion.div
              className="card-content relativeflex items-center justify-center overflow-hidden text-xs"
              style={{
                backgroundImage: `url(${images[LeftId]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>

          {/* CENTER IMAGE */}

          <motion.div
            className="card-wrapper size-[60%] lg:h-[80%] lg:w-1/2"
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? "right" : "left"}
            animate="borderCenter"
          >
            <motion.div
              className="card-content relativeflex items-center justify-center overflow-hidden text-xs"
              style={{
                backgroundImage: `url(${images[CenterId]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>

          {/* NEAR RIGHT IMAGE */}

          <motion.div
            className="absolute size-[55%] rounded-bl-xl rounded-tr-xl bg-cover bg-center bg-no-repeat lg:h-[75%] lg:w-1/2"
            exit={"rightHidden"}
            key={RightId}
            variants={variants}
            initial={FlowDirection ? "rightHidden" : "center"}
            animate="borderRight"
          >
            <motion.div
              className="card-content relativeflex items-center justify-center overflow-hidden text-xs"
              style={{
                backgroundImage: `url(${images[RightId]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>

          {/* FAR RIGHT IMAGE */}

          <motion.div
            className="absolute size-1/2 rounded-bl-xl rounded-tr-xl bg-cover bg-center bg-no-repeat lg:h-[70%] lg:w-1/2"
            variants={variants}
            key={farRightId}
            initial={FlowDirection ? "farRightHidden" : "rightHidden"}
            animate="borderFarRight"
            exit={"farRightHidden"}
          >
            <motion.div
              className="card-content relativeflex items-center justify-center overflow-hidden text-xs"
              style={{
                backgroundImage: `url(${images[farRightId]})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></motion.div>
          </motion.div>
        </AnimatePresence>
        {/* BUTTONS */}
      </motion.div>
      {/* BUTTONS */}
      <div className="z-[6] flex justify-center gap-10 md:gap-24">
        <button
          className="group relative flex w-20 cursor-pointer flex-col items-center justify-center overflow-hidden rounded rounded-bl-xl rounded-tr-xl border border-gray-100 bg-gray-200 px-12 py-3 font-bold uppercase text-slate-800 hover:text-black focus:outline-none active:bg-adobe-white active:text-black lg:w-44"
          onClick={prevBtn}
        >
          <span className="ease absolute left-1/2 top-1/2 z-10 h-[90%] w-[95%] -translate-x-1/2 -translate-y-1/2 flex-col rounded rounded-bl-xl rounded-tr-xl bg-adobe-white"></span>
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-8 border-adobe-gray transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-8 border-adobe-gray transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-8 border-adobe-red transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-8 border-adobe-red transition-all duration-200 group-hover:h-full"></span>
          <span className="relative z-20">Prev</span>
        </button>

        <button
          className="group relative flex w-20 cursor-pointer flex-col items-center justify-center overflow-hidden rounded rounded-bl-xl rounded-tr-xl border border-gray-100 bg-gray-200 px-12 py-3 font-bold uppercase text-slate-800 hover:text-black focus:outline-none active:bg-adobe-white active:text-black lg:w-44"
          onClick={nextBtn}
        >
          <span className="ease absolute left-1/2 top-1/2 z-10 h-[90%] w-[95%] -translate-x-1/2 -translate-y-1/2 rounded rounded-bl-xl rounded-tr-xl bg-adobe-white"></span>
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-8 border-adobe-gray transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-8 border-adobe-red transition-all duration-200 group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-8 border-adobe-red transition-all duration-200 group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-8 border-adobe-gray transition-all duration-200 group-hover:h-full"></span>
          <span className="relative z-20">Next</span>
        </button>
      </div>
    </motion.div>
  );
};

export default Carousel;
