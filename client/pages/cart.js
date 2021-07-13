import React, { useState, useEffect } from "react";
import { forEach, map } from "lodash";
import { Layout } from "../layout/Layout";
import { getLavoriByUrlApi } from "../api/Lavori";
import useCart from "../hooks/useCart";
import AddressShipping from "../components/productosCart/AddressShipping";
import SummaryCart from "../components/productosCart/SummaryCart";
import Payment from "../components/productosCart/Payment";
import Seo from "../components/Seo";

export default function cart() {
  const { getProductsCart } = useCart();
  const products = getProductsCart();

  return !products ? <SinCart /> : <FullCart products={products} />;
}

function SinCart() {
  return (
    <Layout>
      <Seo />
      <h3>No hay articulos en el carrito</h3>
    </Layout>
  );
}

function FullCart({ products }) {
  const [productData, setProductData] = useState(null);
  const [reloadCart, setReloadCart] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    (async () => {
      const productTemp = [];
      for await (const product of products) {
        const data = await getLavoriByUrlApi(product);
        productTemp.push(data);
      }
      setProductData(productTemp);
    })();
    setReloadCart(false);
  }, [reloadCart]);

  return (
    <Layout>
      <Seo />
      <SummaryCart
        products={productData}
        reloadCart={reloadCart}
        setReloadCart={setReloadCart}
      />
      <AddressShipping setAddress={setAddress} />
      {address && <Payment products={productData} address={address} />}
    </Layout>
  );
}
