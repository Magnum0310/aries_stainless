import { motion } from "framer-motion";
import CurveLine from "./CurveLine";

const AnimateCircle = () => {
  return (
    <div className="absolute z-20 grid h-[150vh] w-full place-items-center overflow-hidden font-shareTech">
      {/* GRID AREA FOR CONTENT */}

      {/* GRID WRAPPER FOR PAGE CONTENT */}
      <div className="absolute -top-[5%] right-[55%] z-40 flex size-[100%] scale-[1.3] flex-col justify-center max-lg:-top-[10%] max-lg:scale-[3] max-xs:-top-[15%] max-xs:right-[75%] max-xs:scale-[5]">
        {/* PAGE CONTENT */}
        <CurveLine />
        {/* RED SQUARE */}
      </div>
    </div>
  );
};

export default AnimateCircle;
