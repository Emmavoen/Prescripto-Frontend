import React from "react";
import { DoctorContext } from "./ContextFile";

const DoctorContextProvider = (props) => {
  // You can add state and functions here to provide to the context
  const value = {};
  return (
    <DoctorContext.Provider value={value}>
      {props.children}
    </DoctorContext.Provider>
  );
};
export default DoctorContextProvider;
