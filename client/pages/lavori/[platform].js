import React, { useState, useEffect } from "react";
import { Layout } from "../../layout/Layout";
import { useRouter } from "next/router";
import { size } from "lodash";
import Seo from "../../components/Seo";

import { Loading } from "../../components/iconos/Loading";
import { getLavoriPlatformsApi } from "../../api/Lavori";
import { ListaLavori } from "../../components/menu/ListaLavori";

export default function Platform() {
  const limitPerPage = 10;
  console.log(useRouter());
  const { query } = useRouter();

  const [lavori, setLavori] = useState(null);

  useEffect(() => {
    (async () => {
      if (query.platform) {
        const response = await getLavoriPlatformsApi(
          query.platform,
          limitPerPage,
          0
        );
        setLavori(response);
      }
    })();
  }, [query]);

  return (
    <Layout>
      <Seo />
      <div>
        {!lavori && (
          <div className="flex flex-row justify-center w-full h-52">
            <Loading />
          </div>
        )}
        {lavori && size(lavori) === 0 && <div>Non ci sono lavori</div>}
        {size(lavori) > 0 && <ListaLavori lavori={lavori} />}
      </div>
    </Layout>
  );
}
