import React from "react";

export const Usuario = ({ user }) => {
  return (
    <div className="flex items-center bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
      <p>{user.name}</p>
    </div>
  );
};
