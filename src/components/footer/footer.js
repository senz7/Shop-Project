import { NavLink } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <h3 className="footer-logo">YOUR STORE</h3>
          <p className="footer-desc">
            Premium streetwear & everyday essentials.
          </p>
        </div>

        <div className="footer-links">
          <NavLink to="/" className="footer-link">
            Home
          </NavLink>
          <NavLink to="/products" className="footer-link">
            Products
          </NavLink>
          <NavLink to="/shipping" className="footer-link">
            Shipping
          </NavLink>
          <NavLink to="/contacts" className="footer-link">
            Contacts
          </NavLink>
        </div>

        <div className="footer-right">
          <p className="footer-copy">
            © {new Date().getFullYear()} YOUR STORE — All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};
