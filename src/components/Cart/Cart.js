import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/" className="btn btn-primary">
          Volver
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container my-4">
        <h2>Tu compra</h2>
        <hr />

        {cart.map((product) => (
          <div key={product.id}>
            <h4>{product.title}</h4>
            <p>Cantidad: {product.description}</p>
            <p>Cantidad: {product.cantidad}</p>
            <p>Precio: ${product.cantidad * product.precio}</p>
            <button
              className="btn btn-danger"
              onClick={() => eliminarItem(product.id)}
            >
              <BsFillTrashFill />
            </button>
          </div>
        ))}

        <hr />
        <h2>Total: ${totalCart()}</h2>

        <div className="my-2">
          <button className="btn btn-danger" onClick={vaciarCart}>
            Vaciar carrito
          </button>
          <Link to="/checkout" className="btn btn-success mx-2">
            Terminar mi compra
          </Link>
        </div>
      </div>
    </>
  );
};
