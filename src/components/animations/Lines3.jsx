import { useContext } from "react";
import ViewContext from "../context/StatusContext";
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
  const { thirdCard } = useContext(ViewContext);
  return (
    <motion.svg
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate={thirdCard ? "animate" : ""}
      transiton={{ staggerChildren: 0.3, delayChildren: 0.5 }}
    >
      <g
        fill="none"
        stroke="rgba(249, 27, 21, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={lastLine}
          d="M-541.023 339c96.003-21.2 288.003-116.6 480-106 192.003 10.6 288.003 203 480 159 192.003-44 288.003-386.6 480-379 192.003 7.6 371.793 411 480 417C1487.18 436 1427.8 120.4 1440 43"
        />
        <motion.path
          variants={middleLine}
          d="M-120.758 482c95.998-51.8 287.998-256.4 480-259 191.998-2.6 287.998 281 480 246 191.998-35 287.998-434.6 480-421 191.998 13.6 455.848 490.8 480 489C1823.39 535.2 1511.85 138.6 1440 39"
        />
      </g>
      <g
        fill="none"
        stroke="rgba(98, 98, 98, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={secondTopLine}
          d="M-21.914 303c96.004-19 288.004-144.2 480-95 192.004 49.2 288.004 364 480 341 192.004-23 288.004-422.8 480-456 192.004-33.2 475.614 303.6 480 290C1902.47 369.4 1531.62 96.6 1440 25"
        />
        <motion.path
          variants={secondlastLine}
          d="M-252.129 289c95.999-57.4 287.999-337.8 480-287 191.999 50.8 287.999 514 480 541 191.999 27 287.999-391.8 480-406 191.999-14.2 429.579 322 480 335C1718.3 485 1485.57 256 1440 202"
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
