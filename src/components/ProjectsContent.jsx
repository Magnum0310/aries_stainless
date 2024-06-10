import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Data from "../components/constants/data.json";
import Stainless from "../assets/Svg/stainlessPipe.svg";
import Proj1 from "../assets/Projects/Proj1.jpg";
import Proj2 from "../assets/Projects/Proj2.jpg";
import Proj3 from "../assets/Projects/Proj3.jpg";
import Proj4 from "../assets/Projects/Proj4.jpg";
import Proj5 from "../assets/Projects/Proj5.jpg";
import Proj6 from "../assets/Projects/Proj6.jpg";
import Proj7 from "../assets/Projects/Proj7.jpg";
import Proj8 from "../assets/Projects/Proj8.jpg";
import Proj9 from "../assets/Projects/Proj9.jpg";
import Proj10 from "../assets/Projects/Proj10.jpg";
import Carousel from "../components/Carousel";

const Project = [
  Proj1,
  Proj2,
  Proj3,
  Proj4,
  Proj5,
  Proj6,
  Proj7,
  Proj8,
  Proj9,
  Proj10,
];

const ServicePage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-[60] flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        PROJECT
      </div>
      <div className="absolute left-5 z-50 h-full border-l-4 border-solid border-adobe-red bg-green-500"></div>
      {/* BACKGROUND PAGE IMAGE*/}
      <div className="absolute left-6 top-11 h-full w-full bg-adobe-white lg:left-0 lg:top-0">
        <div className="absolute -left-6 top-20 size-full place-content-center lg:left-0">
          <div
            className="h-1/2 w-full opacity-50 lg:h-[60%]"
            style={{
              backgroundImage: `url("${Stainless}")`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>
      </div>
      {/* PROJECT TITLE */}
      <div className="text-service-title relative top-[10%] z-40 flex w-[117%] flex-col justify-center pl-[10%] lg:pl-[6%]">
        PROJECTS
        {/* RED HIGHTLIGHTS */}
        <div className="flex h-[6px] w-[60%] gap-2 md:h-3 lg:gap-3">
          <div className="h-full w-full basis-full rounded-bl-xl rounded-tr-xl bg-adobe-red"></div>
          <div className="h-full w-full basis-[5%] bg-adobe-red lg:basis-[3%]"></div>
          <div className="h-full w-full basis-[5%] bg-adobe-red lg:basis-[3%]"></div>
          <div className="h-full w-full basis-[5%] bg-adobe-red lg:basis-[3%]"></div>
        </div>
      </div>
      {/* CAROUSEL */}
      <div className="l absolute top-1/4 z-40 h-1/2 w-full lg:h-3/4">
        <Carousel />
      </div>
    </div>
  );
};

export default ServicePage;
