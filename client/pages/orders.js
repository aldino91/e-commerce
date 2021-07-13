import React, { useState, useEffect } from "react";
import { map, size } from "lodash";
import { Layout } from "../layout/Layout";
import { getOrdersApi } from "../api/order";
import useAuth from "../hooks/useAuth";
import ListOrders from "../components/order/ListOrders";
import Seo from "../components/Seo";

export default function Orders() {
  const [orders, setOrders] = useState(null);
  const { auth, logout } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getOrdersApi(auth.idUser, logout);
      setOrders(response || []);
    })();
  }, []);
  return (
    <Layout>
      <Seo />
      <div>
        <div className=" w-52 px-5 border border-black rounded-t-md bg-black text-white mt-7 text-center">
          <h3 className="">Mis Pedidos</h3>
        </div>

        <div className="px-3 bg-gray-200">
          {size(orders) === 0 ? (
            <h2>Aun no as realizado ninguna compra</h2>
          ) : (
            <OrdenList orders={orders} />
          )}
        </div>
      </div>
    </Layout>
  );
}

function OrdenList({ orders }) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 p-2">
      {map(orders, (order) => (
        <div>
          <ListOrders order={order} />
        </div>
      ))}
    </div>
  );
}
