import React from "react";
import Navbar from "../../components/navbar/Navbar";
import aboutbg from "../../assets/covers/about-bg.svg";
import MobileNavbar from "../../components/navbar/MobileNavbar";

const About = () => {
  return (
    <div className="w-full lg:flex ">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 h-screen bg-black lg:ml-auto text-white about-bg relative">
        <div className="h-full w-full backdrop-blur-sm backdrop-brightness-50 delay-200 flex flex-col md:justify-center justify-start pt-10 md:pt-0 items-center">
          <div className="lg:w-1/2 md:w-2/3 w-11/12 h-max flex flex-col space-y-3 animate-wiggle">
            <p className="md:text-xl text-sm">
              Our team of talented artists has a passion for creating dynamic
              and engaging visuals that tell compelling stories and capture the
              imagination. We believe that heroes come in all shapes and sizes,
              and our illustrations celebrate the diversity and uniqueness of
              every individual.
            </p>
            <img
              className="w-full h-auto rounded-xl"
              src={aboutbg}
              alt=""
            ></img>
          </div>
        </div>
        {/* <div className=" about-bg absolute h-full w-full top-0 left-0 animate-zoomOut delay-150 opacity-0"></div> */}
      </div>
    </div>
  );
};

export default About;
