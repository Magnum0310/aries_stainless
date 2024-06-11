import React from "react";
import { motion } from "framer-motion";

const lastLine = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 3, ease: "easeInOut" },
  },
};
const topLine = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 0.3,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};
const secondlastLine = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: "easeInOut" },
  },
};
const secondTopLine = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 4, ease: "easeInOut" },
  },
};
const middleLine = {
  initial: { pathLength: 0, opacity: 0 },
  animate: {
    pathLength: 1,
    opacity: 0.6,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

export default function Lines2() {
  return (
    <motion.svg
      preserveAspectRatio="none"
      viewBox="0 0 1475 560"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      transiton={{ staggerChildren: 0.3, delayChildren: 0 }}
    >
      <g
        fill="none"
        stroke="rgba(128, 128, 128, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={lastLine}
          d="M112.61 562.66c129.77-4.96 233.71-214.48 472.94-214.9 239.23-.42 236.47 70 472.94 70s353.42-69.81 472.94-70"
        />
        <motion.path
          variants={middleLine}
          d="M602.17 628.69c137.6-54.44 79.83-473.26 352.74-475.33 272.91-2.07 521.67 205.07 705.48 207.2"
        />
      </g>
      <g
        fill="none"
        stroke="rgba(249, 27, 21, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={secondTopLine}
          d="M305.17 630.22C477.5 579 515.28 102.67 779.82 90.02c264.54-12.65 237.33 70 474.66 70 237.32 0 354.7-69.81 474.65-70"
        />
        <motion.path
          variants={secondlastLine}
          d="M674.75 671.86c152.99-16.66 225.42-338.82 505.58-351.19 280.15-12.37 374.79-133.26 505.57-134.4"
        />
        <motion.path
          variants={topLine}
          d="M355.24 590.51c138.91-20.81 208.13-348.1 438.26-351.53 230.14-3.43 219.14 70 438.27 70s327.31-69.78 438.26-70"
        />
      </g>
      <defs>
        <mask id="a">
          <path d="M0 0h1475v560H0z" fill="#fff" />
        </mask>
      </defs>
    </motion.svg>
  );
}
