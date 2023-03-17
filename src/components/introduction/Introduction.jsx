import React from "react";
import logo from "../../assets/brand-logo/intro-logo.svg";

const Introduction = () => {
  return (
    <div className="h-screen overflow-hidden w-full bg-primary flex flex-col justify-center items-center relative animate-bg opacity-0">
      <h1 className="text-white lg:text-[13rem] md:text-[10rem] text-7xl font-intro2 absolute lg:top-72 top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 one uppercase">
        Hello!
      </h1>
      <h1 className="text-white lg:text-[13rem] md:text-[10rem] text-7xl font-intro2 absolute lg:top-72 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 two w-full text-center uppercase">
        we are
      </h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 one uppercase h-max w-max md:mt-10">
        <p className=" three text-white lg:text-[13rem] md:text-[10rem] text-7xl font-intro opacity-0 ">
          super
        </p>
        <p className="four text-black lg:text-[13rem] md:text-[10rem] text-7xl font-intro opacity-0 ">
          sapiens
        </p>
      </div>
      <img
        className="h-56 w-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  five opacity-0"
        src={logo}
        alt=""
      ></img>
    </div>
  );
};

export default Introduction;
