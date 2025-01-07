import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga4";
import App from "./App.jsx";
import "../src/styles/index.css";
import "../src/styles/typography.css";
import "../src/styles/variables.css";

/*
|-------------------------------------------------------------------------
| GA4 Tracking Code
|-------------------------------------------------------------------------
|
|
*/

const MEASUREMENT_ID = "G-VH22DML4J5";

export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      anonymize_ip: true,
    },
  });
};

/*
|-------------------------------------------------------------------------
| Main.jsx output under strict mode.
|-------------------------------------------------------------------------
|
|
*/

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
