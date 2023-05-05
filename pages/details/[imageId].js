import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import MobileNavbar from "../../components/navbar/MobileNavbar";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { ToastContainer, toast } from "react-toast";

const Details = () => {
  const router = useRouter();

  const [detailedData, setDetailedData] = useState(null);

  const fetchData = async () => {
    const { imageId } = router.query;
    await axios
      .get(`/api/get_image_by_id/${imageId}`)
      .then((response) => {
        const res = response.data.data[0];
        setDetailedData(res);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Oops! Something went wrong");
      });
  };

  useEffect(() => {
    fetchData();
  }, [router]);

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
      {detailedData && (
        <div className="w-full lg:flex">
          <div className="lg:block hidden">
            <Navbar />
          </div>
          <div className="block lg:hidden">
            <MobileNavbar />
          </div>
          <div className="lg:w-4/5 h-max bg-black lg:ml-auto 2xl:mb-5 lg:mb-4 px-5 text-white font-primary">
            <div className="h-full w-full  aspect-video relative ">
              <div className="2xl:h-[690px] lg:h-[670px] md:h-[600px] h-full w-full md:rounded-xl rounded-lg flex justify-center">
                <Image
                  priority
                  height={1200}
                  width={1200}
                  className="h-full w-auto object-scale-down md:rounded-xl rounded-lg"
                  src={detailedData.file}
                  alt=""
                />
              </div>
            </div>
            <div className="w-full flex flex-col md:space-y-10 space-y-4 md:my-10 my-4">
              <p className="md:text-5xl text-4xl font-semibold">
                {detailedData.title}
              </p>
              <p className="md:w-3/4 w-full md:text-base text-sm font-tertiary">
                {detailedData?.description || ""}
              </p>
            </div>

            {/* <div className="flex flex-col w-full lg:space-y-5 md:space-y-3 space-y-1">
            <p className="md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
              Initial mockups
            </p>
            <div className="w-full md:h-[345px] h-full">
              <Image
                className="h-full w-full object-cover md:rounded-xl rounded-lg"
                src={mockup1}
                alt=""
              />
            </div>
            <div className="flex w-full md:h-[168px] h-full lg:space-x-5 md:space-x-3 space-x-1">
              <Image
                className="h-full w-1/2 object-cover md:rounded-xl rounded-lg"
                src={mockup2}
                alt=""
              />
              <Image
                className="h-full lg:w-1/2 w-1/2 object-cover md:rounded-xl rounded-lg"
                src={mockup3}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col w-full lg:space-y-5 md:space-y-3 space-y-1 md:mt-10 mt-4">
            <p className="md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
              Breakdowns
            </p>
            <div className="flex w-full h-max lg:space-x-5 md:space-x-3 space-x-1">
              <div className="2xl:h-[370px] lg:h-[355px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={breakdown1}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>

              <div className="flex flex-col md:h-[355px] h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-3 space-y-1">
                <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                  <Image
                    src={breakdown2}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
                <div className="h-1/2 w-full md:rounded-xl rounded-lg">
                  <Image
                    src={breakdown3}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col lg:space-y-5 md:space-y-3 space-y-1 md:my-10 my-4 font-tertiary">
            <p className="md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
              Credits
            </p>
            <div className="w-full flex md:space-x-5 space-x-3 justify-between">
              <div className="w-1/2 flex flex-col space-y-2 md:text-base text-sm">
                <p>
                  Director : <span className="underline">Afroz Khan</span>
                </p>
                <p>
                  Director&apos;s Assistant :{" "}
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
                  Director&apos;s Assistant :{" "}
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
          </div> */}
          </div>
        </div>
      )}
      <ToastContainer delay={3000} position="top-right" />
    </>
  );
};

export default Details;
