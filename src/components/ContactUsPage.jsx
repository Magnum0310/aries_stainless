import { useEffect, useContext, useRef, useState } from "react";
import { useInView, motion, stagger } from "framer-motion";
import ViewContext from "./context/StatusContext";
import Card from "./ContactCard";
import Call from "../assets/Svg/ContactIcons/callRed.svg";
import Facebook from "../assets/Svg/ContactIcons/facebookRed.svg";
import Location from "../assets/Svg/ContactIcons/locationRed.svg";
import Mail from "../assets/Svg/ContactIcons/mailRed.svg";
import Shop from "../assets/Svg/ContactIcons/shopRed.svg";
import Grinder from "../assets/Images/grind.jpg";
import WaterLevel from "../assets/Images/waterLevel.jpg";
import Welder from "../assets/Images/welder.jpg";
import Power from "../assets/Images/powerTools.jpg";
import DotsRotateRight from "../assets/Svg/ShapeSvg/dotsRotateRight.svg";
import DotsRotateLeft from "../assets/Svg/ShapeSvg/dotsRotateLeft.svg";
import Dots from "../assets/Svg/ShapeSvg/dots.svg";
import CopyToClipboard from "react-copy-to-clipboard";

// const Details = [
//   {
//     id: 1,
//     title: "CONTACT",
//     detail: "XXX_PERSON_XXX | XXX-XXXX-XXXX",
//     image: Call,
//     cardTitle: "CALL US",
//     column: 1,
//     row: 1,
//     x: "110%",
//     y: "105%",
//   },
//   {
//     id: 2,
//     title: "XXXX",
//     image: Grinder,
//     column: 2,
//     row: 1,
//     x: "0%",
//     y: "-125%",
//   },
//   {
//     id: 3,
//     title: "EMAIL",
//     detail: "XXXX_EMAIL.COM_XXXX",
//     image: Mail,
//     cardTitle: "DROP US AN EMAIL",
//     column: 2,
//     row: 2,
//     x: "-110%",
//   },
//   {
//     id: 4,
//     title: "XXXX",
//     image: Power,
//     column: 1,
//     row: 2,
//     x: "-110%",
//   },
//   {
//     id: 5,
//     title: "LOCATION",
//     detail: " XXXX_PHILIPPINES",
//     image: Location,
//     cardTitle: "VISIT US",
//     column: 1,
//     row: 3,
//     x: "110%",
//   },
//   {
//     id: 6,
//     title: "XXXX",
//     image: WaterLevel,
//     column: 2,
//     row: 3,
//     x: "110%",
//   },
//   {
//     id: 7,
//     title: "FACEBOOK PAGE",
//     detail: "XXXX_FACEBOOKPAGE_XXXX",
//     image: Facebook,
//     cardTitle: "FOLLOW US",
//     column: 2,
//     row: 4,
//     x: "-110%",
//   },
//   {
//     id: 8,
//     title: "XXXX",
//     image: Welder,
//     column: 1,
//     row: 4,
//     span: 2,
//     scale: 1,
//     x: "0%",
//     y: "110%",
//   },
//   {
//     id: 9,
//     title: "LAZADA/SHOPPEE",
//     detail: "XXX_LAZADA_SHOPPEE_XXX",
//     image: Shop,
//     cardTitle: "ADD TO CART",
//     column: 2,
//     row: 5,
//     x: "-110%",
//   },
// ];

