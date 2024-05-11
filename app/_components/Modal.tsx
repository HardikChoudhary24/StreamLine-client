"use client";
import React from "react";
import { HighlighterItem } from "./videoCard/highlighter";
import { Particles } from "./landing/particles";
import testThumbnail from "@/public/testThumbnail.jpeg";
import Image from "next/image";
import { FiInbox } from "react-icons/fi";
const uploadFields = [
  { label: "Title", registerName: "title" },
  { label: "Description", registerName: "desc" },
];
type props = {
  setOpenCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
};
const Modal = ({ setOpenCreateModal }: props) => {
  const handleUpload = (uploadFor: "thumbnail" | "video") => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    if (uploadFor === "thumbnail") {
      input.setAttribute("accept", "image/*");
    } else {
      input.setAttribute("accept", "video/mp4,video/x-m4v,video/*");
    }
    input.addEventListener("change", (e) => handleMedia(e));
    input.click();
  };

  const handleMedia = ()=>{
    
  }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[4.5px] flex justify-center items-center z-40 transition-all ease-in-out"
      onClick={() => {
        setOpenCreateModal(false);
      }}
    >
      <div
        className="col-span-1 w-[530px]"
        onClick={(e) => e.stopPropagation()}
      >
        <HighlighterItem>
          <div className="relative h-full bg-zinc-900 rounded-[inherit] z-20 overflow-hidden">
            <Particles
              className="absolute inset-0 -z-10 opacity-10 group-hover/item:opacity-100 transition-opacity duration-1000 ease-in-out"
              quantity={200}
            />
            <div className="flex flex-col">
              <div
                className="absolute bottom-0 w-1/2 pointer-events-none -translate-x-1/2 translate-y-1/2 left-1/2 -z-10 aspect-square"
                aria-hidden="true"
              >
                <div className="absolute inset-0 translate-z-0 bg-zinc-800 rounded-full blur-[80px]" />
              </div>
              <div className="p-8 flex flex-col gap-y-3">
                <h3 className="text-2xl font-semibold leading-8 mb-3">
                  Upload a video
                </h3>
                {uploadFields.map((field) => {
                  return (
                    <div key={field.label}>
                      <label
                        htmlFor=""
                        className="font-medium leading-8 text-base"
                      >
                        {field.label}
                      </label>
                      <input
                        type="text"
                        className={`text-sm text-white bg-transparent rounded-md outline-none border border-zinc-400 text-black px-2 w-full py-2`}
                      />
                    </div>
                  );
                })}
                <div className="flex flex-col justify-start items-start gap-y-5 mt-5">
                  <div
                    className="w-full h-[200px] outline-dashed rounded-lg outline-zinc-400 flex flex-col justify-center items-center gap-y-2 cursor-pointer"
                    onClick={() => handleUpload("thumbnail")}
                  >
                    <FiInbox size={25} />
                    <span className="font-extralight" id="thumbnail">
                      Drop video thumbnail here
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start gap-y-5 mt-5">
                  <div
                    className="w-full h-[200px] outline-dashed rounded-lg outline-zinc-400 flex flex-col justify-center items-center gap-y-2 cursor-pointer"
                    onClick={() => handleUpload("video")}
                  >
                    <FiInbox size={25} />
                    <span className="font-extralight">Drop video here</span>
                  </div>
                </div>
                {/* <div className="flex flex-col justify-start items-start gap-y-5">
                  <Image
                    src={testThumbnail}
                    alt="testThumbnail"
                    className="w-full h-full rounded-md"
                  />
                </div> */}

                <div className="mt-16 flex justify-end items-center w-full gap-x-5">
                  <button className="font-medium  whitespace-nowrap transition duration-150 ease-in-out text-[#1b1a1a]  group flex justify-start items-center gap-1 bg-[#436fff] hover:bg-[#4356e3] border border-blue-800 px-2 py-1 rounded-lg">
                    Ask for approval
                  </button>
                </div>
              </div>
            </div>
          </div>
        </HighlighterItem>
      </div>
    </div>
  );
};

export default Modal;
