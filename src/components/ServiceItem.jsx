import { useEffect, useContext } from "react";
import ViewContext from "./context/StatusContext";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
const ServiceItem = ({ description, track, title, number }) => {
  const { setCurrentItem } = useContext(ViewContext);
  const { ref, inView } = useInView({
    threshold: 1,
    rootMargin: "-120px 0px",
  });

  const defaultVariant = {
    initial: {
      opacity: 0.85,
      backgroundImage:
        " linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(344deg 0% 50%) 11%,hsl(344deg 0% 50%) 22%,hsl(344deg 0% 50%) 33%,hsl(344deg 0% 50%) 44%,hsl(344deg 0% 50%) 56%,hsl(344deg 0% 50%) 67%,hsl(344deg 0% 50%) 78%,hsl(344deg 0% 50%) 89%,hsl(0deg 0% 50%) 100%)",
    },
    animate: {
      // backgroundColor: "#f7f5f2",
      backgroundImage:
        "linear-gradient(45deg,hsl(0deg 0% 50%) -1%,hsl(36deg 0% 55%) -1%,hsl(36deg 0% 60%) 0%,hsl(36deg 1% 65%) 3%,hsl(36deg 1% 70%) 7%,hsl(36deg 2% 75%) 12%,hsl(36deg 3% 80%) 20%,hsl(36deg 5% 85%) 31%,hsl(36deg 9% 91%) 47%,hsl(36deg 24% 96%) 95%)",
      opacity: 1,
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
    },
  };

  const borderVariant = {
    initial: {
      opacity: 1,
      backgroundImage:
        " linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(344deg 0% 50%) 11%,hsl(344deg 0% 50%) 22%,hsl(344deg 0% 50%) 33%,hsl(344deg 0% 50%) 44%,hsl(344deg 0% 50%) 56%,hsl(344deg 0% 50%) 67%,hsl(344deg 0% 50%) 78%,hsl(344deg 0% 50%) 89%,hsl(0deg 0% 50%) 100%)",
    },
    animate: {
      opacity: 1,
      backgroundImage:
        " linear-gradient(45deg,hsl(0deg 0% 50%) 0%,hsl(344deg 0% 50%) 11%,hsl(344deg 0% 50%) 22%,hsl(344deg 0% 50%) 33%,hsl(344deg 0% 50%) 44%,hsl(344deg 0% 50%) 56%,hsl(344deg 0% 50%) 67%,hsl(344deg 0% 50%) 78%,hsl(344deg 0% 50%) 89%,hsl(0deg 0% 50%) 100%)",
      transition: {
        type: "tween",
        ease: "anticipate",
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      setCurrentItem(track);
    }
  }, [inView]);

  return (
    <motion.div
      className="z-10 mt-10 min-h-[225px] max-w-[500px] rounded-bl-3xl rounded-tr-3xl bg-adobe-red p-1 md:min-h-[300px] md:max-w-[600px] 2xl:mt-14 2xl:max-w-[800px]"
      ref={ref}
      animate={inView ? "animate" : "initial"}
      initial="initial"
      variants={borderVariant}
    >
      <motion.div
        className="relative grid size-full grid-cols-1 grid-rows-2 items-center gap-5 rounded-bl-3xl rounded-tr-3xl px-2"
        variants={defaultVariant}
      >
        <div className="relative flex min-h-[fit] flex-col justify-center gap-2 max-xs:gap-2">
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
        <div className="text-service-content relative bottom-[15%] min-h-[fit] text-pretty font-spaceMono">
          {description}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceItem;
