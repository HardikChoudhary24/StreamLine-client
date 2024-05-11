import { useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed top-0 right-0 w-full px-[6.25rem] bg-transparent flex justify-between items-center py-3">
      <p className=" font-extrabold tracking-tight text-transparent text-3xl lg:text-4xl  bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60">
        Streamline
      </p>
      <button
        className="text-base border-none outline-none text-zinc-300 hover:text-zinc-100"
        onClick={() => router.push("/sign-in")}
      >
        Sign in
      </button>
    </div>
  );
};

export default Navbar;
