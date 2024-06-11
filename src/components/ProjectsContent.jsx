import { motion, useMotionValue } from "framer-motion";
import Stainless from "../assets/Svg/stainlessPipe.svg";

import Carousel from "../components/Carousel";

const ServicePage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-[60] flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        PROJECT
      </div>
      <div className="absolute left-5 z-50 h-full border-l-4 border-solid border-adobe-red"></div>
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
      <div className="absolute top-0 flex size-full flex-col justify-center">
        <div className="relative top-1/3 z-40 h-full w-full -translate-y-1/4">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
