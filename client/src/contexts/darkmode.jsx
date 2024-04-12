import { createContext, useState, useEffect } from "react";

export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({ children }) => {
  const [darkmode, setDarkmode] = useState(
    JSON.parse(localStorage.getItem("darkmode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkmode", JSON.stringify(darkmode));
  }, [darkmode]);
  return (
    <DarkmodeContext.Provider value={{ darkmode, setDarkmode }}>
      {children}
    </DarkmodeContext.Provider>
  );
};
