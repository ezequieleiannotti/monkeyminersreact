import { toast } from "react-toastify";
import { collection, addDoc, Timestamp, writeBatch } from "firebase/firestore";
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

  const sinStock = [];

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
