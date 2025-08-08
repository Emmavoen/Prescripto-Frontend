import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  console.log(doctors);
  return (
    <div className="flex flex-col items-center   gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-y-6  px-3 gap-x-3 sm:px-0 ">
        {doctors?.slice(0, 10).map((doctor, index) => (
          <Link
            to={`/appointment/${doctor._id}`}
            onClick={() => {
              scroll(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
            key={index}
          >
            <img src={doctor.image} alt="" className="bg-[#EAEFFF] w-full" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                {doctor.available ? (
                  <div className="flex items-center gap-2 text-sm text-center text-green-500">
                    <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                    <p>Available</p>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-center text-red-500">
                    <p className="w-2 h-2 bg-red-500 rounded-full"></p>
                    <p>Not Available</p>
                  </div>
                )}
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </Link>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="w-[214px] h-[60px]  bg-[#EAEFFF] text-[#4B5563] rounded-[50px]"
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
