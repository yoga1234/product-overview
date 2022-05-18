import React from "react";
import { cartWhite } from "../../../assets";
import "./RightSide.css";

const RightSide = () => {
  return (
    <div className="right-container">
      <h3 className="company-name">SNEAKER COMPANY</h3>
      <h2 className="product-name">Fall Limited Edition Sneakers</h2>
      <p>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="price-and-discount">
        <span className="current-price">$125.00</span>
        <span className="total-discount">50%</span>
      </div>
      <span className="product-price">$250.00</span>
      <div className="counter-cart-container">
        <div className="counter">
          <button className="minus-button">-</button>
          <span className="product-counter">0</span>
          <button className="plus-button">+</button>
        </div>
        <button className="add-to-cart">
          <img src={cartWhite} alt="cart" />
          &nbsp; Add to cart
        </button>
      </div>
    </div>
  );
};

export default RightSide;
