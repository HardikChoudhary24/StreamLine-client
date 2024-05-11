import React from "react";
import { Particles } from "../../_components/landing/particles";
import UserRoleModal from "../../_components/UserRoleModal";

const page = () => {
  return (
    <section className="text-black">
      <Particles className="absolute inset-0 -z-10 " />
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6 flex justify-center items-center">
        <UserRoleModal />
      </div>
    </section>
  );
};

export default page;
