import React, { useState, useEffect } from "react";
import { size, map } from "lodash";

import { getAddressesApi, deleteAddressApi } from "../../../../api/Address";
import useAuth from "../../../../hooks/useAuth";
import { Loading } from "../../../iconos/Loading";

export const ListAddress = ({ reloadAddress, setReloadAddress, openModal }) => {
  const [addresses, setAddresses] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getAddressesApi(auth.idUser, logout);
      setAddresses(response || []);
      setReloadAddress(false);
    })();
  }, [reloadAddress]);
  if (!addresses) return null;
  return (
    <div className="px-1 w-full">
      {size(addresses) === 0 ? (
        <h3>No hay ninguna direccion creada</h3>
      ) : (
        <div className="w-full  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {map(addresses, (address) => (
            <div className="w-full " key={address.id}>
              <Address
                address={address}
                logout={logout}
                setReloadAddress={setReloadAddress}
                openModal={openModal}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

function Address({ address, logout, setReloadAddress, openModal }) {
  const [loadingDelete, setLoadingDelete] = useState(false);
  const deleteAddress = async () => {
    setLoadingDelete(true);
    const response = await deleteAddressApi(address._id, logout);
    setLoadingDelete(false);
    if (response) setReloadAddress(true);
  };
  return (
    <div className="w-full border border-black rounded-md px-1">
      <div className="bg-white text-black rounded-t-md text-center border-b-2 border-black">
        <p>{address.title}</p>
      </div>

      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>{address.state}</p>
      <p>
        {address.city},{address.postalCode}
      </p>
      <p>{address.phone}</p>

      <div className="flex flex-row justify-around py-2 space-x-1">
        <button
          onClick={() => openModal(`Editar: ${address.title}`, address)}
          className="w-full flex flex-row justify-center bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="submit"
        >
          {"Editar"}
        </button>
        <button
          onClick={deleteAddress}
          className="w-full flex flex-row justify-center bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="submit"
        >
          {loadingDelete ? <Loading /> : "Eliminar"}
        </button>
      </div>
    </div>
  );
}
