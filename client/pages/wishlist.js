import React, { useState, useEffect } from "react";
import { size, forEach } from "lodash";
import { getFavoriteApi } from "../api/Favorite";
import useAuth from "../hooks/useAuth";
import { ListaLavori } from "../components/menu/ListaLavori";
import { Loading } from "../components/iconos/Loading";
import Seo from "../components/Seo";

import { Layout } from "../layout/Layout";

export default function wishlist() {
  const [lavori, setLavori] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getFavoriteApi(auth.idUser, logout);
      if (size(response) > 0) {
        const lavoriList = [];
        forEach(response, (data) => {
          lavoriList.push(data.lavori);
        });
        setLavori(lavoriList);
      } else {
        setLavori([]);
      }
    })();
  }, []);

  return (
    <Layout>
      <Seo />
      {!lavori && (
        <div className="w-full h-52 flex flex-row justify-center">
          <Loading />
        </div>
      )}
      {lavori && size(lavori) === 0 && <div>Non ci sono lavori</div>}
      {size(lavori) > 0 && <ListaLavori lavori={lavori} />}
    </Layout>
  );
}
