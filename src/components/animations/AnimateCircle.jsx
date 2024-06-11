import { motion } from "framer-motion";
import RedCircle from "./RedCircle";

const AnimateCircle = () => {
  return (
    <div className="bg-abobe-white absolute z-10 grid h-[100vh] w-full place-items-center overflow-hidden font-shareTech">
      {/* GRID AREA FOR CONTENT */}

      {/* GRID WRAPPER FOR PAGE CONTENT */}
      <div className="absolute left-[35%] top-10 z-40 flex size-[120%] flex-col justify-center xs:justify-start md:-top-[10%] md:left-[10%] md:size-[130%]">
        {/* PAGE CONTENT */}
        <RedCircle />
        {/* RED SQUARE */}
      </div>
    </div>
  );
};

export default AnimateCircle;
