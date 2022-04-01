import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { BsFillTrashFill } from "react-icons/bs";
import { Link, Navigate } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import { getFirestore } from "../../utils/getFirebase";

export const Cart = () => {
  const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext);

  const crearOrden = () => {
    const coleccionProductos = collection(getFirestore, "ordenes");

    const usuario = {
      nombre: "Ezequiel",
      email: "Ezequiel@gmail.com",
      telefono: "1132589485",
    };

    const orden = {
      usuario,
      cart,
      total: totalCart(),
    };

    const pedido = addDoc(coleccionProductos, orden);

    pedido
      .then((resultado) => {
        return Swal.fire(
          `N° de Orden:  ${resultado.id}`,
          `
            El total de tu compra es $${orden.total}.
            ¡Gracias por tu compra!
            `,
          "success",
          vaciarCart()
        );
      })
      .catch((error) => {
        return Swal.fire({
          icon: "error",
          text: "Algo salio mal",
        });
      });
  };

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
      <div className="card">
        <h2 className="text-center">Tu compra</h2>
        <div className="container my-4 flex">
          <hr />

          {cart.map((product) => (
            <div className="container">
              <div className="display-md-6">
                <div className="product-card">
                  <div key={product.item.id}>
                    <h4>{product.item.title}</h4>

                    <p>Compra: {product.quantity}</p>
                    <p>Precio de cada uno $: {product.item.price}</p>
                    <h2>Total: ${product.quantity * product.item.price}</h2>

                    <button
                      className="btn btn-danger"
                      onClick={() => eliminarItem(product.item.id)}
                    >
                      <BsFillTrashFill />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="product-card text-center">
          <div className="my-2">
            <h2>Total del carrito: $ {totalCart()}</h2>
            <hr />
            <button className="cta" onClick={crearOrden}></button>
            <button className="btn btn-danger" onClick={vaciarCart}>
              Vaciar carrito
            </button>

            <Link
              to="/checkout"
              className="btn btn-success mx-2"
              onClick={totalCart()}
            >
              Terminar mi compra
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
