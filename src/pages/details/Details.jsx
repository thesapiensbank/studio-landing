import React from "react";
import Navbar from "../../components/navbar/Navbar";
import mockup1 from "../../assets/imgs/mockup1.svg";
import mockup2 from "../../assets/imgs/mockup2.svg";
import mockup3 from "../../assets/imgs/mockup3.svg";
import breakdown1 from "../../assets/imgs/breakdown1.svg";
import breakdown2 from "../../assets/imgs/breakdown2.svg";
import breakdown3 from "../../assets/imgs/breakdown3.svg";
import MobileNavbar from "../../components/navbar/MobileNavbar";

const Details = () => {
  return (
    <div className="w-full lg:flex">
      <div className="lg:block hidden">
        <Navbar />
      </div>
      <div className="block lg:hidden">
        <MobileNavbar />
      </div>
      <div className="lg:w-4/5 h-max bg-black lg:ml-auto 2xl:mb-5 lg:mb-4 px-5 text-white">
        <div className="h-full w-full  aspect-video relative ">
          <div className="2xl:h-[690px] lg:h-[670px] md:h-[600px] h-full w-full details-bg md:rounded-xl rounded-lg"></div>
        </div>
        <div className="w-full flex flex-col md:space-y-10 space-y-4 md:my-10 my-4">
          <p className="md:text-5xl text-4xl font-semibold">Adiyogi</p>
          <p className="md:w-3/4 w-full md:text-base text-sm">
            We are a proud Design studio since 2022. Our team of talented
            artists has a passion for creating dynamic and engaging visuals that
            tell compelling stories and capture the imagination. We believe that
            heroes come in all shapes and sizes, and our illustrations celebrate
            the diversity and uniqueness of every individual.
          </p>
        </div>

        <div className="flex flex-col w-full lg:space-y-5 md:space-y-3 space-y-1">
          <p className="md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
            Initial mockups
          </p>
          <div className="w-full md:h-[345px] h-full">
            <img
              className="h-full w-full object-cover md:rounded-xl rounded-lg"
              src={mockup1}
              alt=""
            ></img>
          </div>
          <div className="flex w-full md:h-[168px] h-full lg:space-x-5 md:space-x-3 space-x-1">
            <img
              className="h-full w-1/2 object-cover md:rounded-xl rounded-lg"
              src={mockup2}
              alt=""
            ></img>
            <img
              className="h-full lg:w-1/2 w-1/2 object-cover md:rounded-xl rounded-lg"
              src={mockup3}
              alt=""
            ></img>
          </div>
        </div>
        <div className="flex flex-col w-full lg:space-y-5 md:space-y-3 space-y-1 md:mt-10 mt-4">
          <p className="md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
            Breakdowns
          </p>
          <div className="flex w-full h-max lg:space-x-5 md:space-x-3 space-x-1">
            <div className="2xl:h-[370px] lg:h-[355px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
              <img
                src={breakdown1}
                className="object-cover h-full w-full md:rounded-xl rounded-lg"
                alt=""
              ></img>
            </div>

            <div className="flex flex-col md:h-[355px] h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-3 space-y-1">
              <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                <img
                  src={breakdown2}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                ></img>
              </div>
              <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                <img
                  src={breakdown3}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col lg:space-y-5 md:space-y-3 space-y-1 md:my-10 my-4">
          <p className="md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
            Credits
          </p>
          <div className="w-full flex md:space-x-5 space-x-3 justify-between">
            <div className="w-1/2 flex flex-col space-y-2 md:text-base text-sm">
              <p>
                Director : <span className="underline">Afroz Khan</span>
              </p>
              <p>
                Director's Assistant :{" "}
                <span className="underline">Kalyani Kulkarni</span>
              </p>
              <p>
                Direction Intern :{" "}
                <span className="underline">Vaibhav Iyer</span>
              </p>
              <p>
                D.O.P : <span className="underline">Utkarsh Marulkar</span>
              </p>
            </div>
            <div className="w-1/2 flex flex-col space-y-2 md:text-base text-sm">
              <p>
                Director : <span className="underline">Afroz Khan</span>
              </p>
              <p>
                Director's Assistant :{" "}
                <span className="underline">Kalyani Kulkarni</span>
              </p>
              <p>
                Direction Intern :{" "}
                <span className="underline">Vaibhav Iyer</span>
              </p>
              <p>
                D.O.P : <span className="underline">Utkarsh Marulkar</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
