import { createContext, useState } from "react";

const ViewContext = createContext({});

export const StatusProvider = ({ children }) => {
  const [chooseUs, setChooseUs] = useState(false);
  const [contactUs, setContactUs] = useState(false);
  const [firstCard, serFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [thirdCard, setThirdCard] = useState(false);
  const [fourthCard, setFourthCard] = useState(false);

  console.log(firstCard);
  console.log(secondCard);
  console.log(thirdCard);
  console.log(fourthCard);

  return (
    <ViewContext.Provider
      value={{
        chooseUs,
        setChooseUs,
        contactUs,
        setContactUs,
        firstCard,
        serFirstCard,
        secondCard,
        setSecondCard,
        thirdCard,
        setThirdCard,
        fourthCard,
        setFourthCard,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContext;
