import React, { useState } from "react";
import logo from "../../assets/brand-logo/nav-logo.svg";
import menu from "../../assets/icons/menu.svg";
import x from "../../assets/icons/x.svg";
import { Link } from "react-router-dom";
import button from "../../assets/components/button.svg";

const MobileNavbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="h-max w-full md:p-6 p-5 flex justify-between items-center">
      <div className="md:h-16 h-12 w-max">
        <Link to="/">
          <img
            className="w-auto h-full object-cover hover:scale-105 transition-all duration-200"
            src={logo}
            alt=""
          ></img>
        </Link>
      </div>
      <div className="h-max w-max relative transition-all">
        <div
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <img
            className="w-auto h-full object-cover"
            src={showMenu ? x : menu}
            alt=""
          ></img>
        </div>
        {showMenu && (
          <div className="h-96 w-48 absolute md:top-10 top-12 md:-right-6 -right-5 z-20 bg-black flex flex-col justify-between duration-300 font-tertiary">
            <ul className="flex flex-col  w-full space-y-5 text-white mt-5">
              <Link to="/portfolio">
                <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                  Portfolio
                </li>
              </Link>
              <Link to="/services">
                <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                  Services
                </li>
              </Link>
              <Link to="/about">
                <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                  Contact Us
                </li>
              </Link>
            </ul>
            <div className="w-full h-max relative mt-5  cursor-pointer group glowButtontext">
              <img className="w-full h-auto " src={button} alt=""></img>
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:text-xl lg:text-lg transition-all delay-200 w-full h-full flex justify-center items-center font-primary">
                Book a Meeting
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
