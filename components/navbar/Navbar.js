import React from "react";
import logo from "../../public/assets/brand-logo/nav-logo.svg";
import Image from "next/image";
import button from "../../public/assets/components/button.svg";
import instagram from "../../public/assets/icons/instagram.svg";
import behance from "../../public/assets/icons/behance.svg";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="lg:h-screen lg:w-1/5 bg-black fixed border border-[#1E1E1E] font-tertiary ">
      <div className="lg:flex lg:flex-col h-full relative">
        <div className="2xl:px-14 2xl:py-24 xl:px-10 xl:py-28 lg:px-8 lg:py-28 h-max lg:flex lg:flex-col space-y-10 ">
          <Link href="/">
            <Image
              className="w-full h-auto hover:scale-105 transition-all duration-200"
              src={logo}
              alt=""
            />
          </Link>
          <ul className="lg:flex lg:flex-col  w-full space-y-5 text-white">
            <Link href="/portfolio">
              <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                Portfolio
              </li>
            </Link>
            <Link href="/services">
              <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                Services
              </li>
            </Link>
            <Link href="/about">
              <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                About
              </li>
            </Link>
            <Link href="/contact">
              <li className="hover:bg-[#FFFFFF1A] w-full text-center py-2 text-lg rounded-lg cursor-pointer">
                Contact Us
              </li>
            </Link>
          </ul>
          <div className="flex w-full justify-center space-x-4">
            <a href="/">
              <Image className="h-12 w-auto" src={instagram} alt="" />
            </a>
            <a href="/">
              <Image className="h-12 w-auto" src={behance} alt="" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full">
          <div className="w-full h-max relative mt-5  cursor-pointer group glowButtontext">
            <Image className="w-full h-auto " src={button} alt="" />
            <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 xl:text-lg lg:text-lg transition-all delay-200 w-full h-full flex justify-center items-center font-primary">
              Book a Meeting
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
