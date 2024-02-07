import React, { createContext, useContext, useState } from "react";

const ActiveSectionContext = createContext(null);

const ActiveSectionContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};

export const useActiveSectionContext = () => useContext(ActiveSectionContext);

export default ActiveSectionContextProvider;
