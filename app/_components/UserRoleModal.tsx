"use client";
import React, { useEffect, useState } from "react";
import CreatorRoleFields from "./CreatorRoleFields";
import EditorRoleFields from "./EditorRoleFields";
import { verify } from "crypto";
import useCreateRoom from "@/hooks/useCreateRoom";
import { useRouter } from "next/navigation";

const UserRoleModal = () => {
  const router  = useRouter();
  const [workSpaceName, setWorkSpaceName] = useState("");
  const {mutate,data}  = useCreateRoom();
  const createWorkSpace = ()=>{
    mutate(workSpaceName);
  }
  useEffect(()=>{
    if(data && data.createRoom?.id){
      router.push("/dashboard/drafts?invite_member=true")
    }
  },[data])
  return (
    <div className="flex flex-col justify-start items-start rounded-xl bg-white px-5 py-8 w-[75%] sm:w-[45%] md:w-[35%] gap-y-5">
      <div className="w-full flex flex-col justify-start items-start gap-y-1">
        <p className="text-lg font-semibold mb-5">Create workspace</p>
        {/* <label className="text-[#302f2f] text-sm font-medium w-full">
          Select your role
        </label>
        <select
          name=""
          id=""
          className="border border-[#d8d6d6] rounded-md py-2 outline-none text-sm w-[75%] px-2"
          onChange={(e) => setRole(e.target.value)}
          // disabled
        >
          <option value="" selected>
            Choose role
          </option>
          <option value="creator">Creator</option>
          <option value="editor">Editor</option>
        </select> */}
        <label htmlFor="" className="text-[#302f2f] text-sm font-medium w-full">
          Enter your workspace name{" "}
        </label>
        <input
          type="text"
          className={`text-sm rounded-md outline-none border border-1 border-[#d8d6d6] text-black px-2 w-full py-2 ${
            false ? "border-red-500" : ""
          }`}
          value={workSpaceName}
          onChange={(e)=>setWorkSpaceName(e.target.value)}
        />
      </div>
      {/* {role === "creator" ? (
        <CreatorRoleFields />
      ) : (
        role === "editor" && <EditorRoleFields />
      )} */}

      <button
        className="rounded-md bg-black font-medium text-xs py-2 text-white w-full disabled:bg-[#212121] hover:disabled:cursor-not-allowed"
        onClick={createWorkSpace}
      >
        CREATE WORKSPACE
      </button>
    </div>
  );
};

export default UserRoleModal;
