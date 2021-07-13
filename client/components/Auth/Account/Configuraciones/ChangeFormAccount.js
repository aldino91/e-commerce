import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updateNameApi } from "../../../../api/user";
import { Loading } from "../../../iconos/Loading";

export const ChangeFormAccount = ({ user, logout, setReloadUser }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues(user.name, user.lastname),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateNameApi(user.id, formData, logout);
      if (!response || response?.statusCode === 400) {
        toast.error("Error al actualizar el apellido y el nombre");
      } else {
        setReloadUser(true);
        toast.success("Nombre actualizado correctamente");
        formik.handleReset();
      }
      setLoading(false);
    },
  });

  return (
    <div className="p-0 md:p-8">
      <div className="flex flex-col w-full h-full items-center border border-black rounded-md py-5 bg-white">
        <h2 className="text-3xl pb-4">Cambio Nome</h2>
        <form
          className="w-11/12 md:w-3/4 flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-row  items-start w-full  my-5 space-x-3">
            <input
              type="text"
              name="name"
              placeholder={user.name}
              className="w-3/4 focus:ring-gray-500 focus:border-gray-500 block shadow-sm  border-gray-300 rounded-md"
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <input
              type="text"
              name="lastname"
              placeholder={user.lastname}
              className="w-3/4 focus:ring-gray-500 focus:border-gray-500 block shadow-sm  border-gray-300 rounded-md"
              onChange={formik.handleChange}
              error={formik.errors.lastname}
            />
          </div>
          <div className="w-2/4 flex flex-row justify-between pt-4 border-solid border-blueGray-200 rounded-b">
            <button
              className="w-full flex flex-row justify-center bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
              type="submit"
            >
              {loading ? <Loading /> : "Change"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

function initialValues(name, lastname) {
  return {
    name: name || "",
    lastname: lastname || "",
  };
}

function validationSchema() {
  return {
    name: Yup.string().required(true),
    lastname: Yup.string().required(true),
  };
}
