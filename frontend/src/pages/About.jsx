import React from "react";
import { assets } from "../assets";
const About = () => {
  return (
    <div className=" flex flex-col gap-15 py-7">
      <div className="text-center text-2xl text-gray-500">
        <p>
          ABOUT <span className="text-[#1F2937 ] font-medium">US</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <img className="w-full " src={assets.about_image} alt="" />
        </div>
        <div className="flex flex-col gap-6 flex-3">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="font-medium">Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <p>
            WHY <span className="text-[#1F2937]">CHOOSE US</span>
          </p>
        </div>

        {/* End */}
        <div className="flex flex-col md:flex-row mb-10 ">
          <div className="flex flex-col gap-5 border  border-gray-300 md:border-r-0 px-10 py-8 hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <p>Efficiency:</p>
            <p>
              Streamlined appointment scheduling that fits into your busy
              lifestyle.
            </p>
          </div>
          <div className="flex flex-col gap-5 border  border-gray-300 md:border-r-0 px-10 py-8 hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <p>Convenience:</p>
            <p>
              Access to a network of trusted healthcare professionals in your
              area.
            </p>
          </div>
          <div className="flex flex-col gap-5 border  border-gray-300 md:border-r-0 px-10 py-8 hover:bg-[#5f6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <p>Personalization:</p>
            <p>
              Tailored recommendations and reminders to help you stay on top of
              your health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
