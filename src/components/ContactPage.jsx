import { useRef, useContext, useEffect } from "react";
import ViewContext from "./context/StatusContext";
import { useInView } from "framer-motion";
import Data from "./constants/data.json";
import RedCircle from "../assets/Svg/ShapeSvg/redCircle.svg";
import Circle from "./animations/RedCircle";
const Details = [
  {
    title: "CONTACT:",
    detail: "XXX_PERSON_XXX | XXX-XXXX-XXXX",
  },
  {
    title: "EMAIL:",
    detail: "XXXX_EMAIL.COM_XXXX",
  },
  {
    title: "LOCATION:",
    detail: " XXXX_PHILIPPINES",
  },
  {
    title: "FACEBOOK PAGE:",
    detail: "XXXX_FACEBOOKPAGE_XXXX",
  },
  {
    title: "LAZADA/SHOPPEE:",
    detail: "XXX_LAZADA_SHOPPEE_XXX",
  },
];

const ContactPage = () => {
  const divRef = useRef(null);
  const inView = useInView(divRef);
  const { setContactUs } = useContext(ViewContext);
  useEffect(() => {
    setContactUs(inView);
  }, [inView]);

  return (
    <div
      className="relative z-20 h-screen overflow-hidden font-shareTech"
      ref={divRef}
    >
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-50 flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        CONTACT US
      </div>
      <div className="absolute left-5 z-40 h-full border-l-4 border-solid border-adobe-red"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div className="absolute grid h-full w-full grid-flow-row grid-cols-4 grid-rows-5 xs:grid-rows-4 2xl:h-full">
        <div className="relative col-span-4 col-start-1 row-span-5 row-start-1 flex h-full w-full flex-col justify-center">
          {/* TITLE BOX Adjusted Padding left from 15 to 25 */}
          <div className="col-span-4 col-start-1 row-span-1 row-start-1">
            <div className="z-40 mb-10 flex h-full w-[117%] flex-col justify-center pl-[15%]">
              <div className="text-service-title flex h-full max-w-[75%] flex-col items-start justify-center bg-opacity-80">
                <div className="max-w-[85%] place-content-center lg:w-full">
                  {Data.contactPageTitle}
                  <div className="relative left-[0%] top-2 flex h-[6px] w-[100%] gap-1 md:h-3 md:gap-2">
                    <div className="h-full w-full basis-full rounded-bl-xl rounded-tr-xl bg-adobe-red"></div>
                    <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
                    <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
                    <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="z-10 col-span-4 col-start-1 row-span-1 row-start-2 mb-5 w-[117%] pl-[15%]">
            <div className="flex h-full flex-col xs:max-w-[75%] xl:justify-start">
              <div className="text-contact-description h-full max-w-[85%] place-content-center font-spaceMono md:place-content-center lg:w-full">
                {Data.contactPageDescription}
              </div>
            </div>
          </div>
          {/* CONTACT DETAILS */}
          <div className="max-h z-10 col-span-4 col-start-1 row-span-2 row-start-3 w-[117%] pl-[15%]">
            <div className="flex h-full max-w-[75%] flex-col items-start justify-start bg-opacity-80">
              <div className="text-contact-details h-full max-w-[85%] place-content-center font-spaceMono lg:w-full">
                {/* CONTACT */}
                {Details.map((detail, index) => (
                  <div
                    className="flex w-full flex-col gap-1 pb-5 font-spaceMono"
                    key={index}
                  >
                    <div className="">{detail.title}</div>
                    <div className="">{detail.detail}</div>
                  </div>
                ))}
                {/* </div> */}
              </div>
            </div>
          </div>
          {/* RED CIRCLES */}
          <div className="absolute left-[35%] top-1/4 hidden h-full w-full bg-lime-500">
            <Circle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
