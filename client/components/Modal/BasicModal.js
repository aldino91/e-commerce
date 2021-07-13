import React from "react";

export const BasicModal = ({ showModal, setShowModal, title, children }) => {
  return (
    <>
      {showModal ? (
        <div className="w-full h-screen justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-30">
          <div className="relative w-4/5 md:w-3/5 lg:w-2/5 my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex flex-row  justify-center p-5 border-2 border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">{title}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 absolute top-1 right-1 text-black hover:text-white bg-white hover:bg-black rounded-md ease-linear transition-all duration-100"
                  onClick={() => setShowModal(false)}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              {children}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
