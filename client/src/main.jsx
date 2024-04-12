import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkmodeContextProvider } from "./contexts/darkmode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkmodeContextProvider>
      <App />
    </DarkmodeContextProvider>
  </React.StrictMode>
);
