import { useContext } from "react";
import ViewContext from "../context/StatusContext";
import { motion } from "framer-motion";

const firstCircle = {
  initial: {
    strokeDasharray: 942.0968627929688,
    strokeDashoffset: 942.0968627929688,
  },
  animate: {
    strokeDasharray: 942.0968627929688,
    strokeDashoffset: 0,
    transition: {
      ease: "easeInOut",
      duration: 1.2,
    },
  },
};
const secondCircle = {
  initial: {
    strokeDasharray: 732.744140625,
    strokeDashoffset: 732.744140625,
  },
  animate: {
    strokeDasharray: 732.744140625,
    strokeDashoffset: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const thirdCircle = {
  initial: {
    strokeDasharray: 522.7508544921875,
    strokeDashoffset: 522.7508544921875,
  },
  animate: {
    strokeDasharray: 522.7508544921875,
    strokeDashoffset: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};
const fourthCircle = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 2 } },
};

export default function RedCircleSvg() {
  const { contactUs } = useContext(ViewContext);
  return (
    <motion.svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      initial="initial"
      animate={contactUs ? "animate" : ""}
      transition={{
        staggerChildren: 0.2,
        delayChildren: 1,
      }}
    >
      <g fill="none">
        <motion.circle
          variants={fourthCircle}
          cx="684"
          cy="684"
          opacity=".1"
          r="50"
          stroke="gray"
          strokeWidth="4"
          transform="rotate(100 400 400)"
        />
        <motion.circle
          variants={thirdCircle}
          cx="589.333"
          cy="589.333"
          opacity=".4"
          r="83.333"
          stroke="#b26a69"
          strokeWidth="8"
          transform="rotate(66.667 400 400)"
        />
        <motion.circle
          variants={secondCircle}
          cx="494.667"
          cy="494.667"
          opacity=".7"
          r="116.667"
          stroke="#d84d4c"
          strokeWidth="12"
          transform="rotate(33.333 400 400)"
        />
        <motion.circle
          variants={firstCircle}
          cx="400"
          cy="400"
          r="150"
          stroke="#f91b15"
          strokeWidth="16"
        />
      </g>
    </motion.svg>
  );
}
