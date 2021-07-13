import React from "react";

export const Cerrar = ({ setShowModal }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 absolute top-1 right-1 text-black hover:text-white bg-white hover:bg-black rounded-md ease-linear transition-all duration-100"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={() => setShowModal(false)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};
