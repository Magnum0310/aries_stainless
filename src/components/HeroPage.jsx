import Data from "../components/constants/data.json";
import Weld01 from "../assets/Images/weld02_grayscale.jpg";

const HeroPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="relative left-5 top-5 z-50 h-full w-full border-l-4 border-t-4 border-solid border-adobe-red"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div className="absolute left-6 top-11 grid h-full w-full grid-cols-4 grid-rows-6 bg-adobe-white lg:left-0 lg:top-0 lg:grid-cols-6">
        {/* PAGE IMAGE WRAPPER */}
        <div className="z-30 col-span-4 col-start-2 row-span-6 row-start-1 flex items-center lg:absolute lg:col-start-4 lg:h-full lg:w-full">
          {/* PAGE IMAGE BLOCK */}
          <div
            className="mb-5 h-[80%] w-full lg:mb-0 lg:h-full"
            style={{
              backgroundImage: `url(${Weld01})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/*TOP RED BOX*/}
        <div className="absolute bottom-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 h-[55%] w-[10%] bg-adobe-red lg:hidden"></div>
        <div className="absolute bottom-0 col-span-1 col-start-2 row-span-1 row-start-1 h-[55%] w-full bg-adobe-red lg:hidden"></div>{" "}
        <div className="absolute right-0 top-0 col-span-1 col-start-1 row-span-1 row-start-2 h-[55%] w-[10%] bg-adobe-red lg:hidden"></div>
        {/* TITLE BOX */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-3 flex flex-col justify-center bg-adobe-white bg-opacity-80 pl-[25%] lg:absolute lg:right-0 lg:col-span-5 lg:col-start-1 lg:row-span-3 lg:row-start-2 lg:h-full lg:w-[85%] lg:bg-transparent lg:pl-0">
          <div className="text-mobile-title flex basis-1/2 max-md:flex-col max-md:justify-center md:basis-1/4 md:items-center md:gap-2 lg:w-3/4 lg:basis-1/2 lg:flex-col lg:items-start lg:justify-end">
            <div>{Data.heroPageAries}</div>
            <div className="flex items-center">
              {Data.heroPageStainless}
              <span className="relative left-5 text-5xl max-lg:hidden">
                and
              </span>
            </div>
          </div>
          <div className="max-lg:text-2xl lg:hidden">and</div>
          <div className="text-mobile-title flex basis-1/2 items-center bg-opacity-25 max-lg:w-3/4 lg:basis-1/4">
            {Data.heroPageSubtitle}
          </div>
        </div>
        <div className="z-30 col-start-4 row-span-2 row-start-3 h-full w-1/2 bg-adobe-white bg-opacity-80 xs:w-1/4 lg:absolute lg:top-[44%] lg:col-span-2 lg:col-start-4 lg:h-[37%] lg:w-full lg:rounded-tr-3xl"></div>
        {/* TAGLINE BOX */}
        <div className="z-40 col-start-4 row-span-1 row-start-5 h-8 w-1/2 rounded-br-xl bg-adobe-red xs:w-1/4 sm:w-1/4 lg:hidden"></div>
        <div className="text-mobile-tagline z-40 col-span-3 col-start-1 row-start-5 flex h-8 items-center justify-start bg-adobe-red pl-[20%] font-spaceMono text-adobe-white lg:absolute lg:bottom-[1.15rem] lg:right-11 lg:col-span-4 lg:col-start-1 lg:row-span-1 lg:row-start-4 lg:h-1/4 lg:w-[75%] lg:rounded-tl-xl"></div>
        <div className="text-mobile-tagline z-40 col-span-4 col-start-1 row-start-5 flex h-8 items-center justify-start pl-[20%] font-spaceMono text-adobe-white lg:absolute lg:bottom-[1.15rem] lg:right-11 lg:col-span-4 lg:col-start-1 lg:row-span-1 lg:row-start-4 lg:h-1/4 lg:w-[75%] lg:justify-center lg:pl-0">
          {Data.heroPageTagline}
        </div>
        {/* BOTTOM RED BOX */}
        <div className="col-span-1 col-start-3 row-span-1 row-start-6 ml-auto h-[45%] w-full bg-adobe-red lg:absolute lg:right-0 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:h-[8%] lg:w-[90%] lg:rounded-tl-xl"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-6 ml-auto h-[45%] w-[10%] bg-adobe-red lg:absolute lg:right-0 lg:top-6 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:h-[8%] lg:w-[70%]"></div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-6 h-[45%] w-full bg-adobe-red lg:absolute lg:right-0 lg:top-12 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:h-[8%] lg:w-[50%] lg:rounded-bl-xl"></div>
      </div>
    </div>
  );
};

export default HeroPage;
