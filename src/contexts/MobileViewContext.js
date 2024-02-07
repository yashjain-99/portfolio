import React, { createContext, useContext, useState, useEffect } from "react";

const MobileContext = createContext();

export const useMobileContext = () => useContext(MobileContext);

export const MobileProvider = ({ children }) => {
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MobileContext.Provider value={isMobileView}>
      {children}
    </MobileContext.Provider>
  );
};
