import React, { useState } from "react";
import Select from "react-select";
import axios from "axios";
import { ToastContainer, toast } from "react-toast";
import { uploadFile } from "@/libs/uploadToIPFS";
import { ClipLoader } from "react-spinners";

const Admin = () => {
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

  const priorityOptions = [
    { value: "0", label: "0" },
    { value: "1", label: "1" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
  ];

  const [formData, setFormData] = useState({
    file: null,
    title: null,
    description: null,
    priority: null,
    category: null,
  });

  const [uploading, setUploading] = useState(false);

  const handleImage = (e) => {
    const file = e.target.files[0];

    setFormData({
      ...formData,
      file: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUploading(true);
    uploadFile(formData?.file)
      .then((cid) => {
        if (cid) {
          const imageBaseUrl = `https://ipfs.io/ipfs/${cid}/`;
          const data = {
            title: formData.title,
            description: formData.description,
            category: formData.category,
            priority: formData.priority,
            file: imageBaseUrl + formData.file.name,
          };
          axios
            .post("/api/upload", data, {
              headers: {
                Accept: "*/*",
              },
            })
            .then((res) => {
              toast.success("Image Uploaded Successfully !");
              setUploading(false);
            })
            .catch((err) => {
              toast.error("Oops! Something went wrong");
              setUploading(false);
            });
        }
      })
      .catch((err) => {
        console.log(err);
        setUploading(false);
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="bg-white h-screen w-full flex flex-col justify-center items-center space-y-20">
        <div className="text-3xl">Upload Image</div>
        <div className="w-1/3 flex flex-col space-y-5 ">
          <div className="flex space-x-5 w-full items-center">
            <p>File</p>
            <input
              type="file"
              name="file"
              accept="image/*, video/*"
              className=""
              onChange={handleImage}
            />
          </div>
          <div className="flex space-x-5 w-full items-center">
            <p>Title</p>
            <input
              type="text"
              name="title"
              className="h-9 w-full border border-gray-400 rounded focus:outline-none p-2 text-sm"
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-5 w-full items-center">
            <p>Description</p>
            <textarea
              name="description"
              className="h-20 w-full border border-gray-400 rounded focus:outline-none p-3 text-sm"
              onChange={handleChange}
            />
          </div>
          <div className="flex space-x-5 w-full items-center">
            <p>Priority</p>
            <Select
              className="w-full"
              name="priority"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  priority: e.value,
                });
              }}
              options={priorityOptions}
            />
          </div>
          <div className="flex space-x-5 w-full items-center">
            <p>Category</p>
            <Select
              className="w-full"
              name="category"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  category: e.value,
                });
              }}
              options={options}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="py-2 bg-primary text-white rounded"
          >
            {uploading ? <ClipLoader color="#fff" size={16} /> : "Upload"}
          </button>
        </div>
      </div>
      <ToastContainer delay={3000} position="top-right" />
    </>
  );
};

export default Admin;
