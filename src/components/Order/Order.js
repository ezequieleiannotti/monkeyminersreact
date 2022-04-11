const Order = ({ orderId }) => {
  return (
    <div className="container my-5">
      <h3>Gracias por tu Compra! Te esperamos Nuevamente!</h3>
      <h5 className="mt-2">Enviaremos al mail el codigo de tu compra:</h5>

      <h3 className="my-3">{orderId}</h3>
    </div>
  );
};

export default Order;
