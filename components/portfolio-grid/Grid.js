import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const Grid = ({ category }) => {
  const [images, setImages] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`/api/get_images_by_category/${category}`)
      .then((response) => {
        const res = response.data.data;
        res.sort((a, b) => a.priority - b.priority);
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
            <div className="lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg flex justify-center relative">
              {images[0]?.type == "image" ? (
                <Link
                  href={`/details/${images[0].image_id}`}
                  className="w-full"
                >
                  <Image
                    priority
                    height={400}
                    width={400}
                    src={images[0]?.file}
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    alt=""
                  />
                </Link>
              ) : (
                <Link
                  href={`/details/${images[0].image_id}`}
                  className="w-full"
                >
                  <video
                    src={images[0]?.file}
                    controls="true"
                    className="object-cover h-full w-full md:rounded-xl rounded-lg"
                  ></video>
                </Link>
              )}
            </div>
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.length > 1 && (
                <Link href={`/details/${images[1].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[1]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[1]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[1]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
              {images?.length > 2 && (
                <Link href={`/details/${images[2].image_id}`}>
                  <div className="lg:h-[268px] h-[94px] md:h-[161px] w-full md:rounded-xl rounded-lg">
                    {images[2]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[2]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[2]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
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
                <Link href={`/details/${images[3].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[3]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[3]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[3]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
              {images?.length > 4 && (
                <Link href={`/details/${images[4].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[4]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[4]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[4]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
            </div>
            {images?.length > 5 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px] w-1/2 md:rounded-xl rounded-lg flex justify-center">
                {images[5]?.type == "image" ? (
                  <Link
                    href={`/details/${images[5].image_id}`}
                    className="w-full relative"
                  >
                    <Image
                      priority
                      height={400}
                      width={400}
                      src={images[5]?.file}
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      alt=""
                    />
                    <p className="lg:text-3xl text-xl font-head uppercase text-white z-10  absolute lg:top-7 lg:left-7 top-2 left-3 opacity-0 group-hover:opacity-100">
                      battleship
                    </p>
                    <div className="vigenette group-hover:opacity-100 transition duration-300"></div>
                  </Link>
                ) : (
                  <Link
                    href={`/details/${images[5].image_id}`}
                    className="w-full"
                  >
                    <video
                      src={images[5]?.file}
                      controls="true"
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    ></video>
                  </Link>
                )}
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
                {images[6]?.type == "image" ? (
                  <Link
                    href={`/details/${images[6].image_id}`}
                    className="w-full"
                  >
                    <Image
                      priority
                      height={400}
                      width={400}
                      src={images[6]?.file}
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/details/${images[6].image_id}`}
                    className="w-full"
                  >
                    <video
                      src={images[6]?.file}
                      controls="true"
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    ></video>
                  </Link>
                )}
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.length > 7 && (
                <Link href={`/details/${images[7].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[7]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[7]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[7]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
              {images?.length > 8 && (
                <Link href={`/details/${images[8].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[8]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[8]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[8]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
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
                <Link href={`/details/${images[9].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[9]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[9]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[9]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
              {images?.length > 10 && (
                <Link href={`/details/${images[10].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[10]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[10]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[10]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
            </div>
            {images?.length > 11 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                {images[11]?.type == "image" ? (
                  <Link
                    href={`/details/${images[11].image_id}`}
                    className="w-full"
                  >
                    <Image
                      priority
                      height={400}
                      width={400}
                      src={images[11]?.file}
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/details/${images[11].image_id}`}
                    className="w-full"
                  >
                    <video
                      src={images[11]?.file}
                      controls="true"
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    ></video>
                  </Link>
                )}
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
                {images[12]?.type == "image" ? (
                  <Link
                    href={`/details/${images[12].image_id}`}
                    className="w-full"
                  >
                    <Image
                      priority
                      height={400}
                      width={400}
                      src={images[12]?.file}
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/details/${images[12].image_id}`}
                    className="w-full"
                  >
                    <video
                      src={images[12]?.file}
                      controls="true"
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    ></video>
                  </Link>
                )}
              </div>
            )}
            <div className="flex flex-col lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg lg:space-y-4 md:space-y-2 space-y-1">
              {images?.length > 13 && (
                <Link href={`/details/${images[13].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[13]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[13]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[13]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
              {images?.length > 14 && (
                <Link href={`/details/${images[14].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[14]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[14]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[14]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
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
                <Link href={`/details/${images[15].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[15]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[15]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[15]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
              {images?.length > 16 && (
                <Link href={`/details/${images[16].image_id}`}>
                  <div className="lg:h-[268px] md:h-[161px] h-[94px] w-full md:rounded-xl rounded-lg">
                    {images[16]?.type == "image" ? (
                      <Image
                        priority
                        height={400}
                        width={400}
                        src={images[16]?.file}
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                        alt=""
                      />
                    ) : (
                      <video
                        src={images[16]?.file}
                        controls="true"
                        className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      ></video>
                    )}
                  </div>
                </Link>
              )}
            </div>
            {images?.length > 17 && (
              <div className=" lg:h-[552px] md:h-[332px] h-[192px]  w-1/2 md:rounded-xl rounded-lg flex justify-center">
                {images[17]?.type == "image" ? (
                  <Link
                    href={`/details/${images[17].image_id}`}
                    className="w-full"
                  >
                    <Image
                      priority
                      height={400}
                      width={400}
                      src={images[17]?.file}
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link
                    href={`/details/${images[17].image_id}`}
                    className="w-full"
                  >
                    <video
                      src={images[17]?.file}
                      controls="true"
                      className="object-cover h-full w-full md:rounded-xl rounded-lg"
                    ></video>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Grid;
