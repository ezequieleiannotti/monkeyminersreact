import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="center-spinner">
      <p className="text-center">Cargando...</p>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Spinner;
