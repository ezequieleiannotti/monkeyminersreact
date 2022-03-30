import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import CardsInfo from "./components/CardsInfo/CardsInfo";
import { FirebaseComponent } from "./components/FirebaseComponent";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar
          logo={"Monkey Miners"}
          // link4={"firebase"}
          link1={"3090"}
          link2={"3080"}
          link3={"GPU"}
        />
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer heading={"Rig para mineria Ethereum"} />
            }
          ></Route>
          {/* <Route path="/firebase" element={<FirebaseComponent />}></Route> */}
          <Route
            path="/category/:category"
            element={
              <ItemListContainer heading={"Rig para mineria Ethereum"} />
            }
          ></Route>

          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
        <CardsInfo />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
};

{
  /* <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
<Route path="/cart" element={<Cart />}></Route> */
}

// <Routes>
// <Route path="/" element={ <ItemListContainer/> }/>
// <Route path='/productos/:catId' element={ <ItemListContainer/> }/>
// <Route path='/detail/:itemId' element={ <ItemDetailContainer/> }/>
// <Route path="/nosotros" element={ <Nosotros /> } />
// <Route path="/contacto" element={ <Contacto /> } />
// <Route path='/cart' element={ <Cart/> } />
// <Route path='/checkout' element={ <Checkout/> } />

export default App;
