import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import FormPayment from "../productosCart/FormPayment";
import { STRIPE_TOKEN } from "../../utils/constants";

const stripePromise = loadStripe(STRIPE_TOKEN);

export default function Payment({ products, address }) {
  return (
    <div>
      <div className=" w-52 px-5 border border-black rounded-t-md bg-black text-white mt-7 text-center">
        <h3 className="">Pagos</h3>
      </div>
      <Elements stripe={stripePromise}>
        <div className="px-3 bg-gray-200">
          <FormPayment address={address} products={products} />
        </div>
      </Elements>
    </div>
  );
}
