import { useRef, useEffect } from "react";
import { motion, useTransform, useScroll, useInView } from "framer-motion";
import Bakery from "../assets/Svg/SvgIcons/colorBakery.svg";
import Blinds from "../assets/Svg/SvgIcons/colorBlinds.svg";
import Chair from "../assets/Svg/SvgIcons/colorChairs.svg";
import Fence from "../assets/Svg/SvgIcons/colorFence.svg";
import Gate from "../assets/Svg/SvgIcons/colorGate.svg";
import Grill from "../assets/Svg/SvgIcons/colorGrill.svg";
import Kitchen from "../assets/Svg/SvgIcons/colorKitchen.svg";
import Signage from "../assets/Svg/SvgIcons/colorSignage.svg";

const ServiceContectPage = () => {
  const test = useRef(null);
  const sample = useRef(null);
  const sample1 = useRef(null);
  const sample2 = useRef(null);
  const sample3 = useRef(null);
  const sample4 = useRef(null);
  const sample5 = useRef(null);
  const sample6 = useRef(null);
  const sample7 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: test,
  });

  console.log(scrollYProgress);

  const isInView = useInView(sample);
  const isInView1 = useInView(sample1);
  const isInView2 = useInView(sample2);
  const isInView3 = useInView(sample3);
  const isInView4 = useInView(sample4);
  const isInView5 = useInView(sample5);
  const isInView6 = useInView(sample6);
  const isInView7 = useInView(sample7);

  const Data = [
    {
      id: 1,
      title: "Gate and Fences",
      description:
        "Secure and stylish, our stainless steel gates and fences are designed to enhance the security and aesthetic appeal of your property.",
      image: Gate,
      ref: sample,
      view: isInView,
    },
    {
      id: 2,
      title: "Railings",
      description:
        "We offer a wide range of stainless steel railings that combine safety with sleek, modern design.",
      image: Fence,
      ref: sample1,
      view: isInView1,
    },
    {
      id: 3,
      title: "Bakery Equipment",
      description:
        "Equip your bakery with durable and hygienic stainless steel equipment designed for efficiency and longevity.",
      image: Bakery,
      ref: sample2,
      view: isInView2,
    },
    {
      id: 4,
      title: "Kitchen Equipment",
      description:
        "Our stainless steel kitchen equipment is perfect for both commercial and residential kitchens, ensuring top-notch hygiene and durability.",
      image: Kitchen,
      ref: sample3,
      view: isInView3,
    },
    {
      id: 5,
      title: "Tables and Chairs",
      description:
        "Discover our range of stainless steel tables and chairs that offer both functionality and contemporary style.",
      image: Chair,
      ref: sample4,
      view: isInView4,
    },
    {
      id: 6,
      title: "Letter/Signage",
      description:
        "Make a statement with our custom stainless steel letters and signage, perfect for businesses looking to stand out.",
      image: Signage,
      ref: sample5,
      view: isInView5,
    },
    {
      id: 7,
      title: "Grills",
      description:
        "Our stainless steel grills are built to last, offering superior performance and easy maintenance.",
      image: Grill,
      ref: sample6,
      view: isInView6,
    },
    {
      id: 8,
      title: "Korean Blinds",
      description:
        "Add a touch of elegance to your space with our premium stainless steel Korean blinds.",
      image: Blinds,
      ref: sample7,
      view: isInView7,
    },
  ];

  const primaryVariant = {
    initial: { opacity: 1 },
    animate: {
      opacity: 1,
      transition: {
        ease: "easeInOut",
        delayChildren: 0.5,
      },
    },
  };

  const childVariant = {
    initial: { opacity: 1, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
  };
  const testVariant = {
    initial: { scale: 0.5 },
    animate: { scale: 1 },
  };

  const yScroll = useTransform(scrollYProgress, [0, 1], [0, -1170]);

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e));
  }, []);
  return (
    <div
      className="relative h-[350vh] bg-adobe-white font-shareTech"
      ref={test}
    >
      <div className="flex h-full w-full flex-col">
        <div className="sticky top-0 flex basis-[10%] items-center justify-center bg-green-500 text-center">
          <div className="size-1/2 overflow-hidden border-2 border-solid border-black bg-violet-500">
            <motion.div
              className="h-full w-full"
              // variants={primaryVariant}
              // animate="animate"
              // initial="initial"
              style={{ translateY: yScroll }}
            >
              {Data.map((data) => (
                <motion.div
                  key={data.id}
                  ref={data.ref}
                  className="h-full w-full place-content-center bg-red-100"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5, ease: "easeInOut" }}
                  style={{
                    backgroundImage: `url(${data.image})`,
                    backgroundPosition: "center",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></motion.div>
              ))}

              {/* <motion.div
                className="h-full w-full place-content-center bg-red-100"
                variants={childVariant}
                style={{
                  backgroundImage: `url("${Data[0].image}")`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-200"
                variants={childVariant}
              >
                2
              </motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-300"
                variants={childVariant}
              >
                3
              </motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-400"
                variants={childVariant}
              >
                4
              </motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-500"
                variants={childVariant}
              >
                5
              </motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-500"
                variants={childVariant}
              >
                6
              </motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-500"
                variants={childVariant}
              >
                7
              </motion.div>
              <motion.div
                className="h-full w-full place-content-center bg-red-500"
                variants={childVariant}
              >
                8
              </motion.div> */}
            </motion.div>
          </div>
        </div>
        <div className="basis-[12%] place-content-center bg-blue-500 text-center">
          #1
        </div>
        <div className="basis-[12%] place-content-center bg-orange-500 text-center">
          #2
        </div>
        <div className="basis-[12%] place-content-center bg-blue-500 text-center">
          #3
        </div>
        <div className="basis-[12%] place-content-center bg-orange-500 text-center">
          #4
        </div>
        <div className="basis-[12%] place-content-center bg-blue-500 text-center">
          #5
        </div>
        <div className="basis-[12%] place-content-center bg-orange-500 text-center">
          #6
        </div>
        <div className="basis-[12%] place-content-center bg-blue-500 text-center">
          #7
        </div>
        <div className="basis-[12%] place-content-center bg-orange-500 text-center">
          #8
        </div>
        <div className="basis-[12%] place-content-center bg-orange-500 text-center">
          END
        </div>
      </div>
    </div>
  );
};

export default ServiceContectPage;
