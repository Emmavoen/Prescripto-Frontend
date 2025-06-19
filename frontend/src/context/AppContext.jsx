import React, { createContext } from "react";
import { doctors } from "../assets/index";

export const AppContext = createContext();
console.log(doctors);
const AppContextProvider = (props) => {
  const value = { doctors };
  console.log(props);
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
