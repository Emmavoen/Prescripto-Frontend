import React, { useContext } from "react";
import Login from "./pages/login.jsx";
import { ToastContainer } from "react-toastify";
import { AdminContext } from "./context/ContextFile.jsx";
import Navbar from "./components/navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import { Route, Routes } from "react-router-dom";
import AddDoctor from "./pages/Admin/AddDoctor.jsx";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import AllApointment from "./pages/Admin/AllApointment.jsx";
import DoctorsList from "./pages/Admin/DoctorsList.jsx";

const App = () => {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div className="bg-[#F8F9FD]">
      <ToastContainer />
      <Navbar />
      <div className="flex flexitems-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/add-doctor" element={<AddDoctor />} />
          <Route path="/admin-dashboard" element={<Dashboard />} />
          <Route path="/all-appointments" element={<AllApointment />} />
          <Route path="/doctors-list" element={<DoctorsList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
