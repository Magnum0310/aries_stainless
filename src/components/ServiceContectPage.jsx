import { useRef, useState, useContext } from "react";
import ViewContext from "./context/StatusContext";
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
import Screen from "../assets/Images/screen_grayscale.jpg";
import Gear from "./animations/AnimateGear";
import Gear2 from "./animations/AnimateGear2";
import Gear3 from "./animations/AnimateGear3";
import Gear4 from "./animations/AnimateGear4";

const ServiceContectPage = () => {
  const { currentItem } = useContext(ViewContext);
  const divRef = useRef(null);

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

  return (
    <div
      className="padding-x relative flex h-[400vh] w-full flex-col items-center justify-center bg-adobe-ivory font-shareTech md:h-[450vh]"
      ref={divRef}
    >
      {/* RED BORDER LINE */}
      {/* MAIN CONTAINER*/}
      <div className="relative flex h-full max-w-[1440px] flex-col md:grid md:grid-cols-2 md:grid-rows-2">
        {/*ICON BOX */}
        <motion.div
          className="sticky top-0 z-40 flex min-h-[200px] basis-[12%] items-center justify-center text-center xs:basis-[15%] md:col-span-1 md:col-start-1 md:h-screen"
          variants={primaryVariant}
          initial={isInView ? "" : "initial"}
          animate={isInView ? "animate" : ""}
        >
          <div className="relative flex size-full items-center justify-center bg-adobe-ivory md:size-3/4">
            {/* COLORED BORDER */}
            <div className="absolute z-20 size-[65%]">
              <div className="absolute z-10 size-full scale-95 bg-adobe-ivory"></div>
              <div className="absolute h-[95%] w-[95%] rounded-b-3xl rounded-r-3xl bg-gradient-to-br from-adobe-red via-adobe-gray to-adobe-white"></div>
              <div className="absolute bottom-0 right-0 h-[95%] w-[95%] rounded-bl-3xl rounded-tr-3xl bg-gradient-to-tl from-adobe-red via-adobe-gray to-adobe-white"></div>
            </div>
            {/* GEAR */}
            <div className="absolute left-[12%] top-0 size-[100px] scale-75 md:left-[0%] md:top-[7.5%] lg:left-[5%] lg:scale-125">
              <Gear2 />
              <Gear />
            </div>
            <div className="absolute bottom-[25%] right-[12%] size-[100px] md:bottom-[15%] md:right-[0%] lg:right-[5%] lg:scale-150">
              <div className="relative ml-auto size-1/2">
                <Gear3 />
              </div>
              <Gear4 />
            </div>
            {/* SIZE ICON BOX */}
            <div className="absolute z-20 size-[55%] overflow-hidden md:w-[60%] 2xl:max-w-[500px]">
              {/* ICONS */}
              <motion.div
                className="size-full"
                animate={{ translateY: `-${currentItem}%` }}
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

        {/* BACKGROUND IMAGE - SCREEN */}
        <div
          className="sticky top-[30%] z-20 hidden h-full md:top-0 md:z-20 md:col-start-2 md:row-start-1 md:h-full md:w-full"
          style={{
            backgroundImage: `url("${Screen}")`,
            backgroundSize: "cover",
            backgroundPosition: "fill",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        {/* BOTTOM GRADIENT SPACER */}
        <div className="sticky top-[85%] z-20 hidden h-[150px] place-content-center bg-gradient-to-b from-adobe-ivory/50 via-adobe-white/75 to-gray-100/25 text-center md:z-50 md:col-span-2 md:col-start-1"></div>
        {/* MAIN DESCRIPTION BOX */}
        {/* <div className="z-30 flex size-full flex-col items-center md:relative md:bottom-[15%] md:col-start-2 md:h-[350vh] md:items-start"> */}
        <div className="l relative z-20 flex size-full flex-col items-center md:relative md:top-[15%] md:col-start-2 md:row-start-1 md:px-4">
          {Data.map((data) => (
            <ServiceItem
              key={data.id}
              title={data.title}
              description={data.description}
              number={data.number}
              track={data.track}
            />
          ))}
        </div>

        {/* TEST */}

        <div
          className="absolute z-10 h-full w-full md:top-0 md:z-10 md:col-start-2 md:row-start-1 md:h-full md:w-full"
          style={{
            backgroundImage: `url("${Screen}")`,
            backgroundSize: "cover",
            backgroundPosition: "fill",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div className="sticky top-0 basis-[12%] place-content-center text-center"></div>
      </div>
    </div>
  );
};

export default ServiceContectPage;
