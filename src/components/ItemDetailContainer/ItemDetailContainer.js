import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import Spinner from "../Spinner/Spinner";
import { useParams } from "react-router-dom";
import { db } from "../../utils/getFirebase";
import { doc, getDoc } from "firebase/firestore";
import "./itemDetailContainer.css";
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
  }, []);

  return loading ? <Spinner /> : <ItemDetail product={product} />;
};

export default ItemDetailContainer;
