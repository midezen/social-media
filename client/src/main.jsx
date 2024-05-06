import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkmodeContextProvider } from "./contexts/darkmode.jsx";
import store from "./redux/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkmodeContextProvider>
        <App />
      </DarkmodeContextProvider>
    </Provider>
  </React.StrictMode>
);
