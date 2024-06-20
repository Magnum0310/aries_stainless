import { useState, useContext, useEffect } from "react";
import ViewContext from "./context/StatusContext";
import { motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import CapitalFirstLetter from "./Utilities/CapitalFirstLetter";

const defaultVariant = {
  initial: {
    backgroundColor: "#808080",
    scale: 1,
    zIndex: 10,
    y: 0,
    color: "#F7F5F2",
  },
  animate: {
    backgroundColor: "#F7F5F2",
    scale: 1.05,
    zIndex: 50,
    y: -10,
    color: "#000000",
    transition: {
      type: "tween",
      ease: "anticipate",
      duration: 0.5,
    },
  },
};

const bgVariant = {
  initial: {
    backgroundColor: "#F7F5F2",
  },
  animate: {
    backgroundColor: "#000000",
  },
};

const imgVariant = {
  initial: {
    opacity: 0.65,
  },
  animate: {
    opacity: 0.75,
  },
};

const ContactCard = ({
  title,
  detail,
  image,
  cardTitle,
  cardNumber,
  indexNumber,
}) => {
  // CARD ACTIVE SELECTOR
  const [select, setSelect] = useState(false);
  const { active, setActive, currentIndex, setCurrentIndex } =
    useContext(ViewContext);

  const handleStatus = () => {
    setSelect(!select);
    if (currentIndex == cardNumber) {
      return setActive(!active);
    }
  };

  useEffect(() => {
    setCurrentIndex(cardNumber);
    setSelect(false);
  }, [select]);

  return (
    <motion.div
      className="size-full"
      initial="initial"
      animate={active && currentIndex == cardNumber ? "animate" : ""}
      onClick={() => handleStatus()}
    >
      <motion.div
        className="relative h-full w-full border-2 border-solid border-black font-shareTech"
        variants={defaultVariant}
      >
        <div className="absolute top-2 flex h-[10%] w-full bg-cyan-500/0 pl-2 text-xs max-lg:text-[.5rem]">
          <div className="min-w-fit place-content-center bg-amber-500/0 pr-2">
            {cardTitle}
          </div>
          <div className="h-full w-full basis-3/4 place-content-center">
            <motion.div
              variants={bgVariant}
              className="h-1/5 w-full bg-adobe-ivory"
            ></motion.div>
          </div>
        </div>
        <div className="absolute bottom-2 h-[60%] w-full bg-lime-500/0 pl-2">
          <div className="relative size-full place-content-start bg-red-500/0">
            <motion.div
              className="absolute flex h-full w-[30%] bg-amber-500/0 max-lg:top-1/2 max-lg:h-3/4 max-lg:-translate-y-1/2 md:max-lg:w-[20%]"
              variants={imgVariant}
              style={{
                backgroundImage: `url("${image}")`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></motion.div>
            <div className="absolute bottom-0 right-0 flex h-3/4 w-[90%] flex-col bg-emerald-500/0 pb-2 max-lg:bottom-2 md:max-lg:w-[80%]">
              <div className="flex basis-full flex-col place-content-center justify-end bg-blue-500/0 font-bebas text-4xl md:h-full">
                <CapitalFirstLetter text={title} />
              </div>
              <div className="min-w-fit basis-1/4 bg-slate-500/0 text-[.8rem] max-lg:text-[.5rem]">
                {detail}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
