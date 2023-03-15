import React from "react";
import Navbar from "../../components/navbar/Navbar";
import aboutbg from "../../assets/covers/about-bg.svg";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import mintflick from "../../assets/clients/mintflick.svg";
import postoffice from "../../assets/clients/postoffice.svg";
import sapiens from "../../assets/clients/sapiens.svg";
import marvel from "../../assets/clients/marvel.svg";
import kickto from "../../assets/clients/kickto.svg";
import sutradhar from "../../assets/clients/sutradhar.svg";
import gaumi from "../../assets/clients/gaumi.svg";
import analytics from "../../assets/clients/analytics.svg";
import matchbox from "../../assets/clients/matchbox.svg";
import bombay from "../../assets/clients/bombay.svg";
import Marquee from "react-fast-marquee";

const About = () => {
  return (
    <div className="w-full lg:flex ">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 lg:h-max h-screen bg-black lg:ml-auto text-white about-bg relative">
        <div className="h-full w-full backdrop-blur-sm backdrop-brightness-50 delay-200 flex flex-col md:justify-center justify-start pt-10 md:pt-0 items-center">
          <div className="lg:w-1/2 md:w-2/3 w-11/12 h-max flex flex-col space-y-3 animate-wiggle lg:mt-16 md:mt-0">
            <p className="md:text-xl text-sm font-tertiary">
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
          <div className="w-full flex flex-col items-center justify-center lg:py-14 lg:space-y-12 md:space-y-5 space-y-4 md:py-16 py-10">
            <p className="md:text-4xl text-2xl uppercase font-head">clients</p>
            <Marquee gradient={false} speed={50} className="w-full">
              <div className="flex w-full items-center md:justify-around justify-center space-x-1.5 md:space-x-0">
                <div className="md:h-max h-20 w-auto">
                  <img src={mintflick} alt="" className="h-full w-full"></img>
                </div>
                <div className="md:h-max h-20 w-auto">
                  <img src={postoffice} alt="" className="h-full w-full"></img>
                </div>
                <div className="md:h-max h-20 w-auto">
                  <img src={marvel} alt="" className="h-full w-full"></img>
                </div>
                <div className="md:h-max h-20 w-auto">
                  <img src={sapiens} alt="" className="h-full w-full"></img>
                </div>
                <div className="md:h-max h-20 w-auto">
                  <img src={kickto} alt="" className="h-full w-full"></img>
                </div>
              </div>
            </Marquee>
            <Marquee
              gradient={false}
              speed={50}
              direction="right"
              className="w-full"
            >
              <div className="flex w-full items-center  md:justify-around justify-center space-x-1.5 md:space-x-0">
                <div className=" md:h-max h-16 w-auto">
                  <img src={sutradhar} alt="" className="h-full w-full"></img>
                </div>
                <div className=" md:h-max h-16 w-auto">
                  <img src={gaumi} alt="" className="h-full w-full"></img>
                </div>
                <div className=" md:h-max h-16 w-auto">
                  <img src={analytics} alt="" className="h-full w-full"></img>
                </div>
                <div className=" md:h-max h-16 w-auto">
                  <img src={matchbox} alt="" className="h-full w-full"></img>
                </div>
                <div className=" md:h-max h-16 w-auto">
                  <img src={bombay} alt="" className="h-full w-full"></img>
                </div>
              </div>
            </Marquee>
          </div>
        </div>
        {/* <div className=" about-bg absolute h-full w-full top-0 left-0 animate-zoomOut delay-150 opacity-0"></div> */}
      </div>
    </div>
  );
};

export default About;
