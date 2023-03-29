import React from "react";
import Image from "next/image";

const Grid = ({ images }) => {
  return (
    <>
      {images?.image1 && (
        <div className="w-full lg:px-11 md:px-6 px-5">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
            {images?.image1 && (
              <div className="lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  priority
                  src={images?.image1}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.image2 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    priority
                    src={images?.image2}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.image3 && (
                <div className="lg:h-[268px] h-[94px] md:h-[161px] w-full md:rounded-xl rounded-lg">
                  <Image
                    priority
                    src={images?.image3}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {images?.image4 && (
        <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 lg:h-[552px] md:h-[332px] h-[192px] ">
            <div className="flex flex-col  h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1 ">
              {images?.image5 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image5}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.image6 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image6}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
            {images?.image4 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image4}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
      {images?.image7 && (
        <div className="w-full lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
            {images?.image7 && (
              <div className="lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image7}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.image8 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image8}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.image9 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image9}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {images?.image10 && (
        <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 lg:h-[552px] md:h-[332px] h-[192px] ">
            <div className="flex flex-col  h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1 ">
              {images?.image10 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image10}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.image11 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image11}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
            {images?.image12 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image12}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
          </div>
        </div>
      )}
      {images?.image13 && (
        <div className="w-full lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1">
            {images?.image13 && (
              <div className="lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image13}
                  className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  alt=""
                />
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.image14 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image14}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.image15 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image15}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {images?.image16 && (
        <div className="w-full h-max lg:px-11 md:px-6 px-5 lg:mt-4 md:mt-2 mt-1">
          <div className="w-full flex  lg:space-x-4 md:space-x-2 space-x-1 lg:h-[552px] md:h-[332px] h-[192px] ">
            <div className="flex flex-col  h-full w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1 ">
              {images?.image16 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image16}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
              {images?.image17 && (
                <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                  <Image
                    src={images?.image17}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </div>
              )}
            </div>
            {images?.image18 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                <Image
                  src={images?.image18}
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
