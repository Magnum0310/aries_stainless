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
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate="animate"
      transiton={{ staggerChildren: 0.3, delayChildren: 0 }}
    >
      <g
        fill="none"
        stroke="rgba(249, 27, 21, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={lastLine}
          d="M564.86 641.75c124.81-58.61 63.79-455.18 305.44-459.27 241.65-4.09 453.56 150.08 610.88 151.2"
        />
        <motion.path
          variants={middleLine}
          d="M836.51 667.74c96.35-20.97 40.01-257.37 284.13-273.56 244.12-16.19 417.09-204 568.27-207.2"
        />
        <motion.path
          variants={secondTopLine}
          d="M692.65 593.38c164.39-56.26 198.27-531.4 437.49-540.02 239.22-8.62 321.79 149.09 437.49 151.2"
        />
      </g>
      <g
        fill="none"
        stroke="rgba(98, 98, 98, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={secondlastLine}
          d="M591.41 572.74c127.17-43.16 75.93-414.26 339.13-416.57 263.2-2.31 504.83 144.78 678.26 145.6"
        />
        <motion.path
          variants={topLine}
          d="M249.23 592.69c177.89-.43 339.33-116.83 701.42-119.7 362.09-2.87 516.05-237.48 701.42-240.8"
        />
      </g>

      <defs>
        <mask id="a">
          <path d="M0 0h1440v560H0z" fill="#fff" />
        </mask>
      </defs>
    </motion.svg>
  );
}
