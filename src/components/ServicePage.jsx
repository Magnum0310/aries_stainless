import Data from "../components/constants/data.json";
import Weld02 from "../assets/Images/weld01_grayscale.jpg";

const ServicePage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-adobe-white font-shareTech">
      {/* RED BORDER */}
      <div className="absolute -left-[1.1rem] top-8 z-50 flex h-[1rem] w-[5rem] -rotate-90 items-center justify-center bg-adobe-white text-center font-spaceMono text-[.5rem]">
        SERVICE
      </div>
      <div className="absolute left-5 z-40 h-full w-full border-l-4 border-solid border-adobe-red"></div>
      {/* INNER WHITE BOX WRAPPER*/}
      <div className="absolute left-6 top-11 grid h-full w-full grid-cols-4 grid-rows-6 bg-adobe-white lg:left-0 lg:top-0 lg:grid-cols-6">
        {/* PAGE IMAGE WRAPPER */}
        <div className="z-30 col-span-4 col-start-2 row-span-6 row-start-1 flex items-center lg:absolute lg:col-start-4 lg:h-full lg:w-full">
          {/* PAGE IMAGE BLOCK */}
          <div
            className="mb-5 h-[80%] w-full lg:mb-0 lg:h-full"
            style={{
              backgroundImage: `url(${Weld02})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        {/*TOP RED BOX*/}
        <div className="absolute bottom-0 right-0 col-span-1 col-start-1 row-span-1 row-start-1 h-[55%] w-[8%] bg-adobe-red md:w-[5%] lg:hidden"></div>
        <div className="absolute bottom-0 right-0 col-span-1 col-start-3 row-span-1 row-start-1 flex h-[55%] w-[100%] justify-evenly bg-adobe-white lg:hidden">
          <div className="h-full w-[10%] basis-1/5 bg-adobe-red"></div>
          <div className="h-full w-[10%] basis-1/5 bg-adobe-red"></div>
          <div className="h-full w-[10%] basis-1/5 bg-adobe-red"></div>
        </div>
        <div className="absolute bottom-0 col-span-1 col-start-2 row-span-1 row-start-1 h-[55%] w-full bg-adobe-red lg:hidden"></div>{" "}
        <div className="absolute right-0 top-0 col-span-1 col-start-1 row-span-1 row-start-2 h-[55%] w-[8%] bg-adobe-red md:w-[5%] lg:hidden"></div>
        {/* TITLE BOX */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-2 flex w-[117%] flex-col justify-center pl-[25%] lg:absolute lg:right-0 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:h-[120%] lg:w-[85%] lg:bg-transparent lg:pl-0">
          <div className="text-service-title flex h-[75%] max-w-[65%] items-center bg-adobe-white bg-opacity-80 lg:max-w-[400px] lg:flex-col lg:justify-center xl:h-full xl:max-w-[500px] 2xl:max-w-[600px]">
            <div className="max-w-[95%] lg:w-full">{Data.servicePageTitle}</div>
            <div className="relative left-[25%] flex h-[3%] w-[150%] gap-5 max-lg:hidden">
              <div className="h-full w-full basis-full bg-adobe-red"></div>
              <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
              <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
              <div className="h-full w-full basis-[5%] bg-adobe-red"></div>
            </div>
          </div>
        </div>
        <div className="z-30 col-start-4 row-span-2 row-start-2 hidden h-full w-1/2 bg-adobe-white bg-opacity-0 xs:w-1/4 lg:absolute lg:top-[44%] lg:col-span-2 lg:col-start-4 lg:h-[37%] lg:w-full lg:rounded-tr-3xl"></div>
        {/* DESCRIPTION BOX */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-4 flex w-[117%] items-center justify-start bg-adobe-white bg-opacity-80 pl-[25%] font-spaceMono max-lg:absolute max-lg:top-1/2 max-lg:h-[80%] max-lg:-translate-y-1/2 lg:absolute lg:right-0 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-4 lg:h-[130%] lg:w-[85%] lg:justify-start lg:bg-adobe-red lg:bg-opacity-0 lg:pl-0">
          <div className="text-service-description h-full place-content-center lg:max-w-[400px] xl:max-w-[600px]">
            {Data.servicePageDescription}
          </div>
        </div>
        {/* BOTTOM RED BOX */}
        <div className="z-40 col-span-3 col-start-1 row-span-2 row-start-2 flex w-[117%] flex-col justify-center pl-[25%] lg:absolute lg:bottom-[13%] lg:right-0 lg:col-span-3 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:hidden lg:h-[5%] lg:w-[85%] lg:justify-start lg:pl-0"></div>
        <div className="col-span-1 col-start-1 row-span-1 row-start-6 ml-auto h-[43%] w-[8%] bg-adobe-red md:w-[5%] lg:absolute lg:right-0 lg:top-6 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:hidden lg:h-[8%] lg:w-[70%]"></div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-6 h-[43%] w-full bg-adobe-red lg:absolute lg:right-0 lg:top-12 lg:col-span-2 lg:col-start-2 lg:row-start-5 lg:hidden lg:h-[8%] lg:w-[50%] lg:rounded-bl-xl"></div>
      </div>
    </div>
  );
};

export default ServicePage;
