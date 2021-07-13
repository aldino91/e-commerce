import { Header } from "../components/header/Header";

import { RaccMe } from "../components/raccme/RaccMe";
import { ZonaCentrale } from "../components/zonaCentrale/ZonaCentrale";
import { Layout } from "../layout/Layout";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <div>
      <Seo />
      <Layout>
        <Header />
        <ZonaCentrale />
        <RaccMe />
      </Layout>
    </div>
  );
}
