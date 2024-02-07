import React from "react";
import ReactDOM from "react-dom";
import AppLayout from "./components/AppLayout";
import { MobileProvider } from "./contexts/MobileViewContext";
import ActiveSectionContextProvider from "./contexts/ActiveSectionContext";

ReactDOM.render(
  <React.StrictMode>
    <ActiveSectionContextProvider>
      <MobileProvider>
        <AppLayout />
      </MobileProvider>
    </ActiveSectionContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
