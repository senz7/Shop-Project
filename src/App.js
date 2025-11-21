import "./App.css";
import { Header } from "./components/header/header";
import { Home } from "./components/home/home";
import { Products } from "./components/products/products";
import { Shipping } from "./components/shipping/shipping";
import { Contacts } from "./components/contacts/contacts";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

export default App;
