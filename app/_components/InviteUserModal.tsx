"use client";
import useInviteUser from "@/hooks/useInvite";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const InviteUserModal = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const {mutate,data} = useInviteUser();
  const inviteUser = () => {
    mutate({ workspaceId: "e357af87-699e-4357-b7fe-1902328f028a",inviteEmail:email });
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[4.5px] flex justify-center items-center z-40 transition-all ease-in-out"
      onClick={() => {
        // setOpenCreateModal(false);
      }}
    >
      <div className="flex flex-col justify-start items-start rounded-xl bg-white px-5 py-8 w-[25%] sm:w-[45%] md:w-[25%] gap-y-5">
        <div className="w-full flex flex-col justify-start items-start gap-y-1">
          <p className="text-black text-lg font-semibold mb-2">
            Invite a member
          </p>
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
          <span className="text-sm font-medium text-black">
            To invite people to your workspace send them an email.
          </span>
          <label
            htmlFor=""
            className="text-[#302f2f] text-sm font-medium w-full"
          >
            Email
          </label>
          <input
            type="text"
            className={`text-sm rounded-md outline-none border border-1 border-[#d8d6d6] text-black px-2 w-full py-2 ${
              false ? "border-red-500" : ""
            }`}
            placeholder="your-coworker@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* {role === "creator" ? (
        <CreatorRoleFields />
      ) : (
        role === "editor" && <EditorRoleFields />
      )} */}

        <div className="flex justify-start items-center w-full gap-x-5">
          <button
            className="rounded-md border border-black bg-white font-medium text-xs py-2 text-black w-full disabled:bg-[#212121] hover:disabled:cursor-not-allowed"
            onClick={() => {
              router.push("/dashboard/drafts");
            }}
          >
            Skip for now
          </button>
          <button
            className="rounded-md bg-black font-medium text-xs py-2 text-white w-full disabled:bg-[#212121] hover:disabled:cursor-not-allowed"
            onClick={inviteUser}
          >
            Invite
          </button>
        </div>
      </div>
    </div>
  );
};

export default InviteUserModal;
