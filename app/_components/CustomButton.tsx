import React from 'react'

const CustomButton = ({children,className}:any) => {
  return (
    <button
      className={`${className} text-base font-semibold rounded-md px-2 py-1 bg-blue-600 hover:bg-maincolor `}
    >
      {children}
    </button>
  );
}

export default CustomButton
