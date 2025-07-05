import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const [specialityFilter, setSpecialityFilter] = useState("");
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const { doctors } = useContext(AppContext);
  const location = useLocation();
  const [showFilter, setShowFilter] = useState(false);
  console.log("coming from", location.state);

  const applyFilter = () => {
    if (specialityFilter && location.state?.from !== "home") {
      // Filter by selected specialty
      const filteredDoctors = doctors.filter(
        (doctor) => doctor.speciality === specialityFilter
      );
      setFilterDoc(filteredDoctors);
    } else if (speciality && location.state?.from === "home") {
      // Filter by speciality from URL params
      const filteredDoctors = doctors.filter(
        (doctor) => doctor.speciality === speciality
      );
      setFilterDoc(filteredDoctors);
    } else {
      setFilterDoc(doctors);
    }
  };

  const handleSpecialityClick = (clickedSpeciality) => {
    location.state = { from: "/doctors" };
    if (specialityFilter === clickedSpeciality) {
      // If the same specialty is clicked, clear the filter
      setSpecialityFilter("");
    } else {
      setSpecialityFilter(clickedSpeciality);
    }
  };

  // Apply filter when component mounts or speciality changes
  useEffect(() => {
    applyFilter();
  }, [speciality, doctors, specialityFilter]);
  return (
    <div>
      <p className="text-[#4B5563]">Browse through the doctors specialist.</p>
      <button
        className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
          showFilter ? "bg-[#5f6FFF] text-white" : ""
        } text-[#4B5563] hover:bg-[#5f6FFF] hover:text-white`}
        onClick={() => setShowFilter((prev) => !prev)}
      >
        Filter Doctors
      </button>

      <div className="flex flex-col sm:flex-row gap-6">
        {showFilter && (
          <div className="flex flex-col gap-3 flex-1 text-[#4B5563] mt-5">
            <p
              onClick={() => {
                handleSpecialityClick("General physician");
              }}
              className={`cursor-pointer border border-[#B4B4B4] rounded-lg py-1 px-3 text-[16px] 
    ${specialityFilter === "General physician" && "bg-indigo-100 text-black"}`}
            >
              General physician
            </p>
            <p
              onClick={() => {
                handleSpecialityClick("Gynecologist");
              }}
              className={`cursor-pointer border border-[#B4B4B4] rounded-lg py-1 px-3 text-[16px] 
    ${specialityFilter === "Gynecologist" && "bg-indigo-100 text-black"}`}
            >
              Gynecologist
            </p>
            <p
              onClick={() => {
                handleSpecialityClick("Dermatologist");
              }}
              className={`cursor-pointer border border-[#B4B4B4] rounded-lg py-1 px-3 text-[16px] 
    ${specialityFilter === "Dermatologist" && "bg-indigo-100 text-black"}`}
            >
              Dermatologist
            </p>
            <p
              onClick={() => {
                handleSpecialityClick("Pediatricians");
              }}
              className={`cursor-pointer border border-[#B4B4B4] rounded-lg py-1 px-3 text-[16px] 
    ${specialityFilter === "Pediatricians" && "bg-indigo-100 text-black"}`}
            >
              Pediatricians
            </p>
            <p
              onClick={() => {
                handleSpecialityClick("Neurologist");
              }}
              className={`cursor-pointer border border-[#B4B4B4] rounded-lg py-1 px-3 text-[16px] 
    ${specialityFilter === "Neurologist" && "bg-indigo-100 text-black"}`}
            >
              Neurologist
            </p>
            <p
              onClick={() => {
                handleSpecialityClick("Gastroenterologist");
              }}
              className={`cursor-pointer border border-[#B4B4B4] rounded-lg py-1 px-3 text-[16px] 
    ${specialityFilter === "Gastroenterologist" && "bg-indigo-100 text-black"}`}
            >
              Gastroenterologist
            </p>
          </div>
        )}
        <div className="w-full flex-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-y-6  px-3 gap-x-3 sm:px-0 ">
          {filterDoc.map((doctor, index) => (
            <Link
              to={`/appointment/${doctor._id}`}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
              key={index}
            >
              <img src={doctor.image} alt="" className="bg-[#EAEFFF] w-full" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">
                  {doctor.name}
                </p>
                <p className="text-gray-600 text-sm">{doctor.speciality}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
