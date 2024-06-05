import Data from "../components/constants/data.json";
import Weld01 from "../assets/Images/weld02_grayscale.jpg";

const HeroPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="relative left-5 top-10 z-50 h-full w-full border-l-4 border-t-4 border-solid border-adobe-red"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div className="lg:grid-cols-6 lg:top-0 lg:left-0 absolute left-6 top-11 grid h-full w-full grid-cols-4 grid-rows-6 bg-adobe-white">
        {/* PAGE IMAGE WRAPPER */}
        <div className="lg:absolute lg:w-full lg:h-full lg:col-start-4 z-30 col-span-4 col-start-2 row-span-6 row-start-1 flex items-center">
          {/* PAGE IMAGE BLOCK */}
          <div
            className="lg:h-full lg:mb-0 mb-5 h-[80%] w-full"
            style={{
              backgroundImage: `url(${Weld01})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/*TOP RED BOX*/}
        <div className="lg:hidden relative col-span-1 col-start-1 row-span-1 row-start-2 ml-auto h-full w-1/4 bg-adobe-red"></div>
        {/* TITLE BOX */}
        <div className="lg:col-start-1 lg:absolute lg:right-0 lg:w-[85%] lg:h-full lg:col-span-5 lg:row-start-2 lg:row-span-3 lg:pl-0 lg:bg-transparent z-40 col-span-3 col-start-1 row-span-2 row-start-3 flex flex-col justify-center bg-adobe-white bg-opacity-80 pl-[25%]">
          <div className="text-mobile-title lg:justify-end lg:w-3/4 lg:flex-col lg:items-start md:items-center md:gap-2 max-md:flex-col max-md:justify-center md:basis-1/4 lg:basis-1/2 flex basis-1/2">
            <div>{Data.heroPageAries}</div>
            <div className="flex items-center">
              {Data.heroPageStainless}
              <span className="max-lg:hidden relative left-5 text-5xl">
                and
              </span>
            </div>
          </div>
          <div className="max-lg:text-2xl lg:hidden">and</div>
          <div className="text-mobile-title lg:basis-1/4 max-lg:w-3/4 flex basis-1/2 items-center bg-opacity-25">
            {Data.heroPageSubtitle}
          </div>
        </div>
        <div className="lg:w-full lg:col-span-2 lg:col-start-4 lg:h-[37%] lg:absolute lg:top-[44%] lg:rounded-tr-3xl z-30 col-start-4 row-span-2 row-start-3 h-full w-1/2 bg-adobe-white bg-opacity-80 xs:w-1/4"></div>
        {/* TAGLINE BOX */}
        <div className="sm:w-1/4 lg:hidden z-40 col-start-4 row-span-1 row-start-5 h-8 w-1/2 rounded-br-xl bg-adobe-red xs:w-1/4"></div>
        <div className="text-mobile-tagline lg:col-start-1 lg:absolute lg:right-11 lg:w-[75%] lg:h-1/4 lg:bottom-[1.15rem] lg:rounded-tl-xl lg:col-span-4 lg:row-start-4 lg:row-span-1 z-40 col-span-3 col-start-1 row-start-5 flex h-8 items-center justify-start bg-adobe-red pl-[20%] font-spaceMono text-adobe-white"></div>
        <div className="text-mobile-tagline lg:col-start-1 lg:absolute lg:right-11 lg:w-[75%] lg:h-1/4 lg:bottom-[1.15rem] lg:justify-center lg:col-span-4 lg:row-start-4 lg:row-span-1 lg:pl-0 z-40 col-span-4 col-start-1 row-start-5 flex h-8 items-center justify-start pl-[20%] font-spaceMono text-adobe-white">
          {Data.heroPageTagline}
        </div>
        {/* BOTTOM RED BOX */}
        <div className="lg:absolute lg:right-0 lg:col-start-2 lg:col-span-2 lg:rounded-tl-xl lg:w-[90%] lg:h-[8%] lg:row-start-5 col-span-1 col-start-1 row-span-1 row-start-5 ml-auto h-full w-1/4 bg-adobe-red"></div>
        <div className="lg:col-start-2 lg:col-span-2 lg:w-[70%] lg:h-[8%] lg:top-6 lg:right-0 lg:absolute lg:row-start-5 col-span-1 col-start-1 row-span-1 row-start-6 ml-auto h-1/2 w-1/4 bg-adobe-red"></div>
        <div className="lg:col-start-2 lg:right-0 lg:col-span-2 lg:w-[50%] lg:h-[8%] lg:rounded-bl-xl lg:row-start-5 lg:absolute lg:top-12 col-span-1 col-start-2 row-span-1 row-start-6 h-1/2 w-full bg-adobe-red"></div>
      </div>
    </div>
  );
};

export default HeroPage;
