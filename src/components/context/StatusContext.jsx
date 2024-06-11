import { createContext, useState } from "react";

const ViewContext = createContext({});

export const StatusProvider = ({ children }) => {
  const [chooseUs, setChooseUs] = useState(false);
  const [contactUs, setContactUs] = useState(false);

  return (
    <ViewContext.Provider
      value={{
        chooseUs,
        setChooseUs,
        contactUs,
        setContactUs,
      }}
    >
      {children}
    </ViewContext.Provider>
  );
};

export default ViewContext;
