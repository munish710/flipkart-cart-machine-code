import Navbar from "./components/Navbar/Navbar";
import ProductsList from "./components/ProductsList/ProductsList";
import Cart from "./components/Cart/Cart";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <main className="section">
          <section className="section-center products-page">
            <Switch>
              <ProductsList path="/" exact />
              <Cart path="/cart" exact />
            </Switch>
          </section>
        </main>
      </Router>
    </div>
  );
}

export default App;
