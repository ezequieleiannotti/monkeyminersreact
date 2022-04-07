import React, { createContext, useState, useContext, useEffect } from "react";
import Swal from "sweetalert2";
export const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [carQuantity, setCarQuantity] = useState(0);

  const agregarAlCarrito = (item, quantity) => {
    if (isInCart(item.id)) {
      const indexActualizar = cart.findIndex(
        (order) => order.item.id === item.id
      );
      cart[indexActualizar].quantity =
        cart[indexActualizar].quantity + quantity;
      setCarQuantity(carQuantity + quantity);
      Swal.fire(`Agregaste ${item.tittle} al carrito, cantidad: ${quantity}.`);
    } else {
      Swal.fire(`Agregaste ${item.tittle} al carrito, cantidad: ${quantity}.`);
      const nuevoCarrito = {
        item: item,
        quantity: quantity,
      };
      setCart([...cart, nuevoCarrito]);
    }
  };

  const stockCart = () => {
    return cart.reduce((acc, order) => acc + order.stock, 0);
  };

  const totalCart = () => {
    console.log(cart);
    return cart.reduce(
      (todo, item) => (todo = todo + item.item.price * item.quantity),
      0
    );
  };

  const vaciarCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.item.id === id);
  };

  const eliminarItem = (id) => {
    const carritoActualizado = cart.filter((product) => product.item.id !== id);
    setCart(carritoActualizado);
  };

  useEffect(() => {
    if (cart.length > 0) {
      let stock = 0;
      cart.forEach((item) => (stock = stock + item.quantity));
      setCarQuantity(stock);
    } else {
      setCarQuantity(0);
    }
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        carQuantity,
        setCarQuantity,
        agregarAlCarrito,
        stockCart,
        isInCart,
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