const ContactUsPage = () => {
  const divRef = useRef(null);
  const inView = useInView(divRef, { once: true });
  const { setContactUs, width, contactUs } = useContext(ViewContext);
  useEffect(() => {
    setContactUs(inView);
  }, [inView]);

  const defaultVariant = {
    initial: { opacity: 1 },
    animate: { opacity: 1 },
  };

  const Details = [
    {
      id: 1,
      title: "CONTACT",
      detail: "XXX_PERSON_XXX | XXX-XXXX-XXXX",
      image: Call,
      cardTitle: "CALL US",
      column: 1,
      row: 1,
      x: width > 1023 ? "100%" : "110%",
      y: width > 1023 ? "100%" : "0%",
      zIndex: 20,
    },
    {
      id: 2,
      title: "XXXX",
      image: Grinder,
      column: 2,
      row: 1,
      opacity: width > 1023 ? 0 : 1,
      x: width > 1023 ? "-100%" : "110%",
      y: width > 1023 ? "0%" : "0%",
    },
    {
      id: 3,
      title: "EMAIL",
      detail: "XXXX_EMAIL.COM_XXXX",
      image: Mail,
      cardTitle: "DROP US AN EMAIL",
      column: 2,
      row: 2,
      x: width > 1023 ? "-100%" : "-110%",
      y: width > 1023 ? "100%" : "0%",
      zIndex: 20,
      link: "",
    },
    {
      id: 4,
      title: "XXXX",
      image: Power,
      column: 1,
      row: 2,
      opacity: width > 1023 ? 0 : 1,
      x: width > 1023 ? "0%" : "-110%",
      y: width > 1023 ? "100%" : "0%",
    },
    {
      id: 5,
      title: "LOCATION",
      detail: " XXXX_PHILIPPINES",
      image: Location,
      cardTitle: "VISIT US",
      column: 1,
      row: 3,
      x: width > 1023 ? "0%" : "110%",
      zIndex: 50,
      link: "",
    },
    {
      id: 6,
      title: "XXXX",
      image: WaterLevel,
      column: 2,
      row: 3,
      opacity: width > 1023 ? 0 : 1,
      x: width > 1023 ? "0%" : "110%",
      y: width > 1023 ? "-100%" : "0%",
    },
    {
      id: 7,
      title: "FACEBOOK PAGE",
      detail: "XXXX_FACEBOOKPAGE_XXXX",
      image: Facebook,
      cardTitle: "FOLLOW US",
      column: 2,
      row: 4,
      x: width > 1023 ? "100%" : "-110%",
      y: width > 1023 ? "-100%" : "0%",
      zIndex: 20,
      link: "https://facebook.com",
    },
    {
      id: 8,
      title: "XXXX",
      image: Welder,
      column: 1,
      row: 4,
      span: 2,
      scale: 1,
      opacity: width > 1023 ? 0 : 1,
      x: width > 1023 ? "100%" : "-110%",
      y: width > 1023 ? "0%" : "0%",
    },
    {
      id: 9,
      title: "LAZADA/SHOPPEE",
      detail: "XXX_LAZADA_SHOPPEE_XXX",
      image: Shop,
      cardTitle: "ADD TO CART",
      column: 2,
      row: 5,
      x: width > 1023 ? "-100%" : "-110%",
      y: width > 1023 ? "-100%" : "0%",
      zIndex: 20,
      link: "https://www.lazada.com.ph/",
    },
  ];

  return (
    <div
      className="padding-x relative flex h-screen flex-col items-center justify-center overflow-hidden"
      ref={divRef}
    >
      <div className="relative flex h-full w-full max-w-[1440px] place-content-center place-items-center">
        <div className="relative z-20 flex h-[95%] w-full flex-col items-center justify-center overflow-hidden lg:w-[85%]">
          {/* MAIN GRID */}
          <motion.div
            className="relative grid size-[95%] grid-cols-2 grid-rows-5 gap-1 bg-adobe-ivory p-2 max-lg:p-1 lg:size-[85%] lg:grid-cols-3 lg:grid-rows-3"
            initial="initial"
            animate={inView ? "animate" : ""}
            variants={defaultVariant}
            transition={{ delayChildren: 0.5 }}
          >
            {Details.map((detail, i) => {
              const move = {
                x: "0%",
                y: "0%",
                opacity: 1,
                transition: {
                  type: "tween",
                  ease: width > 1023 ? "circIn" : "circIn",
                  duration: 0.5,
                  delay: width > 1023 ? 1.3 : 1,
                },
              };
              const oddVariant = {
                initial: { x: detail.x, y: detail.y, opacity: detail.opacity },
                animate: inView ? move : "",
              };

              // ODD NUMBERED GRIDS
              if (i % 2) {
                return (
                  <motion.div
                    className={`size-full bg-slate-500 grayscale duration-300 hover:grayscale-0 col-start-${detail.column} row-start-${detail.row} row-span-${detail.span} lg:col-start-${detail.column} lg:col-start-auto lg:row-start-auto`}
                    variants={oddVariant}
                    key={detail.id}
                    style={{
                      backgroundImage: `url(${detail.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></motion.div>
                );
              }
              // EVEN NUMBERED GRIDS
              else {
                const evenVariant = {
                  initial: {
                    x: detail.x,
                    y: detail.y,
                    opacity: 1,
                    zIndex: detail.zIndex,
                  },
                  animate: {
                    x: "0%",
                    y: "0%",
                    zIndex: detail.zIndex,
                    opacity: 1,
                    transition: {
                      type: "tween",
                      ease: width > 1023 ? "circInOut" : "anticipate",
                      duration: 0.8,
                      delay: 0.5,
                    },
                  },
                };
                return detail.link ? (
                  <motion.a
                    href={detail.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`size-full row-start-${detail.row} col-start-${detail.column} lg:col-start-auto lg:row-start-auto`}
                    key={detail.id}
                    variants={evenVariant}
                  >
                    <Card
                      title={detail.title}
                      detail={detail.detail}
                      image={detail.image}
                      cardTitle={detail.cardTitle}
                      cardNumber={detail.id}
                      indexNumber={i + 1}
                    />
                  </motion.a>
                ) : (
                  <motion.div
                    className={`size-full row-start-${detail.row} col-start-${detail.column} lg:col-start-auto lg:row-start-auto`}
                    key={detail.id}
                    variants={evenVariant}
                  >
                    <Card
                      title={detail.title}
                      detail={detail.detail}
                      image={detail.image}
                      cardTitle={detail.cardTitle}
                      cardNumber={detail.id}
                      indexNumber={i + 1}
                    />
                  </motion.div>
                );
              }
            })}
          </motion.div>
        </div>
      </div>
      {/* BACKGROUND IMAGE */}
      <div className="absolute left-0 top-1/2 h-[75%] w-full -translate-y-1/2 bg-violet-500/0 max-lg:h-[100%]">
        <motion.div
          className="absolute bottom-0 z-10 h-3/4 w-full max-lg:h-[40%] max-xs:h-[30%] lg:hidden"
          initial={{ y: 400 }}
          animate={inView ? { y: 0 } : {}}
          transition={{
            delay: 1,
            duration: 2,
            type: "tween",
            ease: "anticipate",
          }}
          style={{
            backgroundImage: `url("${Dots}")`,
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        ></motion.div>
        <div className="relative size-full overflow-hidden">
          <motion.div
            className="absolute -left-60 top-0 z-10 h-full w-1/2 bg-lime-500/0 max-lg:hidden"
            initial={{ x: 500 }}
            animate={inView ? { x: 0 } : {}}
            transition={{
              delay: 1.2,
              duration: 2,
              type: "tween",
              ease: "anticipate",
            }}
            style={{
              backgroundImage: `url("${DotsRotateLeft}")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
            }}
          ></motion.div>
          <motion.div
            className="absolute -right-60 z-10 h-full w-1/2 bg-lime-500/0 max-lg:hidden"
            initial={{ x: -500 }}
            animate={inView ? { x: 0 } : {}}
            transition={{
              delay: 1.2,
              duration: 2,
              type: "tween",
              ease: "anticipate",
            }}
            style={{
              backgroundImage: `url("${DotsRotateRight}")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
            }}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
