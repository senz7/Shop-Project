import { useState } from "react";
import { NavLink } from "react-router-dom";
import DiamondLogo from "../logo/logo";
import "./header.css";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

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
          onClick={toggleMobile}
        >
          <span></span>
        </button>
      </div>
    </header>
  );
};
