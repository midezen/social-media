import { createContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveContextProvider = ({ children }) => {
  const [navActive, setNavActive] = useState("home");
  return (
    <ActiveContext.Provider value={{ navActive, setNavActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
