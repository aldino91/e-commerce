import React from "react";

export const EntradaLogin = ({ onShowModal }) => {
  return (
    <div
      onClick={onShowModal}
      className="bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150 px-1"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};
