"use client";

import { usePathname } from "next/navigation";
import FileSectionLayout from "../_components/FileSectionLayout";
import Modal from "../_components/Modal";
import Navbar from "../_components/Navbar";
import SideNav from "../_components/SideNav";
import { Particles } from "../_components/landing/particles";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  return (
    <>
      {pathName !== "/dashboard/user-role" && (
        <div className="h-screen w-screen bg-[#181717] grid lg:grid-cols-sectionLg xl:grid-cols-sectionXl 2xl:grid-cols-section2Xl">
          <SideNav />
          {children}
        </div>
      )}
      <div className="w-full h-full">{children}</div>
    </>
  );
}
