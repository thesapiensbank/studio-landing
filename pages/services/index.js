import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import servicesbg from "../../public/assets/components/services-bg.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";
import { ToastContainer, toast } from "react-toast";

const Services = () => {
  const options = ["Animation", "Illustration", "Voiceover"];
  const qualityOptions = ["HD", "Ultra HD", "4K"];
  const iterationOptions = ["1", "2", "3"];

  const [formInput, setFormInput] = useState({
    service: null,
    quality: null,
    iterations: null,
    message: null,
    name: null,
    email: null,
  });

  const handleRequestSubmit = () => {
    if (
      formInput?.service &&
      formInput?.quality &&
      formInput?.iterations &&
      formInput?.name &&
      formInput?.email
    ) {
      const requestData = {
        HTMLContent: `<p>From : ${formInput?.name} Email: ${formInput?.email}</p><p>Service requested : ${formInput?.service}</p> <p>Quality : ${formInput?.quality}</p> <p>Iterations : ${formInput?.iterations}</p> <p>Message : ${formInput?.message}</p>`,
        recipient: "studio.supersapiens@gmail.com",
        subject: "Supersapiens Studio Service Request",
      };
      axios
        .post(
          "https://server-devnet.mintflick.app/user/send_mailexternal",
          requestData
        )
        .then(function (response) {
          console.log(response);
          setFormInput({
            service: null,
            quality: null,
            iterations: null,
            message: null,
            name: null,
            email: null,
          });
          toast.success("Email Sent Successfully !");
        })
        .catch(function (error) {
          console.log(error);
          toast.error("Oops! Something went wrong");
        });
    } else {
      toast.error("Please fill all the mandatory fields");
    }
  };

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
      <div className="w-full lg:flex">
        <div className="lg:block hidden">
          <Navbar />
        </div>
        <div className="block lg:hidden">
          <MobileNavbar />
        </div>
        <div className="lg:w-4/5 h-screen bg-black lg:ml-auto text-white relative font-primary">
          <Image className="" src={servicesbg} alt="" />
          <div className="flex flex-col 2xl:w-1/2 lg:w-7/12 md:w-2/3 w-11/12 h-max absolute md:top-28 top-10 left-1/2 -translate-x-1/2 space-y-4">
            <div className="flex flex-col space-y-3 ">
              <p className="text-4xl uppercase font-head">services</p>
              <p className="font-thin md:text-base text-xs font-secondary">
                We offer a wide variety of Services with high quality outputs.{" "}
                <br />
                You can chose what you want and also get an estimate for your
                project.
              </p>
            </div>
            <div className="w-full">
              <Dropdown
                options={options}
                placeholder="Choose a Service"
                controlClassName="myControlclass"
                menuClassName="myMenuClassName"
                arrowClassName="myArrowClassName"
                onChange={(e) => {
                  setFormInput((prev) => ({
                    ...prev,
                    service: e.value,
                  }));
                }}
              />
            </div>
            <div className="w-full flex space-x-3">
              <div className="w-1/2">
                <Dropdown
                  options={qualityOptions}
                  placeholder="Quality"
                  controlClassName="myControlclass"
                  menuClassName="myMenuClassName"
                  arrowClassName="myArrowClassName"
                  onChange={(e) => {
                    setFormInput((prev) => ({
                      ...prev,
                      quality: e.value,
                    }));
                  }}
                />
              </div>
              <div className="w-1/2">
                <Dropdown
                  options={iterationOptions}
                  placeholder="Iterations"
                  controlClassName="myControlclass"
                  menuClassName="myMenuClassName"
                  arrowClassName="myArrowClassName"
                  onChange={(e) => {
                    setFormInput((prev) => ({
                      ...prev,
                      iterations: e.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="w-full flex space-x-3">
              <div className="w-1/2">
                <input
                  type="text"
                  className="h-16 w-full rounded-lg bg-[#1e1e1e] md:p-6 p-4 text-[#8B8B8B] focus:outline-none"
                  placeholder="Name"
                  onChange={(e) => {
                    setFormInput((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }));
                  }}
                />
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  className="h-16 w-full rounded-lg bg-[#1e1e1e] md:p-6 p-4 text-[#8B8B8B] focus:outline-none"
                  placeholder="Email"
                  onChange={(e) => {
                    setFormInput((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }));
                  }}
                />
              </div>
            </div>
            <div className="w-full">
              <input
                type="text"
                className="h-36 w-full rounded-lg bg-[#1e1e1e] md:p-6 p-4 text-[#8B8B8B] focus:outline-none"
                placeholder="Any additional instructions"
                onChange={(e) => {
                  setFormInput((prev) => ({
                    ...prev,
                    message: e.target.value,
                  }));
                }}
              />
            </div>
            <div className="w-full" onClick={handleRequestSubmit}>
              <button className="h-10 w-20 text-center bg-primary rounded-lg block ml-auto">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer delay={3000} position="top-right" />
    </>
  );
};

export default Services;
