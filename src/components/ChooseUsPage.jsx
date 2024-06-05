import Data from "../components/constants/data.json";
import Square from "../assets/Svg/ShapeSvg/redSquare.svg";

const ChooseUsPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-50 flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        WHY CHOOSE US
      </div>
      <div className="absolute left-5 z-40 h-full w-full border-l-4 border-solid border-adobe-red"></div>
      {/* GRID AREA FOR CONTENT */}
      <div className="relative left-6 grid h-full w-full grid-cols-4 grid-rows-6 items-center justify-center bg-blue-500/0 lg:left-0 lg:top-0 lg:grid-cols-6">
        {/* GRID WRAPPER FOR PAGE CONTENT */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-3 flex flex-col justify-center bg-opacity-80 pl-[25%] lg:absolute lg:right-0 lg:col-span-5 lg:col-start-1 lg:row-span-4 lg:row-start-2 lg:h-full lg:w-[85%] lg:pl-0">
          {/* PAGE CONTENT */}
          <div className="absolute z-20 flex h-[60%] w-3/4 flex-col justify-evenly lg:h-3/4">
            <div className="text-mobile-title lg:flex lg:items-center">
              <div className="w-fit">
                <div>{Data.chooseUsPageFirstTag}</div>
                <div className="h-2 w-[120%] bg-adobe-red"></div>
              </div>
              <div className="pl-10 font-spaceMono text-lg lg:pl-20 lg:text-2xl">
                {Data.chooseUsPageFirstLine}
              </div>
            </div>
            <div className="text-mobile-title lg:flex lg:items-center">
              <div className="w-fit">
                <div>{Data.chooseUsPageSecondTag}</div>
                <div className="h-2 w-[120%] bg-adobe-red"></div>
              </div>
              <div className="pl-10 font-spaceMono text-lg lg:pl-20 lg:text-2xl">
                {Data.chooseUsPageSecondLine}
              </div>
            </div>
            <div className="text-mobile-title lg:flex lg:items-center">
              <div className="w-fit">
                <div>{Data.chooseUsPageThirdTag}</div>
                <div className="h-2 w-[120%] bg-adobe-red"></div>
              </div>
              <div className="pl-10 font-spaceMono text-lg lg:pl-20 lg:text-2xl">
                {Data.chooseUsPageThirdLine}
              </div>
            </div>
          </div>
          {/* RED SQUARE */}
        </div>
        <div
          className="relative left-0 col-span-4 col-start-1 row-span-6 row-start-1 h-full w-full xs:left-[5rem] xs:scale-125 md:scale-100 lg:col-span-6"
          style={{
            backgroundImage: `url("${Square}")`,
            backgroundPosition: "center right -8rem",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>
    </div>
  );
};

export default ChooseUsPage;
