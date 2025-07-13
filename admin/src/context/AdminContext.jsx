import React, { useState } from "react";
import { AdminContext } from "./ContextFile";
import axios from "axios";
import { toast } from "react-toastify";

const AdminContextProvider = (props) => {
  // You can add state and functions here to provide to the context
  const [aToken, setAToken] = useState(
    localStorage.getItem("aToken") ? localStorage.getItem("aToken") : ""
  );
  const [doctors, setDoctors] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const getAllDoctors = async () => {
    try {
      console.log("entering");
      const { data } = await axios.get(backendUrl + "api/admin/all-doctors", {
        headers: { aToken },
      });

      if (data.success) {
        setDoctors(data.doctors);
        console.log(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const value = {
    aToken,
    setAToken,
    backendUrl,
    doctors,
    getAllDoctors,
  };
  return (
    <AdminContext.Provider value={value}>
      {props.children}
    </AdminContext.Provider>
  );
};
export default AdminContextProvider;
