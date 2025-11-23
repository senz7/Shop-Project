import { useCart } from "../../context/CardContext";
import { Link } from "react-router-dom";
import "./checkout.css";

import { useState } from "react";

export const Checkout = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price.replace("$", "")) * item.qty,
    0,
  );

  const handlePlaceOrder = () => {
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="page checkout-page">
        <h1 className="checkout-title">Thank you for your order!</h1>
        <p className="checkout-message">
          Your order has been successfully placed. You can continue shopping and
          create a new order.
        </p>
        <Link to="/products" className="checkout-btn">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="page checkout-page">
      <h1 className="checkout-title">Checkout</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/products">Go back to products</Link>
        </p>
      ) : (
        <>
          <div className="checkout-items">
            {cartItems.map((item) => (
              <div key={item.id} className="checkout-item">
                <span>
                  {item.title} x {item.qty}
                </span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <p className="checkout-total">Total: ${total.toFixed(2)}</p>
          <button className="checkout-btn" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </>
      )}
    </div>
  );
};
