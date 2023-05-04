import React, { useState, useEffect } from "react";
import Head from "next/head";
import Select from "react-select";
import Image from "next/image";
import axios from "axios";
import { IconArrowNarrowLeft, IconEdit } from "@tabler/icons-react";
import { IconTrash } from "@tabler/icons-react";
import MyModal from "@/components/modal/Modal";
import ConfirmationModal from "@/components/modal/ConfirmationModal";
import Router from "next/router";
import Link from "next/link";

const Update = () => {
  const options = [
    { value: "book-illustration", label: "book-illustration" },
    { value: "character-design", label: "character-design" },
    { value: "children-art", label: "children-art" },
    { value: "concept-art", label: "concept-art" },
    { value: "cover-art", label: "cover-art" },
    { value: "environmental-design", label: "environmental-design" },
    { value: "fantasy-art", label: "fantasy-art" },
    { value: "game-art", label: "game-art" },
    { value: "graphic-design", label: "graphic-design" },
    { value: "illustrations", label: "illustrations" },
    { value: "storyboard", label: "storyboard" },
    { value: "visual-development", label: "visual-development" },
  ];

  const [category, setCategory] = useState("illustrations");

  const [data, setData] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const [modalData, setModalData] = useState(null);

  const [deleteModalData, setDeleteModalData] = useState(null);

  useEffect(() => {
    if (window) {
      const isAdminLoggenIn =
        window?.sessionStorage?.getItem("isAdminLoggenIn");
      if (!isAdminLoggenIn) {
        Router.push({
          pathname: "/admin",
        });
      }
    }
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function openDeleteModal() {
    setIsDeleteModalOpen(true);
  }

  const handleUpdateOpen = (value) => {
    setModalData(value);
    openModal();
  };

  const handleDeleteOpen = (value) => {
    setDeleteModalData(value.image_id);
    openDeleteModal();
  };

  const fetchData = async () => {
    await axios
      .get(`/api/get_image_by_id/${category}`)
      .then((response) => {
        const res = response.data.data;
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <>
      <Head>
        <title>Supersapiens Studio | Admin</title>
        <meta
          name="Supersapiens Studio"
          content="Proud Design Studio Since 2022"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className="bg-white min-h-screen h-max w-full lg:p-20 md:p-14 p-5 space-y-10">
        <div className="flex md:flex-row flex-col w-full justify-between space-y-5 md:space-y-0">
          <div className="text-3xl">Update / Delete</div>
          <Select
            className="md:w-96 w-full"
            name="category"
            onChange={(e) => {
              setCategory(e.value);
            }}
            options={options}
          />
        </div>
        <div className="text-sm self-center hover:underline">
          <Link href="/admin/upload" className="flex space-x-2">
            <IconArrowNarrowLeft size={20} />
            <p>Upload a new file</p>
          </Link>
        </div>
        <table className="table text-black border-separate space-y-6 text-sm w-full">
          <thead className="bg-slate-100 text-black">
            <tr>
              <th className="p-3">Title</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Priority</th>
              <th className="p-3 text-left">Type</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 &&
              data.map((value, key) => {
                return (
                  <tr className="bg-slate-100" key={key}>
                    <td className="p-3">
                      <div className="flex align-items-center space-x-3">
                        {value.type === "image" ? (
                          <Image
                            width={100}
                            height={100}
                            className="rounded-full h-12 w-12  object-cover"
                            src={value.file}
                            alt="unsplash image"
                          />
                        ) : (
                          <Image
                            width={100}
                            height={100}
                            className="rounded-full h-12 w-12  object-cover"
                            src="/assets/covers/gaumi.svg"
                            alt="unsplash image"
                          />
                        )}
                        <div className="ml-3">
                          <div className="text-ellipsis">
                            {value.title.slice(0, 10)}
                          </div>
                          <div className="text-black text-ellipsis">
                            {value.description.slice(0, 10)}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3">{value.category}</td>
                    <td className="p-3">{value.priority}</td>
                    <td className="p-3">{value.type}</td>
                    <td className="p-3">
                      <div className="flex space-x-2 items-center">
                        <IconEdit
                          className="text-black hover:text-green-400 cursor-pointer "
                          onClick={() => {
                            handleUpdateOpen(value);
                          }}
                        />
                        <IconTrash
                          className="text-black hover:text-rose-500 cursor-pointer "
                          onClick={() => {
                            handleDeleteOpen(value);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <MyModal
        isOpen={isOpen}
        closeModal={closeModal}
        modalData={modalData}
        setModalData={setModalData}
        fetchData={fetchData}
      />
      <ConfirmationModal
        isDeleteModalOpen={isDeleteModalOpen}
        closeDeleteModal={closeDeleteModal}
        deleteModalData={deleteModalData}
        fetchData={fetchData}
      />
    </>
  );
};

export default Update;
