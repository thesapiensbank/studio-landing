import { Dialog, Transition } from "@headlessui/react";
import { IconX } from "@tabler/icons-react";
import { Fragment, useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { ToastContainer, toast } from "react-toast";

const ConfirmationModal = ({
  isDeleteModalOpen,
  closeDeleteModal,
  deleteModalData,
  fetchData,
}) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    setDeleting(true);
    if (deleteModalData) {
      const data = await axios
        .post("/api/delete_image", { image_id: deleteModalData })
        .then((response) => {
          setDeleting(false);
          toast.success("Image Deleted Successfully !");
          closeDeleteModal();
          fetchData();
        })
        .catch((err) => {
          setDeleting(false);
          toast.error("Oops! Something went wrong");
          closeDeleteModal();
        });
    }
  };
  return (
    <>
      <Transition appear show={isDeleteModalOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeDeleteModal}>
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
                    <p>Confirmation</p>
                    <IconX
                      onClick={closeDeleteModal}
                      className="cursor-pointer"
                    />
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      <span className="text-primary">Caution :</span> Deleting
                      this file while permanantly delete it from your collection
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-rose-300 px-4 py-2 text-sm font-medium text-black hover:bg-rose-400 focus:outline-none  focus-visible:ring-offset-2"
                      onClick={handleDelete}
                    >
                      {deleting ? (
                        <ClipLoader color="#000" size={16} />
                      ) : (
                        "Delete"
                      )}
                    </button>
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
};

export default ConfirmationModal;
