import { createContext, useState } from "react";
import { useWindowDimensions } from "../hooks/useWindowDimensions";

const ViewContext = createContext({});

export const StatusProvider = ({ children }) => {
  const { width } = useWindowDimensions();
  const [chooseUs, setChooseUs] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [thirdCard, setThirdCard] = useState(false);
  const [fourthCard, setFourthCard] = useState(false);

  return (
    <ViewContext.Provider
      value={{
        chooseUs,
        setChooseUs,
        contactUs,
        setContactUs,
        firstCard,
        setFirstCard,
        secondCard,
        setSecondCard,
        thirdCard,
        setThirdCard,
        fourthCard,
        setFourthCard,
        width,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContext;
