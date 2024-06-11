import { useContext } from "react";
import { motion } from "framer-motion";
import ViewContext from "../context/StatusContext";

const primaryVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childrenVariant = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const childrenOpacityVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
};

export default function redSquareAnimate() {
  const { chooseUs } = useContext(ViewContext);
  console.log(chooseUs);

  return (
    <motion.svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      variants={primaryVariant}
      initial="initial"
      animate={chooseUs ? "animate" : ""}
    >
      <g fill="none">
        <motion.path
          variants={childrenOpacityVariant}
          d="M128.921 589.811l-17.365 98.481-98.48-17.365 17.365-98.48z"
          opacity=".1"
          stroke="gray"
          strokeWidth="4"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M188.999 598.132l-3.732 106.852-106.851-3.732 3.73-106.851z"
          opacity=".175"
          stroke="#8e7b7b"
          strokeWidth="5"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M245.511 593.961l11.899 113.21-113.21 11.898-11.898-113.21z"
          opacity=".25"
          stroke="#9b7575"
          strokeWidth="6"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M296.233 578.532l29.212 117.163-117.163 29.212-29.212-117.163z"
          opacity=".325"
          stroke="#a7706f"
          strokeWidth="7"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M339.221 553.441l47.825 118.37-118.37 47.826-47.825-118.371z"
          opacity=".4"
          stroke="#b26a69"
          strokeWidth="8"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M372.871 520.596l67.292 116.552-116.552 67.292-67.292-116.552z"
          opacity=".475"
          stroke="#bc6363"
          strokeWidth="9"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M395.97 482.145l87.115 111.504-111.503 87.116-87.116-111.503z"
          opacity=".55"
          stroke="#c65d5c"
          strokeWidth="10"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M407.719 440.412l106.762 103.1-103.099 106.761L304.62 547.174z"
          opacity=".625"
          stroke="#cf5554"
          strokeWidth="11"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M407.768 397.815l125.667 91.303-91.303 125.667-125.667-91.303z"
          opacity=".7"
          stroke="#d84d4c"
          strokeWidth="12"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M396.217 356.792l143.259 76.171-76.172 143.259-143.258-76.172z"
          opacity=".775"
          stroke="#e14443"
          strokeWidth="13"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M373.617 319.718l158.965 57.858-57.859 158.965-158.965-57.858z"
          opacity=".85"
          stroke="#e93a38"
          strokeWidth="14"
        />
        <motion.path
          variants={childrenOpacityVariant}
          d="M340.947 288.835l172.235 36.61-36.61 172.235-172.235-36.61z"
          opacity=".925"
          stroke="#f12d2a"
          strokeWidth="15"
        />
        <motion.path
          variants={childrenVariant}
          d="M299.59 266.17l182.555 12.765L469.38 461.49l-182.555-12.765z"
          stroke="#f91b15"
          strokeWidth="16"
        />
      </g>
    </motion.svg>
  );
}
