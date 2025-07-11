import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/index.js";
import { useState } from "react";
const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true);

  const [showMenu, setShowMenu] = useState(false);
  // const [dropdownOpen, setDropdownOpen] = useState(false); // NEW STATE

  // Helper to toggle dropdown on mobile
  // const handleProfileClick = () => setDropdownOpen((prev) => !prev);

  return (
    <div className=" flex justify-between items-center test-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="hidden md:flex items-start gap-5 font-medium">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">ALL DOCTORS</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#5f6FFF] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div
            className="flex items-center gap-2 cursor-pointer group relative"
            // Only toggle on click for mobile
            // onClick={handleProfileClick}
          >
            <img className="w-8 rounded-full" src={assets.profile_pic} alt="" />
            <img className="w-2.5" src={assets.dropdown_icon} alt="" />
            <div
              className={`
                absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20
                hidden group-hover:block

              
              `}
            >
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-[#5f6FFF] text-white py-3 px-8 rounded-full font-light hidden md:block cursor-pointer"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />
        {/* mobile menu */}
        <div
          className={` ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6 ">
            <img className="w-36" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink className="" onClick={() => setShowMenu(false)} to="/">
              <li className="px-4 py-2 rounded inline-block">HOME</li>
            </NavLink>
            <NavLink
              className=""
              onClick={() => setShowMenu(false)}
              to="/doctors"
            >
              <li className="px-4 py-2 rounded inline-block">ALL DOCTORS</li>
            </NavLink>
            <NavLink
              className=""
              onClick={() => setShowMenu(false)}
              to="/about"
            >
              <li className="px-4 py-2 rounded inline-block">ABOUT</li>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <li className="px-4 py-2 rounded inline-block">CONTACT</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
