import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"
import {
    Bars3Icon,
    XMarkIcon,
  } from "@heroicons/react/24/outline";
function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const closeMobileMenu = () => {
    setToggleMenu(false);
  };

  return (
    <div className="app">
      <nav>
        <div className="w-full mx-auto">
          <div className="flex mx-auto justify-between w-[80%] ">
            <div className="flex items-center gap-16 my-5">
              <div>
              <NavLink to="/"
                  className="flex gap-1 text-gray-700 items-center"
                >
                  <img src={logo} alt="" className=" w-14 md:w-[30%] text-primary" />
                  </NavLink>
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="hidden lg:flex gap-10 py-10 text-[1rem] tracking-wider">
              <NavLink to="/" className="text-gray-400 hover:text-gray-300 duration-300 ease-out">
                Home
                </NavLink>
                <NavLink to="/Works" className="text-gray-400 hover:text-gray-300 duration-300 ease-out">
                Works
                </NavLink>
                <NavLink to="/Contact" className="text-gray-400 hover:text-gray-300 duration-300 ease-out">
                Contact
                </NavLink>
                <NavLink to="/About" className="text-gray-400 hover:text-gray-300 duration-300 ease-out">
                About
                </NavLink>
              </div>

              <div className="lg:hidden flex items-center p-1">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? (
                    <XMarkIcon className="h-8 text-white" />
                  ) : (
                    <Bars3Icon className="h-8 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`fixed z-40 w-full bg-[#101010] overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-full"
          }`}
        >
          <div className="px-8 py-10">
            <div className="flex flex-col gap-5 text-center tracking-wider">
            <NavLink to="/" className="text-gray-400 focus:text-gray-300 duration-300 ease-out py-3 hover:bg-gray-600 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-30 hover:rounded-lg" onClick={closeMobileMenu}>
                Home
                </NavLink>
                <NavLink to="/Works" className="text-gray-400 focus:text-gray-300 duration-300 ease-out py-3 hover:bg-gray-600 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-30 hover:rounded-lg" onClick={closeMobileMenu}>
                Works
                </NavLink>
                <NavLink to="/Contact" className="text-gray-400 focus:text-gray-300 duration-300 ease-out py-3 hover:bg-gray-600 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-30 hover:rounded-lg" onClick={closeMobileMenu}>
                Contact
                </NavLink>
                <NavLink to="/About" className="text-gray-400 focus:text-gray-300 duration-300 ease-out py-3 hover:bg-gray-600 hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-30 hover:rounded-lg" onClick={closeMobileMenu}>
                About
                </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
