import React from "react";

export const CerrarSesion = ({ logout }) => {
  return (
    <div className="flex items-center bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        onClick={logout}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    </div>
  );
};
