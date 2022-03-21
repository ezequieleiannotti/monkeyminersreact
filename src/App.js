import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar
        logo={"Monkey Miners"}
        link1={"3090"}
        link2={"3080"}
        link3={"GPU"}
      />
      <Switch>
        <Route exact path="/">
          <ItemListContainer heading={"Rig para mineria Ethereum"} />
        </Route>
        <Route path="/category/:category">
          <ItemListContainer heading={"Rig para mineria Ethereum"} />
        </Route>

        <CartProvider>
          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </CartProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
