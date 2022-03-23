import React, { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
// import { CartContext } from "../../context/CartContext";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ product, initial }) => {
  const { title, description, price, stock, pictureUrl } = product;
  const [quantity, setQuantity] = useState(initial);
  const [finishBuy, setFinishBuy] = useState(false);
  const [items, setItems] = useState(1);
  const { agregarAlCarrito } = useCart();

  // const onAdd = (amount, stock) => {
  //   if (amount <= stock) {
  //     alert(`Agregaste ${amount} producto(s) al carrito`);
  //     setFinishBuy(true);
  //   } else {
  //     alert("No hay stock disponible para este producto");
  //   }
  // };

  const onAdd = () => {
    agregarAlCarrito(product, items, quantity);
    setQuantity(initial);
    alert(`Agregaste ${items} producto(s) al carrito`);
  };

  return (
    <div className="item-detail text-center">
      <h2 className="display-6">Detalle del Producto</h2>
      <div className="container">
        <img src={pictureUrl} alt="" />
        <p>{title}</p>
        <p>{description}</p>
        <hr />
        <p>Precio en USD: {price}</p>
        {finishBuy > 0 && (
          <Link to="/cart">
            <button type="button" className="btn btn-primary">
              Ir al Carrito
            </button>
          </Link>
        )}
        {!finishBuy && (
          <ItemCount
            stock={stock}
            onAdd={onAdd}
            setItems={setItems}
            items={items}
            initial={1}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
