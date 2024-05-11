"use client"
import React, { useEffect, useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";
import { BsGrid } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import VideoCard from "../../_components/VideoCard";
import { useSearchParams } from "next/navigation";
import InviteUserModal from "@/app/_components/InviteUserModal";
const Drafts = () => {
  const queryParams = useSearchParams();
  const [openInviteModal,setOpenInviteModal] = useState(false);
  useEffect(()=>{
    if(queryParams.get("invite_member")==="true"){
      setOpenInviteModal(true);
    }
    else{
      console.log("here")
      setOpenInviteModal(false)
    }
  },[queryParams])
  return (
    <div className="col-span-1 h-full w-full flex flex-col justify-start items-start pt-20 px-36 overflow-y-auto customScrollbar">
      <p className="text-white font-semibold text-3xl">Drafts</p>
      <div className="grid grid-cols-3 w-full gap-x-9 mt-10 gap-y-6">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
      {openInviteModal && <InviteUserModal />}
    </div>
  );
};

export default Drafts;
