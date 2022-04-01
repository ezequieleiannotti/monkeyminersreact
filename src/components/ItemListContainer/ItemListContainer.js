import React, { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../utils/getFirebase";

export const ItemListContainer = ({ heading }) => {
  const [products, setProducts] = useState([{}]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const query = category
      ? itemCollection.where("category", "==", category)
      : itemCollection;

    query
      .get()
      .then((result) =>
        setProducts(result.docs.map((i) => ({ id: i.id, ...i.data() })))
      )
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [category, setLoading]);

  // const getProductList = () => {
  //   fetch("../json/productList.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (category !== undefined) {
  //         const filteredData = data.filter(
  //           (prod) => prod.category === category
  //         );
  //         return setProducts(filteredData);
  //       } else {
  //         return setProducts(data);
  //       }
  //     })
  //     .finally(() => setLoading(false));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getProductList();
  //   }, 2000);
  // }, [category]);

  return (
    <>
      <h1 className="display-5 text-center primary-heading">{heading}</h1>
      <ItemList products={products} loading={loading} />
    </>
  );
};

// export default ItemListContainer;
