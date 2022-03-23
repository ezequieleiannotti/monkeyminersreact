import React, { createContext, useState, useContext } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [carQuantity, setCarQuantity] = useState(0);

  const agregarAlCarrito = (item, quantity) => {
    const itemInCart = cart.some((order) => order.item.id === item.id);
    if (itemInCart) {
      const updateCart = cart.map((order) => {
        if (order.item.id === item.id) {
          return { ...order, quantity: quantity + order.quantity };
        } else {
          return order;
        }
      });
      setCart(updateCart);
    } else {
      setCart((prevState) => [...prevState, { item, quantity }]);
    }
  };

  const stockCart = () => {
    return cart.reduce((acc, product) => acc + product.stock, 0);
  };

  const totalCart = () => {
    // return setCart ((product) => product.quantity * product.item.precio})
    return setCart.reduce((product) => product.order * product.item.precio, 0);
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

export const useCart = () => useContext(CartContext);
