import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const getProduct = () => {
    fetch("../json/productList.json")
      .then((response) => response.json())
      .then((data) => {
        const prod = data.find((p) => p.id === id);
        return setProduct(prod);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setTimeout(() => {
      getProduct();
    }, 2000);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <ItemDetail
      title={product.title}
      description={product.description_long}
      price={product.price}
      stock={product.stock}
      pictureUrl={product.pictureUrl}
    />
  );
};

export default ItemDetailContainer;
