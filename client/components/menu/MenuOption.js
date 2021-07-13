import React from "react";
import Link from "next/link";
import { Carrito } from "../iconos/Carrito";
import { CerrarSesion } from "../iconos/CerrarSesion";
import { Compras } from "../iconos/Compras";
import { EntradaLogin } from "../iconos/EntradaLogin";
import { Preferidos } from "../iconos/Preferidos";
import { Usuario } from "../iconos/Usuario";

export const MenuOption = ({ onShowModal, user, logout }) => {
  return (
    <div>
      {user ? (
        <div className="flex flex-row">
          {/* ACQUISTI */}
          <Link href="/orders">
            <a>
              <Compras />
            </a>
          </Link>
          {/* Preferiti */}
          <Link href="/wishlist">
            <a>
              <Preferidos />
            </a>
          </Link>

          {/* CARRITO */}
          <Link href="/cart">
            <a>
              <Carrito />
            </a>
          </Link>
          {/* USUARIO */}
          <Link href="/account">
            <a>
              <Usuario user={user} />
            </a>
          </Link>
          {/* icono LOGOUT */}
          <CerrarSesion logout={logout} />
        </div>
      ) : (
        <EntradaLogin onShowModal={onShowModal} />
      )}
    </div>
  );
};
