import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import { toast } from "react-toastify";
import {
  getProductsCart,
  addProductsCart,
  countProductCart,
  removeProductCart,
  removeAllProductsCart,
} from "../api/cart";
import jwtDecode from "jwt-decode";
import { setToken, getToken, removeToken } from "../api/token";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const [totalProductCart, setTotalProductCart] = useState(0);
  const [reloadCart, setReloadCart] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  useEffect(() => {
    setTotalProductCart(countProductCart());
    setReloadCart(false);
  }, [reloadCart, auth]);

  const login = (token) => {
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };

  const addProduct = (product) => {
    const token = getToken();
    if (token) {
      addProductsCart(product);
      setReloadCart(true);
    } else {
      toast.warning("Para comprar un juego tienes que iniciar sesion");
    }
  };

  const removeProduct = (product) => {
    removeProductCart(product);
    setReloadCart(true);
  };

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth]
  );

  const cartData = useMemo(
    () => ({
      productsCart: totalProductCart,
      addProductsCart: (product) => addProduct(product),
      getProductsCart: getProductsCart,
      removeProductCart: (product) => removeProduct(product),
      romoveAllProductsCart: removeAllProductsCart,
    }),
    [totalProductCart]
  );

  if (auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <CartContext.Provider value={cartData}>
        <Component {...pageProps} />
        <ToastContainer
          position={"top-right"}
          autoClose={5000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
      </CartContext.Provider>
    </AuthContext.Provider>
  );
}

export default MyApp;
