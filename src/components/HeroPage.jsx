import Data from "../components/constants/data.json";
import Weld01 from "../assets/Images/weld02_grayscale.jpg";

const HeroPage = () => {
  return (
    <div className="bg-adobe-white font-shareTech relative h-screen overflow-hidden">
      {/* RED BORDER */}
      <div className="bg-adobe-red absolute left-5 top-10 h-full w-full"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div className="bg-adobe-white relative left-6 top-11 grid h-full w-[99%] grid-cols-4 grid-rows-6">
        {/* PAGE IMAGE WRAPPER */}
        <div className="relative z-30 col-span-4 col-start-2 row-span-6 row-start-1 flex items-center">
          {/* PAGE IMAGE BLOCK */}
          <div
            className="mb-5 h-[80%] w-full"
            style={{
              backgroundImage: `url(${Weld01})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/*TOP RED BOX*/}
        <div className="bg-adobe-red relative col-span-1 col-start-1 row-span-1 row-start-2 ml-auto h-full w-1/4"></div>
        {/* TITLE BOX */}
        <div className="bg-adobe-white z-50 col-span-3 col-start-1 row-span-2 row-start-3 flex flex-col justify-center bg-opacity-80 pl-[20%]">
          <div className="flex w-3/4 basis-1/2 items-center text-5xl">
            {Data.heroPageTitle}
          </div>
          <div className="text-lg">and</div>
          <div className="flex basis-1/2 items-center text-5xl">
            {Data.heroPageSubtitle}
          </div>
        </div>
        <div className="bg-adobe-white z-40 col-start-4 row-span-2 row-start-3 h-full w-1/2 bg-opacity-80"></div>
        {/* TAGLINE BOX */}
        <div className="bg-adobe-red font-spaceMono text-adobe-white z-40 col-span-3 col-start-1 row-start-5 flex h-8 items-center justify-center rounded-br-xl text-xs">
          {Data.heroPageTagline}
        </div>
        {/* BOTTOM RED BOX */}
        <div className="bg-adobe-red col-span-1 col-start-1 row-span-1 row-start-5 ml-auto h-full w-1/4"></div>
        <div className="bg-adobe-red col-span-1 col-start-1 row-span-1 row-start-6 ml-auto h-1/2 w-1/4"></div>
        <div className="bg-adobe-red col-span-1 col-start-2 row-span-1 row-start-6 h-1/2 w-full"></div>
      </div>
    </div>
  );
};

export default HeroPage;
