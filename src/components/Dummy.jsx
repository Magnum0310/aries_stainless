import { useState } from "react";
import { motion } from "framer-motion";
import city1 from "../assets/Projects/Proj1.jpg";
import city2 from "../assets/Projects/Proj2.jpg";
import city3 from "../assets/Projects/Proj3.jpg";
import planet1 from "../assets/Projects/Proj4.jpg";
import planet2 from "../assets/Projects/Proj5.jpg";
import Proj1 from "../assets/Projects/Proj6.jpg";
import Proj2 from "../assets/Projects/Proj7.jpg";
import Proj3 from "../assets/Projects/Proj8.jpg";
import Proj4 from "../assets/Projects/Proj9.jpg";
import Proj5 from "../assets/Projects/Proj10.jpg";

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 10,
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 9) % 10,
      );

      return updatedIndexes;
    });
  };

  const images = [
    city1,
    city2,
    city3,
    planet1,
    planet2,
    Proj1,
    Proj2,
    Proj3,
    Proj4,
    Proj5,
  ];

  const positions = [
    "center",
    "left1",
    "left",
    "left3",
    "left2",
    "right4",
    "right2",
    "right3",
    "right",
    "right1",
  ];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 10 },
    left1: { x: "-30%", scale: 0.7, zIndex: 9 },
    left: { x: "-50%", scale: 0.5, zIndex: 7 },
    left3: { x: "-60%", scale: 0.4, zIndex: 5 },
    left2: { x: "-70%", scale: 0.3, zIndex: 3 },
    right4: { x: "72%", scale: 0.1, zIndex: 1 },
    right2: { x: "70%", scale: 0.3, zIndex: 3 },
    right3: { x: "60%", scale: 0.4, zIndex: 5 },
    right: { x: "50%", scale: 0.5, zIndex: 7 },
    right1: { x: "30%", scale: 0.7, zIndex: 9 },
  };

  return (
    <div className="relative flex h-screen scale-100 items-center justify-center overflow-hidden bg-black">
      {images.map((image, index) => (
        <motion.div
          key={index}
          alt={image}
          className="size-1/2 rounded-[12px] border-4 border-solid bg-center"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "anticipate",
          }}
          style={{
            width: "60%",
            position: "absolute",
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        />
      ))}
      <div className="absolute bottom-0 flex gap-3 bg-blue-500">
        <button
          className="rounded-md bg-indigo-400 px-4 py-2 text-white"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="rounded-md bg-indigo-400 px-4 py-2 text-white"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
