import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { size } from "lodash";
import { Layout } from "../layout/Layout";
import { searchLavoriApi } from "../api/Lavori";
import { ListaLavori } from "../components/menu/ListaLavori";
import { Loading } from "../components/iconos/Loading";
import Seo from "../components/Seo";

export default function Search() {
  const [lavori, setLavori] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    document.getElementById("search").focus();
  }, []);

  useEffect(() => {
    (async () => {
      if (size(query.query) > 0) {
        const response = await searchLavoriApi(query.query);
        if (size(response) > 0) setLavori(response);
        else setLavori([]);
      } else {
        setLavori([]);
      }
    })();
  }, [query]);
  return (
    <Layout>
      <Seo />
      {!lavori && <Loading />}
      {lavori && size(lavori) === 0 && <div>No se an encontrado juegos</div>}
      {size(lavori) > 0 && <ListaLavori lavori={lavori} />}
    </Layout>
  );
}
