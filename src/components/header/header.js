import { useState } from "react";
import { NavLink } from "react-router-dom";
import DiamondLogo from "../logo/logo";
import { useCart } from "../../context/CardContext";
import "./header.css";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, removeFromCart } = useCart();

  return (
    <header className="header">
      <div className="header-inner">
        <DiamondLogo />

        <nav className={`nav ${mobileOpen ? "open" : ""}`}>
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Products
          </NavLink>
          <NavLink
            to="/shipping"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Shipping
          </NavLink>
          <NavLink
            to="/contacts"
            className="nav-link"
            onClick={() => setMobileOpen(false)}
          >
            Contacts
          </NavLink>
        </nav>

        <button
          className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
        </button>

        <div className="cart-wrapper">
          <button className="cart-btn" onClick={() => setCartOpen(!cartOpen)}>
            🛒 {cartItems.length}
          </button>

          {cartOpen && (
            <div className="cart-popup">
              {cartItems.length === 0 && <p>Your cart is empty</p>}
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <span>
                    {item.title} x {item.qty}
                  </span>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              ))}
              {cartItems.length > 0 && (
                <NavLink
                  to="/checkout"
                  className="checkout-btn"
                  onClick={() => setCartOpen(false)}
                >
                  Go to Checkout
                </NavLink>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
