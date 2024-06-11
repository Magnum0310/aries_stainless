import React from "react";
import { motion } from "framer-motion";
import Data from "../constants/data.json";
import Red from "./RedSquare";
import Line2 from "./Lines2";

const AnimateSquare = () => {
  return (
    <div className="absolute h-[100vh] w-full scale-150 place-items-center overflow-hidden font-shareTech">
      {/* GRID AREA FOR CONTENT */}

      {/* GRID WRAPPER FOR PAGE CONTENT */}
      <div className="absolute z-10 flex size-full scale-150 flex-col justify-center bg-opacity-80">
        {/* PAGE CONTENT */}
        <Line2 />
        {/* RED SQUARE */}
      </div>
    </div>
  );
};

export default AnimateSquare;
