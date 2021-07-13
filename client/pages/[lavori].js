import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Layout } from "../layout/Layout";
import Lavoro from "../components/lavoro/Lavoro";

import { getLavoriByUrlApi } from "../api/Lavori";
import Seo from "../components/Seo";

export default function Lavori() {
  const [lavori, setLavori] = useState(null);

  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    (async () => {
      const response = await getLavoriByUrlApi(query.lavori);
      setLavori(response);
    })();
  }, [query]);

  if (!lavori) return null;
  return (
    <Layout>
      <Seo />
      <Lavoro lavori={lavori} />
    </Layout>
  );
}
