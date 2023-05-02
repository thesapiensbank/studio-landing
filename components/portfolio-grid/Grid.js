import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

const Grid = ({ category }) => {
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`/api/get_image_by_id/${category}`)
      .then((response) => {
        const res = response.data.data;
        setImages(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {images?.length > 0 && (
        <div className="w-full lg:px-11 md:px-6 px-5">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
            <div className="lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg flex justify-center">
              <Image
                priority
                src={images[0]?.file}
                width={100}
                height={100}
                className="object-cover h-full w-full md:rounded-xl rounded-lg"
                alt=""
              />
            </div>
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.length > 1 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    priority
                    src={images[1]?.file}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.length > 2 && (
                <div className="lg:h-[268px] h-[94px] md:h-[161px] w-full md:rounded-xl rounded-lg">
                  <Image
                    priority
                    src={images[2]?.file}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {images?.length > 3 && (
        <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 lg:h-[552px] md:h-[332px] h-[192px] ">
            <div className="flex flex-col  h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1 ">
              {images?.length > 3 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images[3]?.file}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.length > 4 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images[4]?.file}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
            {images?.length > 5 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images[5]?.file}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
      {images?.length > 6 && (
        <div className="w-full lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
            {images?.length > 6 && (
              <div className="lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images[6]?.file}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.length > 7 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images[7]?.file}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.length > 8 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images[8]?.file}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {images?.length > 9 && (
        <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 lg:h-[552px] md:h-[332px] h-[192px] ">
            <div className="flex flex-col  h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1 ">
              {images?.length > 9 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image10}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.length > 10 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image11}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
            {images?.length > 11 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image12}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
      {images?.length > 12 && (
        <div className="w-full lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
            {images?.length > 12 && (
              <div className="lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image13}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.length > 13 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image14}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.length > 14 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image15}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {images?.length > 15 && (
        <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 lg:h-[552px] md:h-[332px] h-[192px] ">
            <div className="flex flex-col  h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1 ">
              {images?.length > 15 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image16}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.length > 16 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image17}
                    width={100}
                    height={100}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
            {images?.length > 17 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image18}
                  width={100}
                  height={100}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;
