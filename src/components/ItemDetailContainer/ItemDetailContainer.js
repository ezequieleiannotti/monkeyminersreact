import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../utils/getFirebase";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const itemRef = doc(db, "items", id);

    getDoc(itemRef)
      .then((res) => {
        setProduct({
          id: res.id,
          ...res.data(),
        });
      })

      .finally(() => setLoading(false));

    // eslint-disable-next-line
  }, []);
  //PARTE NUEVA DEL FIREBASE
  // useEffect(() => {
  //   setLoading(true);
  //   const db = getFirestore();
  //   const itemOne = db.collection("items").doc(id);
  //   itemOne
  //     .get()
  //     .then((result) => setProduct({ id: result.id, ...result.data() }))
  //     .catch((err) => console.error(err))
  //     .finally(() => setLoading(false));
  // }, [id, setProduct]);

  //PARTE QUE COMPILA BIEN PERO SIN FIREBASE
  // const getProduct = () => {
  //   fetch("../json/productList.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const prod = data.find((p) => p.id === id);
  //       return setProduct(prod);
  //     })
  //     .finally(() => setLoading(false));
  // };

  // useEffect(() => {
  //   setTimeout(() => {
  //     getProduct();
  //   }, 2000);
  // }, []);

  return loading ? <Spinner /> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
