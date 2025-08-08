import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Link } from "react-router-dom";

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    const filteredDocs = doctors.filter(
      (doc) => doc._id !== docId && doc.speciality === speciality
    );
    setRelDoc(filteredDocs);
    console.log("Related Doctors:", filteredDocs);
  }, [doctors, docId, speciality]);
  return (
    <div>
      <div>
        <p>Related Doctors</p>
        <p>Simply browse through our extensive list of trusted doctors.</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 pt-5 gap-y-6  px-3 gap-x-3 sm:px-0 ">
        {relDoc?.slice(0, 5).map((doctor, index) => (
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
    </div>
  );
};

export default RelatedDoctors;
