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
import Rec from "../assets/Svg/ShapeSvg/recLight1.svg";

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
      className="padding-x relative flex h-[300vh] w-full flex-col items-center justify-center font-shareTech max-md:bg-adobe-red md:h-[450vh] md:bg-adobe-ivory/0"
      ref={divRef}
    >
      {/* RED BORDER LINE */}
      {/* MAIN CONTAINER*/}
      <div className="relative grid h-full w-full max-w-[1440px] grid-cols-1 grid-rows-2 max-md:bg-adobe-ivory md:grid md:grid-cols-2 md:grid-rows-2 md:bg-adobe-ivory/0">
        {/*ICON BOX */}
        <motion.div
          className="sticky top-0 z-30 col-start-1 row-start-1 h-[20%] w-full max-md:bg-adobe-ivory md:col-span-1 md:row-span-3 md:flex md:h-[25%] md:flex-col md:items-center md:justify-center md:bg-adobe-ivory/0"
          variants={primaryVariant}
          initial={isInView ? "" : "initial"}
          animate={isInView ? "animate" : ""}
        >
          {/* COLORED BORDER */}
          <div className="bottom-10 z-20 flex size-full items-center justify-center bg-red-500 md:h-1/2 md:w-[85%]">
            <div className="absolute z-20 h-[65%] w-[60%] xs:w-[45%] md:w-[75%] lg:w-[70%]">
              <div className="absolute z-10 size-full scale-95 bg-adobe-ivory"></div>
              <div className="absolute h-[95%] w-[95%] rounded-b-3xl rounded-r-3xl bg-gradient-to-br from-adobe-red via-adobe-gray to-adobe-white"></div>
              <div className="absolute bottom-0 right-0 h-[95%] w-[95%] rounded-bl-3xl rounded-tr-3xl bg-gradient-to-tl from-adobe-red via-adobe-gray to-adobe-white"></div>
            </div>
            {/* GEAR */}
            <div className="absolute left-[12%] top-0 size-[100px] scale-75 xs:left-[23%] xs:top-[5%] md:left-[0%] md:top-[10%] lg:left-[10%] lg:scale-125">
              <Gear2 />
              <Gear />
            </div>
            <div className="absolute bottom-[25%] right-[12%] size-[100px] xs:right-[25%] md:bottom-[21%] md:right-[3%] lg:bottom-[25%] lg:right-[10%] lg:scale-150">
              <div className="relative ml-auto size-1/2">
                <Gear3 />
              </div>
              <Gear4 />
            </div>
            {/* SIZE ICON BOX */}
            <div className="absolute z-20 size-[50%] overflow-hidden xs:size-[45%] md:w-[60%] 2xl:max-w-[500px]">
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
          className="sticky top-0 z-20 col-start-1 row-start-1 hidden h-1/2 w-full md:col-span-1 md:col-start-2 md:row-start-1 md:row-end-2 md:h-1/2"
          style={{
            backgroundImage: `url("${Screen}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* MAIN DESCRIPTION BOX */}
        <div className="relative z-20 col-span-1 col-start-1 row-start-1 row-end-3 size-full border-2 border-solid border-purple-500 md:col-start-2 md:row-start-1">
          <div className="absolute bottom-0 flex h-full w-full flex-col items-center justify-center bg-lime-500 px-2 md:bottom-0 md:h-[90%]">
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
        </div>
      </div>
      <div
        className="absolute left-0 top-0 size-full max-md:hidden"
        style={{
          backgroundImage: `url("${Rec}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default ServiceContectPage;
