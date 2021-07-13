import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { updateEmailApi } from "../../../../api/user";
import { toast } from "react-toastify";
import { Loading } from "../../../iconos/Loading";

export const ChangeFormEmail = (props) => {
  const { user, logout, setReloadUser } = props;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updateEmailApi(user.id, formData.email, logout);
      console.log(response);
      if (!response || response?.statusCode === 400) {
        toast.error("Esta email ya existe");
      } else {
        setReloadUser(true);
        toast.success("El email se ha actualizado correctamente");
        formik.handleReset();
      }
      setLoading(false);
    },
  });
  return (
    <div className="p-0 md:p-8">
      <div className="flex flex-col w-full h-full my-5 items-center border border-black rounded-md py-5 bg-white">
        <h2 className="text-3xl pb-4">Cambio Email</h2>
        <p>Email Actual: {user.email}</p>
        <form
          className="w-11/12  md:w-3/4 flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-row  items-start w-full  my-5 space-x-3">
            <input
              type="email"
              name="email"
              placeholder="Nuova Email"
              className="w-full focus:ring-gray-500 focus:border-gray-500 block shadow-sm  border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
            />

            <input
              type="email"
              name="repeatEmail"
              placeholder="Confirma Email"
              className="w-full focus:ring-gray-500 focus:border-gray-500 block shadow-sm  border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.repeatEmail}
              error={formik.errors.repeatEmail}
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

function initialValues() {
  return {
    email: "",
    repeatEmail: "",
  };
}

function validationSchema() {
  return {
    email: Yup.string()
      .email(true)
      .required()
      .oneOf([Yup.ref("repeatEmail")], "El email no es el mismo"),
    repeatEmail: Yup.string()
      .email(true)
      .required()
      .oneOf([Yup.ref("email")], "El email no es el mismo"),
  };
}
