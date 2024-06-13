import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Bakery from "../assets/Svg/SvgIcons/colorBakery.svg";
import Blinds from "../assets/Svg/SvgIcons/colorBlinds.svg";
import Chair from "../assets/Svg/SvgIcons/colorChairs.svg";
import Fence from "../assets/Svg/SvgIcons/colorFence.svg";
import Gate from "../assets/Svg/SvgIcons/colorGate.svg";
import Grill from "../assets/Svg/SvgIcons/colorGrill.svg";
import Kitchen from "../assets/Svg/SvgIcons/colorKitchen.svg";
import Signage from "../assets/Svg/SvgIcons/colorSignage.svg";
import ServiceItem from "./ServiceItem";

const ServiceContectPage = () => {
  const divRef = useRef(null);
  const [currentInView, setCurrentInView] = useState(0);
  const TWEEN_OPTIONS = {
    type: "tween",
    ease: "easeInOut",
    duration: 0.5,
  };
  const isInView = useInView(divRef, {
    margin: "-255px 0px",
    once: true,
  });

  const Data = [
    {
      id: 1,
      number: "01",
      title: "Gate and Fences",
      description:
        "Secure and stylish, our stainless steel gates and fences are designed to enhance the security and aesthetic appeal of your property.",
      image: Gate,
      track: 0,
    },
    {
      id: 2,
      number: "02",
      title: "Railings",
      description:
        "We offer a wide range of stainless steel railings that combine safety with sleek, modern design.",
      image: Fence,
      track: 100,
    },
    {
      id: 3,
      number: "03",
      title: "Bakery Equipment",
      description:
        "Equip your bakery with durable and hygienic stainless steel equipment designed for efficiency and longevity.",
      image: Bakery,
      track: 200,
    },
    {
      id: 4,
      number: "04",
      title: "Kitchen Equipment",
      description:
        "Our stainless steel kitchen equipment is perfect for both commercial and residential kitchens, ensuring top-notch hygiene and durability.",
      image: Kitchen,
      track: 300,
    },
    {
      id: 5,
      number: "05",
      title: "Tables and Chairs",
      description:
        "Discover our range of stainless steel tables and chairs that offer both functionality and contemporary style.",
      image: Chair,
      track: 400,
    },
    {
      id: 6,
      number: "06",
      title: "Letter/Signage",
      description:
        "Make a statement with our custom stainless steel letters and signage, perfect for businesses looking to stand out.",
      image: Signage,
      track: 500,
    },
    {
      id: 7,
      number: "07",
      title: "Grills",
      description:
        "Our stainless steel grills are built to last, offering superior performance and easy maintenance.",
      image: Grill,
      track: 600,
    },
    {
      id: 8,
      number: "08",
      title: "Korean Blinds",
      description:
        "Add a touch of elegance to your space with our premium stainless steel Korean blinds.",
      image: Blinds,
      track: 700,
    },
  ];
  const primaryVariant = {
    initial: {
      opacity: 0,
      x: -600,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 1,
        delayChildren: 0.5,
      },
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 1,
        delayChildren: 0.5,
      },
    },
  };
  const handleInView = (data) => {
    setCurrentInView(data);
  };

  return (
    <div
      className="relative h-[400vh] overflow-hidden bg-adobe-ivory font-shareTech md:h-[450vh]"
      ref={divRef}
    >
      <div className="absolute left-5 z-[60] h-full w-full border-l-4 border-solid border-adobe-red"></div>
      <div className="bg-red-ivory flex h-full w-full flex-col md:grid md:grid-cols-2 md:grid-rows-2">
        {/* MAIN ICON BOX */}
        <motion.div
          className="sticky top-0 z-40 flex basis-[12%] items-center justify-center bg-adobe-ivory text-center xs:basis-[15%] md:col-start-1 md:h-screen"
          variants={primaryVariant}
          initial={isInView ? "" : "initial"}
          animate={isInView ? "animate" : ""}
        >
          <div className="relative flex size-full items-center justify-center md:size-3/4">
            <div className="absolute size-[65%]">
              <div className="absolute z-10 size-full scale-95 bg-adobe-ivory"></div>
              <div className="absolute h-[95%] w-[95%] rounded-b-3xl rounded-r-3xl bg-gradient-to-br from-adobe-red/80 via-adobe-gray to-adobe-white"></div>
              <div className="absolute bottom-0 right-0 h-[95%] w-[95%] rounded-bl-3xl rounded-tr-3xl bg-gradient-to-tl from-adobe-red/80 via-adobe-gray to-adobe-white"></div>
            </div>
            {/* SIZE ICON BOX */}
            <div className="relative z-20 size-[55%] overflow-hidden md:w-[60%] 2xl:max-w-[500px]">
              {/* ICONS */}
              <motion.div
                className="size-full"
                animate={{ translateY: `-${currentInView}%` }}
                transition={TWEEN_OPTIONS}
              >
                {Data.map((data) => (
                  <motion.div
                    key={data.id}
                    className="size-full bg-adobe-ivory"
                    style={{
                      backgroundImage: `url("${data.image}")`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      scale: 0.8,
                    }}
                  ></motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* TOP GRADIENT SPACER */}
        <div className="sticky top-1/4 z-20 h-[100px] place-content-center bg-gradient-to-b from-adobe-ivory/100 via-adobe-white/70 to-gray-100/40 text-center md:top-0 md:z-50 md:col-span-2 md:col-start-2 md:row-start-1"></div>
        {/* BOTTOM GRADIENT SPACER */}
        <div className="sticky top-[85%] z-20 h-[150px] place-content-center bg-gradient-to-b from-adobe-ivory/50 via-adobe-white/75 to-gray-100/25 text-center md:z-50 md:col-span-2 md:col-start-1"></div>
        {/* MAIN DESCRIPTION BOX */}
        <div className="flex size-full flex-col items-center md:relative md:bottom-[15%] md:col-start-2 md:h-[350vh] md:items-start">
          {Data.map((data) => (
            <ServiceItem
              key={data.id}
              title={data.title}
              description={data.description}
              number={data.number}
              track={data.track}
              tracking={handleInView}
            />
          ))}
        </div>
        <div className="sticky top-0 basis-[12%] place-content-center text-center"></div>
      </div>
    </div>
  );
};

export default ServiceContectPage;
