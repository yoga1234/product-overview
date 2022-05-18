import React from "react";

import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart-container">
      <div className="cart-title">
        <h2>Cart</h2>
      </div>
      <div className="cart-empty">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
