import React from "react";
import { Offcanvas } from "react-bootstrap";

import FormBuy from "../FormBuy/FormBuy";

const Checkout = ({ show, setShow }) => {
  const handleClose = () => setShow(false);

  return (
    <div>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        className="text-center"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="display-6 ">
            Formulario de compra
          </Offcanvas.Title>
        </Offcanvas.Header>
        <hr />
        <Offcanvas.Body>
          <FormBuy handleClose={handleClose} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Checkout;
