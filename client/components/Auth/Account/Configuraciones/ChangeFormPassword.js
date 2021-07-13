import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { updatePasswordApi } from "../../../../api/user";
import { Loading } from "../../../iconos/Loading";

export const ChangeFormPassword = (props) => {
  const { user, logout } = props;
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await updatePasswordApi(
        user.id,
        formData.password,
        logout
      );
      if (!response) {
        toast.error("Error al actualizar la contrasena");
      } else {
        logout();
      }
      setLoading(false);
    },
  });
  return (
    <div className="pb-8 md:p-8 ">
      <div className="flex flex-col w-full h-full py-5 items-center border border-black rounded-md bg-white">
        <h2 className="text-3xl pb-4">Cambio Password</h2>
        <form
          className="w-11/12  md:w-3/4 flex flex-col items-center"
          onSubmit={formik.handleSubmit}
        >
          <div className="flex flex-row  items-start w-full  my-5 space-x-3">
            <input
              type="password"
              name="password"
              placeholder="Nuova password"
              className="w-full focus:ring-gray-500 focus:border-gray-500 block shadow-sm  border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.password}
              error={formik.errors.password}
            />

            <input
              type="password"
              name="repeatPassword"
              placeholder="Conferma Password"
              className="w-full focus:ring-gray-500 focus:border-gray-500 block shadow-sm  border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              error={formik.errors.repeatPassword}
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
    password: "",
    repeatPassword: "",
  };
}

function validationSchema() {
  return {
    password: Yup.string()
      .required("required")
      .oneOf([Yup.ref("repeatPassword")], "La password no es igual"),
    repeatPassword: Yup.string()
      .required("required")
      .oneOf([Yup.ref("password")], "La password no es igual"),
  };
}
