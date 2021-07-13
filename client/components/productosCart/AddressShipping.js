import React, { useState, useEffect } from "react";
import { map, size } from "lodash";
import Link from "next/link";
import { getAddressesApi } from "../../api/Address";
import useAuth from "../../hooks/useAuth";

export default function AdddresShipping({ setAddress }) {
  const [addresses, setAddresses] = useState(null);
  const { auth, logout } = useAuth();
  const [addressActive, setAddressActive] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getAddressesApi(auth.idUser, logout);
      setAddresses(response || []);
    })();
  }, []);
  return (
    <div>
      <div className=" w-52 px-5 border border-black rounded-t-md bg-black text-white mt-7 text-center">
        <h3 className="">Direcciones de envio</h3>
      </div>

      <div className="px-3 bg-gray-200">
        {size(addresses) === 0 ? (
          <h2>
            No hay ninguna direccione creada{" "}
            <Link href="/account">
              <a className="text-green-700">Crear Direccion</a>
            </Link>
          </h2>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-2 py-4">
            {map(addresses, (address) => (
              <button
                className="border border-black rounded-md mt-0 mb-3 bg-white focus:bg-red-200 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 focus:outline-none"
                key={address.id}
              >
                <Address
                  address={address}
                  addressActive={addressActive}
                  setAddressActive={setAddressActive}
                  setAddress={setAddress}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Address({ address, addressActive, setAddressActive, setAddress }) {
  const changeAddress = () => {
    setAddressActive(address._id);
    setAddress(address);
  };
  return (
    <div className="p-1" onClick={changeAddress}>
      <div className="border-b-2 border-black text-center">
        <p>{address.title}</p>
      </div>
      <p>{address.name}</p>
      <p>{address.address}</p>
      <p>{address.state}</p>
      <p>
        {address.city}, {address.postalCode}
      </p>
      <p>{address.phone}</p>
    </div>
  );
}
