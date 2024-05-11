"use client";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import logo from "@/public/Component 1.svg";
import { RiDraftLine } from "react-icons/ri";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { IoCloudUploadSharp } from "react-icons/io5";
import Modal from "./Modal";
const sideNavTabs = [
  {
    tabName: "My Drafts",
    tabLink: "/dashboard/drafts",
    icon: <RiDraftLine size={25} />,
  },
  {
    tabName: "Scheduled videos",
    tabLink: "/dashboard/scheduled",
    icon: <FaRegCalendarCheck size={25} />,
  },
  {
    tabName: "Published videos",
    tabLink: "/dashboard/published",
    icon: <MdOutlinePublishedWithChanges size={25} />,
  },
];
const SideNav = () => {
  const pathName = usePathname();
  const router = useRouter();
  const [collapse, setCollapse] = useState(true);
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [activeTab, setActiveTab] = useState<
    "Drafts" | "Scheduled" | "Published"
  >("Drafts");
  useEffect(() => {
    if (pathName.includes("drafts")) {
      setActiveTab("Drafts");
    } else if (pathName.includes("scheduled")) {
      setActiveTab("Scheduled");
    } else {
      setActiveTab("Published");
    }
  });
  return (
    <div className="w-full col-span-1 h-full">
      <div
        className={`px-2 h-full bg-black flex flex-col items-center justify-start transition-all ease-in ${
          collapse ? "w-[70px]" : "w-full px-4"
        } overflow-hidden`}
        onMouseEnter={() => setCollapse(false)}
        onMouseLeave={() => setCollapse(true)}
      >
        <div
          className={`flex w-full items-center gap-x-4 flex-nowrap py-4 ${
            collapse ? "justify-center" : "justify-start"
          }`}
        >
          <Image src={logo} alt="Logo" width={30} height={30} />
          <p
            className={`text-xl font-semibold transition-all ease-out delay-500 ${
              collapse ? "hidden" : "flex"
            }`}
          >
            StreamLine
          </p>
        </div>
        <div className="w-full">
          <hr className="border-t border-t-[#303030] w-full rounded-lg" />
        </div>
        <div
          className={`flex flex-col justify-start items-start w-full mt-10 gap-y-10 ${
            collapse ? "items-center" : "items-start"
          }`}
        >
          <div
            className={`cursor-pointer flex items-center gap-x-3 p-2 bg-[#68A2F9] rounded-lg flex-nowrap overflow-hidden ${
              collapse ? "justify-center" : "justify-start  pl-2 w-full"
            }`}
            onClick={() => {
              setOpenCreateModal(true);
            }}
          >
            <span>
              <IoCloudUploadSharp size={25} />
            </span>
            <p
              className={`transition-all ease-out delay-500 whitespace-nowrap ${
                collapse ? "hidden" : "flex flex-nowrap"
              }`}
            >
              Upload a video
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-center w-full mt-10 gap-y-10">
          {sideNavTabs.map((tab) => {
            return (
              <div
                className={`p-2 hover:bg-[#68a2f9a2] rounded-lg cursor-pointer w-full flex items-center gap-x-3 flex-nowrap overflow-hidden ${
                  collapse ? "justify-center" : "justify-start pl-2"
                }`}
                key={tab.tabName}
                onClick={() => {
                  router.push(tab.tabLink);
                }}
              >
                <span>{tab.icon}</span>
                <div
                  className={`transition-all ease-out delay-500 whitespace-nowrap ${
                    collapse ? "hidden opacity-0" : "block"
                  }`}
                >
                  {tab.tabName}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {openCreateModal && <Modal setOpenCreateModal={setOpenCreateModal} />}
    </div>
  );
};

export default SideNav;
