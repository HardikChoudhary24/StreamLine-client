import React from "react";

const EditorRoleFields = () => {
  return (
    <div>
      <label htmlFor="" className="text-[#302f2f] text-sm font-medium w-full">
        Enter your invite code
      </label>
      <input
        type="text"
        className={`text-sm rounded-md outline-none border border-1 border-[#d8d6d6] text-black px-2 w-full py-2 ${
          false ? "border-red-500" : ""
        }`}
      />
    </div>
  );
};

export default EditorRoleFields;
