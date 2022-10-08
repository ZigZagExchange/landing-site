import React from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { Dialog, Transition } from "@headlessui/react";

import { Fragment, useState } from "react";

const YoutubeModal = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button type="button" onClick={openModal} className="hover:opacity-80">
          <Image
            src="/assets/player.svg"
            alt="Vercel Logo"
            width={128}
            height={128}
          />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-5xl overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=DBS5a5D2m-U&ab_channel=Luude"
                  light
                  width="100%"
                  height={600}
                />
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default YoutubeModal;
