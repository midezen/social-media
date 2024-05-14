import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DarkmodeContextProvider } from "./contexts/darkmode.jsx";
import { store, persistor } from "./redux/store.js";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ActiveContextProvider } from "./contexts/active.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DarkmodeContextProvider>
          <ActiveContextProvider>
            <App />
          </ActiveContextProvider>
        </DarkmodeContextProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
