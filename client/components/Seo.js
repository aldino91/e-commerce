import React from "react";
import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  );
}

Seo.defaultProps = {
  title: "La Magique Lumiere Prova",
  description: "Tutto fatto a mano, ogni pezzo è unico",
};
