import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";
import { createAddressApi, updateAddressApi } from "../../../../api/Address";
import { Loading } from "../../../iconos/Loading";
import { Cerrar } from "../../../iconos/Cerrar";

export const ModalDirecciones = (props) => {
  const { setShowModal, title, user, setReloadAddress, newAddress, address } =
    props;
  const { auth, logout } = useAuth();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(address),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      newAddress ? createAddress(formData) : updateAddress(formData);
    },
  });

  const createAddress = async (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      users_permissions_user: auth.idUser,
    };
    const response = await createAddressApi(formDataTemp, logout);
    if (!response) {
      toast.warning("Error al crear la Direccion");
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadAddress(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  const updateAddress = (formData) => {
    setLoading(true);
    const formDataTemp = {
      ...formData,
      user: auth.idUser,
    };
    const response = updateAddressApi(address.id, formDataTemp, logout);
    if (!response) {
      toast.warning("Error al actualizar la direccion");
      setLoading(false);
    } else {
      formik.resetForm();
      setReloadAddress(true);
      setLoading(false);
      setShowModal(false);
    }
  };

  return (
    <div className="w-full">
      {/*body*/}
      <form onSubmit={formik.handleSubmit}>
        <div className="relative p-2 flex-auto border-2 border-blueGray-200 rounded-b space-y-3">
          <div>
            <label htmlFor="title"> Titulo Direccion</label>
            <input
              type="text"
              name="title"
              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Titulo Direccion"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              error={formik.errors.title}
            />
          </div>
          <div className="flex flex-row w-full justify-between space-x-2">
            <div className="flex flex-col w-full">
              <label htmlFor="name">Nome e Cognome</label>
              <input
                type="text"
                name="name"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Nome e Cognome"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                error={formik.errors.name}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="address">Direccion</label>
              <input
                type="text"
                name="address"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Direccion"
                id="address"
                onChange={formik.handleChange}
                value={formik.values.address}
                error={formik.errors.address}
              />
            </div>
          </div>
          <div className="flex flex-row w-full justify-between space-x-2">
            <div className="flex flex-col w-full">
              <label htmlFor="city">Ciudad</label>
              <input
                type="text"
                name="city"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Ciudad"
                id="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                error={formik.errors.city}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="state">Estado/Provincia</label>
              <input
                type="text"
                name="state"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Estado/Provincia"
                id="state"
                onChange={formik.handleChange}
                value={formik.values.state}
                error={formik.errors.state}
              />
            </div>
          </div>

          <div className="flex flex-row w-full justify-between space-x-2">
            <div className="flex flex-col w-full">
              <label htmlFor="postalCode">Codigo Postal</label>
              <input
                type="text"
                name="postalCode"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Codigo Postal"
                id="postalCode"
                onChange={formik.handleChange}
                value={formik.values.postalCode}
                error={formik.errors.postalCode}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                placeholder="Numero de telefono"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                error={formik.errors.phone}
              />
            </div>
          </div>

          <div className="w-full flex flex-row items-center pt-5 ">
            <div className="w-full flex flex-row justify-between pt-4 border-solid border-blueGray-200 rounded-b">
              <button
                className="w-full flex flex-row justify-center bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="submit"
              >
                {loading ? (
                  <Loading />
                ) : newAddress ? (
                  "Crear direccion"
                ) : (
                  "Actualizar Direccion"
                )}
              </button>
            </div>
          </div>
          {/*footer*/}
        </div>
      </form>
    </div>
  );
};

function initialValues(address) {
  return {
    title: address?.title || "",
    name: address?.name || "",
    address: address?.address || "",
    city: address?.city || "",
    state: address?.state || "",
    postalCode: address?.postalCode || "",
    phone: address?.phone || "",
  };
}

function validationSchema() {
  return {
    title: Yup.string().required(true),
    name: Yup.string().required(true),
    address: Yup.string().required(true),
    city: Yup.string().required(true),
    state: Yup.string().required(true),
    postalCode: Yup.string().required(true),
    phone: Yup.string().required(true),
  };
}
