import React, { useState, useEffect } from "react";
import Borrar from "../../components/iconos/Borrar";
import { forEach, map } from "lodash";
import useCart from "../../hooks/useCart";

export default function SummaryCart({ products, reloadCart, setReloadCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const { removeProductCart } = useCart();

  useEffect(() => {
    let price = 0;
    forEach(products, (product) => {
      price += product.price;
    });
    setTotalPrice(price);
  }, [reloadCart, products]);

  const removeProduct = (product) => {
    removeProductCart(product);
    setReloadCart(true);
  };

  return (
    <div className="table w-full">
      <div className="table-row-group">
        <div className="table-row bg-gray-200">
          <div className="table-cell border border-gray-400 text-center w-2/4">
            Producto
          </div>
          <div className="table-cell border border-gray-400 text-center w-1/4">
            Entrega
          </div>
          <div className="table-cell border border-gray-400 text-center w-1/4">
            Precio
          </div>
        </div>

        {map(products, (product) => (
          <div className="table-row bg-gray-100" key={product.id}>
            <div className="table-cell text-center w-2/4">
              <div className="flex flex-row justify-center relative">
                <Borrar removeProduct={removeProduct} product={product} />
                <img
                  src={product.poster.url}
                  alt={product.title}
                  width={150}
                  className="py-2"
                />
              </div>
            </div>
            <div className="table-cell w-1/4 pt-3">
              <div className="flex flex-row justify-center">
                <h3>immediato</h3>
              </div>
            </div>
            <div className="table-cell w-1/4 relative">
              <div className="flex flex-row justify-center">
                <h3 className="">{product.price}€</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="table-row-group">
        <div className="table-row bg-gray-200">
          <div className="table-cell border border-gray-400 text-center w-2/4"></div>
          <div className="table-cell border border-gray-400 text-center w-1/4">
            Total:
          </div>
          <div className="table-cell border border-gray-400 text-center w-1/4 text-red-700">
            {totalPrice}€
          </div>
        </div>
      </div>
    </div>
  );
}
