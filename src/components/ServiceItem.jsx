import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const ServiceItem = ({ description, track, tracking, title, number }) => {
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-155px 0px",
  });

  useEffect(() => {
    if (inView) {
      tracking(track);
    }
  }, [inView, track]);

  return (
    <div
      className="relative z-10 mt-10 grid max-w-[500px] basis-[12%] grid-cols-1 grid-rows-2 items-center bg-adobe-white px-8 md:max-w-[600px] 2xl:max-w-[800px] 2xl:items-center"
      ref={ref}
    >
      <div className="flex size-full flex-col justify-center gap-2 max-xs:gap-2">
        {/* SERVICE NUMBER */}
        <div className="text-2xl font-bold text-adobe-red md:text-3xl">
          {number}
        </div>
        {/* SERVICE TITLE */}

        <div className="text-service-title under underline decoration-adobe-red underline-offset-8">
          {title}
        </div>
      </div>
      {/* SERVICE DESCRIPTION */}

      <div className="text-service-content font-spaceMono 3xl:mt-5">
        {description}
      </div>
    </div>
  );
};

export default ServiceItem;
