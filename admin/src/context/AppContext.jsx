import React from "react";
import { AppContext } from "./ContextFile";

const AppContextProvider = (props) => {
  // You can add state and functions here to provide to the context
  const value = {};
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
