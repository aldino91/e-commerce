import React, { useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import { registerApi } from "../../api/user";
import { Loading } from "../iconos/Loading";

export const FormRegister = ({ showLoginForm }) => {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (formData) => {
      setLoading(true);
      const response = await registerApi(formData);
      if (response?.jwt) {
        toast.success("Muy bien te has registrado :)");
        formik.resetForm();
      } else {
        toast.error("Algo ha ido mal :(");
      }
      setLoading(false);
      showLoginForm();
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="relative p-6 flex-auto border-2 border-blueGray-200 rounded-b">
          <div>
            <input
              type="text"
              name="name"
              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.name}
              id="name"
            />
          </div>
          <div>
            <input
              type="text"
              name="lastname"
              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
              id="lastname"
            />
          </div>
          <div>
            <input
              type="text"
              name="username"
              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Username"
              onChange={formik.handleChange}
              value={formik.values.username}
              id="username"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              onChange={formik.handleChange}
              value={formik.values.email}
              id="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              className="mt-1 focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              id="password"
            />
          </div>

          <div className="flex items-center pt-5 ">
            <button
              className="flex flex-row justify-center w-full  bg-black text-white hover:text-black hover:bg-white font-bold text-sm px-6 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 relative"
              type="submit"
            >
              {loading ? <Loading /> : "Registrati"}
            </button>
          </div>
        </div>
      </form>

      <div className="flex justify-around p-2 border-t border-2 border-blueGray-200 rounded-b">
        <button
          className="w-2/4 bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
          type="button"
          onClick={showLoginForm}
        >
          Inicia sesion
        </button>
      </div>
    </div>
  );
};
