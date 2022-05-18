import React from "react";
import "./Navbar.css";

import { cart, userAvatar } from "../../assets";
import Cart from "../cart/Cart";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="left-side">
        <h1 className="navbar-logo">marashoes</h1>
      </div>
      <div className="middle-side">
        <ul>
          <li>Collections</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right-side">
        <img src={cart} alt="cart product" className="navbar-cart" />
        <img src={userAvatar} alt="user avatar" className="navbar-profile" />
      </div>
      <Cart />
    </div>
  );
};

export default Navbar;
