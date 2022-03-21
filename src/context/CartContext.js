import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarAlCarrito = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((product) => product.id === id);
  };

  const stockCart = () => {
    return cart.reduce((acc, product) => acc + product.stock, 0);
  };

  const totalCart = () => {
    return cart.reduce(
      (acc, product) => acc + product.stock * product.precio,
      0
    );
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const eliminarItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarAlCarrito,
        isInCart,
        stockCart,
        totalCart,
        vaciarCart,
        eliminarItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
