import "./App.css";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Products } from "./components/products/products";
import { Shipping } from "./components/shipping/shipping";
import { Contacts } from "./components/contacts/contacts";
import { Product } from "./components/product/product";
import { Checkout } from "./components/checkout/checkout";
import { Footer } from "./components/footer/footer";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
