import React from "react";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <div className="container">
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2020/11/Un-tecnico-italiano-improvisa-una-granja-minera-de-Ethereum-en-un-aeropuerto.jpg?fit=1200%2C800&ssl=1&resize=1280%2C720"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Granjas Mineras</MDBCardTitle>
              <MDBCardText>
                Una granja minera es una ubicación, generalmente un gran
                espacio, que alberga varias computadoras dedicadas a la
                extracción de una o más criptomonedas. Las computadoras consumen
                mucha energía y se necesita aire acondicionado para evitar que
                se sobrecalienten.
                <br />
                <a
                  href="https://www.ambito.com/finanzas/criptomonedas/que-son-las-granjas-n5204795"
                  target="_blank"
                >
                  Seguir leyendo
                </a>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://es.beincrypto.com/wp-content/uploads/2020/03/bic_daily_round_up_final_SP-1200x720.jpeg"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Noticias Criptos</MDBCardTitle>
              <MDBCardText>
                En el día de ayer, en un movimiento diferente al habitual,
                Bitcoin se estancaba en su precio intradiario mientras que el
                mercado de monedas alternativas se revalorizaba. <br />
                <a
                  href="https://www.cronista.com/infotechnology/criptomonedas-it/bitcoin-y-las-criptomonedas-los-inversores-pierden-el-miedo-y-todas-vuelven-a-subir/"
                  target="_blank"
                >
                  Seguir leyendo
                </a>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className="h-100">
            <MDBCardImage
              src="https://i0.wp.com/criptotendencia.com/wp-content/uploads/2021/02/TOP-Cripto-Noticias-Romper-record-es-la-nueva-normalidad.jpg?fit=1024%2C525&ssl=1"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Alt Coins</MDBCardTitle>
              <MDBCardText>
                En la actualidad existen más de 8.500 criptomonedas, aunque sin
                duda alguna, hay algunas criptomonedas más conocidas que otras y
                con una mayor capitalización de mercado.
                <br />
                <a
                  href="https://es.beincrypto.com/cantidad-altcoins-aumentando-pese-historia-ico/"
                  target="_blank"
                >
                  Seguir leyendo
                </a>
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
