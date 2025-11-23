import { useCart } from "../../context/CardContext";
import "./products.css";

import { Link } from "react-router-dom";

export const Products = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      title: "Classic Hoodie",
      price: "$79",
    },
    {
      id: 2,
      title: "Oversized T-Shirt",
      price: "$49",
    },
    {
      id: 3,
      title: "Denim Jacket",
      price: "$119",
    },
    {
      id: 4,
      title: "Slim-Fit Jeans",
      price: "$89",
    },
    {
      id: 5,
      title: "Slim-Fit Jeans",
      price: "$99",
    },
    {
      id: 6,
      title: "Oversize Hoodie",
      price: "$129",
    },
    {
      id: 7,
      title: "Slim-Fit Jeans",
      price: "$99",
    },
    {
      id: 8,
      title: "Oversize Hoodie",
      price: "$129",
    },
    {
      id: 9,
      title: "Oversize Hoodie",
      price: "$129",
    },
  ];

  const handleAdd = (item) => {
    addToCart(item);
    // Smooth animation
    const el = document.getElementById(`product-${item.id}`);
    if (el) {
      el.classList.add("add-animate");
      setTimeout(() => el.classList.remove("add-animate"), 400);
    }
  };

  return (
    <div className="page products-page">
      <h1 className="products-title">Clothes</h1>
      <div className="products-grid">
        {products.map((item) => (
          <div className="card" id={`product-${item.id}`} key={item.id}>
            <Link to={`/product/${item.id}`} className="card-img">
              Photo
            </Link>
            <h2 className="card-name">{item.title}</h2>
            <p className="card-price">{item.price}</p>
            <button className="product-btn" onClick={() => handleAdd(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
