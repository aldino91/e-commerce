import React from "react";
import useAuth from "../../hooks/useAuth";
import { getMeApi } from "../../api/user";

export const Logout = (props) => {
  const { user } = props;
  const { logout } = useAuth();

  return (
    <>
      <div className="flex flex-row">
        {/* ACQUISTI */}
        <div className="bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:w-7 md:h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        {/* Preferiti */}
        <div className="bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:w-7 md:h-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>

        {/* CARRITO */}
        <div className="bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:w-7 md:h-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </div>
        {/* USUARIO */}
        <div className="flex flex-row bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:w-7 md:h-7"
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
          <p>nome</p>
        </div>
        {/* icono LOGOUT */}
        <div className="bg-white text-black hover:bg-black hover:text-white border rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 md:w-7 md:h-7"
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
      </div>
    </>
  );
};
