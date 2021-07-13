import React, { useState } from "react";
import { useFormik } from "formik";
import { loginApi, resetPasswordApi } from "../../api/user";
import { Loading } from "../iconos/Loading";
import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";

import * as Yup from "yup";

export const FormLogin = ({ showRegisterForm, onCloseModal }) => {
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
    },
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await loginApi(formData);
      if (response?.jwt) {
        login(response.jwt);
        toast.success("Muy bien estas logeado");
        onCloseModal();
      } else {
        toast.error("Algo ha ido mal :(");
      }
      setLoading(false);
    },
  });

  const resetPassword = () => {
    formik.setErrors({});
    const validateEmail = Yup.string().email().required();
    if (validateEmail.isValidSync(formik.values.identifier)) {
      resetPasswordApi(formik.values.identifier);
    } else {
      formik.setErrors({ identifier: true });
    }
  };
  return (
    <div>
      <div className="relative p-6 flex-auto border-2 border-blueGray-200">
        <form onSubmit={formik.handleSubmit}>
          <div className="relative flex-auto space-y-2">
            <div>
              <input
                type="text"
                name="identifier"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm  border-gray-300 rounded-md"
                id="email"
                placeholder="Email"
                onChange={formik.handleChange}
                error={formik.errors.identifier}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm  border-gray-300 rounded-md"
                placeholder="Password"
                id="password"
                onChange={formik.handleChange}
                error={formik.errors.password}
              />
            </div>

            <div className="flex flex-row justify-between pt-4 border-solid border-blueGray-200 rounded-b">
              <button
                className=" bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                type="submit"
              >
                {loading ? <Loading /> : "Entrar"}
              </button>
            </div>
            <button
              type="button"
              className="  text-black  hover:text-gray-600 font-bold text-sm  outline-none focus:outline-none ease-linear transition-all duration-150"
              onClick={resetPassword}
            >
              Hai dimenticato la password?
            </button>
          </div>
        </form>
      </div>

      <div className="flex justify-around p-2 border-t border-2 border-blueGray-200 rounded-b">
        <button
          onClick={showRegisterForm}
          className="w-full bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
        >
          Registrati
        </button>
      </div>
    </div>
  );
};
