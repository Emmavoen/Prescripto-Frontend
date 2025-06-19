import { AppContext } from "../context/AppContext";
import { assets } from "../assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div className="">
          <img className="w-40 mb-5" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eos
            est saepe sed inventore vero, necessitatibus autem facilis commodi
            culpa placeat minima voluptatum ipsum magnam aut nesciunt, sequi
            mollitia magni. Temporibus vel rerum unde nesciunt laudantium
            necessitatibus sunt, culpa mollitia, magnam laboriosam, magni facere
            reiciendis
          </p>
        </div>

        {/* center */}
        <div className="   ">
          <p className="mb-5 text-xl font-medium">COMPANY</p>

          <div className="flex flex-col gap-2 text-gray-600">
            <p>Home</p>
            <p>About us</p>
            <p>Contact us</p>
            <p>Privacy policy</p>
          </div>
        </div>
        {/* right */}
        <div className=" ">
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <div className="flex flex-col gap-2 text-gray-600">
            <p>+91 9999999999</p>
            <p>greatstacksdev@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Copyright Text */}
      <div>
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright © 2024 GreatStack - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
