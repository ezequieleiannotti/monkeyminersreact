import React, { useContext, useState } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const ItemDetail = ({ product, initial }) => {
  const { title, description, price, stock, descriptionlong, pictureUrl } =
    product;
  const [quantity, setQuantity] = useState(initial);
  const [finishBuy, setFinishBuy] = useState(false);
  const [items, setItems] = useState(1);
  const { agregarAlCarrito } = useCart();
  const Swal = require("sweetalert2");

  const onAdd = () => {
    agregarAlCarrito(product, items, quantity);
    setQuantity(initial);
    Swal.fire("Ya lo tenes en el carrito", "Seguir comprando!", "success");
  };

  return (
    <div className="item-detail text-center">
      <h2 className="display-6">Detalle del Producto</h2>
      <div className="container">
        <img src={pictureUrl} alt="" />
        <p>{description}</p>
        <p>{descriptionlong}</p>
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
