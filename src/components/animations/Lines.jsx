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

export default function Lines() {
  const { firstCard } = useContext(ViewContext);

  return (
    <motion.svg
      preserveAspectRatio="none"
      viewBox="0 0 1440 560"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate={firstCard ? "animate" : ""}
      transiton={{ staggerChildren: 0.3, delayChildren: 0.5 }}
    >
      <g
        fill="none"
        stroke="rgba(98, 98, 98, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={lastLine}
          d="M-157.462 446c96.002-74 288.002-371.6 480-370 192.002 1.6 288.002 359.2 480 378 192.002 18.8 288.002-263.6 480-284 192.002-20.4 448.512 193.4 480 182C1794.03 340.6 1504.51 160.8 1440 113"
        />
        <motion.path
          variants={topLine}
          d="M-341.033 465c96.003-41.6 288.003-210.8 480-208 192.003 2.8 288.003 235.6 480 222 192.003-13.6 288.003-282.8 480-290 192.003-7.2 411.793 261 480 254 68.203-7-111.177-231.2-138.967-289"
        />
      </g>
      <g
        fill="none"
        stroke="rgba(249, 27, 21, 1)"
        strokeWidth="2"
        mask='url("#a")'
      >
        <motion.path
          variants={secondlastLine}
          d="M-545.206 269c95.996 4 287.996 61.6 480 20 191.996-41.6 287.996-257.8 480-228 191.996 29.8 287.996 364.4 480 377 191.996 12.6 370.956-326.4 480-314 109.046 12.4 52.166 300.8 65.206 376"
        />
        <motion.path
          variants={secondTopLine}
          d="M-900.481 160c96.001 60.8 288.001 306.4 480 304 192.001-2.4 288.001-307.8 480-316 192.001-8.2 288.001 250.8 480 275 192.001 24.2 299.901-138.4 480-154C1199.62 253.4 1355.9 329.8 1440 345"
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
