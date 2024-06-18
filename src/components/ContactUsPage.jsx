import { useEffect, useContext, useRef } from "react";
import { useInView } from "framer-motion";
import ViewContext from "./context/StatusContext";
import Card from "./ContactCard";
import Call from "../assets/Svg/ContactIcons/callRed.svg";
import Facebook from "../assets/Svg/ContactIcons/facebookRed.svg";
import Location from "../assets/Svg/ContactIcons/locationRed.svg";
import Mail from "../assets/Svg/ContactIcons/mailRed.svg";
import Shop from "../assets/Svg/ContactIcons/shopRed.svg";
import Grinder from "../assets/Images/grind.jpg";
import Ruler from "../assets/Images/ruler.jpg";
import WaterLevel from "../assets/Images/waterLevel.jpg";
import Welder from "../assets/Images/welder.jpg";
import Power from "../assets/Images/powerTools.jpg";
import DotsRotateRight from "../assets/Svg/ShapeSvg/dotsRotateRight.svg";
import DotsRotateLeft from "../assets/Svg/ShapeSvg/dotsRotateLeft.svg";
import Dots from "../assets/Svg/ShapeSvg/dots.svg";

const Details = [
  {
    title: "CONTACT",
    detail: "XXX_PERSON_XXX | XXX-XXXX-XXXX",
    image: Call,
    cardTitle: "CALL US",
    column: 1,
    row: 1,
  },
  {
    title: "XXXX",
    image: Grinder,
    column: 2,
    row: 1,
  },
  {
    title: "EMAIL",
    detail: "XXXX_EMAIL.COM_XXXX",
    image: Mail,
    cardTitle: "DROP US AN EMAIL",
    column: 2,
    row: 2,
  },
  {
    title: "XXXX",
    image: Power,
    column: 1,
    row: 2,
  },
  {
    title: "LOCATION",
    detail: " XXXX_PHILIPPINES",
    image: Location,
    cardTitle: "VISIT US",
    column: 1,
    row: 3,
  },
  {
    title: "XXXX",
    image: WaterLevel,
    column: 2,
    row: 3,
  },
  {
    title: "FACEBOOK PAGE",
    detail: "XXXX_FACEBOOKPAGE_XXXX",
    image: Facebook,
    cardTitle: "FOLLOW US",
    column: 2,
    row: 4,
  },
  {
    title: "XXXX",
    image: Welder,
    column: 1,
    row: 4,
    span: 2,
  },
  {
    title: "LAZADA/SHOPPEE",
    detail: "XXX_LAZADA_SHOPPEE_XXX",
    image: Shop,
    cardTitle: "ADD TO CART",
    column: 2,
    row: 5,
  },
];

const ContactUsPage = () => {
  const divRef = useRef(null);
  const inView = useInView(divRef, { once: true });
  const { setContactUs } = useContext(ViewContext);
  useEffect(() => {
    setContactUs(inView);
  }, [inView]);

  return (
    <div
      className="padding-x relative flex h-screen flex-col items-center justify-center overflow-hidden"
      ref={divRef}
    >
      <div className="relative flex h-full w-full max-w-[1440px] place-content-center place-items-center">
        <div className="relative z-20 flex h-[95%] w-full flex-col items-center justify-center lg:w-[85%]">
          {/* MAIN GRID */}
          <div className="grid size-[95%] grid-cols-2 grid-rows-5 gap-1 bg-adobe-ivory p-2 max-lg:p-1 lg:size-[85%] lg:grid-cols-3 lg:grid-rows-3">
            {Details.map((detail, i) => {
              if (i % 2)
                return (
                  <div
                    className={`size-full bg-slate-500 grayscale duration-300 hover:grayscale-0 col-start-${detail.column} row-start-${detail.row} row-span-${detail.span} lg:col-start-${detail.column} lg:col-start-auto lg:row-start-auto`}
                    key={i}
                    style={{
                      backgroundImage: `url(${detail.image})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                );

              return (
                <div
                  className={`size-full row-start-${detail.row} col-start-${detail.column} lg:col-start-auto lg:row-start-auto`}
                >
                  <Card
                    key={i}
                    title={detail.title}
                    detail={detail.detail}
                    image={detail.image}
                    cardTitle={detail.cardTitle}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-1/2 h-[75%] w-full -translate-y-1/2 bg-violet-500/0 max-lg:h-[100%]">
        <div
          className="absolute bottom-0 z-10 h-3/4 w-full max-lg:h-[40%] max-xs:h-[30%] lg:hidden"
          style={{
            backgroundImage: `url("${Dots}")`,
            backgroundPosition: "top",
            backgroundSize: "contain",
            backgroundRepeat: "repeat",
          }}
        ></div>
        <div className="relative size-full overflow-hidden">
          <div
            className="absolute -left-60 top-0 z-10 h-full w-1/2 bg-lime-500/0 max-lg:hidden"
            style={{
              backgroundImage: `url("${DotsRotateLeft}")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
            }}
          ></div>
          <div
            className="absolute -right-60 z-10 h-full w-1/2 bg-lime-500/0 max-lg:hidden"
            style={{
              backgroundImage: `url("${DotsRotateRight}")`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
