import React from "react";
import { Footer } from "../components/footer/Footer";
import Menu from "../components/menu";

export const Layout = ({ children }) => {
  return (
    <div>
      <Menu />
      {children}
      <Footer />
    </div>
  );
};
