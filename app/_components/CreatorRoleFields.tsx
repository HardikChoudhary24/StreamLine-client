import React from 'react'

const CreatorRoleFields = () => {
  return (
    <div className="flex flex-col justify-start items-start w-full gap-y-4">
      <div className="flex flex-col justify-start items-start w-full">
        <label htmlFor="" className="text-[#302f2f] text-sm font-medium w-full">
          Enter your workspace name{" "}
        </label>
        <input
          type="text"
          className={`text-sm rounded-md outline-none border border-1 border-[#d8d6d6] text-black px-2 w-full py-2 ${
            false ? "border-red-500" : ""
          }`}
        />
      </div>
      {/* <button
        className="rounded-md bg-black font-medium text-xs py-2 text-white w-full"
        type="submit"
      >
        Generate invite code
      </button> */}
    </div>
  );
}

export default CreatorRoleFields
