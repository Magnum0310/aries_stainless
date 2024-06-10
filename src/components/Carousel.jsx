import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [handleClick, setHandleClick] = useState(false);

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
    center: {
      x: "0rem",
      opacity: 1,
      scale: 1.1,
      zIndex: "5",
      filter: "brightness(100%)",
      backgroundImage: "url(" + images[CenterId] + ")",
      boxShadow: "0px 0px 30px 0px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    left: {
      x: "-10rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: "url(" + images[LeftId] + ")",
      zIndex: "4",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    farLeft: {
      x: "-14rem",
      opacity: 1,
      filter: "brightness(40%)",
      scale: 1,
      backgroundImage: "url(" + images[farLeftId] + ")",
      zIndex: "2",
      boxShadow: "unset",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
    right: {
      backgroundImage: "url(" + images[RightId] + ")",
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

    farRight: {
      backgroundImage: "url(" + images[farRightId] + ")",
      x: "14rem",
      opacity: 1,
      filter: "brightness(40%)",
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

  const onClick = () => {
    setHandleClick(!handleClick);
  };

  return (
    <motion.div className="b grid place-content-center overflow-hidden">
      <motion.div className="relative flex h-[50vh] w-screen place-items-center justify-center border-b-2 border-t-2 border-solid border-black lg:h-[60vh] 2xl:h-[65vh]">
        <AnimatePresence initial={false}>
          {/* FAR LEFT IMAGE */}
          <motion.div
            key={farLeftId}
            variants={variants}
            initial={FlowDirection ? "leftHidden" : "farLeftHidden"}
            animate="farLeft"
            exit={"farLeftHidden"}
            className="absolute size-1/2 rounded-bl-xl rounded-tr-xl border-4 border-solid border-adobe-gray bg-cover bg-center bg-no-repeat lg:h-[70%] lg:w-1/2"
          ></motion.div>
          {/* NEAR LEFT IMAGE */}
          <motion.div
            key={LeftId}
            variants={variants}
            initial={FlowDirection ? "center" : "leftHidden"}
            animate="left"
            exit={"leftHidden"}
            className="absolute size-[55%] rounded-tr-xl border-4 border-solid border-adobe-gray bg-cover bg-center bg-no-repeat lg:h-[75%] lg:w-1/2"
          ></motion.div>
          {/* CENTER IMAGE */}
          <motion.div
            variants={variants}
            key={CenterId}
            initial={FlowDirection ? "right" : "left"}
            animate="center"
            className="size-[60%] rounded-bl-xl rounded-tr-xl border-4 border-solid border-adobe-gray bg-cover bg-center bg-no-repeat lg:h-[80%] lg:w-1/2"
          ></motion.div>
          {/* NEAR RIGHT IMAGE */}
          <motion.div
            key={RightId}
            variants={variants}
            initial={FlowDirection ? "rightHidden" : "center"}
            animate="right"
            exit={"rightHidden"}
            className="absolute size-[55%] rounded-bl-xl rounded-tr-xl border-4 border-solid border-adobe-gray bg-cover bg-center bg-no-repeat lg:h-[75%] lg:w-1/2"
          ></motion.div>
          {/* FAR RIGHT IMAGE */}
          <motion.div
            key={farRightId}
            variants={variants}
            initial={FlowDirection ? "farRightHidden" : "rightHidden"}
            animate="farRight"
            exit={"farRightHidden"}
            className="absolute size-1/2 rounded-bl-xl rounded-tr-xl border-4 border-solid border-adobe-gray bg-cover bg-center bg-no-repeat lg:h-[70%] lg:w-1/2"
          ></motion.div>
        </AnimatePresence>
        {/* BUTTONS */}
      </motion.div>
      <div className="z-[6] mt-5 flex justify-center gap-24">
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="w-20 cursor-pointer rounded-br-xl rounded-tl-xl border-2 border-solid border-black bg-adobe-white px-[15px] py-2 font-bold uppercase tracking-[0.15rem] lg:h-16 lg:w-44"
          onClick={prevBtn}
        >
          Back
        </motion.button>
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.5,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
          className="text-white; w-20 cursor-pointer rounded-bl-xl rounded-tr-xl border-2 border-solid border-black bg-adobe-white px-[15px] py-2 font-bold uppercase tracking-[0.15rem] lg:w-44"
          onClick={nextBtn}
        >
          Next
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Carousel;
