import React from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./components/AppLayout";
import { MobileProvider } from "./contexts/MobileViewContext";
import ActiveSectionContextProvider from "./contexts/ActiveSectionContext";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ActiveSectionContextProvider>
      <MobileProvider>
        <AppLayout />
      </MobileProvider>
    </ActiveSectionContextProvider>
  </React.StrictMode>
);
