import React from "react";
import Navbar from "../../components/navbar/Navbar";
import shivatapa from "../../assets/covers/shiva-tapa.svg";
import gaumi from "../../assets/covers/gaumi.svg";
import battleship from "../../assets/covers/battleship.svg";
import marathawar from "../../assets/covers/marathawar.svg";
import yogi from "../../assets/covers/yogi.svg";
import persianwar from "../../assets/covers/persianwar.svg";
import { Link } from "react-router-dom";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import Introduction from "../../components/introduction/Introduction";

const Home = () => {
  return (
    <>
      <Introduction />
      <div className="w-full lg:flex">
        <div className="lg:block hidden">
          <Navbar />
          px-11 px-6
        </div>
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
        <div className="lg:w-4/5 w-full h-max bg-black lg:ml-auto 2xl:mb-5 lg:mb-4 mb-4">
          <div className="h-full w-full text-white aspect-video relative">
            <div className="2xl:h-[556px] lg:h-[536px] h-full w-full home-bg"></div>
            <p className="absolute top-8 left-10 lg:text-3xl md:text-2xl uppercase font-head">
              Showreel 2022
            </p>
          </div>
          <div className="flex md:flex-row flex-col w-full md:space-x-5 space-y-5 md:space-y-0 text-white 2xl:-mt-16 2xl:mb-16 lg:mb-16 lg:mt-12 my-7 lg:text-md xl:text-base lg:px-11 md:px-6 px-5">
            <p className="md:w-3/4 font-secondary">
              We are a proud Design studio since 2022. Our team of talented
              artists has a passion for creating dynamic and engaging visuals
              that tell compelling stories and capture the imagination. We
              believe that heroes come in all shapes and sizes, and our
              illustrations celebrate the diversity and uniqueness of every
              individual.
            </p>
            <div className="md:w-1/4 flex justify-center">
              <Link to="/portfolio">
                <div className="border border-white py-2.5 px-10 w-max h-max rounded-lg hover:bg-primary cursor-pointer font-primary">
                  {" "}
                  Checkout work
                </div>
              </Link>
            </div>
          </div>
          <div className="w-full lg:px-11 md:px-6 px-5">
            <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
              <div className="lg:h-[576px] h-full w-1/2 md:rounded-xl rounded-lg flex justify-center relative group cursor-pointer">
                <Link to="/details/shivatapa">
                  <img
                    src={shivatapa}
                    className="object-cover h-full w-auto md:rounded-xl rounded-lg"
                    alt=""
                  ></img>
                  <p className="lg:text-3xl text-xl font-head uppercase text-white z-10  absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                    Shiva Tapa
                  </p>
                  <div className="vigenette group-hover:opacity-100"></div>
                </Link>
              </div>

              <div className="flex flex-col lg:h-[576px] h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
                <div className="h-1/2 w-full md:rounded-xl rounded-lg relative group cursor-pointer ">
                  <img
                    src={gaumi}
                    className="object-cover h-full w-auto md:rounded-xl rounded-lg"
                    alt=""
                  ></img>
                  <p className="lg:text-3xl text-xl font-head uppercase text-white z-10  absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                    Gaumi
                  </p>
                  <div className="vigenette group-hover:opacity-100"></div>
                </div>
                <div className="h-1/2 w-full md:rounded-xl rounded-lg relative group cursor-pointer">
                  <img
                    src={battleship}
                    className="object-cover h-full w-auto md:rounded-xl rounded-lg"
                    alt=""
                  ></img>
                  <p className="lg:text-3xl text-xl font-head uppercase text-white z-10  absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                    battleship
                  </p>
                  <div className="vigenette group-hover:opacity-100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
            <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
              <div className="flex flex-col lg:h-[552px] h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
                <div className="h-1/2 w-full md:rounded-xl rounded-lg relative group cursor-pointer">
                  <img
                    src={persianwar}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  ></img>
                  <p className="lg:text-3xl text-xl font-head uppercase text-white z-10 absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                    Bos Taurus
                  </p>
                  <div className="vigenette group-hover:opacity-100"></div>
                </div>
                <div className="h-1/2 w-full md:rounded-xl rounded-lg relative group cursor-pointer">
                  <img
                    src={marathawar}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  ></img>
                  <p className="lg:text-3xl text-xl font-head uppercase text-white z-10  absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                    Seven Warriors
                  </p>
                  <div className="vigenette group-hover:opacity-100"></div>
                </div>
              </div>
              <div className="2xl:h-full lg:h-[552px] h-full  w-1/2 md:rounded-xl rounded-lg flex justify-center relative group cursor-pointer">
                <img
                  src={yogi}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                ></img>
                <p className="lg:text-3xl text-xl font-head uppercase text-white z-10  absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                  Charaka Samitha
                </p>
                <div className="vigenette group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
