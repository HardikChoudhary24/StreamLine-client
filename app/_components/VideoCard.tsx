import React from "react";
import testThumbnail from "@/public/testThumbnail.jpeg";
import Image from "next/image";
import CustomButton from "./CustomButton";

const VideoCard = () => {
  return (
    <div className="bg-[#f2f1f1] rounded-lg col-span-1 flex flex-col justify-start items-start overflow-hidden">
      <div className="w-full">
        <Image
          src={testThumbnail}
          alt="testThumbnail"
          className="w-full h-full"
        />
      </div>
      <div className="px-5 py-4">
        <h3 className="text-lg font-semibold leading-8 text-black">
          How to create thumbnails
        </h3>
        <p className="mt-4 text-sm leading-6 text-[#515050] ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quo
          nemo molestias. Officiis, beatae! Impedit molestiae deserunt
          praesentium, similique at eius non quas itaque. Cupiditate commodi
          facilis culpa illo exercitationem.
        </p>
      </div>
      <div className="px-5 border-t w-full py-3 bg-white flex justify-end items-center gap-x-4">
        <CustomButton>Approve</CustomButton>
        <CustomButton
          className={"bg-white text-white border "}
        >
          Edit
        </CustomButton>
      </div>
    </div>
  );
};

export default VideoCard;
