import { toast } from "react-toastify";
import {
  collection,
  addDoc,
  Timestamp,
  writeBatch,
  where,
  documentId,
  query,
  getDocs,
} from "firebase/firestore";
import { db } from "../utils/getFirebase";

export const generateOrder = async (
  values,
  cart,
  TotalCart,
  setOrderid,
  handleClose,
  vaciarCart,
  navigate
) => {
  const order = {
    buyer: values,
    items: cart,
    total: TotalCart(),
    time: Timestamp.fromDate(new Date()),
  };
  const batch = writeBatch(db);
  const orderRef = collection(db, "orders");
  // const productoRef = collection(db, "items");

  // const q = query(
  //   productoRef,
  //   where(
  //     documentId(),
  //     "in",
  //     cart.map((x) => x.id)
  //   )
  // );

  // const product = await getDocs(q);

  const sinStock = [];

  // product.docs.forEach((doc) => {
  //   const itemToUpdate = cart.find((x) => x.id === doc.id);

  //   if (doc.data().stock >= itemToUpdate.quantity) {
  //     batch.update(doc.ref, {
  //       stock: doc.data().stock - itemToUpdate.quantity,
  //     });
  //   } else {
  //     stockZero.push(itemToUpdate);
  //   }
  // });
  if (sinStock.length === 0) {
    addDoc(orderRef, order).then((y) => {
      batch.commit();
      setOrderid(y.id);
      setTimeout(() => {
        navigate("/");
        vaciarCart();
      }, 5000);
    });
  } else {
    sinStock.forEach((x) => {
      toast.warn(`Producto :  ${x.title}  SIN STOCK`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
    setTimeout(() => {
      handleClose();
    }, 10000);
  }
};
