import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Fragment } from "react";
import { Tab } from "@headlessui/react";
import shivatapa from "../../assets/covers/shiva-tapa.svg";
import gaumi from "../../assets/covers/gaumi.svg";
import battleship from "../../assets/covers/battleship.svg";
import marathawar from "../../assets/covers/marathawar.svg";
import yogi from "../../assets/covers/yogi.svg";
import persianwar from "../../assets/covers/persianwar.svg";
import MobileNavbar from "../../components/navbar/MobileNavbar";

const Portfolio = () => {
  return (
    <div className="w-full lg:flex ">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 h-max bg-black lg:ml-auto text-white py-4 font-primary">
        <div className="flex flex-col justify-center w-full">
          <Tab.Group>
            <Tab.List className="flex justify-center md:space-x-2 space-x-1">
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Comic
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Flat
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Concept Art
                  </button>
                )}
              </Tab>
              <Tab as={Fragment}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Oil Paint Style
                  </button>
                )}
              </Tab>
              <Tab as={Fragment} className="hidden md:block">
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Semi Realistic
                  </button>
                )}
              </Tab>
              <Tab as={Fragment} className="hidden md:block">
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={
                      selected
                        ? "bg-primary text-white md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                        : "bg-white text-black md:h-10 h-9 w-max md:px-4 px-3 rounded-lg md:text-base text-sm"
                    }
                  >
                    Vector
                  </button>
                )}
              </Tab>
              {/* ...  */}
            </Tab.List>
            <Tab.Panels className="mt-10">
              <Tab.Panel>
                <div className="w-full lg:px-11 md:px-6 px-5">
                  <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
                    <div className="lg:h-[576px] h-full w-1/2 md:rounded-xl rounded-lg flex justify-center">
                      <img
                        src={shivatapa}
                        className="object-cover h-full w-auto md:rounded-xl rounded-lg"
                        alt=""
                      ></img>
                    </div>
                    <div className="flex flex-col lg:h-[576px] h-full] w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
                      <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                        <img
                          src={gaumi}
                          className="object-cover h-full w-auto md:rounded-xl rounded-lg"
                          alt=""
                        ></img>
                      </div>
                      <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                        <img
                          src={battleship}
                          className="object-cover h-full w-auto md:rounded-xl rounded-lg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
                  <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 ">
                    <div className="flex flex-col lg:h-[552px] h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
                      <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                        <img
                          src={marathawar}
                          className="object-cover h-full w-full md:rounded-xl rounded-lg"
                          alt=""
                        ></img>
                      </div>
                      <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                        <img
                          src={persianwar}
                          className="object-cover h-full w-full md:rounded-xl rounded-lg"
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div className="2xl:h-full lg:h-[552px] h-full w-1/2 md:rounded-xl rounded-lg flex justify-center">
                      <img
                        src={yogi}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </Tab.Panel>
              {/* ... */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
