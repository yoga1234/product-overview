import { useState } from "react";
import "./Navbar.css";

import { cart, userAvatar } from "../../assets";
import Cart from "../cart/Cart";

const Navbar = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("0");
  return (
    <div className="navbar-container">
      <div className="left-side">
        <h1 className="navbar-logo">marashoes</h1>
      </div>
      <div className="middle-side">
        <ul>
          <li
            onClick={() => setActiveMenu("1")}
            className={activeMenu === "1" ? "active" : ""}
          >
            Collections
          </li>
          <li
            onClick={() => setActiveMenu("2")}
            className={activeMenu === "2" ? "active" : ""}
          >
            Men
          </li>
          <li
            onClick={() => setActiveMenu("3")}
            className={activeMenu === "3" ? "active" : ""}
          >
            Women
          </li>
          <li
            onClick={() => setActiveMenu("4")}
            className={activeMenu === "4" ? "active" : ""}
          >
            About
          </li>
          <li
            onClick={() => setActiveMenu("5")}
            className={activeMenu === "5" ? "active" : ""}
          >
            Contact
          </li>
        </ul>
      </div>
      <div className="right-side">
        <img
          onClick={() => setCartOpen(!cartOpen)}
          src={cart}
          alt="cart product"
          className="navbar-cart"
        />
        <img src={userAvatar} alt="user avatar" className="navbar-profile" />
      </div>
      <Cart openUi={cartOpen} />
    </div>
  );
};

export default Navbar;
