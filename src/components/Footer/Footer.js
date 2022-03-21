// import React from "react";

// function Footer() {
//   return <div>Footer</div>;
// }

// export default Footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div>
      <MDBFooter color="blue" className="font-small pt-4 mt-4">
        <MDBContainer fluid className="text-center text-md-left">
          <MDBRow>
            <MDBCol md="6">
              <h5 className="title">Monkey Miners</h5>
              <p>
                Gracias por visitar nuestra tienda de RIG para la mineria de
                criptomonedas
              </p>
            </MDBCol>
            <MDBCol md="6">
              <h5 className="title">Exchangues</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://www.binance.com/">Binance</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.kucoin.com/es">kukoin</a>
                </li>
                <li className="list-unstyled">
                  <a href="https://www.gate.io/es">Gate.io</a>
                </li>
                <li className="list-unstyled">
                  <a href="#!">Bitmart</a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright:{" "}
            <a href="http://monkeyminers.com.ar/">
              {" "}
              http://monkeyminers.com.ar/{" "}
            </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
