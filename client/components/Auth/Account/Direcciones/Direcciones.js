import React, { useState } from "react";
import { BasicModal } from "../../../Modal/BasicModal";
import { ListAddress } from "./ListAddress";
import { ModalDirecciones } from "./ModalDirecciones";

export const Direcciones = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [formAddress, setFormAddress] = useState(null);
  const [reloadAddress, setReloadAddress] = useState(false);

  const openModal = (title, address) => {
    setTitleModal(title);
    setFormAddress(
      <ModalDirecciones
        title={titleModal}
        setShowModal={setShowModal}
        setReloadAddress={setReloadAddress}
        newAddress={address ? false : true}
        address={address || null}
      />
    );
    setShowModal(true);
  };
  return (
    <div className="bg-gray-100">
      <div className="flex flex-row justify-between">
        <div className="bg-black text-white w-40 text-center border rounded-t-md">
          <h2 className="">Direcciones</h2>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black hover:text-white bg-white hover:bg-black rounded-md ease-linear transition-all duration-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => openModal("Nueva Direccion")}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>
      </div>
      <div className="p-0 md:p-8">
        <div className="flex flex-col w-full h-full items-center border border-black rounded-md py-5 bg-white">
          <ListAddress
            reloadAddress={reloadAddress}
            setReloadAddress={setReloadAddress}
            openModal={openModal}
          />
        </div>
      </div>
      <BasicModal
        showModal={showModal}
        setShowModal={setShowModal}
        title={titleModal}
      >
        {formAddress}
      </BasicModal>
    </div>
  );
};
