import React, { useState } from "react";
import { FormLogin } from "./FormLogin";
import { FormRegister } from "./FormRegister";

export const Auth = ({ setTitleModal, onCloseModal }) => {
  const [showLogin, setShowLogin] = useState(true);

  const showLoginForm = () => {
    setTitleModal("Login"), setShowLogin(true);
  };
  const showRegisterForm = () => {
    setTitleModal("Registrati"), setShowLogin(false);
  };

  return showLogin ? (
    <FormLogin
      showRegisterForm={showRegisterForm}
      onCloseModal={onCloseModal}
    />
  ) : (
    <FormRegister showLoginForm={showLoginForm} />
  );
};
