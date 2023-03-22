import React from "react";
import Navbar from "../../components/navbar/Navbar";
import aboutbg from "../../public/assets/covers/about-bg.svg";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import mintflick from "../../public/assets/clients/mintflick.svg";
import postoffice from "../../public/assets/clients/postoffice.svg";
import sapiens from "../../public/assets/clients/sapiens.svg";
import marvel from "../../public/assets/clients/marvel.svg";
import kickto from "../../public/assets/clients/kickto.svg";
import sutradhar from "../../public/assets/clients/sutradhar.svg";
import gaumi from "../../public/assets/clients/gaumi.svg";
import analytics from "../../public/assets/clients/analytics.svg";
import matchbox from "../../public/assets/clients/matchbox.svg";
import bombay from "../../public/assets/clients/bombay.svg";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Supersapiens Studio</title>
        <meta
          name="Supersapiens Studio"
          content="Proud Design Studio Since 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="w-full lg:flex ">
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
        <div className="lg:w-4/5 lg:h-max h-screen  bg-black lg:ml-auto text-white about-bg relative">
          <div className="h-full w-full backdrop-blur-sm backdrop-brightness-50 delay-200 flex flex-col md:justify-center justify-start pt-10 md:pt-0 items-center">
            <div className="lg:w-1/2 md:w-2/3 w-11/12 h-max flex flex-col space-y-3 animate-wiggle lg:mt-16 md:mt-0">
              <p className="md:text-xl text-sm font-tertiary">
                Our team of talented artists has a passion for creating dynamic
                and engaging visuals that tell compelling stories and capture
                the imagination. We believe that heroes come in all shapes and
                sizes, and our illustrations celebrate the diversity and
                uniqueness of every individual.
              </p>
              <Image
                className="w-full h-auto rounded-xl"
                src={aboutbg}
                alt=""
              />
            </div>
            <div className="w-full flex flex-col items-center justify-center lg:py-14 lg:space-y-12 md:space-y-5 space-y-4 md:py-16 pt-10">
              <p className="md:text-4xl text-2xl uppercase font-head">
                clients
              </p>
              <Marquee gradient={false} speed={50} className="w-full">
                <div className="flex w-full items-center justify-around">
                  <div className="md:h-max h-16 w-auto">
                    <Image src={mintflick} alt="" className="h-full w-full" />
                  </div>
                  <div className="md:h-max h-16 w-auto">
                    <Image src={postoffice} alt="" className="h-full w-full" />
                  </div>
                  <div className="md:h-max h-16 w-auto">
                    <Image src={marvel} alt="" className="h-full w-full" />
                  </div>
                  <div className="md:h-max h-16 w-auto">
                    <Image src={sapiens} alt="" className="h-full w-full" />
                  </div>
                  <div className="md:h-max h-16 w-auto">
                    <Image src={kickto} alt="" className="h-full w-full" />
                  </div>
                </div>
              </Marquee>
              <Marquee
                gradient={false}
                speed={50}
                direction="right"
                className="w-full"
              >
                <div className="flex w-full items-center justify-around">
                  <div className=" md:h-max h-14 w-auto">
                    <Image src={sutradhar} alt="" className="h-full w-full" />
                  </div>
                  <div className=" md:h-max h-14 w-auto">
                    <Image src={gaumi} alt="" className="h-full w-full" />
                  </div>
                  <div className=" md:h-max h-14 w-auto">
                    <Image src={analytics} alt="" className="h-full w-full" />
                  </div>
                  <div className=" md:h-max h-14 w-auto">
                    <Image src={matchbox} alt="" className="h-full w-full" />
                  </div>
                  <div className=" md:h-max h-14 w-auto">
                    <Image src={bombay} alt="" className="h-full w-full" />
                  </div>
                </div>
              </Marquee>
            </div>
          </div>
          {/* <div className=" about-bg absolute h-full w-full top-0 left-0 animate-zoomOut delay-150 opacity-0"></div> */}
        </div>
      </div>
    </>
  );
};

export default About;
