import { useParams } from "react-router-dom";
import { useCart } from "../../context/CardContext";
import "./product.css";

export const Product = () => {
  const { id } = useParams();
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

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className="page product-page">
      <div className="product-img">Photo</div>
      <div className="product-info">
        <h1 className="product-title">{product.title}</h1>
        <p className="product-price">{product.price}</p>
        <p className="product-desc">{product.desc}</p>
        <button className="product-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};
