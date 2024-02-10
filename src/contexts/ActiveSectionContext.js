import React, { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext(null);

const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(Date.now());

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => useContext(ActiveSectionContext);

export default ActiveSectionContextProvider;
