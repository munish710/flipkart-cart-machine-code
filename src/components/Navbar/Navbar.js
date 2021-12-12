import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="section-center nav-center">
        <Link to="/">
          <h4>Flipkart</h4>
        </Link>
        <input type="text" />

        <Link to="/cart" className="cart-icon">
          <BsFillCartFill />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
