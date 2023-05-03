import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import Select from "react-select";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { ToastContainer, toast } from "react-toast";

export default function MyModal({
  isOpen,
  closeModal,
  modalData,
  setModalData,
  fetchData,
}) {
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
    { value: "2", label: "2" },
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

  const typeOptions = [
    { value: "image", label: "image | gif" },
    { value: "video", label: "video" },
  ];

  const [updating, setUpdating] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setModalData({
      ...modalData,
      [name]: value,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    if (modalData) {
      const data = await axios
        .post("/api/update_images", modalData)
        .then(async (response) => {
          setUpdating(false);
          toast.success("Image Updated Successfully !");
          closeModal();
          await fetchData();
        })
        .catch((err) => {
          setUpdating(false);
          toast.error("Oops! Something went wrong");
          closeModal();
        });
    }
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 flex justify-between"
                  >
                    <p>Update Info</p>
                    <IconX onClick={closeModal} className="curssor-pointer" />
                  </Dialog.Title>
                  <div className="mt-5">
                    <div className="w-full flex flex-col space-y-3 ">
                      <div className="flex space-x-5 w-full items-center">
                        <p>Type</p>
                        <Select
                          className="w-full"
                          name="type"
                          defaultValue={modalData?.type}
                          onChange={(e) => {
                            setModalData({
                              ...modalData,
                              type: e.value,
                            });
                          }}
                          options={typeOptions}
                        />
                      </div>
                      <div className="flex space-x-5 w-full items-center">
                        <p>Title</p>
                        <input
                          type="text"
                          name="title"
                          value={modalData?.title}
                          className="h-9 w-full border border-gray-400 rounded focus:outline-none p-2 text-sm"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex space-x-5 w-full items-center">
                        <p>Description</p>
                        <textarea
                          name="description"
                          value={modalData?.description}
                          className="h-20 w-full border border-gray-400 rounded focus:outline-none p-3 text-sm"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex space-x-5 w-full items-center">
                        <p>Priority</p>
                        <Select
                          className="w-full"
                          name="priority"
                          defaultValue={modalData?.priority}
                          onChange={(e) => {
                            setModalData({
                              ...modalData,
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
                          defaultValue={modalData?.category}
                          onChange={(e) => {
                            setModalData({
                              ...modalData,
                              category: e.value,
                            });
                          }}
                          options={options}
                        />
                      </div>
                      <button
                        onClick={handleUpdate}
                        className="py-2 bg-primary text-white rounded"
                      >
                        {updating ? (
                          <ClipLoader color="#fff" size={16} />
                        ) : (
                          "Update"
                        )}
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <ToastContainer delay={3000} position="top-right" />
    </>
  );
}
