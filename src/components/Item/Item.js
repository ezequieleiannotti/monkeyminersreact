import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const Item = ({
  id,
  title,
  description,
  price,
  pictureUrl,
  stock,
  loading,
}) => {
  return loading ? (
    <div className="text-center">
      <Spinner />
    </div>
  ) : (
    <div className="product-card text-center" key={id}>
      <img src={pictureUrl} className="card-img-top product-img" alt="..." />
      <div className="">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <hr />
        <p className="card-text">${price}</p>
        <p className="card-text">Disponibles: {stock}</p>
        <hr />
        <Link to={`/item/${id}`} className="btn btn-primary">
          Detalles
        </Link>
      </div>
    </div>
  );
};

export default Item;
