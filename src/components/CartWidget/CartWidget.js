import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

import "./CartWidget.css";

const CartWidget = () => {
  const { carQuantity } = useContext(CartContext);

  if (carQuantity === 0) {
    return null;
  } else {
    return (
      <li>
        <Link to="/cart" className="carrito">
          <i className="fas fa-shopping-cart"></i>
          <div className="cuadro_carrito">
            {" "}
            <span>{carQuantity}</span>
          </div>
        </Link>
      </li>
    );
  }
};

export default CartWidget;
