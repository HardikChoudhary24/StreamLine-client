"use client";

import { Particles } from "./particles";
import ReactWrapBalancer from "react-wrap-balancer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10 " />

        <Navbar />

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down"></div>
            <h1
              className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl  bg-clip-text bg-gradient-to-r from-red-100/60 via-red-100 to-red-100/60"
              data-aos="fade-down"
            >
              <ReactWrapBalancer>
                Cut the clutter upload smarter
              </ReactWrapBalancer>
            </h1>
            <p
              className="mb-8 text-lg text-zinc-300"
              data-aos="fade-down"
              data-aos-delay="200"
            >
              Your videos deserve a streamlined journey
            </p>
            <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none  sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link
                className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                href={"/sign-up"}
              >
                Get Started{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>

              {/* <Link
                className="w-full transition duration-150 ease-in-out bg-opacity-25 text-zinc-200 hover:text-white bg-zinc-900 hover:bg-opacity-30"
                href="https://github.com/chronark/highstorm"
                target="_blank"
              >
                Star on GitHub
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
