"use client";
import React from "react";
import { Particles } from "../_components/landing/particles";
import AuthenticationModal from "../_components/AuthenticationModal";

const Signup = () => {
  return (
    <section className="text-black">
      <Particles className="absolute inset-0 -z-10 " />
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6 flex justify-center items-center">
        <AuthenticationModal />
      </div>
    </section>
  );
};

export default Signup;
