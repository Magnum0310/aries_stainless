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

export default function SvgComponent() {
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
        stroke="rgba(128, 128, 128, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        {/* Last line */}
        <motion.path
          variants={lastLine}
          d="M723.95 650.39c154.71-23.28 238.15-390.82 487.77-392.05 249.62-1.23 357.89 176.39 487.77 179.2"
        />
        <motion.path
          variants={middleLine}
          d="M383.55 607.62c161.25-15.76 241.27-345.13 540.2-358.07 298.92-12.94 399.58-155.23 540.19-156.8"
        />
        {/* Top Line */}
        <motion.path
          variants={topLine}
          d="M746 578.46c126.27-73.31 60.38-502.18 291.16-506.29 230.79-4.11 427.84 204.14 582.33 207.2"
        />
        {/* Second to last line */}
        <motion.path
          variants={secondlastLine}
          d="M331.95 612.49c141.01-29.64 194.13-390.38 418.74-396.06 224.6-5.68 209.36 70 418.73 70s312.6-69.76 418.74-70"
        />
        {/* Second to the top line */}
        <motion.path
          variants={secondTopLine}
          d="M669.79 616.56c145.6-41.34 195.72-447.89 405.37-449.69 209.65-1.8 288.5 226.89 405.37 235.2"
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
