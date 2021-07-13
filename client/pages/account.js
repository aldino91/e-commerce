import React, { useState, useEffect } from "react";
import { Layout } from "../layout/Layout";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";
import { getMeApi } from "../api/user";
import Seo from "../components/Seo";

import { Configuraciones } from "../components/Auth/Account/Configuraciones/Configuraciones";
import { Direcciones } from "../components/Auth/Account/Direcciones/Direcciones";

export default function Account() {
  const [user, setUser] = useState(undefined);
  const { auth, logout, setReloadUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getMeApi(logout);
      setUser(response || null);
    })();
  }, [auth]);

  if (user === undefined) return null;
  if (!auth && !user) {
    router.replace("/");
    return null;
  }

  return (
    <>
      <Layout>
        <Seo />
        <div className="flex flex-col">
          <Configuraciones
            user={user}
            logout={logout}
            setReloadUser={setReloadUser}
          />

          <Direcciones user={user} />
        </div>
      </Layout>
      ;
    </>
  );
}
