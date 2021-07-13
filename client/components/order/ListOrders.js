import React, { useState } from "react";
import Link from "next/link";
import moment from "moment";
import "moment/locale/es";
import { BasicModal } from "../Modal/BasicModal";
import Ojo from "../iconos/Ojo";

export default function ListOrders({ order }) {
  const { lavori, createdAt, addressShipping, totalPayment } = order;
  const { title, poster, url } = lavori;

  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="w-full bg-white rounded-md flex flex-row justify-between">
        <div className="w-5/6 flex flex-row">
          <Link href={`/${url}`}>
            <a>
              <img
                src={poster.url}
                alt={poster.title}
                width={80}
                className="rounded-md shadow-none hover:shadow-xl hover:opacity-60 ease-linear transition-all duration-150"
              />
            </a>
          </Link>
          <div className="flex flex-col justify-between pl-2">
            <div className="text-lg text-green-600">{title}</div>
            <div>{totalPayment} €</div>
            <div>
              {moment(createdAt).format("L")} - {moment(createdAt).format("LT")}
            </div>
          </div>
        </div>
        <div className="w-1/6 h-6 flex flex-row justify-end ">
          <button onClick={() => setShowModal(true)}>
            <Ojo />
          </button>
        </div>
      </div>
      <AddressModal
        showModal={showModal}
        setShowModal={setShowModal}
        addressShipping={addressShipping}
        title={title}
      />
    </>
  );
}

function AddressModal({ showModal, setShowModal, addressShipping, title }) {
  return (
    <BasicModal
      showModal={showModal}
      setShowModal={setShowModal}
      title={title}
      addressShipping={addressShipping}
    >
      <div className="p-3">
        <div className="border-b-2 border-black">
          <h1>El Pedido se ha enviado a la siguente direccion:</h1>
        </div>
        <h3>Name: {addressShipping.name}</h3>
        <h3>Address: {addressShipping.address}</h3>
        <h3>
          State:
          {addressShipping.state}, {addressShipping.city}
        </h3>
        <h3>Postal Code: {addressShipping.postalCode}</h3>
        <h3>Phone: {addressShipping.phone}</h3>
      </div>
    </BasicModal>
  );
}
