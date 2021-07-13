import React from "react";
import { ChangeFormAccount } from "./ChangeFormAccount";
import { ChangeFormEmail } from "./ChangeFormEmail";
import { ChangeFormPassword } from "./ChangeFormPassword";

export const Configuraciones = ({ user, logout, setReloadUser }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-black text-white w-40 text-center border rounded-t-md">
        <h2>Configuraciones</h2>
      </div>
      <div className="bg-gray-100">
        <ChangeFormAccount
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
        <ChangeFormEmail
          user={user}
          logout={logout}
          setReloadUser={setReloadUser}
        />
        <ChangeFormPassword user={user} logout={logout} />
      </div>
    </div>
  );
};
