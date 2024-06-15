import { useContext } from "react";
import ViewContext from "../context/StatusContext";
import Gear from "../../assets/Svg/ShapeSvg/gear.svg";
import { motion } from "framer-motion";

const defaultVariant = {
  initial: { rotate: 0 },
  animate: {
    rotate: 30,
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 1,
    },
  },
};

const AnimateGear = () => {
  const { currentItem } = useContext(ViewContext);
  const array = [0, 100, 200, 300, 400, 500, 600, 700];
  const degree = array.findIndex((i) => i == currentItem);

  return (
    <div className="relative size-1/2">
      <motion.div
        className="size-full"
        initial="initial"
        animate={{ rotate: `${degree * 50}deg` }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }}
      >
        <motion.div
          className="size-full"
          style={{
            backgroundImage: `url("${Gear}")`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></motion.div>
      </motion.div>
    </div>
  );
};

export default AnimateGear;
