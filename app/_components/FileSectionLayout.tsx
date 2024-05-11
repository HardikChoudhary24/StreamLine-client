import React, { useState } from "react";
import { BsGrid } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import { IoCloudUploadOutline } from "react-icons/io5";
import Modal from "./Modal";

const FileSectionLayout = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="w-full flex flex-col justify-start items-start mb-8">
      <div className="flex justify-between items-center pr-5 w-full ">
        <p className="text-zinc-300 text-2xl font-semibold leading-8">
          Your Videos
        </p>
        <div>
          <button
            className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group gap-x-2"
            onClick={() => {setOpenModal(true)}}
          >
            Upload
            <IoCloudUploadOutline />
          </button>
        </div>
      </div>
      {openModal && <Modal />}
      {/* <div className="mt-8">
        <div>
          <div className="flex justify-start items-center text-black bg-[#f5f3f319] rounded-lg py-2 px-3 gap-x-2 bg-gradient-to-r from-white/40 via-slate-400 to-white/40 bg-zinc-900 ">
            <button className="flex justify-evenly items-center outline-none border-none gap-x-1 rounded-md px-2">
              <BsGrid size={20} />
              <p className="text-lg font-light ">Grid</p>
            </button>
            <button className="flex justify-evenly items-center outline-none border-none gap-x-1 bg-[#fdf6f69e] rounded-md px-2">
              <CiViewTable size={20} />
              <p className="text-lg font-light ">Table</p>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FileSectionLayout;
