import React, { useState } from "react";
import { useRouter } from "next/router";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { size } from "lodash";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { Loading } from "../iconos/Loading";
import { paymentCartApi, removeAllProductsCart } from "../../api/cart";

export default function FormPayment({ products, address }) {
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const { romoveAllProductsCart } = useCart();
  const router = useRouter();

  const { auth, logout } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement);

    if (result.error) {
      toast.error(result.error.message);
    } else {
      /* console.log(result); */
      const response = await paymentCartApi(
        result.token,
        products,
        auth.idUser,
        address,
        logout
      );

      if (size(response) > 0) {
        toast.success("Pedidos realizado correctamente");
        removeAllProductsCart();
        router.push("/orders");
      } else {
        toast.error("Error a realizar el pedido");
      }
    }
    setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="w-full flex flex-row justify-center py-4">
        <div className="w-full md:w-2/3 lg:w-1/3 space-y-3">
          <div className="bg-white p-2 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150">
            <CardElement />
          </div>
          <div className="flex flex-row justify-center">
            <button
              disabled={!stripe}
              className="w-1/3 bg-black text-white hover:text-black hover:bg-white font-bold text-sm p-1 rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            >
              {loading ? <Loading /> : <h3>Pagar</h3>}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
