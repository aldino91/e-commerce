import { createContext } from "react";

const CartContext = createContext({
  productsCart: 0,
  addProductsCart: () => null,
  getProductsCart: () => null,
  removeProductCart: () => null,
  romoveAllProductsCart: () => null,
});

export default CartContext;
