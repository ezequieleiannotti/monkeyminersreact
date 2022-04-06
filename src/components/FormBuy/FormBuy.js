import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../../context/CartContext";
import { generateOrder } from "../GenerateOrder";
import { useNavigate } from "react-router-dom";
import Order from "../Order/Order";
import { useFormik } from "formik";
import * as yup from "yup";

const FormBuy = ({ handleClose }) => {
  const { cart, totalCart, vaciarCart } = useContext(CartContext);

  const [orderId, setOrderid] = useState(null);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("nombre  obligatorio"),
      email: yup
        .string()
        .email("no es un email valido")
        .required("email obligatorio"),
    }),
    onSubmit: () => {
      generateOrder(
        formik.values,
        cart,
        totalCart,
        setOrderid,
        handleClose,
        vaciarCart,
        navigate
      );
    },
  });

  return (
    <div className="container my-5">
      <ToastContainer />
      {orderId ? (
        <Order orderId={orderId} />
      ) : (
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nombre Completo"
              name="name"
              onChange={formik.handleChange}
            />
            <Form.Text className="  text-danger">
              {formik.errors.name}
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email :</Form.Label>
            <Form.Control
              type="email"
              placeholder="email@ejemplo.com"
              name="email"
              onChange={formik.handleChange}
            />
            <Form.Text className=" text-danger ">
              {formik.errors.email}
            </Form.Text>
          </Form.Group>

          <Button variant="outline-dark" className="m-5" type="submit">
            COMPRAR
          </Button>
          <Button
            variant="outline-dark"
            className="m-5"
            onClick={() => handleClose()}
          >
            Volver
          </Button>
        </Form>
      )}
    </div>
  );
};

export default FormBuy;
