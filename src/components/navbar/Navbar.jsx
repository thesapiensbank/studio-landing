import React from "react";
import logo from "../../assets/brand-logo/nav-logo.svg";
import button from "../../assets/components/button.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="lg:h-screen lg:w-1/5 bg-black fixed border border-[#1E1E1E] font-tertiary">
      <div className="lg:flex lg:flex-col">
        <div className="2xl:px-14 2xl:py-24 xl:px-10 xl:py-28 lg:px-8 lg:py-28 h-max lg:flex lg:flex-col space-y-10">
          <Link to="/">
            <img
              className="w-full h-auto hover:scale-105 transition-all duration-200"
              src={logo}
              alt=""
            ></img>
          </Link>
          <ul className="lg:flex lg:flex-col  w-full space-y-5 text-white">
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
        </div>
        <div className="w-full h-max relative mt-5  cursor-pointer group glowButtontext">
          <img className="w-full h-auto " src={button} alt=""></img>
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:text-lg lg:text-lg transition-all delay-200 w-full h-full flex justify-center items-center font-primary">
            Book a Meeting
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
